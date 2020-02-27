// pages/post/post.js
var dataObj=require("../../data/data.js");
var DBPost=require("../../db/DBPost.js").DBPost;
import dbPost from "../../db/DBPost.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
   
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var dbPost=new DBPost()
      this.setData({
        postList:dbPost.getAllPostData()
      })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
  onUnload: function () {
     console.log("post unloade")
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

  },
  onTaptoDetail:function(event){
    var postId=event.currentTarget.dataset.postId;
    console.log(postId);
    wx.navigateTo({
      url: 'post-detail/post-detail?id='+postId,
    })
  },
  onSwiperTap:function(event){
    var postId=event.target.dataset.postId;
    wx.navigateTo({
      url: 'post-detail/post-detail?id='+postId,
    })
  }
})