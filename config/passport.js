var config = require('./config')();
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose  = require('mongoose');

module.exports = function (){

    var Usuario = mongoose.model('Usuario');

    passport.use(new GitHubStrategy({
            //clientID:'1264c1ba132a41a7bd1d',
            clientID:config.clientID,
            //clientSecret:'0a4c6212839f664614c29bcbbf4868e2edd8b070',
            clientSecret:config.clientSecret,
            callbackURL:'http://localhost:3000/auth/github/callback'
        }, function(accessToken,refreshToken,profile,done){
            Usuario.findOrCreate(
                {"login":profile.username},
                {"nome":profile.username},
                function(erro,usuario){
                    if(erro){
                        console.log(erro);
                        return done(erro);                    
                    }
                    return done(null,usuario);
                }

            );
        })
    );

    passport.serializeUser(function(usuario,done){
        done(null,usuario._id);
    });

    passport.deserializeUser(function(id,done){
        Usuario.findById(id).exec()
            .then(function(usuario){
                done(null,usuario);
            })
    })
};