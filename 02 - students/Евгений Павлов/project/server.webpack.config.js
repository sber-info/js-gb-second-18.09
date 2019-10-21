const path = require ('path')
const nodeExternals = require ('webpack-node-externals')
const copyPlugin = require ('copy-webpack-plugin')

module.exports = {
    entry: {
        main: path.resolve (__dirname, 'src', 'server', 'server.js')
    },
    output: {
        path: path.resolve (__dirname, 'dist'),
        publicPath: '/',
        filename: 'server/[name].js'
    },
    target: 'node',
    externals: [nodeExternals ()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: '/node_modules/',
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new copyPlugin ([
            {
                from: 'src/server/db',
                to: 'server/db/[name].[ext]',
                toType: 'template'
            }
        ])
    ]
}