var postList = [{
  date: "Jan 20 2019",
  title: "小时候的冰棍儿与雪糕",
  postImg: "/images/post/post4.jpg",
  avatar: "/images/avatar/avatar1.jpg",
  content: "冰棍与雪糕绝对不是同一个东西。3到5毛钱的雪糕犹如现在的哈根达斯，而5分1毛的冰棍儿就像现在的老冰棒。时过境迁，...",
  readingNum: 108,
  commentNum: 0,
  collectionNum:3,
  postId:1,
  music:{
    url:"http://music.163.com/song/media/outer/url?id=1330348068.mp3",
    title:'买辣椒也用券  起风了'
  },
  author:"林白衣",
  dateTime:"24小时前",
  detail:"冰棍与雪糕绝对不是同一个东西。3到5毛钱的雪糕犹如现在的哈根达斯，而5分1毛的冰棍儿就像现在的老冰棒。时过境迁,当年的老冰棍也随着童年的记忆消失不见踪影。记得小时候，每当傍晚时分，总有一个老人推着一辆小车，小车的后架上放着一个大大的白色泡沫盒子。老人一边推着车，一边叫喊着：雪糕，冰棍...",
  collectionStatus:true,
  upStatus:false,
  upNum:11,
  comments:[]
},
{
  date: "Jan 10 2019",
  title: "记忆里的春节",
  postImg: "/images/post/post5.jpg",
  avatar: "/images/avatar/avatar2.jpg",
  content: "年少时，有几样东西，是春节里必不可少的；烟花，新衣，凉菜，压岁钱，饺子。年分大小年，有的地方是腊月二十三过小年，有的地方是腊月二十四...",
  readingNum: 304,
  commentNum: 0,
  collectionNum: 6,
  postId: 2,
  music: {
    url: "http://music.163.com/song/media/outer/url?id=569213220.mp3",
    title: '毛不易  像我这样的人'
  },
  author: "林白衣",
  dateTime: "24小时前",
  detail: "年少时，有几样东西，是春节里必不可少的；烟花，新衣，凉菜，压岁钱，饺子。年分大小年，有的地方是腊月二十三过小年，有的地方是腊月二十四。童年的春节都是在小县城里度过的，那时候的冬天还很冷，池塘的水会结冰，房屋上总是倒挂着一条条的冰凌，菜地里的白菜被厚厚的积雪覆盖着，只露出一小撮白绿相间的菜头，而茎部，竟然像是没有了一般...",
  collectionStatus: false,
  upStatus: false,
  upNum: 9,
  comments: []
},
{
  date: "Jan 27 2018",
  title: "从童年呼啸而过的火车",
  postImg: "/images/post/post6.jpg",
  avatar: "/images/avatar/avatar3.jpg",
  content: "小时候，家的后面有一条铁路。听说从南方北上的火车都必须经过这条铁路。火车太多在晚上经过，但也不是只有在夜深人静的时候，火车的声音才能从远方传来...",
  readingNum: 160,
  commentNum: 3,
  collectionNum: 7,
  postId: 3,
  music: {
    url: "http://music.163.com/song/media/outer/url?id=41642324.mp3",
    title: '江生  爱人'
  },
  author: "林白衣",
  dateTime: "24小时前",
  detail: "小时候，家的后面有一条铁路。听说从南方北上的火车都必须经过这条铁路。火车太多在晚上经过，可呜呜的汽笛声往往却被淹没在傍晚小院儿里散步的人群声中。只有在夜深人静的时候，或者的声音才能清晰地从远方飘过来。虽然日日听见火车的汽笛声，可说也奇怪，我竟然不知道铁路在哪，在每个夏日午后，我都会有一种去寻找铁路的冲动，去看看这条铁路究竟是从哪里来，又将通向哪里去。",
  collectionStatus: true,
  upStatus: true,
  upNum: 22,
  comments: [
    {
      username:'青石',
      avatar:'/images/avatar/avatar4.jpeg',
      creat_time:1484723344000,
      content:{
        txt:'那一年的毕业季，我们挥挥手，来不及说再见，就踏上了远行的火车。',
        img: ["/images/comment/comment1.jpg", "/images/comment/comment2.jpg", "/images/comment/comment3.jpg",],
        audio:null
      }
    },
    {
      username: '水清',
      avatar: '/images/avatar/avatar5.jpg',
      creat_time: 1481018319000,
      content: {
        txt: '夏日的蝉鸣与夜晚的火车，时常会在未来无数的日子里不断地在我耳边想起',
        img: [],
        audio: null
      }
    },
    {
      username: '池墨',
      avatar: '/images/avatar/avatar6.jpeg',
      creat_time: 1484496000000,
      content: {
        txt: '时光荏苒，自然的吞噬，让太多的老火车站也消失得无影无踪',
        img: ["/images/comment/comment1.jpg"],
        audio: null
      }
    }
  ]
}]


module.exports={
  postList:postList
}