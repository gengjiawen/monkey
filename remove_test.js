const glob = require("glob");
const fs = require("fs");

const files = glob.sync("**/*_test.go");
console.log(files);
files.map(fs.unlinkSync);
