# ar-trade-frontend

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### node环境配置
1.官网下载node.js的msi文件，一路next至finish（途中调整安装存放地点）
2.安装完成后，打开cmd，输入node -v 和npm -v查看版本号，确认安装成功
3.在安装存放地点文件夹中增加node_cache（用于存放缓存数据）和node_global（用于存放全局安装的组件）文件夹
4.输入以下命令 调整node.js中文件路径
   npm config set prefix "{安装路径}\node_global"
   npm config set cache "{安装路径}\node_cache"
5.配置环境变量，"我的电脑"-右键-"属性"-"高级系统设置"-"高级"-"环境变量"
  在系统变量中增加NODE_PAHT值为 "{安装路径}\node_modules"
  在系统变量的PATH中增加 "{安装路径}\node_global"
可参考以下：https://blog.csdn.net/SunBigBoy/article/details/129621613?utm_medium=distribute.pc_relevant.none-task-blog-2~default~baidujs_baidulandingword~default-0-129621613-blog-132109189.235^v40^pc_relevant_default_base&spm=1001.2101.3001.4242.1&utm_relevant_index=3

### 项目结构
- node_modules: 项目依赖的包所在目录
- pulic：存放favicon图标和html根模板
- src：代码目录
  - api：请求接口配置,直接对接后端，并提供方法给页面组件调用
  - assets：图片字体等静态文件目录
  - components：全局组件，公共组件
  - icons：svg图标
  - layout：页面布局内容
  - router：路由配置
  - store：vuex全局状态管理，相当于前端数据库
  - style：公共样式
  - utils：全局工具库
  - view：项目页面
  - App.vue：vue的根目录挂载点
  - main.js：webpack打包入口文件
- babel.config.js：JS编译器，主要作用是将ECMAScript2015+ 版本的代码,转换为向后兼容的JS语法,以便能够运行在当前和旧版本的浏览器或其它环境中
- jsconfig.json：用于指定JavaScript项目编译选项的文件。它可以帮助我们在VSCode中编写JavaScript代码时提供更好的智能提示和代码补全。
- package-lock.json：指定安装时的包的版本号，并且需要上传到git，以保证其他人在npm install时大家的依赖能保证一致。 
- package.json：Node根据该文件确认项目依赖关系和元数据