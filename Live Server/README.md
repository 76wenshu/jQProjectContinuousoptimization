
# 本地根据 jQuery 旧项目（静态资源） 实现时时热更新

痛点背景：

    1)现有前端项目启动的时候是IDEA Maven 起服务，前端开发过程中不能够时时的实现热更新，
    2)编辑一小块代码之后，需要IDEA重新编译打包。
    3)每次本地部署浪费时间在10分钟左右，
    4）浏览器清除缓存之后重新调试页面（在线工作台还需浪费10分钟）。

解决基础：Live Server + child_process'  结合出发本地服务实现热更新。解决上述痛点问题


在这里希望大家有开源精神，虽然不能给开源者提供资金的帮助，也希望大家在使用[live-server git地址](https://github.com/tapio/live-server)时候给项目点一个ster支持一下开源团队

## 第一种方式

全局安装依赖

npm -g install live-server

通过VisCode 安装live-sever插件 

好处：方便快捷

弊端：1）只能启动单页面HTML文件
     2）配置内容不可配置，需独立修改
VisCode setting 其中的陪孩子我呢就爱你
```json
 "liveServer.settings.port": 8089, //设置本地服务的端口号
  "liveServer.settings.root": "/", //设置根目录，也就是打开的文件会在该目录下找
  "liveServer.settings.CustomBrowser": "chrome", //设置默认打开的浏览器
  "liveServer.settings.AdvanceCustomBrowserCmdLine": "chrome --incognito --remote-debugging-port=9222",
  "liveServer.settings.NoBrowser": false,
  "liveServer.settings.ignoredFiles": [//设置忽略的文件
      ".vscode/**",
      "**/*.scss",
      "**/*.sass"
  ]

```

## 第二种方式

通过node 执行 nodejs脚本文件执行live-server命令行运行

profile.js 起服务的配置文件


```
    --port=NUMBER` - 选择要使用的端口，默认值：PORT env var或8080
    --host=ADDRESS` - 选择要绑定的主机地址，默认值：IP env var或0.0.0.0（“任意地址”）
    --no-browser` - 禁止自动Web浏览器启动
    --browser=BROWSER` - 指定使用浏览器而不是系统默认值
    --quiet | -q` - 禁止记录
    --verbose | -V` - 更多日志记录（记录所有请求，显示所有侦听的IPv4接口等）
    --open=PATH` - 启动浏览器到PATH而不是服务器root
    --watch=PATH` - 用逗号分隔的路径来专门监视变化（默认值：观看所有内容）
    --ignore=PATH`- 要忽略的逗号分隔的路径字符串（[anymatch](https://github.com/es128/anymatch) -compatible definition）
    --ignorePattern=RGXP`-文件的正则表达式忽略（即`.*\.jade`）（**不推荐使用**赞成`--ignore`）
    --middleware=PATH` - 导出要添加的中间件功能的.js文件的路径; 可以是没有路径的名称，也可以是引用`middleware`文件夹中捆绑的中间件的扩展名
    --entry-file=PATH` - 提供此文件（服务器根目录）代替丢失的文件（对单页应用程序有用）
    --mount=ROUTE:PATH` - 在定义的路线下提供路径内容（可能有多个定义）
    --spa` - 将请求从/ abc转换为/＃/ abc（方便单页应用）
    --wait=MILLISECONDS` - （默认100ms）等待所有更改，然后重新加载
    --htpasswd=PATH` - 启用期待位于PATH的htpasswd文件的http-auth
    --cors` - 为任何来源启用CORS（反映请求源，支持凭证的请求）
    --https=PATH` - 到HTTPS配置模块的路径
    --proxy=ROUTE:URL` - 代理ROUTE到URL的所有请求
    --help | -h` - 显示简洁的使用提示并退出
    --version | -v` - 显示版本并退出
```

