/* const zlib = require("zlib");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const zopfli = require("@gfx/zopfli"); */

module.exports = {
     configureWebpack: {
        plugins: process.env.NODE_ENV === "production" ? [
            new DuplicatePackageCheckerPlugin(),
            new BundleAnalyzerPlugin(),
            new CompressionPlugin({
                compressionOptions: {
                    numiterations: 15,
                },
                algorithm(input, compressionOptions, callback) {
                    return zopfli.gzip(input, compressionOptions, callback);
                },
                minRatio: Number.MAX_SAFE_INTEGER
            }),
            new CompressionPlugin({
                filename: "[path][base].gz",
                algorithm: "gzip",
                minRatio: Number.MAX_SAFE_INTEGER
            }),
            new CompressionPlugin({
                filename: "[path][base].br",
                algorithm: "brotliCompress",
                compressionOptions: {
                    params: {
                        [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
                    },
                },
                minRatio: Number.MAX_SAFE_INTEGER
            }),
        ] : []
    }, 
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/styles/_variables.scss";`
            }
        }
    }
}
