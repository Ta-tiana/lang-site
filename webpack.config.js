const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    //  publicPath: "/",
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // filename: "./index.html"
    }),

    new HtmlWebpackTagsPlugin({ tags: ['./assets/styles/styles.css'], append: true }),
    new CopyPlugin({
      patterns: [
        {
          from: './assets',
          to: './assets',
        },
    //  {
    //    from: './assets/styles/styles.css',
    //    to: './styles.css',
    //  },
      ],
    }),
  ],

  module: {
    rules: [
    {
      test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|otf|mp3|ogg|mp4)$/, // { test: /\.svg$/, use: 'svg-inline-loader' },
      loader: 'file-loader',
      options: {
        name: '[path][name].[ext]',
        context: 'public',
      },
    },
     { test: /\.s[ac]ss$/i, // { test: /\.scss$/,
       use: ['style-loader', 'css-loader', 'sass-loader']
     },
     { test: /\.(js)$/, use: 'babel-loader' }
    ]
  },

  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    open: true,
    compress: true,
    port: 8080,
  },
    resolve: {
      alias: {
        '@src': path.resolve(__dirname, 'src/'),
        '@assets': path.resolve(__dirname, './assets'),
      },
      extensions: ['.js'],
    },

  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
}
