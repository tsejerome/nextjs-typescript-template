const path = require('path');

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: [
      'assets.example.com',
      'jpt-staging-playground.s3-ap-southeast-1.amazonaws.com',
    ],
  },
};
