let gh_pages = require("gh-pages");

gh_pages.publish('build', {
  branch: 'master',
  repo: 'https://github.com/brunormferreira/brunormferreira.github.io',
}, callback);

function callback(error) {
  if (error) throw new Error(error);
  console.log('Successfull deployment');
};
