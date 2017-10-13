/**
 * Created by Harshit Gupta on 10-09-2017.
 */

let mongoose = require('mongoose');

let articleSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    author:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required: true
    }
});

module.exports = mongoose.model('Article',articleSchema);