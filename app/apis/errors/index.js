function getRootUrl() {
    return 'api/Errors';
}

const ErrorsApi = {
    getPageNotFoundError: function getPageNotFoundError(cb) {
        var url = '{root}/pageNotFoundError'
                      .replace('{root}', getRootUrl());
        $.get(url, cb);
    },
};

module.exports = ErrorsApi;
