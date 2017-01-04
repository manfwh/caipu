var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: ['香菇蒸腊排骨','蘑菇三文鱼贝柱粥','霸王花鱿鱼瘦肉汤','霸王花鱿鱼瘦肉汤','霸王花鱿鱼瘦肉汤','霸王花鱿鱼瘦肉汤'],
  						public:{css:'index',jsFile:'index'} });
});

module.exports = router;
