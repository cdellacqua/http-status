import {HttpStatus, HttpStatusMessage} from './lib';

document.body.appendChild(document.createTextNode(HttpStatus.Accepted.toString() + ' ' + HttpStatusMessage[HttpStatus.Accepted].toString()));

const dispatchTable: {[key in HttpStatus]?: (response: Response) => unknown} = {
	[HttpStatus.OK]: async (response: Response) => alert('here we go: ' + (await response.text())),
	[HttpStatus.InternalServerError]: () => alert('oops!'),
	[HttpStatus.BadRequest]: () => alert('mistakes were made...'),
};

fetch('/some-api.json').then((response) => {
	if (response.status in dispatchTable) {
		dispatchTable[response.status as HttpStatus]?.(response);
	} else {
		alert('unhandled status! ' + response.status);
	}
});
