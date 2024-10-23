# Meditation App

### 介绍

Meditation App 是一个冥想类应用，个人全栈练手小项目。前端基于 Uniapp、Vue3、TypeScript、Unocss 实现，支持 H5 与微信小程序，后端基于 NestJS + TypeORM + TypeScript + MySql 实现

### 代码仓库

- 前端：https://github.com/qianjinshayu/meditation-app
- 后端：https://github.com/qianjinshayu/meditation-app-backend

### 项目功能

- 探索
  - [x] 冥想课程推荐列表
  - [x] 冥想课程详情页
  - [x] 播放页
  - [ ] 分类筛选页
- 练习
  - [ ] 我参加的练习
- 我的
  - [ ] 用户信息
  - [ ] 数据统计
- 登录功能
  - [x] 微信小程序登录
  - [ ] H5 登录
  - [ ] 登录页

目前项目处于开发初期，新功能正在持续添加中，如果你对该项目有任何问题与建议，欢迎在 Issues 中提出！

### 安装使用步骤

- **Clone：**

```text
# 前端
git clone git@github.com:qianjinshayu/meditation-app.git

# 后端
git clone git@github.com:qianjinshayu/meditation-app-backend.git
```

- **Install：**

```text
# 前端
pnpm install

# 后端
pnpm install
```

后端项目需要在 src 目录下新建 .env 配置文件，填入相关配置信息

```
# nest 服务配置
nest_server_port=3000

# mysql 相关配置
mysql_server_host=localhost
mysql_server_port=3306
mysql_server_username=root
mysql_server_password=
mysql_server_database=

# 微信小程序配置
wechat_appid=
wechat_secret=
```

在 mysql 中创建一个数据库，数据库名与 mysql_server_database 设置的一致，运行项目即可自动创建相关表，可访问 http://localhost:3000/course/init 接口进行初始化课程数据

- **Run：**

```text
# 前端
# 微信小程序
pnpm run dev:mp-weixin
# H5
pnpm run dev:h5

# 后端
pnpm run start:dev
```

### 项目截图

<img width="300px" src="https://course-service-oss.oss-cn-shanghai.aliyuncs.com/avatar/Snipaste_2024-10-23_23-13-03.png" />

<img width="300px" src="https://course-service-oss.oss-cn-shanghai.aliyuncs.com/avatar/Snipaste_2024-10-23_23-13-20.png" />

<img width="300px" src="https://course-service-oss.oss-cn-shanghai.aliyuncs.com/avatar/Snipaste_2024-10-23_23-13-39.png" />
