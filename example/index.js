import { streamToBuffer } from '@jorgeferrero/stream-to-buffer';
import * as fs from 'fs';

const data = await streamToBuffer(fs.createReadStream('./file'));
console.log(data.toString());
