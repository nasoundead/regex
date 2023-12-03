import * as vscode from 'vscode';
import * as path from 'path';

export function getSidebarContent() {
    return `
  <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
      </head>
      <body>
          <p>If you are reading this, you have placed the Project Dashboard sidebar view into another sidebar container. 
          This view is not intended to be visible. Instead, it is simply a shortcut for opening the main Project Dashboard.</p>
  
          <p>If you moved the sidebar view unintentionally and want to restore the original (intended) state, 
          please drag and drop this panel onto the sidebar.</p>
  
          <p>If you encounter any problems or think this behaviour is misleading, 
          <a href="https://github.com/Kruemelkatze/vscode-dashboard/issues">please let me know.</a></p>
  
      </body>
      </html>
  `;
}


export function getDashboardContent(
    context: vscode.ExtensionContext,
    webview: vscode.Webview,
): string {

    // var stylesPath = getMediaResource(context, webview, 'styles.css');
    // var fittyPath = getMediaResource(context, webview, 'fitty.min.js');
    // var dragulaPath = getMediaResource(context, webview, 'dragula.min.js');
    // var autoScrollerPath = getMediaResource(context, webview, 'dom-autoscroller.min.js');

    // var projectScriptsPath = getMediaResource(context, webview, 'webviewProjectScripts.js');
    // var dndScriptsPath = getMediaResource(context, webview, 'webviewDnDScripts.js');
    // var filterScriptsPath = getMediaResource(context, webview, 'webviewFilterScripts.js');

    // var customCss = infos.config.get('customCss') || '';

    //     return `
    //   <!DOCTYPE html>
    //       <html lang="en">
    //       <head>
    //           <meta charset="UTF-8">
    //           <meta
    //               http-equiv="Content-Security-Policy"
    //               content="default-src 'none'; img-src * data:; script-src ${webview.cspSource} 'unsafe-inline'; style-src ${webview.cspSource} 'unsafe-inline';"
    //           />
    //           <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //           <link rel="stylesheet" type="text/css" href="${stylesPath}">
    //           <style>${colorDefaults()}</style>
    //           <style>
    //               /* Custom CSS from configuration */
    //               ${customCss}
    //           </style>
    //           <title>Dashboard</title>
    //           ${getCustomStyle(infos.config)}
    //       </head>
    //       <body class="preload ${!groups.length ? 'dashboard-empty' : ''}">
    //           <div class="filter-wrapper">
    //               <span class="search-icon"/>${Icons.search
    //         }</span><input type="search" id="filter" aria-label="Filter Projects"><span id="clear" class="clear-search-icon"/>${Icons.remove
    //         }</span>
    //           </div>
    //           <div class="">
    //               <div class="groups-wrapper ${!infos.config.displayProjectPath ? 'hide-project-path' : ''
    //         }">
    //           ${groups.length
    //             ? groups.map((group) => getGroupSection(group, groups.length, infos)).join('\n')
    //             : infos.otherStorageHasData
    //                 ? getImportDiv()
    //                 : getNoProjectsDiv()
    //         }

    //               </div>

    //               ${infos.config.showAddGroupButtonTile ? getTempGroupSection(groups.length) : ''}
    //           </div>

    //           ${getProjectContextMenu()}
    //           ${getGroupContextMenu()}
    //       </body>

    //       <script src="${fittyPath}"></script>
    //       <script src="${dragulaPath}"></script>
    //       <script src="${autoScrollerPath}"></script>
    //       <script src="${projectScriptsPath}"></script>
    //       <script src="${dndScriptsPath}"></script>
    //       <script src="${filterScriptsPath}"></script>

    //       <script>
    //           (function() {
    //               fitty('.project-header', ${JSON.stringify(FITTY_OPTIONS)});

    //               window.vscode = acquireVsCodeApi();      

    //               window.onload = () => {
    //                   initProjects();
    //                   initDnD();
    //                   initFiltering(${infos.config.searchIsActiveByDefault});
    //               }
    //           })();
    //       </script>


    //   </html>`;

    return `
<!DOCTYPE html>
<html lang="en">
<body class="box_overflow_fix light default" spellcheck="false">
    <p>Hello world</p>
</body>
</html>
    `;
}