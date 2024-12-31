const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Person = require('./models/Person');

// Passport authentication logic
passport.use(new LocalStrategy(async (username, password, done) => {
    try {
        console.log('Received credentials:', username, password);
        const user = await Person.findOne({username: username});
        if (!user){
            return done(null, false, {message: 'Incorrect username.'});
        }

        const isPassword = user.password === password ? true: false;
        if (isPassword) {
            return done(null, user);
        }
        else {
            return done(null, false, {message: "Incorrect password."})
        }
    }
    catch(err){
        return done(err);
    }
}))

module.exports = passport;