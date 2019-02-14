// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550150535067&di=c4dedcc715b79a1dd122581706469aa4&imgtype=0&src=http%3A%2F%2Fwww.tiandiantong.net%2Fpublic%2Fsite%2Fnew%2Fimg%2FaboutUs%2Fabout-banner.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550150535065&di=e14ff037a63546df962856efa113bc57&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F6b59fc7e3604f366c1ed95d94664feaa12e0cecf5c842-KSPJmT_fw658',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550150535064&di=621486101b342914b49de94d84629f1d&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0139be5aa76ef0a801206d9606eaf8.png%401280w_1l_2o_100sh.png'
    ],
    indicatorDots: false,
    autoplay: true,

    interval: 5000,
    duration: 1000,
    circular: false,

  },
  imageLoad: function () {
    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth,//图片宽度   
    })
  }  ,
 
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})