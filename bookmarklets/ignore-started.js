if (window.location.href.indexOf('?') === -1) {
    window.location = window.location + '?ignoreStarted';
} else {
    window.location = window.location + '&ignoreStarted';
}
