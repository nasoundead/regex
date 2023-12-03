// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import * as path from 'path';

import { getSidebarContent, getDashboardContent } from './webview/webviewContent';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "regex" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('regex.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from regex!');
	});

	context.subscriptions.push(disposable);

	class SidebarDummyDashboardViewProvider implements vscode.WebviewViewProvider {
		public static readonly viewType = 'regex101.webview';

		private _view?: vscode.WebviewView;

		constructor(private readonly _extensionUri: vscode.Uri) { }

		resolveWebviewView(
			webviewView: vscode.WebviewView,
			webviewContext: vscode.WebviewViewResolveContext<unknown>,
			token: vscode.CancellationToken,
		): void | Thenable<void> {
			this._view = webviewView;

			// The only job of this "view" is to close itself and open the main project dashboard webview
			webviewView.webview.html = getSidebarContent();
			this.switchToMainDashboard();
			webviewView.onDidChangeVisibility(this.switchToMainDashboard);
		}

		switchToMainDashboard = () => {
			if (this._view?.visible) {
				vscode.commands.executeCommand('workbench.view.explorer');
				showDashboard();
			}
		};
	}

	var instance: vscode.WebviewPanel | null = null;
	const provider = new SidebarDummyDashboardViewProvider(context.extensionUri);

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(SidebarDummyDashboardViewProvider.viewType, provider),
	);

	const openCommand = vscode.commands.registerCommand('regex101.open', () => {
		showDashboard();
	});
	context.subscriptions.push(openCommand);

	function showDashboard() {
		var columnToShowIn = vscode.window.activeTextEditor
			? vscode.window.activeTextEditor.viewColumn
			: undefined;

		if (instance) {
			instance.webview.html = getDashboardContent(
				context,
				instance.webview,
			);
			instance.reveal(columnToShowIn);
		} else {
			var panel = vscode.window.createWebviewPanel(
				'regex101',
				'regex101 Dashboard',
				vscode.ViewColumn.One,
				{
					enableScripts: true,
					localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'media'))],
				},
			);
			panel.iconPath = vscode.Uri.file(path.join(context.extensionPath, 'media', 'icon.svg'));

			panel.webview.html = getDashboardContent(context, panel.webview);

			// Reset when the current panel is closed
			panel.onDidDispose(
				() => {
					instance = null;
				},
				null,
				context.subscriptions,
			);

			panel.webview.onDidReceiveMessage(async (e) => {

			});
			panel.onDidDispose(() => {
				instance = null;
			});

			instance = panel;
		}
	}
}

// This method is called when your extension is deactivated
export function deactivate() { }
