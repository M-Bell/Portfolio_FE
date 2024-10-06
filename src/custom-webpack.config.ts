
import { EnvironmentPlugin } from 'webpack';
// const Dotenv = require('dotenv-webpack');
module.exports = {
  plugins: [new EnvironmentPlugin(['BACKEND_URL', 'MESSAGING_TOKEN', 'EMAIL_TO', 'EMAIL_FROM'])],
};