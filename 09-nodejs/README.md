# Node.js jsmp project

To start the app, follow these steps:
- Run npm install in both frontend and server folders
- Install mongoDB and and connect database to localhost:27017
- Start backend in [server](server) folder (node server.js)
- Start frontend in [frontend](frontend) folder (npm start)

#Usage notes:
- Every time, you add new device, your should run the fake instance of it, to be able to switch it on and off:
    - navigate to [server](server) folder and run fakeDevice.js with it's port <br>
        EX: node fakeDevice.js 8001 (8001 is the port, you registered you device on) 
- The default ip address for fake devices is 127.0.0.1
