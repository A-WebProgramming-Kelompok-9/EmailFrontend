const path = require('path')
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/emailclient-vue/'
        : '/',
    css: {
        loaderOptions: {
            sass: {
                additionalData: `@import "@/assets/main.scss";`
            }
        }
    }
};