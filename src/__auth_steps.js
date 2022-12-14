/*

* 1. create a new project in console.firebase.google.com

2.npm install firebase

3.create firebase,init.js and import getAuth to export auth

4. Firebase settings > Authentication > enable Email and password auth

5.Create Login, Signup component, setup route

6. attach form field handler and form submit handler

7.npm install --save react-firebase-hooks

8.useCreateUserWithEmailAndPassword from react-firebase-hooks

9. if user is created redirect to the expected page

10.useSignInWithEmailAndPassword for sign in

11.Create RequireAuth component ==> check user exists also track user location

12.in route wrap protected component by using require auth component

*/


/**
 * hosting steps
 * 1. npm install -g firebase-tools
 * 2.firebase login(one time for your computer)
 * 3.firebase init(for each project one time)
 * 4. npm run build (everytime you want to deploy : build your project)
 * 5.firebase deploy
 * 
 * 6.
 * 
 */