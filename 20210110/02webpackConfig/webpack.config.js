var path  = require('path');

const HtmlWebpackPlugin  = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    // 入口
    entry:{
        //
        "main":"./src/main.js",
    },
    output:{
        path:path.resolve('./dist'),
        filename: 'build.js'
    },
    watch:true,
    module:{
        loaders:[
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            },
            {
                test:/\.(jpg|png|jpeg|gif|svg)$/,
                loader:'url-loader?limit = 3000'
            },
            {
                test:/\.less$/,
                loader:'style-loader!css-loader!less-loader'
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins:[
        // 插件的的执行顺序与元素由关
        new HtmlWebpackPlugin({
            template:'./src/index.html',//参照物
        }),
        new webpack.BannerPlugin('最终解释权在范国超这里')
    ],

}
