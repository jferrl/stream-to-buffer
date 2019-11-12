# StreamToBuffer
[![Build Status](https://travis-ci.org/jferrl/stream-to-buffer.svg?branch=master)](https://travis-ci.org/jferrl/stream-to-buffer)
[![Coverage Status](https://coveralls.io/repos/github/jferrl/stream-to-buffer/badge.svg?branch=master)](https://coveralls.io/github/jferrl/stream-to-buffer?branch=master)

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
