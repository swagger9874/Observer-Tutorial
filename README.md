# What is this?
This is a very basic project to learn Observer Pattern.

# How it works?
Inside js directory we have 4 classes named NumberModel, ConsoleObserver, ElementObserver and HistoryObserver. <br>
NumberModel is our main model and every time it cahanges its own state, it notifies every other classes. So NumberModel is our observable class
and the others are observers. Every observer class has their own update() methods. In our observable class notify() method calls 
every observers update() method.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view app in the browser. <br>
Then click index.html file to run the app.
