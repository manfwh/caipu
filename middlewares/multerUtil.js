var multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images/uploads/')
  },
  filename: function (req, file, cb) {
  	var fileFormat = (file.originalname).split('.');
    cb(null, file.fieldname + '-' + Date.now()+'.'+fileFormat[fileFormat.length-1]);
  }
})
function fileFilter(req,file,cb){
	var fileFormat = file.originalname;
	if(/^.*[^a][^b][^c]\.(?:png|jpg|bmp|gif|jpeg)$/.test(fileFormat)){
		cb(null, true)
	}else{
		cb(new Error('I dont have a clue!'))
	}
}
var upload = multer({storage:storage,fileFilter:fileFilter});

module.exports = upload;




