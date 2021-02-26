// const withPlugins = require('next-compose-plugins')
// const withTM = require('next-transpile-modules')(['browser-nativefs'])
// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.BUNDLE_VISUALIZE == 1 || process.env.ANALYZE == 'true',
// })

// // const withCss = require('@zeit/next-css')

// // if(typeof require !== 'undefined'){
// //   require.extensions['.css']=file=>{}
// // }

// const withLess = require('@zeit/next-less')
// const lessToJS = require('less-vars-to-js')
// const fs = require('fs')
// const path = require('path')

// // Where your antd-custom.less file lives
// const themeVariables = lessToJS(
//   fs.readFileSync(path.resolve(__dirname, './src/assets/antd-custom.less'), 'utf8')
// )

// module.exports = withPlugins([[withBundleAnalyzer, {}], [withTM], [withLess, {
//   // lessLoaderOptions: {
//   //   lessOptions:{
//   //     javascriptEnabled: true
//   //   }
//   // },

//   lessLoaderOptions: {
//     javascriptEnabled: true,
//     modifyVars: themeVariables, // make your antd custom effective
//   },
//   webpack: (config, { isServer }) => {
//     if (isServer) {
//       console.log("==config===", config.module.rules);
//       const rule = config.module.rules.find((r)=>{
//         console.log("==item=1=", r.test && r.test.toString() && r.test.toString());
//         console.log("==item=2=", r.test && r.test.toString() && r.test.toString()=="/\\.less$/");
//         return r.test && r.test.toString() === "/\\.less$/"
//       });
//       console.log("==rule==a=", rule);
//       rule.include = [path.resolve(__dirname, '../../node_modules/antd'), path.resolve(__dirname, '../../node_modules/@ant-design/')];
//       console.log("==rule==b=", rule);
//       console.log("==config===", config.module.rules);
//       // const antStyles = /antd\/.*?\/style.*?/
//       // const origExternals = [...config.externals]
//       // config.externals = [
//       //   (context, request, callback) => {
//       //     if (request.match(antStyles)) return callback()
//       //     if (typeof origExternals[0] === 'function') {
//       //       origExternals[0](context, request, callback)
//       //     } else {
//       //       callback()
//       //     }
//       //   },
//       //   ...(typeof origExternals[0] === 'function' ? [] : origExternals),
//       // ]

//       // config.module.rules.unshift({
//       //   test: antStyles,
//       //   use: 'null-loader',
//       //   include: [path.resolve(__dirname, '../node_modules/antd'), path.resolve(__dirname, '../node_modules/@ant-design/')],
//       // })

//       // config.module.rules.unshift({
//       //   test: /\.css$/,
//       //   use: [
//       //     { 
//       //       loader: 'style-loader', 
//       //     }, 
//       //     { 
//       //       loader: 'css-loader', 
//       //       options: {
//       //         importLoaders: 1,
//       //         modules: true,
//       //       }
//       //     }, 
//       //     { 
//       //       loader: 'less-loader',
//       //       options: {
//       //         lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
//       //           javascriptEnabled: true,
//       //         },
//       //       },
//       //     },
//       //   ],
//       //   include: [path.resolve(__dirname, 'node_modules/react-color-picker')],
//       // })
//     }
//     return config
//   },
// }]])
const withAntdLess = require('next-plugin-antd-less');

module.exports = withAntdLess({
  // optional
  modifyVars: { '@primary-color': '#04f' },
  // optional
  // lessVarsFilePath: './src/styles/variables.less',
  // optional https://github.com/webpack-contrib/css-loader#object
  cssLoaderOptions: {},
  
  // Other Config Here...

  webpack(config) {
    return config;
  },
});