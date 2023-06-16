module.exports = {
    module: {
      rules: [
        {
         test: /\.wav/,
          use: [
            {
              loader: 'url-loader',
              options: {
                // limit: 8192
              }
            }
          ]
        }
      ]
    }
  }