# @cjulian/debug-react

A React component that outputs a value stringified and preformatted.

## installation
`npm install @cjulian/debug-react`

## usage
```javascript
import Debug from '@cjulian/debug-react';

const myObject = { foo: 'bar', baz: 'bat'};
<Debug value={myObject} />
```