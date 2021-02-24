module.exports = {
  stories: ["../packages/**/*.stories.@(js|jsx)"],
  addons: [
    {
      name: "@storybook/addon-storysource",
      options: {
        loaderOptions: {
          injectStoryParameters: true,
        },
      },
    },
    "@storybook/addon-docs",
  ],
};
