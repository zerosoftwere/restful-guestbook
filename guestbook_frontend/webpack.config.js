const path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src', 'main.jsx'),
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, 'dist')
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.js$/, loader: 'source-map-loader', exclude: /node_modules/, enforce: 'pre'}
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [path.join(__dirname, 'node_modules')]
    }
}