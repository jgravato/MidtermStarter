//takes the browser's request and lets us send back a page or other information
var imageModel = require('../models').Image;
var stats = require('../helpers/stats');
var commentModel = require('../models').comment;

var viewModel = {
	images: {},
	sidebar: {}
};

module.exports = {
	index: function(req, res) {
		imageModel.find(function (err, images) {
			viewModel.images = images;
			stats(viewModel, function (viewModel) {
				res.render('index', viewModel);
			});
        });
	//	res.render('index',viewModel);
	}
};