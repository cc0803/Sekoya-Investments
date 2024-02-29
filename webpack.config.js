let path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/js/app.js",
		geschichte: "./src/js/geschichte.js",
		invest: "./src/js/invest.js",
		unternehmen: "./src/js/company.js",
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
		new HtmlWebpackPlugin({
			template: "./src/html/invest.html",
			chunks: ["invest"],
			inject: true,
			filename: "invest.html",
		}),
		new HtmlWebpackPlugin({
			template: "./src/html/company.html",
			chunks: ["company"],
			inject: true,
			filename: "company.html",
		}),
	],
};
