//index.js
//获取应用实例
const app = getApp()

//const CDATA = [{ icon: '/static/img/course1.jpg', text: '高数' }, { icon: '/static/img/course2.jpg', text: '概统' }, { icon: '/static/img/course3.jpg', text: '现代' },{ icon: '/static/img/course4.jpg', text: '几何' }];

Page({
  data: {
   // coursedata:CDATA,
   //classes:CDATA,
    //gaoshu: '../../static/img/course1.jpg',
    //gaitong: '../../static/img/course2.jpg',
    //xiandai: '../../static/img/course3.jpg',
    //shufen: '../../static/img/course4.jpg',
    //顶部滑动图片js
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495626232647&di=c7c53f96e0f48681471e4626eebe0181&imgtype=0&src=http%3A%2F%2Fwww.sanchiseo.com%2Fuploadfile%2F2015821%2F2015821115728937045.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495626316444&di=ff20f74da6031541a12e0eeadaf156b9&imgtype=0&src=http%3A%2F%2Fsem.g3img.com%2Fsite%2F34016275%2F20160216162430_82108.png',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495626359075&di=3297d75c3742024d15f553547495f3db&imgtype=0&src=http%3A%2F%2Fwww.17emarketing.com%2Fuploads%2Fallimg%2F160627%2F1-16062G54154.png',
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    iconsrc:'../../static/img/more.png',
    imgsrc1:'../../static/img/course1.jpg',
    imgsrc2: '../../static/img/course2.jpg',
    teachersrc:'../../static/img/teacher.png',

  },
  

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
//点击事件
  gaoshu: function () {

  },
  gaitong: function () {

  },
  xiandai: function () {

  },
  shufen: function () {

  }
})
