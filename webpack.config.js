var getConfig = require('hjs-webpack');

module.exports = getConfig({
    in : 'src/js/index.js',

    out: 'public',

    isDev : true,

    output : {
        hash: false
    },

    devServer: {
      hot: false,
      historyApiFallback: true,
      info: true
    },

    clearBeforeBuild: false,

     html: function (data) {
        // here we return an object where each key is a file to be generated
        return {
          'index.html': [
            '<html>',
              '<head>',
                  '<meta charset="utf-8">',
                  '<meta name="viewport" content="width=device-width, initial-scale=1">',
                  '<title>Blog</title>',
                '<link href="' + data.css + '" rel="stylesheet" type="text/css" />',
                '<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">',
              '</head>',
              '<body>',
                '<div class="container container-main" id="root"></div>',
                '<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>',
                '<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>',
                '<script src="' + data.main + '"></script>',
              '</body>',
            '</html>'
          ].join('')
        }
      }
});