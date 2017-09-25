const app = getApp();
Page({
  data: {
    list: [
      {
        id: 'view',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      }, {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: ['text', 'icon', 'progress']
      }, {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch', 'textarea']
      }, {
        id: 'nav',
        name: '导航',
        open: false,
        pages: ['navigator']
      }, {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: ['image', 'audio', 'video']
      }, {
        id: 'map',
        name: '地图',
        pages: ['map']
      }, {
        id: 'canvas',
        name: '画布',
        pages: ['canvas']
      }
    ]
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
  onLoad:function(){
    console.log("监听页面加载完成");
    // 页面加载完成，也触发了一次，发生在 ready 事件的前面
  },
  onReady:function(){
    console.log("监听页面ready");
    // 页面渲染完成，但是只触发了一次
  },
  onShow:function(){
    console.log("show");
    console.log(this.route); //显示当前页面的路径
    // 每次页面显示都会触发
  },
  onPullDownRefresh:function(){
    console.log("下拉刷新");
    // 这个需要在 json文件中 的 windows 属性中设置 对应的 属性为 true enablePullDownRefresh
  },
  onReachBottom:function(){
    console.log("上拉加载");
    // 上拉加载不需要设置 属性，本来就会触发，如果设置了事件，但是可以设置 距离底部的距离 onReachBottomDistance：number 
  },
  onShareAppMessage: function () {
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  }
})

