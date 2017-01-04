var express = require('express');
var router = express.Router();

var test = {
	title:'肥牛金针菇',
	author:'author1',
	datatime:'2016/12/22',
	time:'10分左右',
	difficulty:'一般',
	intro:'和朋友小聚，在家里边吃边聊气氛是最好了！没有拿手菜？没有硬菜？来！这道菜绝对能帮你HOLD住场面！几分钟就能端上桌，要色有色要味有味！',
	ingredients:{
		main:[
			{name:'肥牛卷',amount:'250克'},
			{name:'金针菇',amount:'300克'}
		],
		auxiliary:[],
		dressing:[
			{name:'蒜蓉',amount:'1把'},
			{name:'郫县豆瓣酱',amount:'2勺'},
			{name:'水',amount:'1大碗（约500毫升）'},
			{name:'盐',amount:'适量'},
		]

	},
	step:[
		{img:'/images/1000-1.jpg',caption:'金针菇去根洗净。香葱切成葱花。'},
		{img:'/images/1000-2.jpg',caption:' 锅中放油，六成热时开小火放入蒜蓉和豆瓣酱炒香。'},
		{img:'/images/1000-3.jpg',caption:'加入一大碗水，转大火。'},
		{img:'/images/1000-4.jpg',caption:'水烧开后放入金针菇。'},
		{img:'/images/1000-1.jpg',caption:'再次煮开后加入肥牛卷，用筷子翻动使肥牛在汤中散开。'},
		{img:'/images/1000-5.jpg',caption:'煮到肥牛变色后关火，根据口味加入适量盐调味。'},
		{img:'/images/1000-6.jpg',caption:'盛出后撒上葱花。'}
	],
	comment:[
		{username:'小明',time:'2016-12-23 21:32:13',content:'这道菜看起来还不错！！！'},
		{username:'小花',time:'2016-12-22 21:02:16',content:'自己动手做做看！'},
		{username:'小黑',time:'2016-12-21 11:12:13',content:'看着就很有食欲'}
	]

	
}
/* GET users listing. */
router.get('/:id', function(req, res, next) {
  res.render('detail',{title: '详情页',public:{css:'detail',jsFile:'detail'},cp:test})
});

module.exports = router;
