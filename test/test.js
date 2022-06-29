const assert = require("assert");
const { Writable } = require("stream");
const { createReadStream, createWriteStream } = require("fs");
const { spawnSync } = require("child_process");
const path = require("path");
const binFullPath = path.join(__dirname, "..", "lib", "main.js");
describe("JSON Format", function () {
  it("should able to generate formatted report", async function () {
    const file = path.join(__dirname, "cucumber-messages.ndjson");
    const shellSyntaxCommand = `cat ${file} | node ${binFullPath} `;
    const res = spawnSync("sh", ["-c", shellSyntaxCommand]);
    const resJSON = JSON.parse(res.stdout.toString("utf-8"));
    assert.equal(resJSON.length > 0, true);
    assert.equal(resJSON[0].elements[0].id, "duckduckgo.com;visting-the-frontpage");
  });
});
