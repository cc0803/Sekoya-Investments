let path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/js/app.js",
		geschichte: "./src/js/geschichte.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "[name].js",
	},
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				type: "asset/resource",
				generator: {
					filename: "images/[name].[hash][ext]",
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: "home.html",
			chunks: ["app"],
			inject: true,
			template: "src/html/home.html",
		}),
		new HtmlWebpackPlugin({
			template: "./src/html/geschichte.html",
			chunks: ["geschichte"],
			inject: true,
			filename: "geschichte.html",
		}),
	],
};
