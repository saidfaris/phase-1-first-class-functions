function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    const namedFunction = function () {
      return "This is a named function";
    };
    return namedFunction;
  }
  
  function returnsAnAnonymousFunction() {
    return function () {
      return "This is an anonymous function";
    };
  }
  const callback = function () {
    console.log("I'm a callback function!");
  };
  
  receivesAFunction(callback);
  
  const namedFunction = returnsANamedFunction();
  console.log(namedFunction()); // => "This is a named function"
  
  const anonymousFunction = returnsAnAnonymousFunction();
  console.log(anonymousFunction()); // => "This is an anonymous function"
  