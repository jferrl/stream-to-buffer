/// <reference types="node" />
import { ReadStream } from "fs";
/**
* @Method: Returns the buffer from a read stream
* @Param {ReadStream}
* @Return {Promise<Buffer>}
*/
export declare function streamToBuffer(readStream: ReadStream): Promise<Buffer>;
