const path = require("path")

const toPath = (_path) => path.join(process.cwd(), _path)

module.exports = {
  stories: ["../packages/**/stories/*.stories.tsx"],
  // addons: [
  //   "storybook-addon-performance/register",
  //   "@storybook/addon-a11y",
  //   "@storybook/addon-toolbars",
  // ],
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async (config) => {

    // Make whatever fine-grained changes you need
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
      include: path.resolve(__dirname, '../node_modules/antd'),
    });

    config.module.rules.push({
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
        include: [
            path.join(__dirname, '../node_modules/@salesforce/design-system-react'),
        ]
    })

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
        },
      },
    }
  },
}
