var tableId = window.location.pathname.match(/\d{8}/);
if (tableId) {
    window.location = '/p/AdminTableManagement?copyTableId=' + tableId;
}
