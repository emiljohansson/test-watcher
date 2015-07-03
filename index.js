"use strict";

var fs = require('fs');
var cp = require('child_process');

function runTests() {
    cp.spawn('npm', ['test'], {
            stdio: 'inherit'
        })
        .on('exit', function(error) {});
}

function init(dir) {
    dir = typeof dir === 'string' ? dir : "src";
    fs.watch(dir, {
        persistent: true,
        recursive: true
    }, runTests);
    runTests();
}

module.exports = init;
