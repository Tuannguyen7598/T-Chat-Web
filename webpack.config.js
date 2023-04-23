/* eslint-disable @typescript-eslint/no-var-requires */
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
// const MonacoWebpackPlugin = require("monaco-editor-webpack-plugin");

module.exports = (env, argv) => {
    const webpackConfig = {
        entry: {
            // webpack will complain with `Field 'browser' doesn't contain a valid alias configuration` if `./` is missing in the path
            app: './src/index.tsx'
        },

        output: {

            // bug in NodeJs@17: https://github.com/webpack/webpack/issues/14532
            hashFunction: "xxhash64"
        },

        resolve: {
            extensions: [".ts", ".tsx", ".js", ".json", ".css", ".jsx"],
            // alias: {
            //     process: "process/browser",
            // },
            fallback: {
                path: false,
            },
        },

        plugins: [
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: __dirname + "/src/index.html",
            }),
            new CopyWebpackPlugin({
                patterns: [{ from: "assets/**/*" }],
            }),

            argv.mode === "development"
                ? new webpack.DefinePlugin({
                    SERVER_API_ENDPOINT: env.SERVER_API_ENDPOINT !== undefined ? `"${env.SERVER_API_ENDPOINT}"` : '"http://localhost:3000/"',
                    SERVER_SIO_ENDPOINT: env.SERVER_SIO_ENDPOINT !== undefined ? `"${env.SERVER_SIO_ENDPOINT}"` : '"http://localhost:3000/"',
                    BUILD_DATETIMESTAMP: `"${new Date().toLocaleString()}"`,
                    BUILD_VERSION: `"1.0.0 Release Candidate"`,
                    PEERJS_PORT: 443,
                })
                : new webpack.DefinePlugin({
                    SERVER_API_ENDPOINT: env.SERVER_API_ENDPOINT !== undefined ? `"${env.SERVER_API_ENDPOINT}"` : '"/api/"',
                    SERVER_SIO_ENDPOINT: env.SERVER_SIO_ENDPOINT !== undefined ? `"${env.SERVER_SIO_ENDPOINT}"` : '"/"',
                    BUILD_DATETIMESTAMP: `"${new Date().toLocaleString()}"`,
                    BUILD_VERSION: `"1.0.0 Release Candidate"`,
                    PEERJS_PORT: 443,
                }),

            // TODO: https://github.com/vfile/vfile/issues/38#issuecomment-640479137
            // new webpack.ProvidePlugin({
            //     process: "process/browser",
            // }),
            // new MonacoWebpackPlugin({
            //     features: ["!gotoSymbol"],
            //     languages: ["json"],
            // }),
            new MiniCssExtractPlugin({
                filename: "[name].[fullhash].css",
                chunkFilename: "[id].[fullhash].css",
            }),
        ],

        module: {
            rules: [
                {
                    // Exclude .test.ts and .test.tsx from being bundled
                    test: /^((?!\.test\.ts).)*\.tsx?$/,
                    loader: "ts-loader",
                    options: { allowTsInNodeModules: true }
                },
                // {
                //     // All output ".js' files will have sourcemaps re-processed by 'source-map-loader".
                //     enforce: "pre",
                //     test: /\.(jsx?|tsx?)$/,
                //     loader: "source-map-loader",
                // },
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        // MiniCssExtractPlugin.loader,
                        argv.mode === "development" ? { loader: "style-loader" } : { loader: MiniCssExtractPlugin.loader, options: { publicPath: "" } },

                        // translates CSS into CommonJS modules. It is recommended to combine it with MiniCssExtractPlugin
                        "css-loader",
                        // transforming CSS, e.g. adding vendor prefixes (https://postcss.org/).
                        {
                            loader: "postcss-loader",
                            options: {
                                postcssOptions: {
                                    plugins: ["precss", "autoprefixer"],
                                },
                            },
                        },
                        // compiles Sass to CSS
                        "sass-loader",
                    ],
                },

                // We don't embed images and svgs.
                // {
                //     test: /\.(png|jpg)$/,
                //     use: ["url-loader"],
                // },
                // {
                //     test: /\.svg/,
                //     loader: "file-loader",
                // },
            ],
        },

        stats: {
        //     warningsFilter: [/Failed to parse source map/],
            errorDetails: true
        },
    };

    if (argv.mode === "development")
        return {
            ...webpackConfig,

            devtool: "source-map",
            devServer: {
                // contentBase: "./dist",
                hot: true,
                compress: true,
                historyApiFallback: true,
            },
        };
    
    return webpackConfig;
};
