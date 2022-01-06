
/**
 * Injects a util script into a Google Meet page
 */
function injectScript(file_path, tag = 'html', type = 'script', text = '') {
    let node = document.getElementsByTagName(tag)[0];
    let tag_type = type === 'link' ? 'link' : 'script';
    let script = document.createElement(tag_type);
    if (type === 'script') {
        script.setAttribute('type', 'text/javascript');
    } else if (type === 'module') {
        script.setAttribute('type', 'module');
    } else {
        script.setAttribute('rel', 'stylesheet');
        script.setAttribute('media', 'screen');

    }
    if (text === '') {
        script.setAttribute(tag_type === 'script' ? 'src' : 'href', file_path);
    } else {
        script.innerHTML = text;
    }
    node.appendChild(script);
}

injectScript(chrome.runtime.getURL('js/sort-users.js'));