# Employee Directory

## Plan of Action

[x] install all things
[x] set up folders files
[x] Route pages

- Pages to be built
  [] / Home
  [] /login
  [] /register
  [] Create header

  - [] /profile/
    [] create
    [] edit

- [] PrivateRoutes
  [] /profile redirects to login
  [] useHistory to navigate

[] context & provider for global state

- [] Register
  [] URL by Auth failure
  [] accounts use email and password Auth. <input type="email">
  [] Password 8+ characters long

[] customHooks for useState & useEffect

## Requirements

[] create an account w/ Email confirmation(supabase Included)
[] sign in
[] sign out
[] Header
[] Sign In Button/ Sign out button
[] you are signed in as ${email} w/ Sign out button
[] Home Page with Intro content.
[] Links to sign in to /login
[] Links to Create an Account to /register

### After Login - No profile

- [] createProfile View - Employee Profile
  [] Name
  [] Email (used for sign up)
  [] Birthday input type="date"
  [] About me Text box <textarea> - HAVE profile

## Login - w/ Profile

[] Displays profile info
[] Link to Edit Profile - same as create

Company

- Acme
- Employee Directory to sign up for an account and create a personnel profile.

### additional

- npm init @alchemycodelab/app@latest
- npm i @supabase/supabase-js
- npm i react-router-dom@5
