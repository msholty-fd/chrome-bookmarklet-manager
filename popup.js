document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('.bookmarklet');
    _.each(buttons, function(button) {
        button.addEventListener('click', function() {
            chrome.tabs.executeScript(null, { file: 'bookmarklets/' + button.id + '.js' });
        });
    });
});
