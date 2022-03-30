const path = require("path");

module.exports = (env) => {
	return {
		mode: env.production ? "production": "development",
		devtool: env.production ? "source-map" : "inline-source-map",
		entry: {
			app: "./www/src/app.js"
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /(node_modules|bower_components)/,
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"]
					},
				},
				{
					test: /\.(css|less)$/,
					use: ["style-loader", "css-loader", "less-loader"],
				}
			],
		},
		resolve: {
			extensions: [".js", ".jsx"],
		},
		devServer: {
			port: 3000,
			hot: true,
			historyApiFallback: {
				rewrites: [
					{ from: /^\/.*/, to: "/index.html" },
				],
				verbose: true,
			},
			static: [
				{
					directory: path.resolve(__dirname, "www"),
					publicPath: "/",
				},
				{
					directory: path.resolve(__dirname, "www/dist"),
					publicPath: "/dist/",
				},
			],
			proxy: {
				"/api": {
					target: "http://127.0.0.1:5000",
					pathRewrite: { '^/api': '' }
				}
			},
		},
		output: {
			filename: "[name].js",
			publicPath: "/dist/",
			path: path.resolve(__dirname, "www/dist"),
			clean: true,
		},
	};
};
