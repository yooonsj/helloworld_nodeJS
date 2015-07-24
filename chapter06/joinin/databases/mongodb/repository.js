/**
 * Created by Sangjun on 2015. 7. 19..
 */

var Mongolian = require('mongolian')
    , server = new Mongolian('52.69.43.84:27017')
    , db = server.db('nodeJS_test')
    , users = db.collection('members');

var mongodbUtil = module.exports = {
    insertUser: function(user, res) {
        users.insert({
            name: user.name
            , email: user.email
        }, function(err, result) {
            if (err) {
                throw err;
            }
            res.render('join-result', {
                username: result.name
                , useremail: result.email
                , title: 'Express'
            });
        });
    }
}