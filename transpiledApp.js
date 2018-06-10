"use strict";

function greet() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "david";

    return "hello " + name;
}

console.log(greet());
