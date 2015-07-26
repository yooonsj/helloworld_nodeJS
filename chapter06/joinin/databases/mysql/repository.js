/**
 * Created by Sangjun on 2015. 7. 19..
 */

var mysql = require('mysql')
    , DATABASE = 'nodeJS_test'
    , TABLE = 'members'
    , client = mysql.createConnection({
        host: '52.69.43.84'
        , port: '3306'
        , user: 'root'
        , password: '1234'
    });

client.query('USE ' + DATABASE);

var mysqlUtil = module.exports = {
    insertUser: function(user, res) {
        client.query(
            'INSERT INTO ' + TABLE + ' SET name = ?, email = ?'
            , [user.name, user.email]
            , function(err) {
                client.query(
                    'SELECT * FROM ' + TABLE + ' WHERE name = ?'
                    , [user.name]
                    , function(err, results, fields) {
                        if (err) {
                            throw err;
                        }
                        res.render('join-result', {
                            username: results[0].name
                            , useremail: results[0].email
                            , title: 'Express'
                            , joinSuccess: true
                        });
                    }
                );
            }
        );
    }
    , hasNameAndEmail: function(user, res) {
        client.query(
            'SELECT * FROM ' + TABLE + ' WHERE name = ? OR email = ?'
            , [user.name, user.email]
            , function(err, results, fields) {
                if (err) {
                    throw err;
                }
                if (results.length > 0) {
                    res.render('join-fail', {
                        title: 'Express'
                    });
                } else {
                    mysqlUtil.insertUser(user, res);
                }
            }
        )
    }
};

