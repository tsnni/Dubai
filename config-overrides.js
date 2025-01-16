module.exports = {
  webpack: function (config, env) {
    // 修改或添加 Webpack 配置
    const svgRule = config.module.rules.find((rule) => rule.test && rule.test.test('.svg'));
    if (svgRule) {
      svgRule.use = [
        {
          loader: '@svgr/webpack',
          options: {
            throwIfNamespace: false,  // 禁用命名空间检查
          },
        },
      ];
    }
    return config;
  },
};
