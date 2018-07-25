module.export={
    entry:'./app.js',
    output:{
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/.\js?/,
                loader:'babel-loader',
                exclude:/node_modules/
            }
        ]
    },
    optimization: {
        // We no not want to minimize our code.
        minimize: false
    }
}