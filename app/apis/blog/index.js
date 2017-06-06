function getRootUrl() {
    return 'api/Blog';
}

const BlogApi = {
    getBlogContent: function getBlogContent(cb) {
        var url = '{root}'
                      .replace('{root}', getRootUrl());
        $.get(url, cb);
    },
};

module.exports = BlogApi;
