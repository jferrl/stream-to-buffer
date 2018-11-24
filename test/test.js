"use strict";
const expect = require("chai").expect;
const fs = require("fs");
const path = require("path");
const index = require("../dist/index.js");

describe("streamToBuffer", () => {
    it("should return a buffer from the stream", async () => {
        const readStream = fs.createReadStream(path.join(__dirname, "test-file.txt"));
        var result = await index.streamToBuffer(readStream);
        expect(result.toString()).to.equal("this_is_a_file_for_test_library");
    });
});