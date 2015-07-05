/**
 * Created by Sangjun on 2015. 7. 5..
 * 트위터 백업 애플리케이션 예제
 */

process.env.TWITTER_CONSUMER_KEY = '9PEZaDqJ8bSYekeiDHN076uvt';
process.env.TWITTER_CONSUMER_SECRET = 'XCIbIbHVfp3OypyuaObppMV0lmMCzJ8ZFsXutv0rEOOwui2bML';
process.env.TWITTER_ACCESS_TOKEN_KEY = '3268781755-7BlP6vtDlpE5ifvvyGpIyESSVmJdzBA416grjNJ';
process.env.TWITTER_ACCESS_TOKEN_SECRET = 'FSJYgpQu1V0AGxO3hduMUmTT6RQKmA48dFFx1Dn2rWEbV';

var Twitter = require('twitter')
    , fs = require('fs');

var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

var Tweet = {
    sinceId: '1'
    , isOpened: false
    , getTweets: function(search, callback) {
        search = encodeURIComponent(search);

        fs.readFile('./maxid.txt', function(err, maxId) {
            if(err) {Tweet.sinceId = 1;}
            else {Tweet.sinceId = maxId;}
        })

        client.get('search/tweets.json'
            , {q: search, result_type: 'recent', rpp: 100, since_id: this.since_id}
            , function(error, tweets, response){
                if(error) throw error;

                var text = '';
                tweets.statuses.forEach(function(elem, index, array) {
                    text += elem.user.name + ' : ' + elem.text + ' at ' + elem.created_at + '\n';
                });

                if(!Tweet.isOpened) {
                    fs.open('./tweets.txt', 'a', 0666, function(err, fd) {
                        if(err) throw err;

                        Tweet.isOpened = true;
                        var buffer = new Buffer(text);
                        fs.write(fd, buffer, 0, buffer.length, null, function(err) {
                            fs.close(fd, function() {
                                Tweet.isOpened = false;
                                fs.writeFile('./maxid.txt'
                                    , tweets.search_metadata.max_id_str
                                    , function(err) {}
                                )
                            });
                        });
                    });
                }
            }
        );
    }
};

Tweet.getTweets('#nodejs');
