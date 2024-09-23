const path = require('path');

module.exports = {
  entry: './src/index.js', // The main file for your project
  output: {
    filename: 'bundle.js', // Name of the bundled file
    path: path.resolve(__dirname, 'dist'), // Where to store the bundled file
  },
};
