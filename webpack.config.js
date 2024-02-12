let path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/js/app.js",
		geschichte: "src/js/geschichte.js",
		navigation: "addNavigation.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.js",
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
			template: "src/html/home.html",
		}),
		new HtmlWebpackPlugin({
			template: "./src/html/geschichte.html",
			inject: true,
			chunks: ["geschichte"],
			filename: "contacts.html",
		}),
	],
};
