//takes the browser's request and lets us send back a page or other information
var imageModel = require('../models').Image;
var commentModel = require('../models').comment;

var viewModel = {
	images: {}
};

module.exports = {
	index: function(req, res) {
		var viewModel = imageModel.find(function(err, images) {
            res.render('index',{"images":images});
        });
	//	res.render('index',viewModel);
	}
};