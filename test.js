// models
global.test1 = require("./test/test1");

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var name ='';
(() => {
    rl.question("Enter test number: ",async function (name) {

        fn = "test" + name;
        // function exists
        if (fn in global && typeof global[fn].start === "function") {
            global[fn].start();
        }

        // function does not exist
        else {
            console.log("could not find " + fn + " function");
        }

        await rl.close();
        name=''
    });
}).call()