# Stream To Buffer

[![Build Status](https://travis-ci.org/jferrl/stream-to-buffer.svg?branch=master)](https://travis-ci.org/jferrl/stream-to-buffer)
[![Maintainability](https://api.codeclimate.com/v1/badges/71b14075a12d34b2efbc/maintainability)](https://codeclimate.com/github/jferrl/stream-to-buffer/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/71b14075a12d34b2efbc/test_coverage)](https://codeclimate.com/github/jferrl/stream-to-buffer/test_coverage)
![npm](https://img.shields.io/npm/dw/@jorgeferrero/stream-to-buffer)
![npm (scoped)](https://img.shields.io/npm/v/@jorgeferrero/stream-to-buffer)

A promise based Node.js package that converts a Node.js Readable to buffer

## Installation

```sh
npm i @jorgeferrero/stream-to-buffer
```

## Usage

```typescript
import { streamToBuffer } from '@jorgeferrero/stream-to-buffer';
import * as fs from 'fs';

const data = await streamToBuffer(fs.createReadStream('./file'));
console.log(data.toString());
```

```sh
Output should be the the content of the file
```

## Test

```sh
npm run test
```
