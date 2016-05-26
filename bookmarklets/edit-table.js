var tableId = window.location.pathname.match(/\d{8}/)[0];
if (tableId) {
    window.location = '/e/Table/' + tableId + '/edit';
}
