## Angel-Lite Ghost Theme 0.2 Beta 由于以前的CDN失效,JS也失效，是未完成半工程版

#### Install  
1. please modify `/post.hbs`   `disqus_shortname = ''` content for your disqus ID  
2. modify `partials/header.hbs` `partials/menu.hbs` `partials/menu2.hbs` `partials/footer.hbs` links to yours.  
3. modify javascript CDN in `/deafult.hbs` to your CDN links.
example:

```html
          <!--[if lt IE 9]>
          <script src="{{asset "js/selectivizr-min.js"}}"></script>
          <script src="{{asset "js/html5.js"}}"></script>
        <![endif]-->
```


[Live Demo](http://www.moecloud.org)
## Angel-Lite主题 0.2 Beta

#### 中文说明
1. 去掉一些js和不能自适应页面的的菜单。
2. 去掉部分CDN文件。
3. 提高页面响应速度。

#### 下一步添加min.css框架，需要一些时间。

## Angel-Lite主题 0.1 Beta

#### 中文说明
1. 修改  `/post.hbs` 文件的  `disqus_shortname = ''`  引号内,内容为 你的disqus ID.
2. 修改文件 `partials/header.hbs` `partials/menu.hbs` `partials/menu2.hbs` `partials/footer.hbs`的links变为你自己的.
3. 修改 `/deafult.hbs`里面的javascript CDN，换成你自己的。
example：  

```html
           <!--[if lt IE 9]>
           <script src="{{asset "js/selectivizr-min.js"}}"></script>
           <script src="{{asset "js/html5.js"}}"></script>
        <![endif]-->
```
####演示地址：
[Live Demo](http://www.moecloud.org)

#### Bug修复
js失效 已经修正
#### 存在已知Bug
main.js的$不能为read
## 欢迎大家push fix，有很多不足的地方，请多多指教。

##此主题基于Kular框架上添加，去掉不能自适应的菜单。

=====

Modern Ghost Theme

##Kular | Modern Ghost Theme

###Download: [Kular](https://github.com/tuanphongtruong/Kular/archive/master.zip)
###Behance: [Kular](https://www.behance.net/tuanphongtruong)
###Preview: [Kular](https://kular-tuanphongtruong-1.c9.io) (you must load unsafe script)

1. Introduce
Kular, the modern & responsive theme for Ghost Blog. It is designed to focus content, it
suitable for blog, mini news page,...
  * Masonry Layout.
  * Responsive.
  * Infinite scrolling.
  * Clean & focus content.
  * And more...
2. Contact me
  * Facebook: [Tuấn Phong Trương](facebook.com/tuanphongtruong98)
  * Email: tuanphongtruong@protonmail.ch or tuanphongtruong@hotmail.com
