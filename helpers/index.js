const nunjucks = require('electron-nunjucks');

const HelperConfig = (app) => {
    nunjucks.install(app, {
        path: '/home/index.html',
        //other options here...
        dir: './pages'
    });
    
}

module.exports = {HelperConfig };