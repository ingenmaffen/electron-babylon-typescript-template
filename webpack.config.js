const path = require("path");

module.exports = {
  entry: "./game.ts",
  module: {
    rules: [
        {
            test: /\.ts$/,
            use: [{
                loader: 'ts-loader',
                options: {
                    configFile: "tsconfig.webpack.json"
                }
            }],
            exclude: /node_modules/
        }
    ]
  },
  output: {
    filename: "game.js",
    path: path.resolve(__dirname, "out", "game"),
  },
};