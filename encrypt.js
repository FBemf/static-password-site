#!/usr/bin/env node

const fs = require("fs");
const sjcl = require("./site/sjcl")

function help(code) {
  console.log("Usage: ./encrypt.js file.html file.html.encrypted PASSWORD");
  process.exit(code);
}

function main() {
  if (process.argv.includes("--help")) {
    help(0);
  } else if (process.argv.length !== 5) {
    help(1);
  }

  let inputFile = process.argv[2];
  let outputFile = process.argv[3]
  let password = process.argv[4];

  let plaintext = fs.readFileSync(inputFile, "utf8");
  let cyphertext = sjcl.encrypt(password, plaintext);
  fs.writeFileSync(outputFile, cyphertext);
}

main();
