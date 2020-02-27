//app.js
App({
  onLaunch: function () {
    var storageData=wx.setStorageSync("postList");
    if(!storageData){
      var dataObj=require("data/data.js");
      wx.clearStorageSync();
      wx.setStorageSync("postList", dataObj.postList)
    }
  },
  globalData: {
    g_isPlayingMusic:false,
    g_currentMusicPostId:null
  }
})