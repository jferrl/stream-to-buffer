"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const MemoryStream = require("memorystream");
const stream_1 = require("stream");
/**
* @Method: Returns the buffer from a read stream
* @Param {ReadStream}
* @Return {Promise<Buffer>}
*/
function streamToBuffer(readStream) {
    if (!readStream || readStream instanceof stream_1.Readable === false) {
        throw new Error("ReadStream must be a valid instace");
    }
    return new Promise((resolve, reject) => {
        const writeStreamToBuffer = MemoryStream.createWriteStream();
        readStream
            .on("error", (error) => reject(error))
            .pipe(writeStreamToBuffer)
            .on("finish", () => __awaiter(this, void 0, void 0, function* () {
            try {
                resolve(writeStreamToBuffer.toBuffer());
            }
            catch (error) {
                reject(error);
            }
        }));
    });
}
exports.streamToBuffer = streamToBuffer;
//# sourceMappingURL=index.js.map