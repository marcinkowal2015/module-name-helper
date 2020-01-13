// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {getModuleName} from "module-name-resolver";

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "module-name-helper" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('extension.showModuleName', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		try {
			vscode.window.showInformationMessage(getModuleName(vscode.window.activeTextEditor?.document.fileName?.toString() ?? ""));
		} catch {
			vscode.window.showErrorMessage("Cannot resolve module name of this file");
		}
		
	});

	const disposable2 = vscode.commands.registerCommand('extension.copyModuleName', () => {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		try {
			vscode.env.clipboard.writeText(getModuleName(vscode.window.activeTextEditor?.document.fileName?.toString() ?? ""));
		} catch {
			vscode.window.showErrorMessage("Cannot resolve module name of this file");
		}
		
	});
 
	context.subscriptions.push(disposable);
	context.subscriptions.push(disposable2);
}

// this method is called when your extension is deactivated
export function deactivate() {
	void(0);
}
