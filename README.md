# connect_to_mongo
基于《Nodejs入门经典》做的练习

本练习是来自《Nodejs入门经典》（作者：奥尔波， 人民邮电出版社， 2013.4月）一书中第8章节的**connect_to_mongo**同名实例。

但因书上实例较早与现在版本的API有很多出入，所以本人也是边看边学边改捣鼓出来的。

![todolist][1]


  ![todolist new][2]


![todolist edit][3]


  [1]: https://raw.githubusercontent.com/shenger153/all_image_demo_package/master/images/connect_to_mongo_imgs/0.jpg
  [2]: https://raw.githubusercontent.com/shenger153/all_image_demo_package/master/images/connect_to_mongo_imgs/1.jpg
  [3]: https://raw.githubusercontent.com/shenger153/all_image_demo_package/master/images/connect_to_mongo_imgs/2.jpg
  
  方法与书上大体相同：
1. 进入文件夹安装配置项
``` stylus
npm install
```
    
2. 创建文件夹**todo_development**配置mongodb数据库
``` stylus
$ mongod –dbpath D:\todo_development //文件路径依项目具体存放地址而定
```

3. 启动文件

``` stylus
$ npm start
```

具体请参看原书相关章节和步骤，也是刚开始学习，很多东西还不会，望各位指教啦。
