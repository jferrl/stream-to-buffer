import { BufferableStream } from '../lib/buffer-stream';

describe('BufferableStream', (): void => {
    describe('toBuffer', (): void => {
        it('should return the writed content as a Buffer', async (): Promise<void> => {
            const firstChuck = Buffer.from('test_data');
            const lastChunck = Buffer.from('\n');
            const sut = new BufferableStream();

            sut.write(firstChuck);
            sut.write(lastChunck);
            sut.end();

            const data = sut.toBuffer();
            expect(data).toEqual(Buffer.concat([firstChuck, lastChunck]));
        });
    });
});
