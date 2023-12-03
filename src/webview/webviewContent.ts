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


    // return `
    // <!DOCTYPE html>
    // <html lang="en">
    // <body class="box_overflow_fix light default" spellcheck="false">
    //     <p>Hello world</p>
    // </body>
    // </html>
    //     `;


    var openSansStylesPath = getMediaResource(context, webview, 'font-open-sans/open-sans.css');
    var fontAwesomeStylesPath = getMediaResource(context, webview, 'font-awesome/css/font-awesome.min.css');
    var mainStylesPath = getMediaResource(context, webview, 'main.1436803526.css');

    var underscoreMinJsPath = getMediaResource(context, webview, 'underscore-min.1436803505.js');
    var jqueryMinJsPath = getMediaResource(context, webview, 'jquery.min.js');
    var jqueryToolsJsPath = getMediaResource(context, webview, 'jquery.tools.1436803505.js');
    var generalRegex101JsPath = getMediaResource(context, webview, 'general.regex101.1436803508.js');
    var colorParserRegex101JsPath = getMediaResource(context, webview, 'colorParser.regex101.1436803520.js');
    var explainerRegex101JsPath = getMediaResource(context, webview, 'explainer.regex101.1436803512.js');
    var commonRegex101JsPath = getMediaResource(context, webview, 'common.regex101.1436803517.js');
    var matcherRegex101JsPath = getMediaResource(context, webview, 'matcher.regex101.1436803513.js');
    var javascriptRegex101JsPath = getMediaResource(context, webview, 'javascript.regex101.js');
    var pcreRegex101JsPath = getMediaResource(context, webview, 'pcre.regex101.js');
    var pcrelib16JsPath = getMediaResource(context, webview, 'pcrelib16.js.js');


    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <title>Regex tester and debugger: JavaScript, Python, PHP, and PCRE(Offline version of Regex101)</title>
        <link href="${openSansStylesPath}" rel="stylesheet" type="text/css">
        <link href="${fontAwesomeStylesPath}" rel="stylesheet" type="text/css">
        <link href="${mainStylesPath}" rel="stylesheet">
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <meta name="keywords"
            content="javascript,regex,regular expression,debugger,explainer,helper,tester,match,pcre,python,editor">
        <meta name="description" content="Regex tester, debugger with highlighting for PHP, PCRE, Python and JavaScript.">
        <meta name="author" content="Firas Dib(Original) 王海波(离线版适配)">
    </head>

    <body class="box_overflow_fix light default" spellcheck="false">
        <div id="header_parent">
            <div id="header">
                <div class="text_overflow">
                    <h1 id="logo">
                        <a href="/">
                            <div id="large_header"><span class="part1">reg</span> <span class="part2">ex</span> <span
                                    class="part3">101</span> <span class="part3">(Mirror Site)</span></div>
                            <div id="small_header"><span class="part1">reg</span><span class="part2">ex</span> <span
                                    class="part3">101</span></div>
                        </a>
                    </h1>
                    <ul id="header_nav">
                        <li class="fullscreen header_nav active main_menu main" data-id="40">
                            <i class="fa fa-terminal"></i><span class="large_menu">Regex Tester</span>
                        </li>
                        <li class="fullscreen header_nav main_menu community" data-id="43" style="display: none">
                            <i class="fa fa-cloud"></i><span class="large_menu">Regex Library</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="settings_popup_contents">
            <div class="left">
                <div class="label"><i class="fa fa-gear settings"></i> General Settings</div>
                <input type="checkbox" id="display_whitespace" name="display_whitespace" tabindex="999" value="1"
                    data-id="1">
                <label class="design_label" for="display_whitespace">
                    <span></span>Display Whitespace
                </label>
                <input type="checkbox" id="small_menu" name="small_menu" tabindex="999" value="1" data-id="201">
                <label class="design_label" for="small_menu">
                    <span></span>Use minimal view
                </label>
                <div class="label"><i class="fa fa-picture-o theme"></i> Theme</div>
                <input type="radio" id="light_theme" name="theme" tabindex="999" value="1" data-id="203" checked="checked">
                <label class="design_label" for="light_theme">
                    <span></span>Use light theme
                </label>
                <input type="radio" id="dark_theme" name="theme" tabindex="999" value="1" data-id="200">
                <label class="design_label" for="dark_theme">
                    <span></span>Use dark theme
                </label>
            </div>
            <div class="right">
                <div id="colorizer_themes">
                    <div class="label"><i class="fa fa-terminal regex"></i> Regex Settings</div>
                    <input type="checkbox" id="colorize_regex" name="colorize_regex" tabindex="999" value="1" data-id="9">
                    <label class="design_label" for="colorize_regex">
                        <span></span>Colorize syntax
                    </label>
                    <div class="select_themes">
                        <strong>Theme:</strong>
                        <select class="light_themes" data-id="999">
                            <option value="default">Default</option>
                            <option value="default_light">Default - Light</option>
                        </select><select class="dark_themes" data-id="999">
                            <option value="default">Default</option>
                        </select>
                    </div>

                    <input type="checkbox" id="smart_completion" name="smart_completion" tabindex="999" value="1"
                        data-id="210">
                    <label class="design_label" for="smart_completion">
                        <span></span>Enable smart auto-completion
                    </label>
                    <input type="checkbox" id="wrap_newlines" name="wrap_newlines" tabindex="999" value="1" data-id="10">
                    <label class="design_label" for="wrap_newlines">
                        <span></span>Wrap long lines
                    </label>
                    <input type="checkbox" id="highlight_interaction" name="highlight_interaction" tabindex="999" value="0"
                        data-id="220">
                    <label class="design_label" for="highlight_interaction">
                        <span></span>Highlight groups
                    </label>
                    <input type="checkbox" id="display_nonpart" name="display_nonpart" tabindex="999" value="0"
                        data-id="221">
                    <label class="design_label" for="display_nonpart">
                        <span></span>Show non-participating groups
                    </label>
                    <div class="execution_limit">
                        <label class="design_label" for="execution_limit">Max execution time:</label>
                        <input type="text" name="execution_limit" id="execution_limit" placeholder="2000"><em>ms</em>
                    </div>
                </div>
                <!--li id="dark_theme" data-id="200" class="menu_item">
                    <i class="fa fa-picture-o"></i><span class="large_menu">Use dark theme</span>
                </li-->
            </div>
            <div class="arrow-box-tip reverse"></div>
	    </div>
        <div class="denial_of_service" id="splash">
            <div>
                Initializing editor, please stand by... <i class="fa fa-cog fa-spin"></i>
            </div>
	    </div>
        <div class="denial_of_service" id="loading_screen">
            <div>
                Loading content, please hold... <i class="fa fa-cog fa-spin"></i>
            </div>
        </div>
        <noscript>
            <div class="denial_of_service">
                <div>
                    It seems like you have JavaScript disabled, rendering this website virtually useless.
                    Please enable JavaScript to use this service. If you don't know how, try <a
                        href="http://enable-javascript.com/">this</a>.
                </div>
            </div>
        </noscript>
        <div class="denial_of_service" id="old_browser">
            <div>You seem to be using an outdated version of your browser which is no longer supported by
                <strong>regex101.com</strong>. It is highly recommended that you upgrade your browser. Sorry for the
                inconvenience.
            </div>
        </div>
        <div id="inline_menu" class="box_overflow_fix general_menu">
            <ul class="first-ul overflow_handler">
                <li class="regex_menu extension_menu share_menu" style="display: none">
                    <ul>
                        <li class="menu_notice">Save &amp; Share</li>
                        <li id="permalink_menu" class="menu_item disabled" data-id="3" data-permalink="" data-version="">
                            <i class="fa fa-save"></i><span class="large_menu">Save Regex (CTRL+S)</span>
                        </li>
                        <li id="permalink_fork" class="menu_item" data-id="900" style="display: none;">
                            <i class="fa fa-code-fork"></i><span class="large_menu">Fork Regex</span>
                        </li>
                        <li class="menu_item unique disabled" data-id="4" id="community_submit">
                            <i class="fa fa-cloud-upload"></i><span class="large_menu">Add to Regex Library</span>
                        </li>
                    </ul>
                </li>
                <li class="regex_menu extension_menu no_top_space">
                    <ul>
                        <li class="menu_notice">Flavor</li>
                        <li class="flavor_pcre menu_item active" data-id="20">
                            <span class="mini_menu">PCRE</span>
                            <span class="large_menu"><i class="fa fa-file"></i>PCRE (PHP)</span>
                        </li>
                        <li class="flavor_js menu_item " data-id="21">
                            <span class="mini_menu">JS</span>
                            <span class="large_menu"><i class="fa fa-file"></i>JavaScript</span>
                        </li>
                        <li class="flavor_python menu_item " data-id="22">
                            <span class="mini_menu">PY</span>
                            <span class="large_menu"><i class="fa fa-file"></i>Python</span>
                        </li>
                    </ul>
                </li>
                <li class="regex_menu extension_menu" id="tools_menu">
                    <ul>
                        <li class="menu_notice">Tools</li>
                        <li class="menu_item" data-id="50" id="format_regex">
                            <i class="fa fa-indent"></i><span class="large_menu">Format Regex (requires free-spacing,
                                /x)</span>
                        </li>
                        <li class="menu_item unique fullscreen disabled menu_toggle" data-id="8" id="sample_menu">
                            <i class="fa fa-code"></i><span class="large_menu">Code Generator</span>
                        </li>
                        <li class="menu_item unique disabled fullscreen menu_toggle" data-id="7" id="debugger_menu">
                            <i class="fa fa-bug"></i><span class="large_menu">Regex Debugger</span>
                        </li>
                        <li class="menu_item menu_toggle" data-id="99" id="unit_tests">
                            <i class="fa fa-check"></i><span class="large_menu"><span class="unit_test_player"><i
                                        class="fa fa-play run_tests" title="Run tests (CTRL+K)"></i><span
                                        class="unit_result">n/a</span><span class="unit_progress"></span></span><span
                                    class="text_overflow">Unit tests</span></span>
                        </li>
                    </ul>
                </li>
                <li id="filter_menu" class="extension_menu community_menu no_top_space">
                    <ul>
                        <li class="menu_notice">Filter flavors</li>
                        <li class="flavor_pcre menu_item active" data-id="100" data-flavor-id="1">
                            <span class="mini_menu">PCRE</span>
                            <span class="large_menu"><i class="fa fa-file"></i>PCRE (PHP)</span>
                        </li>
                        <li class="flavor_js menu_item active" data-id="101" data-flavor-id="2">
                            <span class="mini_menu">JS</span>
                            <span class="large_menu"><i class="fa fa-file"></i>JavaScript</span>
                        </li>
                        <li class="flavor_python menu_item active" data-id="102" data-flavor-id="3">
                            <span class="mini_menu">PY</span>
                            <span class="large_menu"><i class="fa fa-file"></i>Python</span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
        <div id="content">
            <div id="community" class="box_overflow_fix extension_window"></div>
            <div id="account" class="box_overflow_fix extension_window"></div>

            <div id="regex_editor" class="box_overflow_fix">
                <div id="code_samples" class="extension_window box_overflow_fix overflow_handler"></div>


                <div id="regex_debugger" class="box_overflow_fix extension_window">
                    <div id="regex_debugger_bg" class="box_overflow_fix">
                        <div class="label" id="debugger_label">Status: Fetching debug info...</div>

                        <div id="label_container" class="monospace">
                            <input type="checkbox" id="show_regex_pos" name="show_regex_pos" tabindex="999" value="1"
                                checked="checked" />
                            <label class="design_label" for="show_regex_pos">
                                <span></span>Display position in pattern
                            </label>

                            <input type="checkbox" id="internal_opt" name="internal_opt" tabindex="999" value="1" />
                            <label class="design_label" for="internal_opt">
                                <span></span>Disable internal engine optimizations
                            </label>

                            <a href="#" id="debugger_collapse">collapse all</a>
                        </div>

                    </div>
                    <div id="regex_debugger_window" class="overflow_handler">
                        <div class="debugger_loader_padding"></div>
                    </div>
                </div>


                <div id="main_editor" class="flex-container box_overflow_fix">
                    <div id="regex_container" class="flex-regex box_overflow_fix">
                        <label for="regex">
                            Regular Expression
                            <div id="version_container" style="display: none;">
                                &mdash;
                                <select id="version_selector">
                                </select>
                            </div>
                            <span id="result_indicator" class="no_match">no match</span>
                        </label>

                        <div id="regex_input" class="box_overflow_fix richtext_parent">
                            <div id="delimiter_selector" class="richtext_left slash_menu slash box_overflow_fix"
                                data-dropdown=".delimiter-dropdown">/</div>
                            <div class="richtext_right">
                                <div class="slash slash_menu" data-dropdown=".delimiter-dropdown">/</div><!--
                            -->
                                <div id="options_container">
                                    <input data-focus="#options_container" value="" id="options" name="options" size="20"
                                        tabindex="2" type="text" placeholder="gmixXsuUAJ" />
                                    <i id="options_helper" class="fa fa-question-circle"></i>
                                </div>
                                <div id="options_helper_contents"></div>
                            </div>
                            <div class="richtext_padding">
                                <div class="richtext_container" id="richtext_regex_container">
                                    <div class="richtext" id="richtext_regex">
                                        <pre><span class="colorizer_height"></span><br/></pre>
                                        <pre id="regex_colors"><span></span><br/></pre>
                                        <textarea data-focus="#richtext_regex_container" spellcheck="false" id="regex"
                                            name="regex" tabindex="1" rows="1" cols="50"
                                            placeholder="insert your regular expression here"
                                            autofocus="autofocus"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div id="test_result_container" class="box_overflow_fix flex-text ">
                        <label for="regex_string">Test string</label>
                        <div class="overflow_handler flex-grow">
                            <div class="richtext" id="richtext_test">
                                <pre><span id="richtext_test_size"></span><br>&nbsp;</pre>
                                <pre id="richtext_test_colors"><span id="test_color_element"></span><br></pre>
                                <textarea wrap="off" data-focus="#test_result_container .overflow_handler"
                                    spellcheck="false" id="regex_string" class="box_overflow_fix" name="test" rows="10"
                                    tabindex="3" placeholder="insert your test string here"></textarea>
                            </div>
                        </div>
                    </div>

                    <div id="subst_parent" class="box_overflow_fix flex-sub ">
                        <label for="sub" class="expander collapsed">
                            <span class="fa fa-plus-circle"></span>Substitution
                        </label>
                        <div id="subst_container" class="overflow_handler flex-grow">
                            <input class="box_overflow_fix" value="" id="sub" name="sub" tabindex="3" type="text"
                                placeholder="substitution; \num = backreference, \n = newline, \t = tab">
                            <div id="subst_area" class="overflow_handler flex-grow">
                                <div contenteditable="true" id="subst_result" class="monospace hard_break box_overflow_fix">
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="unit_tests_builder" class="box_overflow_fix flex-unit-builder">
                        <div class="label">Create test<div class="right"><a href="#" class="button" tabindex="23">Add
                                    test</a></div>
                        </div>
                        <div id="unit_test_creator" class="box_overflow_fix">
                            <div class="test_builder">
                                <div class="the_test pt1">
                                    <div class="left">given the string</div>
                                    <div class="right"><textarea tabindex="19" class="box_overflow_fix" id="unit_data"
                                            placeholder="test string"></textarea></div>
                                </div>
                                <div class="the_test pt2">
                                    <div class="left"><span>assert that</span><select id="unit_type"
                                            tabindex="20"></select><select tabindex="21" id="assert_type"></select></div>
                                    <div class="right"><textarea tabindex="22" class="box_overflow_fix" id="assert_equals"
                                            type="text" placeholder="string value"></textarea></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="unit_tests_list" class="box_overflow_fix flex-unit-list">
                        <div class="label">Test list<div class="right unit_test_player"><i class="fa fa-play run_tests"
                                    title="Run tests (CTRL+K)"></i><span class="unit_result">n/a</span></div>
                        </div>
                        <div id="unit_test_window" class="unit_test_window flex-grow overflow_handler">
                            <div class="all_tests">
                                <div id="unit_test_container">
                                </div>
                            </div>
                        </div>
                    </div>


                </div>


                <div id="regex_treeview" class="box_overflow_fix">
                    <div id="treeview_resizer" title="Keep dragging">
                        <div></div>
                    </div>
                    <div id="treeview_content" class="box_overflow_fix flex-container">
                        <div id="scroll_treeview" class="box_overflow_fix flex-elem">

                            <div id="explainer_label" class="label expander">
                                <span class="fa"></span>Explanation
                            </div>
                            <div class="overflow_handler box_overflow_fix flex-grow">
                                <div id="treeview" style="height: 100%">
                                    An explanation of your regex will be automatically generated as you type.
                                </div>
                            </div>

                        </div>
                        <div id="scroll_match" class="box_overflow_fix flex-elem">

                            <div id="match_label" class="label expander">
                                <span class="fa"></span>Match information
                            </div>
                            <div class="overflow_handler box_overflow_fix flex-grow">
                                <div id="match_info">
                                    Detailed match information will be displayed here automatically.
                                </div>
                            </div>

                        </div>


                        <div id="quickref" class="box_overflow_fix flex-elem">
                            <div class="label expander">
                                <span class="fa"></span>Quick reference
                            </div>
                            <div id="quickref_data" class="flex-grow">
                                <div id="first_menu" class="box_overflow_fix general_menu">
                                    <ul>
                                        <li class="menu_notice">
                                            <div class="filter_input filter_mini box_overflow_fix"
                                                id="quickref_filter_parent">
                                                <i class="fa fa-search"></i>
                                                <div class="filter_div">
                                                    <input data-focus="#quickref_filter_parent" type="text"
                                                        id="quickref_filter" class="filter_parent box_overflow_fix"
                                                        name="quickref_filter" value="" placeholder="filter">
                                                </div>
                                            </div>
                                            <span class="text_overflow" style="margin-right: 5px;">Full reference</span>
                                        </li>
                                        <li class="menu_item" data-id="basic"><i class="fa fa-star"></i>Most used tokens
                                        </li>
                                        <li class="menu_item" data-id="fullref"><i class="fa fa-database"></i>All tokens
                                        </li>
                                        <li class="menu_notice">Categories</li>
                                        <li class="menu_item" data-id="other"><i class="fa fa-dot-circle-o"></i>General
                                            tokens</li>
                                        <li class="menu_item" data-id="anchors"><i class="fa fa-anchor"></i>Anchors</li>
                                        <li class="menu_item" data-id="meta"><i class="fa fa-bolt"></i>Meta sequences</li>
                                        <li class="menu_item" data-id="quantifiers"><i
                                                class="fa fa-asterisk"></i>Quantifiers</li>
                                        <li class="menu_item" data-id="groups"><i class="fa fa-dot-circle-o"></i>Group
                                            constructs</li>
                                        <li class="menu_item" data-id="charclass"><i class="fa fa-th-large"></i>Character
                                            classes</li>
                                        <li class="menu_item" data-id="modifiers"><i class="fa fa-flag"></i>Flags/Modifiers
                                        </li>
                                        <li class="menu_item" data-id="subst"><i class="fa fa-scissors"></i>Substitution
                                        </li>
                                        <li class="menu_item" id="quickref_search"><i class="fa fa-search"></i>Search result
                                        </li>
                                    </ul>
                                </div>
                                <div id="second_menu" class="no_icon box_overflow_fix general_menu overflow_handler">
                                    <ul class="no_icon"></ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
        <div id="dimmer"></div>
        <div id="dimmer-popup"></div>
        <div id="match-tooltip" class="arrow-box monospace">
            <div id="tooltip-contents"></div>
            <div id="match-tooltip-tip" class="arrow-box-tip"></div>
        </div>

        <script src="${underscoreMinJsPath}" type="text/javascript"></script>
        <script src="${jqueryMinJsPath}" type="text/javascript"></script>
        <script src="${jqueryToolsJsPath}" type="text/javascript"></script>
        <script src="${generalRegex101JsPath}" type="text/javascript"></script>
        <script src="${colorParserRegex101JsPath}" type="text/javascript"></script>
        <script src="${explainerRegex101JsPath}" type="text/javascript"></script>
        <script src="${commonRegex101JsPath}" type="text/javascript"></script>
        <script src="${matcherRegex101JsPath}" type="text/javascript"></script>
        <script src="${javascriptRegex101JsPath}" type="text/javascript"></script>
        <script src="${pcreRegex101JsPath}" type="text/javascript"></script>
        <script src="${pcrelib16JsPath}" type="text/javascript"></script>
    </body>

    </html>
`;
}

function getMediaResource(context: vscode.ExtensionContext, webview: vscode.Webview, name: string) {
    let resource = vscode.Uri.file(path.join(context.extensionPath, 'media', name));
    resource = webview.asWebviewUri(resource);

    return resource;
}