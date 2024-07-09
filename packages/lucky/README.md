# 业务组件库

构建独立，高性能，可扩展的业务组件库。

## 环境配置

```shell
# 安装 `pnpm` 工具，详见 https://www.pnpm.cn/installation
npm install -g pnpm

# 查看源
pnpm config get registry

# 切换公司远程仓库
pnpm config set registry http://192.168.6.13:8082/repository/npm_all/

# 安装依赖
pnpm install
```

## 运行项目

```shell
# 运行 `vue-press` 文档站点
pnpm docs:dev

# 打包 `vue-press` 文档站点
pnpm docs:build

# 打包组件库组件 esm 文件
pnpm build
```

## 运行子项目

进入子包 `packages/[xx-xx]` 文件夹，执行对应的 `package.json` 文件的 `script` 命令。

```shell
# 进入子包文件夹，例如下拉树组件
cd ./packages/vc-tree-select

# 打包组件
pnpm build
```

## 目录介绍

```javaScript
├── packages/                       # 子包文件夹
│   ├── demo/                       # vuePress 文档站点目录
│   ├── tools/                      # 公共类工具依赖包
│   ├── vc-list/                    # 虚拟列表组件
│   ├── vc-scrollbar/               # 虚拟滚动条组件
├── .editorconfig                   # 编辑器格式配置
├── .eslintrc.js                    # eslint 格式化配置
├── .gitignore                      # 代码提交忽略目录
├── .npmrc                          # 依赖的远程仓库配置
├── .prettierrc                     # 代码格式化配置
├── jsconfig.json                   # `JS` 语言支持
├── package.json                    # 包信息
├── pnpm-lock.yaml                  # 依赖包版本锁定
├── pnpm-workspace.yaml             # 子包仓库配置
├── README.md                       # 说明文档
```

## `PNPM` 常见命令说明

项目包目录下安装依赖

```shell
# -S  默认写入dependencies
pnpm add -S [packageName]

# -D devDependencies
pnpm add -D [packageName]

# 全局安装
pnpm add -g [packageName]

# 移除依赖包
pnpm remove [packageName]

# 移除全局依赖包
pnpm remove [packageName] --global

# 子包增加依赖 dependencies
pnpm add [packageName] --filter [子包名称]

# 子包增加依赖 devDependencies
pnpm add [packageName] -D --filter [子包名称]
```

子包目录下安装依赖

```shell
# -S  默认写入dependencies
pnpm add -S [packageName]

# -D devDependencies
pnpm add -D [packageName]

# 移除依赖包
pnpm remove [packageName]
```

## 参考链接

1. PNPM 中文官网：[https://www.pnpm.cn/filtering](https://www.pnpm.cn/filtering);
