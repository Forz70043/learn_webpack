//WEBPACK PLUGIN added from npm
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

const path = require('path');

module.exports = {
  //Define Entry point
    entry: {
        main: path.resolve(__dirname, './src/app.js'),
    },
    //Define where output bundle
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'deploy')
    },
    //Just for development, hot reload
    devServer: {
      static: { directory: path.join(__dirname, 'deploy')},
      //contentBase: './deploy',
      open: true,
      port: process.env.PORT || 9000
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
              //Used for transpling from ES6 to ES5, for old browser
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
          { //Loader for .css file
            test: /\.css$/, 
            use: ["style-loader", "css-loader"] 
          },
          { //Loader for image 
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
          },
          
        ]
    },
    plugins: [
        //Put title into HTML page
        new HtmlWebpackPlugin({
          title: "City Air Quality",
        }),
        //.env VARS
        new Dotenv()
    ],
};
