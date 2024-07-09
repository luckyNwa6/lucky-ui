# vi-button 炫酷按钮

## 运行项目

```shell
全局注册使用

import ViButton from "@luckynwa-lib/vi-button";
import '@luckynwa-lib/vi-button/dist/index.css'
Vue.use(ViButton);

按需使用
import ViButton from '@luckynwa-lib/vi-button'
import '@luckynwa-lib/vi-button/dist/index.css'
components: {
    ViButton
    },
  <div>
    <vi-button @click="test">默认</vi-button>
    <vi-button button-type="success">成功</vi-button>
    <vi-button button-type="info">消息</vi-button>
    <vi-button button-type="warning">警告</vi-button>
    <vi-button button-type="danger">危险</vi-button>
  </div>
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
