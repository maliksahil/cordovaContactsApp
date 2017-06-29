module.exports = {
    entry: "./www/js/index",
    output: { filename: "./www/dist/bundle.js"},
    module: {
        loaders: [
            {
                test: /ts$/,                
                loader: "awesome-typescript-loader", 
                options: {
                    configFileName: 'tsconfig.webpack.json'
                }
            },
            {
                test: /html$/,
                loader: "html-loader"
            },
            {
                test: /css$/,
                loader: "css-loader"
            }                        
        ]
    },
    resolve: {
        extensions: ["", ".ts", ".js", ".html", ".css"]
    },
    devtool: "#inline-source-map"
}