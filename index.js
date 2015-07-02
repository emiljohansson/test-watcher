"use strict";

var fs = require('fs');
var cp = require('child_process');
var dir = 'src';

fs.watch(dir, {
    persistent: true,
    recursive: true
}, runTests);

function runTests() {
    cp.spawn('npm', ['test'], {
            stdio: 'inherit'
        })
        .on('exit', function(error) {});
}

runTests();
