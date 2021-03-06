"use strict";

let jibo = require ('jibo');
let Status = jibo.bt.Status;

jibo.init('face', function(err) {
    if (err) {
        return console.error(err);
    }
    // Load and create the behavior tree
    //let root = jibo.bt.create('../behaviors/main');
    let root = jibo.bt.create('../behaviors/take-photo');
    //let root = jibo.bt.create('../behaviors/19-lps');
    //let root = jibo.bt.create('../behaviors/ximalaya-main');
    
    root.start();

    // Listen for the jibo main update loop
    jibo.timer.on('update', function(elapsed) {
        // If the tree is in progress, keep updating
        if (root.status === Status.IN_PROGRESS) {
            root.update();
        }
    });
});
