# vi-mouse 鼠标跟随特效

## 运行项目

```shell
# 打包组件库组件所有文件
pnpm build

# 打包组件库组件 `browser` 文件
pnpm build:browser

# 打包组件库组件 `esm` 文件
pnpm build:es

# 打包组件库组件 `umd` 文件
pnpm build:umd

# 监听 `esm` 文件修改
pnpm dev

# 格式化
pnpm lint
```

## 目录介绍

```javaScript
├── build/                          # 打包配置
│   ├── rollup.config.base.js       # rollup basic config
│   ├── rollup.config.browser.js    # rollup unpkg
│   ├── rollup.config.es.js         # rollup esm
│   └── rollup.config.umd.js        # rollup umd
├── dist/                           # 打包输出路径
├── src/                            # 源代码
├── .gitignore                      # 代码提交忽略目录
├── index.js                        # 入口文件
├── package.json                    # 包信息
├── README.md                       # 说明文档
```

## License

[MIT](http://opensource.org/licenses/MIT)
