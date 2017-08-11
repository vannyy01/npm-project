const path = require('path');

module.exports = {
    entry: './src/App.js',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [{test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.css$/, loader: ['style-loader', 'css-loader']}
        ]
    }
};