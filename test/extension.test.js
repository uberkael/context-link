const assert = require('assert');
const vscode = require('vscode');
const { buildContextLink } = require('../extension');

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('builds OpenCode relative path without selection', () => {
		const selection = {
			start: { line: 371 },
			end: { line: 371 },
			isEmpty: true
		};

		assert.strictEqual(
			buildContextLink('data/cache.py', selection, 'opencode'),
			'@data/cache.py'
		);
	});

	test('builds OpenCode relative path for single selected line', () => {
		const selection = {
			start: { line: 371 },
			end: { line: 371 },
			isEmpty: false
		};

		assert.strictEqual(
			buildContextLink('data/cache.py', selection, 'opencode'),
			'@data/cache.py#372'
		);
	});

	test('builds OpenCode relative path for multi-line selection', () => {
		const selection = {
			start: { line: 365 },
			end: { line: 371 },
			isEmpty: false
		};

		assert.strictEqual(
			buildContextLink('data/cache.py', selection, 'opencode'),
			'@data/cache.py#366-372'
		);
	});

	test('builds OpenCode absolute path without selection', () => {
		const selection = {
			start: { line: 371 },
			end: { line: 371 },
			isEmpty: true
		};

		assert.strictEqual(
			buildContextLink('/workspace/data/cache.py', selection, 'opencode'),
			'@/workspace/data/cache.py'
		);
	});

	test('builds OpenCode absolute path for single selected line', () => {
		const selection = {
			start: { line: 371 },
			end: { line: 371 },
			isEmpty: false
		};

		assert.strictEqual(
			buildContextLink('/workspace/data/cache.py', selection, 'opencode'),
			'@/workspace/data/cache.py#372'
		);
	});

	test('builds OpenCode absolute path for multi-line selection', () => {
		const selection = {
			start: { line: 365 },
			end: { line: 371 },
			isEmpty: false
		};

		assert.strictEqual(
			buildContextLink('/workspace/data/cache.py', selection, 'opencode'),
			'@/workspace/data/cache.py#366-372'
		);
		});

	test('builds Claude path without selection', () => {
		const selection = {
			start: { line: 371 },
			end: { line: 371 },
			isEmpty: true
		};

		assert.strictEqual(
			buildContextLink('data/cache.py', selection, 'claude'),
			'@data/cache.py'
		);
	});

	test('builds Claude path for single selected line', () => {
		const selection = {
			start: { line: 371 },
			end: { line: 371 },
			isEmpty: false
		};

		assert.strictEqual(
			buildContextLink('data/cache.py', selection, 'claude'),
			'@data/cache.py#L372'
		);
	});

	test('builds Claude path for multi-line selection', () => {
		const selection = {
			start: { line: 365 },
			end: { line: 371 },
			isEmpty: false
		};

		assert.strictEqual(
			buildContextLink('data/cache.py', selection, 'claude'),
			'@data/cache.py#L366-372'
		);
	});
});
