import {expect} from 'chai';
import {HttpStatus, HttpStatusMessage} from '../src/lib';

describe('enum compatibility', () => {
	it('verifies enum compatibility by iterating all status codes and messages', () => {
		Object.entries(HttpStatus).forEach(([key, value]) => {
			if (typeof value === 'number') {
				const normalizedMessage = HttpStatusMessage[value]
					.replace(/ /g, '')
					.replace(/(-[a-zA-Z])/g, (v) => v.slice(1).toUpperCase())
					.replace("I'mat", 'ImAT');
				expect(key).to.equal(normalizedMessage);
			}
		});
	});
});
