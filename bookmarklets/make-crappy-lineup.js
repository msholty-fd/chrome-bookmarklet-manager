NodeList.prototype.forEach = Array.prototype.forEach;
document.querySelector('th.player-salary').click();
var positionTabs = document.querySelectorAll('button.player-list-position-tab')
var positions = positionTabs.forEach(function(position) {
    position.click();
    var players = document.querySelectorAll('button.player-add-button');
    for (var i = 5; i >= 0; i--) {
        players[i].click();
    };
});
