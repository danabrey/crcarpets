var Encore = require('@symfony/webpack-encore');

Encore
    .setOutputPath('public/build/')
    .setPublicPath('/build')
    .addEntry('app', './assets/js/app.js')

    .splitEntryChunks()
    .enableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())
    .enableSassLoader()

    // Copy image assets
    .copyFiles({
        from: './assets/images',
        to: 'images/[path][name].[ext]',
        pattern: /\.(gif|png|jpg|jpeg)$/
    })
;

module.exports = Encore.getWebpackConfig();
