let path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: {
		app: "./src/js/app.js",
		geschichte: "./src/js/geschichte.js",
		invest: "./src/js/invest.js",
		company: "./src/js/company.js",
		impressum: "./src/js/impressum.js",
		article: "./src/js/article.js",
		login: "./src/js/login.js",
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
		new HtmlWebpackPlugin({
			template: "./src/html/impressum.html",
			chunks: ["impressum"],
			inject: true,
			filename: "impressum.html",
		}),
		new HtmlWebpackPlugin({
			template: "./src/html/article.html",
			chunks: ["article"],
			incject: true,
			filename: "article.html",
		}),
		new HtmlWebpackPlugin({
			template: "./src/html/login.html",
			chunks: ["login"],
			incject: true,
			filename: "login.html",
		}),
	],
};
