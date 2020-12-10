# node-firebase-logging

1.npm install

2.cd functions & npm install & cd ..

3.update firebase configuration info for initialize in routes\users.js

  firebase.initializeApp({
    //here is firebase config information
  });

4. running server
  On MacOS or Linux, run the app with this command:

  $ DEBUG=node-firebase-logging:* npm start
  On Windows Command Prompt, use this command:

  > set DEBUG=node-firebase-logging:* & npm start
  On Windows PowerShell, use this command:

  PS> $env:DEBUG='node-firebase-logging:*'; npm start
  
  Then load http://localhost:3000/ in your browser to access the app.



