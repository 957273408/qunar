# qunar

> A Vue.js project

## 项目中使用的包
1.border.css解决1像素边框问题
2.reset.css解决不同游览器样式问题
3.引入fastclick解决移动端点击延迟300毫秒问题
4.引入 vue-awesome-swiper实现拖拽轮播效果

## 项目中的问题
1.recommend组件中p标签无法实现文字一行超出显示...
解决方式:给p标签的父元素添加 min-weith:0;样式
2.icons组件中超过8个图片实现拖拽切换效果
解决方式:使用swiper插件 结合 computed属性
创建一个新的二维数组,第一层数组的个数表示分页数,第二层储存这个分页中所以的数据对象.最后通过2个vfor遍历讲数据渲染到页面中去
3.创建一个index.json储存数据
// static文件储存静态资源是cli中唯一能被外部访问的文件夹
4.因为要通过aioxs来获取数据但如果直接写static/index.json 将来上线都需要修改ulr.所以我们可以通过修改config/index.js下的proxyTablb项实现将api替换为static
> {
    "/api":{
        target:'http://localhost:8080',
        pathRewrite:{
            "^/api":'/static/mock'
        }
    }
}
