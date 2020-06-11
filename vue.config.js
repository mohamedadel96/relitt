// var path = require('path')
// var PrerenderSpaPlugin = require('prerender-spa-plugin')


module.exports = {
  // devServer: {
  //   open: process.platform === 'darwin',
  //   host: '0.0.0.0',
  //   port: 8085, // CHANGE YOUR PORT HERE!
  //   https: true,
  //   hotOnly: false,
  // },
  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
      ],
      useRenderEvent: true,
      headless: true,
      // postProcess: route => {
      //   // Defer scripts and tell Vue it's been server rendered to trigger hydration
      //   route.html = route.html
      //     .replace(/<script (.*?)>/g, '<script $1 defer>')
      //     .replace('id="app"', 'id="app" data-server-rendered="true"');
      //   return route;
      // }
    }
  },

  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/styles/_variables.scss";`
      }
    }
  }
};

