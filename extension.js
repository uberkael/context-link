const vscode = require('vscode');

function buildContextLink(filePath, selection, format) {
	const startLine = selection.start.line + 1;
	const endLine = selection.end.line + 1;

	if (selection.isEmpty) {
		return `@${filePath}`;
	}

	const lineRef = startLine === endLine ? `${startLine}` : `${startLine}-${endLine}`;
	return format === 'opencode'
		? `@${filePath}#${lineRef}`
		: `@${filePath}#L${lineRef}`;
}

function activate(context) {
	console.log('Context Link extension is now active');

	const disposable = vscode.commands.registerCommand('context-link.copyContext', async function () {
		const editor = vscode.window.activeTextEditor;

		if (!editor) {
			vscode.window.showWarningMessage('No active editor');
			return;
		}

		const document = editor.document;
		const selection = editor.selection;
		const config = vscode.workspace.getConfiguration('contextLink');
		const format = config.get('format') || 'claude';
		const showNotification = config.get('showNotification') || false;

		const pathType = config.get('pathType') || 'relative';
		const filePath = pathType === 'absolute'
			? document.uri.fsPath
			: vscode.workspace.asRelativePath(document.uri);

		const contextLink = buildContextLink(filePath, selection, format);

		await vscode.env.clipboard.writeText(contextLink);
		if (showNotification) {
			vscode.window.showInformationMessage(`Copied: ${contextLink}`);
		}
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	buildContextLink,
	activate,
	deactivate
}
