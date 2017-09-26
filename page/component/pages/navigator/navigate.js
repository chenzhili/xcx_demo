Page({
  onLoad: function(options) {
    console.log(options)
    // 可以获取从 路由 中传递的参数值，生命周期只能是在 onLoad里,其他生命周期都没出现
    this.setData({
      title: options.title
    })
  },
  onReady:function(data){
    console.log(data);
  },
  onShow:function(data){
    console.log(data);
  }
})
