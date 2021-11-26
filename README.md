# Enums for HTTP Status Codes and Messages

[NPM Package](https://www.npmjs.com/package/@cdellacqua/http-status)

`npm install @cdellacqua/http-status`

[Documentation](./docs/README.md)

## Highlights

```js
import {HttpStatus, HttpStatusMessage} from '@cdellacqua/http-status';

console.log(HttpStatus.OK); // 200
console.log(HttpStatusMessage[301]); // "Moved Permanently"
console.log(HttpStatusMessage[HttpStatus.MovedPermanently]); // "Moved Permanently"

// It can be used to create expressive dispatch tables:
const dispatchTable = {
	[HttpStatus.OK]: async (response) => alert('here we go: ' + (await response.text())),
	[HttpStatus.InternalServerError]: () => alert('oops!'),
	[HttpStatus.BadRequest]: () => alert('mistakes were made...'),
};

fetch('/some-api.json').then((response) => {
	if (response.status in dispatchTable) {
		dispatchTable[response.status]?.(response);
	} else {
		alert('unhandled status! ' + response.status);
	}
});

```
