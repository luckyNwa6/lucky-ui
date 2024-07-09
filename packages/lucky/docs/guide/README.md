# 开发指南


## pnpm安装

最少 Node.js v16.14 版本
```shell
安装指令：npm install -g pnpm 

推荐使用 pnpm 的方式安装，pnpm 具有 yarn 优于 npm 的所有优点
1.安全：与Yarn一样，pnpm有一个特殊文件，其中包含所有已安装包的校验和，用于在执行其代码之前验证每个已安装包的完整性。
2.离线模式：pnpm将所有下载的包tarball保存在本地注册表镜像中。当包在本地可用时，它从不发出请求。使用该--offline参数，可以完全禁止HTTP请求。
3.速度：pnpm不仅比npm快，而且比Yarn快。无论是冷缓存还是热缓存，它都比Yarn快。Yarn从缓存中复制文件，而pnpm只是从全局存储中链接它们。
```

## 组件安装

```shell

## 组件
npm install @luckynwa-lib/vi-button


```
