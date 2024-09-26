const passport = require('passport');
const {conexion}=require('./src/database/db')
const  GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const GitHubStrategy=require('passport-github2').Strategy;
const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const FacebookStrategy=require('passport-facebook').Strategy;
require('dotenv').config();


passport.use(new GoogleStrategy({
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: `http://localhost:4000/google/callback`,
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }));
  
  passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:4000/github/callback"
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }));

  passport.use(new LinkedInStrategy({
    clientID: process.env.LINKEDIN_KEY,
    clientSecret: process.env.LINKEDIN_SECRET,
    callbackURL: "http://localhost:4000/linkedin/callback",
    scope: ['r_emailaddress', 'r_liteprofile'],
  },  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }));

  passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:4000/facebook/callback"
  },
  function(request, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }));
  
  passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
