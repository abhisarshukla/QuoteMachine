const path = require("path");

module.exports = {
  context: __dirname,
  module: {
    rules: [
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        include: path.resolve(__dirname, "public/icons"),
        type: "asset/resource",
      },
      {
        test: /\.json$/i,
        include: path.resolve(__dirname, "public/data"),
        type: "json",
        parser: {
          parse: JSON.parse,
        },
      },
    ],
  },
};
