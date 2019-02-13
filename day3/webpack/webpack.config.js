const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    // 定义生产环境
    mode: "development",
    // 入口
    entry: './src/index.js',
    // 出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    // 加载器，帮我处理非JS类型的文件(ES6)
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    // presets: ['@babel/preset-env']
                    plugins: ["transform-react-jsx"]
                }
            }
        }]
    },
    // 插件
    plugins: [
        new UglifyJsPlugin()
    ]
};