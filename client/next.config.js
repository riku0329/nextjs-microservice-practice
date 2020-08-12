const withSass = require('@zeit/next-sass');

module.exports = {
  webpackDevMiddleware: (config) => {
    config.watchOptions.poll = 300;
    return config;
  },
};

module.exports = withSass({
  /* config options here */
});
