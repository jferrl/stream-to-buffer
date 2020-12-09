import { BufferableStream } from './buffer-stream';

/**
 * @Method: Returns the content of the readable stream as a buffer
 * @Param {NodeJS.ReadableStream}
 * @Return {Promise<Buffer>}
 */
export async function streamToBuffer(stream: NodeJS.ReadableStream): Promise<Buffer> {
    const bufferableStream = new BufferableStream();

    return new Promise((resolve: (data: Buffer) => void, reject: (error: Error) => void): void => {
        stream
            .on('error', (error: Error): void => {
                bufferableStream.emit('error', error);
            })
            .pipe(bufferableStream)
            .on('finish', (): void => {
                resolve(bufferableStream.toBuffer());
            })
            .on('error', (error: Error): void => {
                reject(error);
            });
    });
}
