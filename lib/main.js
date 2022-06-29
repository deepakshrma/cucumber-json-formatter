#!/usr/bin/env node
const { spawn } = require("child_process");
const { promisify } = require("util");
const _spawn = promisify(spawn);

async function main() {
  const platform = process.platform;
  _spawn(`${__dirname}/cucumber-json-formatter-${platform}-v19.0.0`, {
    stdio: [process.stdin, process.stdout, "inherit"],
  });
}

main();
