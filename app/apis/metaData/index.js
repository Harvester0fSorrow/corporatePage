function getRootUrl() {
    return 'api/MetaData';
}

const MetaDataApi = {
    getMenu: function getMenu(cb) {
        var url = '{root}/menu'
                      .replace('{root}', getRootUrl());
        $.get(url, cb);
    }
};

module.exports = MetaDataApi;
