const { watch, series } = require("gulp"); 
const exec = require('child_process').exec; 

function test(cb) {
  exec("npm test", (err, stdout, stderr) => {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
}

test.displayName = "test:all";

exports.test = function() {
  watch(["src/*.js", "test/*.js"], series(test));
}

