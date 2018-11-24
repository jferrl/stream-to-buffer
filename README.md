# StreamToBuffer
A promise based Node.js module that converts a node.js ReadStream to buffer
## Installation 
```sh
npm install stream-to-buffer --save
```
## Usage
### Javascript
```javascript
const stb = require('stream-to-buffer');
const readStream = fs.createReadStream("./file");
const buffer = await stb.streamToBuffer(readStream);
```
```sh
Output should be the the content of the file
```
### TypeScript
```typescript
import { streamToBuffer } from 'stream-to-buffer';
const readStream = fs.createReadStream("./file");
const buffer = await streamToBuffer(readStream);
```
```sh
Output should be the the content of the file
```

## Test 
```sh
npm run test
```