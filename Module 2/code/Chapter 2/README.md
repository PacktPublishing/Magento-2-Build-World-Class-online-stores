# About this example
This chapter contains over 20 recipes that will help you to
master the usage of functions, type annotations and classes
in TypeScript.

# How to run the example?

Open a console and clone the following Git repository:

```
$ git clone https://github.com/remojansen/TsCookbook.git
```

Navigate to the `chapter_02` folder:

```
$ cd TsCookbook/chapter_02
```

Install node modules:

```
$ npm install
```

Install the TypeScript type definitions:

```
$ tsd reinstall -so
```

Run one of the gulp tasks:

```
$ gulp          // invokes 'bundle' task
$ gulp lint     // lints typescript code
$ gulp bundle   // lint + build typescript code
$ gulp serve    // runs web server
```

# Run the application in a web browser

```
$ gulp serve
```

Navigate to (if not open autimatically by gulp)::

```
http://localhost:8000/browser/index.html
```

Use the select input to see the TypeScript code and JavaScript 
code of each of the examples in chapter 02.