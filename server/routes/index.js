/*jslint node: true */
'use strict';
var mongoose = require('mongoose')

var Schema = mongoose.Schema;

var RetrospectiveItems = new Schema({
	_id: {type:mongoose.Schema.Types.ObjectId},
	retro_item_id: {type:String, required:true},
	title:{type:String, requried:true},
	description:{type:String, required:true},
	type:{type:String, enum:['good', 'bad', 'try'], required:true},
	modified:{type:Date, default:Date.now}
});

var Retrospective = new Schema({
	_id:{type: mongoose.Schema.Types.ObjectId},
	retro_id:{type:String, required:true},
	name:{type:String, required:true},
	retrospective_items:[RetrospectiveItems],
	modified: {type: Date, default: Date.now}
});

var RetrospectiveModel = mongoose.model('Retrospective', Retrospective);

mongoose.connect('localhost:27017/my_retrospective');

exports.getRetrospectives = function(req,res){
	return RetrospectiveModel.find({}, function(err, retrospectives){
		if(!err){
			return res.send(retrospectives);
		}
		else{
			return console.log(err);
		}
	});
};
exports.getRetrospective = function(req, res){
	return RetrospectiveModel.find({retro_id:req.params.id}, function(err, retrospectiveGetObj){
		if(!err){
			return res.send(retrospectiveGetObj);
		}
		else{
			return console.log(err);
		}
	});
};

exports.postRetrospective = function(req, res){
	console.log("POST: ");
	console.log(req.body);
	var retrospectivePostObj = new RetrospectiveModel({
		_id: new mongoose.Types.ObjectId,
		retro_id: req.params.id,
		name: req.body.name,
		retrospective_items: req.body.retrospective_items
	});
	retrospectivePostObj.save(function(err){
		if(!err){
			return console.log("created");
		}else{
			return console.log(err);
		}
	});
	return res.send(retrospectivePostObj);
};

exports.putRetrospective = function(req, res){
	return RestrospectiveModel.findById(req.params.id, function(err, retrospective){
		retrospective.retro_id = req.body.retro_id;
		retrospective.name = req.body.name;
		retrospective.retrospective_items = req.body.retrospective_items;
		return retrospective.save(function(err){
			if(!err){
				console.log("updated");
			}else{
				console.log(err);
			}
			return res.send(retrospective);
		})
	})
};

exports.deleteRetrospective = function(req, res){
	return RetrospectiveModel.findById(req.params.id, function(err, retrospective){
		return retrospective.remove(function(err){
			if(!err){
				console.log("removed");
				return res.send('');
			}else{
				console.log(err);
			}
		});
	});
};
/*exports.awesomeThings = function(req, res) {
    res.json([
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma',
        'Express'
    ]);
};*/

