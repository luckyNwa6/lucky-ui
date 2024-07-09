const demoBlockContainers = require("./common/containers");
const { path } = require("@vuepress/utils");

module.exports = (options = {}) => {
  options = Object.assign(
    {
      components: {},
      componentsDir: null,
      componentsPatterns: ["**/*.vue", "**/*.tsx", '**/*.jsx'],
      getComponentName: (filename) =>
        path.trimExt(filename.replace(/\/|\\/g, "-")),
    },
    options
  );

  return {
    name: "vuepress-plugin-demo-block-vue",
    extendMarkdown: (md) => {
      md.use(demoBlockContainers(options));
    },
  };
};
