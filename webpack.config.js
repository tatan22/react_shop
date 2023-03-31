const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

<<<<<<< HEAD

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:  'bundle.js',
        publicPath: '/',
    },
    mode: 'development',
    resolve:{
        extensions: ['.js','.jsx'],

    },
    module: {
        rules: [
           {
            test:  /\.js$|.jsx$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
           },
           {
            test: /\.html$/,
            use: [
                {
                  loader: 'html-loader'
                }
            ]
           },
           {
            test: /\.(css|scss)$/,
            use:[
                "style-loader",
                "css-loader",
                "sass-loader",
            ],
           }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
    ],
    devServer: {
        allowedHosts: path.join(__dirname, 'dist'), // contentBase corresponde a webpack 4  
        // ahora en Webpack 5 se usa allowedHosts
        // créditos al compañero Fabian Rivera Restrepo
        port: 3005,
        historyApiFallback: true,
        compress: true,
    }
   
}
=======
module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/'
	},
	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: [
					{
						loader: 'html-loader'
					}
				]
			},
			{
				test: /\.(css|scss)$/,
				use: [
					"style-loader",
					"css-loader",
					"sass-loader",
				],
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
	],
	devServer: {
		historyApiFallback: true,
	}
}
>>>>>>> 5c68a278acbabd781b72eeb9ac23c04a10359c94
