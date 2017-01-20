#Switch

用惯了livepool,但这家伙不更新了,烦躁不安下,决定自己撸一个

下载地址:[百度网盘](https://pan.baidu.com/s/1kUXMJ59)

[![Build Status](https://travis-ci.org/l3ve/Switch.svg?branch=master)](https://travis-ci.org/l3ve/Switch)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/l3ve/Switch/master/LICENSE.md)


##Stack:
1. Electron
2. React
3. Rx(暂定)
4. ES6
5. babel
6. webpack2
7. nedb
8. socket

##Function
1. 抓包
2. 代理本地文件
3. ...

##How to use

#### Step 1: 
* 生成模式 : `下载并执行文件`  
* 开发模式 : ` npm install && npm run app //安装所有依赖并启动Electron`

#### Step 2:
* `Switch`依赖代理工具,这里我推荐使用[SwitchyOmega](https://github.com/FelisCatus/SwitchyOmega),教程的话大家看[wiki](https://github.com/FelisCatus/SwitchyOmega/wiki)或者Google下咯,[我是SwitchyOmega的下载地址](https://github.com/FelisCatus/SwitchyOmega/releases).
* 代理到本地的地址就可以了,默认:127.0.0.1:3344

#### Step 3:
* 如果要使用本地代理的话,现在设置里配置文件默认路径前缀,例如:`/Users/userName/projectName/`,可以配置多个,优先匹配前面的地址.

##TODO:
1. 查找当前请求
2. 可配置socket端口 
3. 模拟接口返回数据

