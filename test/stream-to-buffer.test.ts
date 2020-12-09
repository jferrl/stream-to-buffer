import * as fs from 'fs';
import { Readable } from 'stream';

import { streamToBuffer } from '../lib/stream-to-buffer';

describe('streamToBuffer', (): void => {
    it('should return content of a read stream as a buffer', async (): Promise<void> => {
        const testData = Buffer.from('test_data');

        await expect(streamToBuffer(fs.createReadStream('testdata/small-file'))).resolves.toEqual(testData);
    });

    it('should throw an error when the error event is emited', async (): Promise<void> => {
        const fakeError = new Error('fake');
        const readStream = new Readable({
            read(this: Readable): void {
                this.emit('error', fakeError);
            }
        });

        await expect(streamToBuffer(readStream)).rejects.toThrow(fakeError);
    });
});
