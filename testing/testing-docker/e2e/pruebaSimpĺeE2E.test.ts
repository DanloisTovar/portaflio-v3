import type { NightwatchAPI } from 'nightwatch';

describe('Homepage Astro tests de prueba simple', function () {
	it('Homepage loads and has #container', function (browser: NightwatchAPI) {
		const url = browser.launchUrl || 'http://localhost:3000';
		browser
			.url(url)
			.waitForElementVisible('body', 5000)
			.assert.visible('#container')
			.end();
	});
});
