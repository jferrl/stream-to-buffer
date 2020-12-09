import { streamToBuffer } from '@jorgeferrero/stream-to-buffer';
import * as https from 'https';

https.get('https://github.com').on('response', async (res) => {
    const bufferedResponse = await streamToBuffer(res);
    console.log(bufferedResponse.toString());
});
