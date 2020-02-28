// pages/post/post-detail/post-detail.js
import {DBPost} from "../../../db/DBPost.js";
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postId:'',
    isPlayingMusic:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var postId=options.id
     var dbPost=new DBPost(postId);
    this.postData =dbPost.getPostItemById().data;
     this.setData({
       post:this.postData,
       postId:postId
     });
     this.addReadingTimes();
     this.setMusicMonitor();
     this.initMusicStatus();
     this.setAnimation();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
     wx.setNavigationBarTitle({
       title:this.postData.title
     })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function (event) {
     wx.stopBackgroundAudio();
     this.setData({
       isPlayingMusic:false
     })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
     return {
       title:this.postData.title,
       desc:this.postData.content,
       path:"/pages/post/post-detail/post-detail"
     }
  },
  onCollectionTap:function(event){
       //dbPost对象已在onloade函数里被保存到了this变量中，无须再次实例化
       var id=this.postData.postId
       var newDBPost=new DBPost(id);
       var newData=newDBPost.collect();
       wx.showToast({
         title: newData.collectionStatus?'收藏成功':'取消成功',
         duration:1000,
         icon:"success",
         mask:true
       })

       //重新绑定数据。注意，不要将整个newData全部作为setData的参数，
       //应当有选择地更新部分数据
       this.setData({
         'post.collectionStatus':newData.collectionStatus,
         'post.collectionNum':newData.collectionNum
       })
  },
  onUpTap:function(event){
    var id = this.postData.postId
    var newDBPost = new DBPost(id);
    var newData = newDBPost.up();
    this.setData({
      'post.upStatus': newData.upStatus,
      'post.upNum': newData.upNum
    });
    this.animationUp.scale(2).step();
    this.setData({
      animationUp:this.animationUp.export()
    })
    setTimeout(function(){
      this.animationUp.scale(1).step();
      this.setData({
        animationUp:this.animationUp.export()
      })
    }.bind(this),300)
  },
  onCommentTap:function(event){
    var id=event.currentTarget.dataset.postId;
    wx.navigateTo({
      url: '../post-comment/post-comment?id='+id,
    })
  },
  addReadingTimes:function(){
    var postId=this.data.postId;
    var dbPost=new DBPost(postId)
    dbPost.addReadingTimes();
  },
  onMusicTap:function(event){
    if(this.data.isPlayingMusic){
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic:false
      })
      app.globalData.g_isPlayingMusic=false
    }else{
      wx.playBackgroundAudio({
        dataUrl: this.postData.music.url,
        title:this.postData.music.title
      })
      this.setData({
        isPlayingMusic:true
      })
      app.globalData.g_isPlayingMusic = true;
      app.globalData.g_currentMusicPostId=this.postData.postId;
    }
  },
  setMusicMonitor:function(){
    var that=this;
    wx.onBackgroundAudioStop(function(){
      that.setData({
        isPlayingMusic:false
      })
      app.globalData.g_isPlayingMusic = false
    });
    wx.onBackgroundAudioPlay(function(event){
       //只处理当前页面的音乐播放
       if(app.globalData.g_currentMusicPostId===that.postData.postId){
         that.setData({
           isPlayingMusic:true
         })
       }
       app.globalData.g_isPlayingMusic=true;
    });
    wx.onBackgroundAudioPause(function(){
      //只处理当前页面的音乐暂停
      if(app.globalData.g_currentMusicPostId===that.postData.postId){
        that.setData({
          isPlayingMusic:false
        })
      }
      app.globalData.g_isPlayingMusic=false;
    })
  },
  initMusicStatus(){
    var currentPostId=this.postData.postId;
    if(app.globalData.g_isPlayingMusic&&app.globalData.g_currentMusicPostId===currentPostId){
      //如果全局播放的音乐是当前文章的音乐，就将图标状态设置为正在播放
      this.setData({
        isPlayingMusic:true
      })
    }else{
      this.setData({
        isPlayingMusic:false
      })
    }
  },
  setAnimation:function(){
    var animationUp=wx.createAnimation({
      timingFunction:'ease-in-out'
    })
    this.animationUp=animationUp
  }
})