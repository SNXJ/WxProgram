// pages/demo/swiper/swiper.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    texts: [
      ["标题1", "这是内容1"],
      ["标题2", "这是内容2"],
      ["标题3", "这是内容3"]
    ],
    // texts: ["这是内容1", "这是内容2", "这是内容2"],
    imageUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550150535067&di=c4dedcc715b79a1dd122581706469aa4&imgtype=0&src=http%3A%2F%2Fwww.tiandiantong.net%2Fpublic%2Fsite%2Fnew%2Fimg%2FaboutUs%2Fabout-banner.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550223661622&di=6eb30c4fef93a7ef6e183ad94851b088&imgtype=0&src=http%3A%2F%2Fpic2.ooopic.com%2F10%2F58%2F70%2F01b1OOOPIC34.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1550150535064&di=621486101b342914b49de94d84629f1d&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0139be5aa76ef0a801206d9606eaf8.png%401280w_1l_2o_100sh.png'
    ],
    indicatorDots: false,
    autoplay: false,
    autoplay2: true,
    vertical: false,
    interval: 4000,
    duration: 1000,
    imageWidth: "",
    currentIndex: 0
  },
  imageLoad: function() {
    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth,
    })

  },
  //banner切换
  bindchange: function(e) {
    console.log("bindchang事件:" + e.detail.current);
    this.setData({
      currentIndex: e.detail.current,
    })

  },
  //banner 点击
  onBannerTap: function(e) {
    console.log("bannerTap:" + this.data.currentIndex);
    var imageUrl = this.data.imageUrls[this.data.currentIndex];
    // encodeURIComponent(imageUrl);
    console.log("imageUrl:" + imageUrl);
    // 转化的字符串中 有"?"，"&"或"="等这样的符号，则只会传递符号以前的字符串，符号后面数据会被丢失，这个问题我猜想可能是小程序内部的路由处理 对这些符号敏感吧。所以有时候这里可以先用 encodeURIComponent() 进行转码，在目标页面再用 decodeURIComponent() 解码，这样就可以避免数据丢失了

    wx.navigateTo({
      url: '../swiperDetails/swiperDetails?imageUrl=' + encodeURIComponent(imageUrl),
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })

  },

  onIndicatorDots: function() {
    this.setData({
      indicatorDots: !this.data.indicatorDots,
    })
  },
  onAutoPlay: function() {
    this.setData({
      autoplay: !this.data.autoplay,
    })
  },
  onIndicatorDots: function() {
    this.setData({
      indicatorDots: !this.data.indicatorDots,
    })
  },
  onVertical: function() {
    this.setData({
      vertical: !this.data.vertical,
    })
  },

  intervalChange: function(e) {
    this.setData({
      interval: e.detail.value,
    })
  },
  durationChange: function(e) {
    this.setData({
      duration: e.detail.value,
    })
  },
  /**
   * 禁止手动滑动
   */
  stopTouchMove: function() {
    return false;
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