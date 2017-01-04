var express = require('express');
var router = express.Router();
var upload = require('../middlewares/multerUtil.js').single('uploadFile');
/* GET upfood page. */
router.get('/', function(req, res, next) {
  res.render('upfood', { title:'上传您的美食菜谱' ,
  						public:{css:'upfood',jsFile:'upfood'} });
});

/* POST */
router.post('/', function(req, res) {
	upload(req,res,function(err){
		if(err){
			res.send('出错了')
		}else{
			res.send(req.file.filename);
		}
		
	})
  
});

module.exports = router;
