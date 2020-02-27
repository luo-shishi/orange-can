/* var DBPost=function(){
   this.storageKeyName="postList";//所有的文章本地缓存存储键值
}
DBPost.prototype={
  //得到全部文章信息
  getAllPostData:function(){
    var res=wx.getStorageSync(this.storageKeyName);
    if(!res){
      rse=require("../data/data.js").postList;
      this.execSetStorageSync(res);
    }
    return res
  },
  execSetStorageSync:function(data){
    wx.setStorageSync(this.storageKeyName, data);
  }
};

module.exports={
  DBPost:DBPost
} */
var util=require('../utils/util.js')
class DBPost {
  constructor(id) {
    this.storageKeyName = "postList"
    this.id = id
  }
  getPostItemById() {
    var postsData = this.getAllPostData();
    var len = postsData.length;
    for (var i = 0; i < len; i++) {
      if (postsData[i].postId == this.id) {
        return {
          index: i,
          data: postsData[i]
        }
      }
    }
  }
  getAllPostData() {
    var res = wx.getStorageSync(this.storageKeyName);
    if (!res) {
      rse = require("../data/data.js").postList;
      this.execSetStorageSync(res);
    }
    return res
  }
  execSetStorageSync(data) {
    wx.setStorageSync(this.storageKeyName, data);
  }
  //收藏文章
  collect() {
    return this.updatePostData('collect');
  }
  //点赞文章
  up(){
    var data=this.updatePostData('up');
    return data
  }
  //更新本地的点赞，评论信息，收藏，阅读量
  updatePostData(category,newComment) {
    var itemData = this.getPostItemById(),
     postData = itemData.data,
     allPostData = this.getAllPostData();
    switch (category) {
      case 'collect':
        //处理收藏
        if (!postData.collectionStatus) {
          //如果是当前状态是未收藏
          postData.collectionNum++;
          postData.collectionStatus = true;
        } else {
          //如果是当前状态是已收藏
          postData.collectionNum--;
          postData.collectionStatus = false;
        }
        break;
        case'up':
        if(!postData.upStatus){
          postData.upNum++
          postData.upStatus=true
        }else{
          postData.upNum--
          postData.upStatus = false
        }
        case'comment':
        postData.comments.unshift(newComment);
        postData.commentNum++;
        break;
        case'reading':
        postData.readingNum++;
        break;
      default:
        break;
    }
    //更新缓存数据库
    allPostData[itemData.index] = postData;
    this.execSetStorageSync(allPostData);
    return postData;
  }
  //获取文章的评论数据
  getCommentData(){
    var itemData=this.getPostItemById().data;
    //按时间降序排列评论
    itemData.comments.sort(this.compareWithTime);
    var len=itemData.comments.length;
    for(var i=0;i<len;i++){
      //将comment中的时间转化成可阅读格式
      var comment=itemData.comments[i];
      comment.create_time = util.formatTime(comment.creat_time);
    }
    return itemData.comments;
  }
  compareWithTime(val1,val2){
    var flag = val1.creat_time -val2.creat_time;
    if(flag<0){
      return 1
    }else if(flag>0){
      return -1
    }else{
      return 0
    }
  }
  newComment(newComment){
    this.updatePostData('comment',newComment);
  }
  addReadingTimes(){
    this.updatePostData('reading');
    console.log('阅读+1')
  }
}

export {
  DBPost
}