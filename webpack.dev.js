const path = require('path')

module.exports = {
    entry: {
        app: './src/main.ts'
    },
    
    output: {
        filename: 'main.js',
    },
   
    mode: 'development',
    
    devtool: 'inline-source-map',
   
    devServer: {
        static: './src',
        hot: true
    },

    resolve: {
        extensions: ['.tx', '.tsx', '.js']
    },

    // loader to handle TypeScript file type
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }
}
