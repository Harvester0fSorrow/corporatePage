function getRootUrl() {
    return 'api/Home';
}

const HomeApi = {
    getHomeContent: function getHomeContent(cb) {
        var url = '{root}'
                      .replace('{root}', getRootUrl());
        $.get(url, cb);
    },
};

module.exports = HomeApi;
