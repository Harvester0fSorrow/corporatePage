import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default () => ({
  entry: [path.join(__dirname, 'app/app.js')],
  output: {
    path: path.join(__dirname, '../nodeApi/dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
  ],
  module : {
    rules : [
      {
        test: /\.jsx?$/,
		exclude: /node_modules/,
        include: path.join(__dirname, 'app'),
        use: [
            {
                loader: 'babel-loader',
                options: {
                    babelrc: false,
                    presets: [
                        ['es2015', { modules: false }],
                        'react'
                    ],
                }
            }
        ]
      },
      {
         test: /\.(css|scss|sass)$/,
         use: ExtractTextPlugin.extract({
             loader: 'css-loader!sass-loader'
         })
      }
    ]
  }
});
