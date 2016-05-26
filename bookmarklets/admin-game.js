var gameId = window.location.pathname.match(/\d{5}/)[0];
if (gameId) {
    window.location = '/e/Game/' + gameId + '/admin';
}
