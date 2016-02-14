var webpack = require('webpack');
var merge = require('webpack-merge');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var autoprefixer = require('autoprefixer');

const TARGET = process.env.npm_lifecycle_event;
console.log("target event is " + TARGET);

var common = {
  cache: true,
  debug: true,
  entry: './src/script/index.jsx',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    filename: 'index.js',
    sourceMapFilename: '[file].map'
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      loaders: ['babel'],
      exclude: /(node_modules|bower_components)/
    }, {
      test: /\.css$/,
      loaders: ['style', 'css']
    }, {
      test: /\.scss$/,
      loaders: ['style', 'css', 'postcss', 'sass']
    }, {
      test: /\.less$/,
      loaders: ['style', 'css', 'less']
    }, {
      test: /\.woff$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff&name=[path][name].[ext]"
    }, {
      test: /\.woff2$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff2&name=[path][name].[ext]"
    }, {
      test: /\.(eot|ttf|svg|gif|png)$/,
      loader: "file-loader"
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  postcss: function() {
    return [autoprefixer({
      browsers: ['last 3 versions']
    })];
  }
};

if (TARGET === 'dev' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true
    },
    output: {
      publicPath: 'http://localhost:8090/assets'
    }
  });
}

if (TARGET === 'build') {
  module.exports = merge(common, {
    devtool: 'source-map',
    output: {
      path: './dist'
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Webpack-react',
        template: 'index-template.html',
        inject: 'body'
      })
    ]
  });
}
