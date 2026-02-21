const vscode = require('vscode');

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
		
		const startLine = selection.start.line + 1;
		const endLine = selection.end.line + 1;
		
		const relativePath = vscode.workspace.asRelativePath(document.uri);
		
		let contextLink;
		if (selection.isEmpty) {
			contextLink = `@${relativePath}#${startLine}`;
		} else if (startLine === endLine) {
			contextLink = `@${relativePath}#${startLine}`;
		} else {
			contextLink = `@${relativePath}#${startLine}-${endLine}`;
		}
		
		await vscode.env.clipboard.writeText(contextLink);
		vscode.window.showInformationMessage(`Copied: ${contextLink}`);
	});

	context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
