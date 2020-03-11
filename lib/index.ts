"use strict";
import { ReadStream } from "fs";
import * as MemoryStream from "memorystream";
import { Readable } from "stream";

/**
* @Method: Returns the buffer from a read stream
* @Param {ReadStream}
* @Return {Promise<Buffer>}
*/

export function streamToBuffer(readStream: ReadStream): Promise<Buffer> {

    if (!readStream || readStream instanceof Readable === false) {
        throw new Error("ReadStream must be a valid instance");
    }

    return new Promise<Buffer>((resolve, reject) => {
        const writeStreamToBuffer = MemoryStream.createWriteStream();
        readStream
            .on("error", (error) => reject(error))
            .pipe(writeStreamToBuffer)
            .on("finish", async () => {
                try {
                    resolve(writeStreamToBuffer.toBuffer());
                } catch (error) {
                    reject(error);
                }
            });
    });
}
