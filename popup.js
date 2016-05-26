document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.bookmarklet');
    _.each(buttons, function(button) {
        button.addEventListener('click', function() {
            chrome.tabs.executeScript(null, { file: 'bookmarklets/' + button.id + '.js' });
        });
    });
});

var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('node_modules/bootstrap/dist/css/bootstrap.css');
(document.head||document.documentElement).appendChild(style);

var style = document.createElement('link');
style.rel = 'stylesheet';
style.type = 'text/css';
style.href = chrome.extension.getURL('popup.css');
(document.head||document.documentElement).appendChild(style);
