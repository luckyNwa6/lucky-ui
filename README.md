# 小维的 UI 组件库

## 前言

本项目采用-->Pnpm（管理部 Node16）+rollup（构建组件）+VuePress（编写说明文档）

lucky 目录-->VuePress

test_vue 目录-->测试组件的效果

每个组件是单独的文件夹，最终打包上传到 npm 官网中，以供他人使用

## 常用指令

```shell
cd ./packages/vi-button
cd ./packages/vi-star        进入到button文件夹目录
cd ./packages/lucky             进入lucky文件夹
cd ../                          上一级
cd E:\LuckyWorkSpace\vueLib    直接去项目根目录

项目根目录可运行的指令
pnpm dev                        运行vuepress站点项目
pnpm build:button               打包button组件
pnpm build                      打包vuepress站点项目

pnpm i                          安装依赖包


```

## 上传组件

```shell
上传到npm,项目终端输入
得先进入要上传的那个组件的目录
npm whoami   查看是否有登陆过 err好几个就是没有
如果要上传的组件变了，版本记得也要改一下
淘宝镜像无法上传，先切换原来的，传完再改回去,一定要先改成原来的
npm config set registry https://registry.npmjs.org/      原
npm config set registry https://registry.npm.taobao.org   后
npm login   跳到浏览器那边登录一下    账号luckynwa 密码22..    邮箱1656213092@qq.com

npm whoami # Display npm username  查看状态，发现有名字就是成功了

npm那边也需要创建 组织对应luckynwa-lib，才能上传,有新版本该它即可

npm publish --access=public

package.json文件中
  "publishConfig": {
    "access": "public"
  },


```

## 补充

```shell
最少 Node.js v16.14 版本，然后输入下面指令即可安装
npm install -g pnpm

# 查看源
pnpm config get registry

# 切换公司远程仓库
pnpm config set registry http://192.168.6.13:8082/repository/npm_all/


# -S  默认写入dependencies
pnpm add -S [packageName]

# -D devDependencies
pnpm add -D [packageName]

# 移除依赖包
pnpm remove [packageName]

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

PNPM 中文官网：https://www.pnpm.cn/motivation


```
