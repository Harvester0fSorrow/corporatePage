function getRootUrl() {
    return 'api/About';
}

const AboutApi = {
    getAboutContent: function getAboutContent(cb) {
        var url = '{root}'
                      .replace('{root}', getRootUrl());
        $.get(url, cb);
    },
};

module.exports = AboutApi;
