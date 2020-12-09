# StreamToBuffer

[![Build Status](https://travis-ci.org/jferrl/stream-to-buffer.svg?branch=master)](https://travis-ci.org/jferrl/stream-to-buffer)
[![Maintainability](https://api.codeclimate.com/v1/badges/71b14075a12d34b2efbc/maintainability)](https://codeclimate.com/github/jferrl/stream-to-buffer/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/71b14075a12d34b2efbc/test_coverage)](https://codeclimate.com/github/jferrl/stream-to-buffer/test_coverage)

A promise based Node.js module that converts a node.js ReadStream to buffer

## Installation

```sh
npm install stream-to-buffer --save
```

## Usage

### Javascript

```javascript
const stb = require('stream-to-buffer');
const readStream = fs.createReadStream('./file');
const buffer = await stb.streamToBuffer(readStream);
```

```sh
Output should be the the content of the file
```

### TypeScript

```typescript
import { streamToBuffer } from 'stream-to-buffer';
const readStream = fs.createReadStream('./file');
const buffer = await streamToBuffer(readStream);
```

```sh
Output should be the the content of the file
```

## Test

```sh
npm run test
```
