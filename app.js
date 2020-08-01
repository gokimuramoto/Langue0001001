//tweeter setting--------------------------------------------------------------
const twitter = require("twitter");
const fs = require("fs");

const client = new twitter(JSON.parse(fs.readFileSync("secret.json","utf-8")));
//-----------------------------------------------------------------------------


var tasks = [];
var link1="https://twitter.com/369_FM/status/1281822046075236352";
var link2="aaaaa";

//var words=["俺が","昨日","死んだので","友達が","黒い","服を","着込んで","集まってきた"];
var words=["言葉の","美しくない","人が","私は","嫌いだ","むかしから","そうなのだ","急には変えられない","許せ","許せ"];
var words=["昼が","夜に","昇華する","とき","夕焼","雲の","むこうに","私は","ひとつの","世界を","見る"];
//var words=["脂肪が","増えると","膨らむ","のは","腹で","ある","諏訪","園","かりん","です","！！！"];
var text = "漢字を平仮名にするたったそれだけのことで何者かになれた";

var tweet_text = new Array(words.length);
var icons = new Array(words.length);

var clauses = [];

const express = require('express');
const app = express();



const path = require('path');
const kuromoji = require('kuromoji');

kuromoji.builder({
  dicPath: path.resolve(__dirname, './node_modules/kuromoji/dict')
})
  .build((error, tokenizer) => {
    const parsed = tokenizer.tokenize(text);
    console.log(parsed.length);
    for(var i=0;i<parsed.length;i++){
      if(parsed[i].pos=='名詞'||parsed[i].pos=='動詞'||parsed[i].pos=='副詞'||parsed[i].pos=='形容詞'||parsed[i].pos=='形容動詞'){
        clauses.push(parsed[i].surface_form);
      }else if(parsed[i].pos=='助詞'||parsed[i].pos=='助動詞'){
        clauses[clauses.length - 1]+=parsed[i].surface_form;
        
      }
      
    }
    console.log(clauses);
  });



app.use(express.static('public'));

app.get('/', (req, res) => {
  //console.log(tweets.statuses[0]);
  delaySum=Math.ceil(delaySum/11);


  res.render('index.ejs',{text1:link1, text2:link2,tweetsText:tweet_text,words:words,delayAve:delaySum,icons:icons});
  test();

});

//------------------getTweets-----
//const params = {screen_name: '369_FM',count:20};

var today = new Date();
var today_st =strtotime(today);
var delaySum =0;

var params = {q: '"'+words[0]+'"'+" since:2015-02-23",count:2};
client.get('search/tweets', params, function(error, tweets, response){
  if (!error) {
    today = new Date();
    today_st =strtotime(today);
    var tweet_CA = strtotime(tweets.statuses[0].created_at);
    var howOld = Math.floor((today_st-tweet_CA)/1000);
    delaySum+=howOld;
    tweet_text[0]=tweets.statuses[0].text+"　/ "+tweets.statuses[0].created_at+"  /  "+howOld+"秒前";
    icons[0]=tweets.statuses[0].user.profile_image_url_https;
  }
});

var params = {q: '"'+words[1]+'"'+" since:2015-02-23",count:1};
client.get('search/tweets', params, function(error, tweets, response){
  if (!error) {
    today = new Date();
    today_st =strtotime(today);
    var tweet_CA = strtotime(tweets.statuses[0].created_at);
    var howOld = Math.floor((today_st-tweet_CA)/1000);
    delaySum+=howOld;
    tweet_text[1]=tweets.statuses[0].text+"　/ "+tweets.statuses[0].created_at+"  /  "+howOld+"秒前";
    icons[1]=tweets.statuses[0].user.profile_image_url_https;
  }
});

var params = {q: '"'+words[2]+'"'+" since:2015-02-23",count:2};
client.get('search/tweets', params, function(error, tweets, response){
  if (!error) {
    today = new Date();
    today_st =strtotime(today);
    var tweet_CA = strtotime(tweets.statuses[0].created_at);
    var howOld = Math.floor((today_st-tweet_CA)/1000);
    delaySum+=howOld;
    tweet_text[2]=tweets.statuses[0].text+"　/ "+tweets.statuses[0].created_at+"  /  "+howOld+"秒前";
    icons[2]=tweets.statuses[0].user.profile_image_url_https;
  }
});

var params = {q: '"'+words[3]+'"'+" since:2015-02-23",count:2};
client.get('search/tweets', params, function(error, tweets, response){
  if (!error) {
    today = new Date();
    today_st =strtotime(today);
    var tweet_CA = strtotime(tweets.statuses[0].created_at);
    var howOld = Math.floor((today_st-tweet_CA)/1000);
    delaySum+=howOld;
    tweet_text[3]=tweets.statuses[0].text+"　/ "+tweets.statuses[0].created_at+"  /  "+howOld+"秒前";
    icons[3]=tweets.statuses[0].user.profile_image_url_https;
  }
});

var params = {q: '"'+words[4]+'"'+" since:2015-02-23",count:2};
client.get('search/tweets', params, function(error, tweets, response){
  if (!error) {
    today = new Date();
    today_st =strtotime(today);
    var tweet_CA = strtotime(tweets.statuses[0].created_at);
    var howOld = Math.floor((today_st-tweet_CA)/1000);
    delaySum+=howOld;
    tweet_text[4]=tweets.statuses[0].text+"　/ "+tweets.statuses[0].created_at+"  /  "+howOld+"秒前";
    icons[4]=tweets.statuses[0].user.profile_image_url_https;
  }
});

var params = {q: '"'+words[5]+'"'+" since:2015-02-23",count:2};
client.get('search/tweets', params, function(error, tweets, response){
  if (!error) {
    today = new Date();
    today_st =strtotime(today);
    var tweet_CA = strtotime(tweets.statuses[0].created_at);
    var howOld = Math.floor((today_st-tweet_CA)/1000);
    delaySum+=howOld;
    tweet_text[5]=tweets.statuses[0].text+"　/ "+tweets.statuses[0].created_at+"  /  "+howOld+"秒前";
    icons[5]=tweets.statuses[0].user.profile_image_url_https;
  }
});

var params = {q: '"'+words[6]+'"'+" since:2012-02-23",count:2};
client.get('search/tweets', params, function(error, tweets, response){
  if (!error) {
    today = new Date();
    today_st =strtotime(today);
    var tweet_CA = strtotime(tweets.statuses[0].created_at);
    var howOld = Math.floor((today_st-tweet_CA)/1000);
    delaySum+=howOld;
    tweet_text[6]=tweets.statuses[0].text+"　/ "+tweets.statuses[0].created_at+"  /  "+howOld+"秒前";
    icons[6]=tweets.statuses[0].user.profile_image_url_https;

  }
});

var params = {q: '"'+words[7]+'"'+" since:2015-02-23",count:2};
client.get('search/tweets', params, function(error, tweets, response){
  if (!error) {
    today = new Date();
    today_st =strtotime(today);
    var tweet_CA = strtotime(tweets.statuses[0].created_at);
    var howOld = Math.floor((today_st-tweet_CA)/1000);
    tweet_text[7]=tweets.statuses[0].text+"　/ "+tweets.statuses[0].created_at+"  /  "+howOld+"秒前";
    icons[7]=tweets.statuses[0].user.profile_image_url_https;
  }
});

var params = {q: '"'+words[8]+'"'+" since:2015-02-23",count:2};
client.get('search/tweets', params, function(error, tweets, response){
  if (!error) {
    today = new Date();
    today_st =strtotime(today);
    var tweet_CA = strtotime(tweets.statuses[0].created_at);
    var howOld = Math.floor((today_st-tweet_CA)/1000);
    tweet_text[8]=tweets.statuses[0].text+"　/ "+tweets.statuses[0].created_at+"  /  "+howOld+"秒前";
    icons[8]=tweets.statuses[0].user.profile_image_url_https;
  }
});

var params = {q: '"'+words[9]+'"'+" since:2015-02-23",count:2};
client.get('search/tweets', params, function(error, tweets, response){
  if (!error) {
    today = new Date();
    today_st =strtotime(today);
    var tweet_CA = strtotime(tweets.statuses[0].created_at);
    var howOld = Math.floor((today_st-tweet_CA)/1000);
    tweet_text[9]=tweets.statuses[0].text+"　/ "+tweets.statuses[0].created_at+"  /  "+howOld+"秒前";
    icons[9]=tweets.statuses[0].user.profile_image_url_https;
  }
});

var params = {q: '"'+words[10]+'"'+" since:2015-02-23",count:2};
client.get('search/tweets', params, function(error, tweets, response){
  if (!error) {
    today = new Date();
    today_st =strtotime(today);
    var tweet_CA = strtotime(tweets.statuses[0].created_at);
    var howOld = Math.floor((today_st-tweet_CA)/1000);
    tweet_text[10]=tweets.statuses[0].text+"　/ "+tweets.statuses[0].created_at+"  /  "+howOld+"秒前";
    icons[10]=tweets.statuses[0].user.profile_image_url_https;
    
  }
});
/*
*/



function strtotime( d ) {
  return new Date( d ).getTime();
}

/*
console.log("@" + params.screen_name);
client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
        console.log(tweets[0].id);
        console.log(tweets[0].user.screen_name);
        link1 = "https://twitter.com/369_FM/status/"+tweets[1].id_str;
        console.log(link1);
        //fs.appendFileSync("timeline.json",JSON.stringify(tweets) + "\n","utf-8");
    }
});*/



//-------------------------





app.listen(3000);