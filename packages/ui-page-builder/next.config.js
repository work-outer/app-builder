const path = require("path")

const bundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: !!process.env.BUNDLE_ANALYZE,
})

module.exports = 
  // bundleAnalyzer(
  {
    images: {
      domains: ['cdn.builder.io'],
    },
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            // this will allow site to be framed under builder.io for wysiwyg editing
            {
              key: 'Content-Security-Policy',
              value: 'frame-ancestors https://*.builder.io https://builder.io',
            },
          ],
        },
      ]
    },
    env: {
      // expose env to the browser
      BUILDER_PUBLIC_KEY: process.env.BUILDER_PUBLIC_KEY,
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Note: we provide webpack above so you should not `require` it
      // Perform customizations to webpack config
      config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//))

      //Make whatever fine-grained changes you need
      config.module.rules.push({
        test: /\.less$/,
        use: [
          { 
            loader: 'style-loader', 
          }, 
          { 
            loader: 'css-loader', 
            options: {
              importLoaders: 1,
              modules: true,
            }
          }, 
          { 
            loader: 'less-loader',
            options: {
              lessOptions: { // 如果使用less-loader@5，请移除 lessOptions 这一级直接配置选项。
                javascriptEnabled: true,
              },
            },
          },
        ],
        include: [path.resolve(__dirname, '../../node_modules/antd'), path.resolve(__dirname, '../../node_modules/@ant-design/')],
        // include: path.resolve(__dirname, '../node_modules/')
      });

      // config.resolve.alias['antd/'] = path.resolve(__dirname, '../../node_modules/antd/es');
      // config.resolve.alias['antd/lib'] = path.resolve(__dirname, '../../node_modules/antd/es');
      // config.resolve.alias['@ant-design/pro-provider'] = path.resolve(__dirname, '../../node_modules/@ant-design/pro-provider/es');
      // config.resolve.alias['@ant-design/pro-provider/lib'] = path.resolve(__dirname, '../../node_modules/@ant-design/pro-provider/es');
      
      // Important: return the modified config
      return config
    },
  }
// )
