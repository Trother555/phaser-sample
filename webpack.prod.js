const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './src/main.ts'
    },
    
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
   
    mode: 'production',

    plugins: [
        // here we clean the destination folder
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
 
        // here we copy some files to destination folder.
        // which files?
        new CopyPlugin({
            patterns: [
                { 
                    // src/index.html
                    from: 'index.html',
                    context: 'src/'
                },
                {
                    // every file inside src/assets folder
                    from: 'assets/*',
                    context: 'src/'
                }
            ]
        })
    ],

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
