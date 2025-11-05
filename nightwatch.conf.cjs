/* eslint-disable */
// Refer to the online docs for more details:
// https://nightwatchjs.org/gettingstarted/configuration/
//

//  _   _  _         _      _                     _          _
// | \ | |(_)       | |    | |                   | |        | |
// |  \| | _   __ _ | |__  | |_ __      __  __ _ | |_   ___ | |__
// | . ` || | / _` || '_ \ | __|\ \ /\ / / / _` || __| / __|| '_ \
// | |\  || || (_| || | | || |_  \ V  V / | (_| || |_ | (__ | | | |
// \_| \_/|_| \__, ||_| |_| \__|  \_/\_/   \__,_| \__| \___||_| |_|
//             __/ |
//            |___/

module.exports = {
	// An array of folders (excluding subfolders) where your tests are located;
	// if this is not specified, the test source must be passed as the second argument to the test runner.
	src_folders: ['testing' /* 'nightwatch' */],

	// Exclude Vitest unit test files from Nightwatch
	exclude: ['testing/**/test/**'],

	// See https://nightwatchjs.org/guide/concepts/page-object-model.html
	page_objects_path: [],

	// See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-commands.html
	custom_commands_path: [],

	// See https://nightwatchjs.org/guide/extending-nightwatch/adding-custom-assertions.html
	custom_assertions_path: [],

	// See https://nightwatchjs.org/guide/extending-nightwatch/adding-plugins.html
	/* plugins: ['@nightwatch/react'], */

	// See https://nightwatchjs.org/guide/concepts/test-globals.html
	globals_path: '',

	vite_dev_server: {
		start_vite: true,
		port: 5173,
	},

	webdriver: {},

	test_workers: {
		enabled: true,
	},

	test_settings: {
		default: {
			disable_error_log: false,
			launch_url: 'http://localhost:3000/',

			screenshots: {
				enabled: false,
				path: 'screens',
				on_failure: true,
			},

			desiredCapabilities: {
				browserName: 'chrome',
			},

			webdriver: {
				start_process: true,
				server_path: '',
			},
		},

		firefox: {
			desiredCapabilities: {
				browserName: 'firefox',
				alwaysMatch: {
					acceptInsecureCerts: true,
					'moz:firefoxOptions': {
						args: [
							//'-headless',
							// '-verbose'
						],
					},
				},
			},
			webdriver: {
				start_process: true,
				server_path: require('geckodriver').path,
				cli_args: [
					// very verbose geckodriver logs
					// '-vv'
				],
			},
		},

		chrome: {
			desiredCapabilities: {
				browserName: 'chrome',
				'goog:chromeOptions': {
					// More info on Chromedriver: https://sites.google.com/a/chromium.org/chromedriver/
					args: [
						//'--no-sandbox',
						//'--ignore-certificate-errors',
						//'--allow-insecure-localhost',
						//'--headless=new'
					],
				},
			},

			webdriver: {
				start_process: true,
				server_path: '',
				cli_args: [
					// --verbose
				],
			},
		},
	},
};
