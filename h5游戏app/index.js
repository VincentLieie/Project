
"use strict";

var question = {
    data: [{
        num: 1,
        subject: "1.《卖火柴的小女孩》中的小女孩最后的命运如何?",
        a: "A. 嫁入豪门",
        b: "B. 冻死街头",
        c: "C. 红遍全国",
        d: "D. 富可敌国",
        answer: "B",
        lesson: "第二天清晨，这个小女孩坐在墙角里，两腮通红，嘴上带着微笑。她死了，在旧年的大年夜冻死了。新年的太阳升起来了，照在她小小的尸体上。小女孩坐在那儿，手里还捏着一把烧过了的火柴梗。"
    }, {
        num: 2,
        subject: "2.朱自清的《背影》中，临走前，父亲给他买的是什么？",
        a: "A橘子",
        b: "B香蕉",
        c: "C柿子",
        d: "D橙子",
        answer: "A",
        lesson: "我说道,\"爸爸，你走吧。\"他望车外看了看，说，\"我买几个橘子去。你就在此地，不要走动。\"我看那边月台的栅栏外有几个卖东西的等着顾客。"
    }, {
        num: 3,
        subject: "3.《两个铁球同时落地》中的铁球落地实验地点在哪里？",
        a: "A披萨斜塔",
        b: "B比萨斜塔",
        c: "C埃菲尔铁塔",
        d: "D金字塔",
        answer: "B",
        lesson: "伽利略在比萨斜塔顶上出现了。他右手拿一个10磅重的铁球，左手拿一个1磅重的铁球。两个铁球同时脱手，从空中落下来。一会儿，斜塔周围的人都忍不住呼喊起来，因为大家看见两个铁球同时着地了，正跟伽利略说的一个样。"
    }, {
        num: 4,
        subject: "4.马克思和恩格斯之间是纯粹的_______?",
        a: "A友情",
        b: "B亲情",
        c: "C爱情",
        d: "D基情",
        answer: "A",
        lesson: "马克思和恩格斯是好朋友。他们共同研究学问，共同领导国际工人运动。1863年初，马克思一家到了一一贫如洗的地步。马克思打算让大女儿和二女儿停学，找个地方做工去，自己和燕妮、小女儿搬到贫民窟去住。恩格斯得知这个消息后，连忙打电报劝说马克思别这么做，又迅速筹集又一笔钱，汇给了马克思，使马克思一家暂时渡过了难关。"
    }, {
        num: 5,
        subject: "5.对弟弟小萝卜头的描述中，哪项不正确？",
        a: "A爱吃萝卜",
        b: "B脑袋大、身子小",
        c: "C喜欢学习",
        d: "D面黄肌瘦",
        answer: "A",
        lesson: "小萝卜头从小生活在阴冷潮湿监狱里，每次吃饭只有又黑又小的窝窝头，所以身体长得小，骨瘦如柴，可头却很大，像萝卜，因此监狱里的同志们都怜爱地叫他小萝卜头。他很听话，每次开饭都让妈妈先吃，还收集破布为妈妈补鞋。他很小就懂得了谁是坏人，谁是好人。最后被一位刽子手用刀劈胸而死。牺牲时年仅8岁。"
    }, {
        num: 6,
        subject: "6.《让我们荡起双桨》描写的是________公园？",
        a: "A朝阳",
        b: "B北海",
        c: "C日坛",
        d: "D景山",
        answer: "B",
        lesson: "《让我们荡起双桨》是乔羽先生作词，刘炽先生作曲，刘惠芳演唱的歌曲。当时导演严恭、苏里带领一大群十二三岁的孩子来体验生活，作曲者刘炽也跟着一起来了，孩子们和刘炽一块儿在北海公园内，上了岸后，刘炽对孩子们说：\"你们划你们的，继续去玩，我现在就写，歌儿写出来第一个给你们听。\"于是在北海公园，诞生了这一童年佳曲。"
    }, {
        num: 7,
        subject: "7.《捞铁牛》中捞起水中铁牛利用的是船的_______?",
        a: "A引力",
        b: "B浮力",
        c: "C重力",
        d: "D离心力",
        answer: "B",
        lesson: "《捞铁牛》通过写怀丙和尚利用水的浮力把陷在淤泥里的铁牛一只只捞起来的事，表现了怀丙的聪明才智和他利用自己的才干为人民造福的精神。主要利用船的浮力。让船上的泥土逐渐减少，根据阿基米德原理，船的浮力逐渐增大，绑着的铁牛就慢慢的被打捞上来了。"
    }, {
        num: 8,
        subject: "8.唐代诗人李白曾写诗：桃花潭水深千尺，不及___送我情。",
        a: "A汪伦",
        b: "B杰伦",
        c: "C海伦",
        d: "D飞伦",
        answer: "A",
        lesson: "李白（701年-762年） ，字太白，号青莲居士。是唐代伟大的浪漫主义诗人，被后人誉为\"诗仙\"。其人爽朗大方，爱饮酒作诗，喜交友。《赠汪伦》一诗中，写下\"桃花潭水深千尺，不及汪伦送我情\"的经典诗句。"
    }, {
        num: 9,
        subject: "9.《狼牙山五壮士》中两位战士因__________幸免于难。",
        a: "A掉到水里",
        b: "B树杈挡住",
        c: "C村民营救",
        d: "D敌人投降",
        answer: "B",
        lesson: "葛振林、宋学义两位壮士被半山腰的树杈挡住而幸免于难。后来又碰到余药夫，是他顶着硝烟未散的夜幕，在棋盘坨旁的石崖下，援救了跳崖后被树杈架在半山腰的葛振林和宋学义。他搀扶他们到山上古庙休息，给他们做饭，为他们放哨、探路，第二天又和古庙道士一起，送两位壮士归队。"
    }, {
        num: 10,
        subject: "10.毛泽东的文章《为人民服务》赞扬的是谁？",
        a: "A张思德",
        b: "B雷震子",
        c: "C焦裕禄",
        d: "D雷锋",
        answer: "A",
        lesson: "1944年9月8日，即张思德牺牲后3天，中央直属机关在延安凤凰山脚枣园操场上为他举行了约千人的追悼会，毛主席亲笔写了\"向为人民利益而牺牲的张思德同志致敬\"。下午1时以后，毛主席迈着沉重的步子走上祭台，作了题目是《为人民服务》的演讲。"
    }, {
        num: 11,
        subject: "11.《珍贵的教科书》一文中的教科书是被____浸透的。",
        a: "A口水",
        b: "B雨水",
        c: "C鲜血",
        d: "D汗水",
        answer: "C",
        lesson: "\"快卧倒……\"指导员刚喊出口，轰隆一声，炸弹在我们身边爆炸了。我两耳一阵轰鸣，就什么也不知道了……等我醒来，才发觉自己头部受了伤。指导员趴在离我不远的地方，一动也不动。那捆书完整无缺地压在他的身子下面，被鲜血染红了。"
    }, {
        num: 12,
        subject: "12.哪位明星曾称自己是少年闰土？",
        a: "A魏晨",
        b: "B周杰伦",
        c: "C张杰",
        d: "D欧弟",
        answer: "C",
        lesson: "深蓝的天空中挂着一轮金黄的圆月，下面是海边的沙地，都种着一望无际的西瓜。期间有一个十二岁的少年，项带银圈，手捏一柄钢叉，向一匹猹用力地扎去。这位少年便是闰土。"
    }, {
        num: 13,
        subject: "13.《三味书屋》的主人公鲁迅在课桌上刻了一个__字",
        a: "A早",
        b: "B火",
        c: "C花",
        d: "D草",
        answer: "A",
        lesson: '三味书屋从前是一个书塾，鲁迅小时候在那里读书、习字，现在是绍兴鲁迅纪念馆的一部分。鲁迅的书桌上刻着一个小小的"早"字。字横着，很像一个还没开放的花骨朵，又像一支小小的火把。'
    }, {
        num: 14,
        subject: "14.董存瑞手持炸药包炸碉堡时说了一句什么话？",
        a: "A为了新中国，死而无憾！",
        b: "B和敌人同归于尽啊！",
        c: "C为了中华民族，拼了！",
        d: "D为了新中国，冲啊！",
        answer: "D",
        lesson: "总攻的号角吹响了。董存瑞毅然举起炸药包，用他的血肉之躯做成了支撑点，坚定的拉响了导火索，董存瑞使用浑身力气，高呼：\"为了新中国，同志们冲啊！\"随着一声天崩地裂地巨响，火光四溅，为了新中国，董存瑞献出了他年仅19岁的生命。"
    }, {
        num: 15,
        subject: "15.\"我正觉得我肚子里的墨水太少呢！\"此段文字讲述的是？",
        a: "A陈毅",
        b: "B陈赓",
        c: "C陈云",
        d: "D朱德",
        answer: "A",
        lesson: "有一年陈毅在亲戚家读一本很感兴趣的书。亲戚几次催他吃饭，他仍专心读书。亲戚就把饭给他端去，谁知他嘴里吃着糍粑，却还沉浸在书中。他竟把糍粑伸到砚台里蘸上墨汁往嘴里送。过了一会儿，亲戚又给他端面去，只见他满嘴都是墨，大伙一瞧都忍不住捧腹大笑。陈毅却很风趣地说：“喝点墨水没关系，我正觉得肚子里墨水少哩!”"  
    }, {
        num: 16,
        subject: "16.课文《为中华之崛起而读书》讲述的是谁的故事？",
        a: "A毛泽东",
        b: "B周恩来",
        c: "C邓小平",
        d: "D孙中山",
        answer: "B",
        lesson: "在周恩来小时候。一位姓魏的校长给学生们上修身课，当讲到“立命”这一节时，老校长突然问：“同学们为什么读书啊？”有的学生回答“为明礼而读书”，也有的答“为做官而读书”等等，老校长对这些答案都不满意，连连摇头。 当问到周恩来时， 周恩来站起来清晰而有力地答道：“我为中华之崛起而读书！”"
    }]
};

var config = {
    ImgSrc: { // 图片地址
        Home: "'https://img1.qunarzz.com/desmisact/images/1806/fe/fdf7437a132f25.png'",
        CountDown: "'https://img1.qunarzz.com/desmisact/images/1806/9d/4837d1acaabda.png'",
        Count3: "https://img1.qunarzz.com/desmisact/images/1806/15/c65ad84ee01a7f.png",
        Count2: "https://img1.qunarzz.com/desmisact/images/1806/cd/017ad672431b0b.png",
        Count1: "https://img1.qunarzz.com/desmisact/images/1806/30/61c95ca623ce1c.png",
        List: "https://img1.qunarzz.com/desmisact/images/1806/84/7adc36548e3616.png",
        Option: "'https://img1.qunarzz.com/desmisact/images/1806/45/9226d6ab131465.png'",
        OptionRight: "'https://img1.qunarzz.com/desmisact/images/1806/d3/147a01644becc9.png'",
        OptionWrong: "'https://img1.qunarzz.com/desmisact/images/1806/16/eb6ef038703aa5.png'",
        Right: "https://img1.qunarzz.com/desmisact/images/1806/d3/147a01644becc9.png",
        Wrong: "https://img1.qunarzz.com/desmisact/images/1806/16/eb6ef038703aa5.png",
        Usual: "https://img1.qunarzz.com/desmisact/images/1806/45/9226d6ab131465.png",
        Done: "'https://img1.qunarzz.com/desmisact/images/1806/b9/b96cda3fc61ee6.png'",
        Low: "'https://img1.qunarzz.com/desmisact/images/1806/f5/ea38f7c5dfccd3.png'",
        Nomal: "'https://img1.qunarzz.com/desmisact/images/1806/35/8d0853f971c343.png'",
        High: "'https://img1.qunarzz.com/desmisact/images/1806/c7/d2e82b56034f4b.png'",
        lesson: "'https://img1.qunarzz.com/desmisact/images/1806/1a/763a5cee3d636.png'"
    },
    Phone: { // 手机宽高
        width: window.screen.availWidth,
        height: window.screen.availHeight,
        htmlbackground: ['#FFDF40', '#7ABE45', '#FFACB0', '#DF1F31', '#8553F6', '#3984DE', '#112742']
    },
    templete: {
        FirstPlayBtn: "<div id='FirstPlayBtn'></div>",
        CountImg: "<img src='' id='countImg'>",
        rand: "<div id=\"rand\"><div id=\"randChild\"></div></div>",
        lesson: "<div id=\"lesson\"></div>",
        title: " <div id=\"title\">01.《卖火柴的小女孩》中的小女孩最后的命运如何？</div> ",
        optionA: " <div class=\"Option OptionA\"><img src=\"https://img1.qunarzz.com/desmisact/images/1806/45/9226d6ab131465.png\"><p class=\"pa\"></p></div>",
        optionB: " <div class=\"Option OptionB\"><img src=\"https://img1.qunarzz.com/desmisact/images/1806/45/9226d6ab131465.png\"><p class=\"pb\"></p></div>",
        optionC: " <div class=\"Option OptionC\"><img src=\"https://img1.qunarzz.com/desmisact/images/1806/45/9226d6ab131465.png\"><p class=\"pc\"></p></div>",
        optionD: " <div class=\"Option OptionD\"><img src=\"https://img1.qunarzz.com/desmisact/images/1806/45/9226d6ab131465.png\"><p class=\"pd\"></p></div>",
        source: "<div id=\"source\"></div>",
        buttonUrl: "  <div id=\"Btn1\"></div><div id=\"Btn2\"></div><div id=\"Btn3\"></div>", //结束后的三个button
        buttonDone: "<div id=\"black\"></div>"
    },
    Time: 1000, //倒计时间隔秒数
    ScreenTime: 500, //场景切换秒数
    html: "",
    waitTime: 2000,
    randValue: "0"

    // domready
}; $(document).ready(function () {
    $(document).on('touchmove', function (e) {
        e.preventDefault();
    });
    init();
});

function init() {
    var app = document.getElementById("app");
    var body = document.getElementsByTagName("body")[0];
    body.style.background = config.Phone.htmlbackground[0];
    app.style.background = config.Phone.htmlbackground[0];
    app.style.width = config.Phone.width + "px";
    app.style.height = config.Phone.height + "px";
    app.innerHTML = "<img src=" + config.ImgSrc.Home + "style=" + "width:100%;" + ">";
    app.innerHTML += config.templete.FirstPlayBtn;
    var FirstPlayBtn = document.getElementById("FirstPlayBtn");
    FirstPlayBtn.className += " BeiginBtn";
    FirstPlayBtn.addEventListener("click", screen1);
}

function screen1() {
    FirstPlayBtn.removeEventListener("click", screen1);
    var app = document.getElementById("app");
    var body = document.getElementsByTagName("body")[0];
    body.style.background = config.Phone.htmlbackground[1];
    app.style.background = config.Phone.htmlbackground[1];
    app.innerHTML = "<img src=" + config.ImgSrc.CountDown + "style=" + "width:100%;" + ">";
    app.innerHTML += config.templete.CountImg;
    var countImg = document.getElementById("countImg");
    countImg.src = config.ImgSrc.Count3;
    countImg.className += " Count";
    var Time = config.Time;
    setTimeout(function () {
        countImg.src = config.ImgSrc.Count2;
    }, Time);
    setTimeout(function () {
        countImg.src = config.ImgSrc.Count1;
    }, Time * 2);
    setTimeout(function () {
        screen2();
    }, Time * 3);
}

function screen2() {
    var app = document.getElementById("app");
    var body = document.getElementsByTagName("body")[0];

    body.style.background = config.Phone.htmlbackground[2];
    app.style.background = config.Phone.htmlbackground[2];
    app.innerHTML = "<img src=" + config.ImgSrc.List + " style=" + "width:100%;" + ">";
    app.innerHTML += config.templete.rand; //进度条
    //题目
    app.innerHTML += config.templete.title;
    // 四个选项
    app.innerHTML += config.templete.optionA;
    app.innerHTML += config.templete.optionB;
    app.innerHTML += config.templete.optionC;
    app.innerHTML += config.templete.optionD;
    //rand 初始化
    var rand = document.getElementById("randChild");
    rand.style.width = 0 + "%";
    _play.play();
}
// 触发一次锁
var lock = true;
// 事件代理
var _play = {
    gameNum: 0,
    source: 0,
    play: function play() {
        //console.log(play.gameNum);
        //let app = document.getElementById("app");
        var ap = document.getElementsByClassName("pa")[0];
        var bp = document.getElementsByClassName("pb")[0];
        var cp = document.getElementsByClassName("pc")[0];
        var dp = document.getElementsByClassName("pd")[0];
        ap.innerText = question.data[_play.gameNum].a;
        bp.innerText = question.data[_play.gameNum].b;
        cp.innerText = question.data[_play.gameNum].c;
        dp.innerText = question.data[_play.gameNum].d;
        var aDom = document.getElementsByClassName("OptionA")[0];
        var bDom = document.getElementsByClassName("OptionB")[0];
        var cDom = document.getElementsByClassName("OptionC")[0];
        var dDom = document.getElementsByClassName("OptionD")[0];
        aDom.children[0].src = config.ImgSrc.Usual;
        bDom.children[0].src = config.ImgSrc.Usual;
        cDom.children[0].src = config.ImgSrc.Usual;
        dDom.children[0].src = config.ImgSrc.Usual;
        var title = document.getElementById("title");
        title.innerText = question.data[_play.gameNum].subject;

        switch (question.data[this.gameNum].answer) {
            case "A":
                aDom.addEventListener('click', function () {
                    _play.right("OptionA");
                }, false);
                bDom.addEventListener('click', function () {
                    _play.wrong("OptionB");
                }, false);
                cDom.addEventListener('click', function () {
                    _play.wrong("OptionC");
                }, false);
                dDom.addEventListener('click', function () {
                    _play.wrong("OptionD");
                }, false);
                break;
            case "B":
                aDom.addEventListener('click', function () {
                    _play.wrong("OptionA");
                }, false);
                bDom.addEventListener('click', function () {
                    _play.right("OptionB");
                }, false);
                cDom.addEventListener('click', function () {
                    _play.wrong("OptionC");
                }, false);
                dDom.addEventListener('click', function () {
                    _play.wrong("OptionD");
                }, false);
                break;
            case "C":
                aDom.addEventListener('click', function () {
                    _play.wrong("OptionA");
                }, false);
                bDom.addEventListener('click', function () {
                    _play.wrong("OptionB");
                }, false);
                cDom.addEventListener('click', function () {
                    _play.right("OptionC");
                }, false);
                dDom.addEventListener('click', function () {
                    _play.wrong("OptionD");
                }, false);
                break;
            case "D":
                aDom.addEventListener('click', function () {
                    _play.wrong("OptionA");
                }, false);
                bDom.addEventListener('click', function () {
                    _play.wrong("OptionB");
                }, false);
                cDom.addEventListener('click', function () {
                    _play.wrong("OptionC");
                }, false);
                dDom.addEventListener('click', function () {
                    _play.right("OptionD");
                }, false);
                break;
        }
    },
     right: function right(str) {
        if (lock) {
            lock = false;
            console.log(lock);
            var text = document.getElementsByClassName(str)[0];
            text.children[0].src = config.ImgSrc.Right;
            _play.gameNum++;
            _play.clear();
            var rand = document.getElementById("randChild");
            config.randValue = parseFloat(config.randValue) + 6.25 + "%";
            rand.style.width = config.randValue;
            // console.log(rand.style.width);
            setTimeout(function () {
                _play.lesson();
            }, config.ScreenTime);
            _play.source += 1;
            // console.log(play.source);
            // if (_play.gameNum == 16) {
            //     done();
            // }
        }
    },

    wrong: function wrong(str) {
        if (lock) {
            lock = false;
            console.log(lock);
            var text = document.getElementsByClassName(str)[0];
            text.children[0].src = config.ImgSrc.Wrong;
            _play.gameNum++;
            _play.clear();
            var rand = document.getElementById("randChild");
            config.randValue = parseFloat(config.randValue) + 6.25 + "%";
            rand.style.width = config.randValue;
            //   console.log(rand.style.width);
            setTimeout(function () {
                _play.lesson();
            }, config.ScreenTime);
            //   console.log(play.source);
       
        }
    },

    lesson: function lesson() {

        lock = true;
        var app = document.getElementById("app");
        config.html = app.innerHTML;
        app.innerHTML = "";
        app.innerHTML += config.templete.lesson;
        app.innerHTML += config.templete.rand;
        app.innerHTML += "<img src=" + config.ImgSrc.lesson + " style=\"width:100%;\">";
        app.innerHTML += config.templete.title;
        var title = document.getElementById("title");
        var rand = document.getElementById("randChild");
        rand.style.width = config.randValue;
        title.innerText = question.data[_play.gameNum - 1].subject;
        var lesson = document.getElementById("lesson");
        lesson.innerText = question.data[_play.gameNum - 1].lesson;
        if (_play.gameNum == 16) {
            app.addEventListener("click", done);
        }else{
            app.addEventListener("click", _play.renderer);
        }
    },
    renderer: function renderer() {
        app.removeEventListener("click", _play.renderer);
        app.innerHTML = config.html;
        _play.play();
    },
    clear: function clear() {
        var aDom = document.getElementsByClassName("OptionA")[0];
        var bDom = document.getElementsByClassName("OptionB")[0];
        var cDom = document.getElementsByClassName("OptionC")[0];
        var dDom = document.getElementsByClassName("OptionD")[0];

        aDom.removeEventListener("click", _play.right);
        bDom.removeEventListener("click", _play.right);
        cDom.removeEventListener("click", _play.right);
        dDom.removeEventListener("click", _play.right);

        aDom.removeEventListener("click", _play.wrong);
        bDom.removeEventListener("click", _play.wrong);
        cDom.removeEventListener("click", _play.wrong);
        dDom.removeEventListener("click", _play.wrong);
    }
};

function done() {
    var app = document.getElementById("app");
    app.removeEventListener("click", done);
    var html = app.innerHTML;
    console.log("done");
    app.innerHTML = "";
    app.innerHTML = "<img src=" + config.ImgSrc.Done + " style=\"width:100%;\">";
    app.innerHTML += "<img src=\"https://img1.qunarzz.com/desmisact/images/1806/92/a133377d48541b.jpg\" id=\"AD\" >";
    setTimeout(function () {
        over();
    }, config.waitTime);
}

function over() {
    console.log("over");
    var app = document.getElementById("app");
    var body = document.getElementsByTagName("body")[0];
     console.log(_play.source);
   if ( _play.source == 16) {   //100分
        body.style.background = config.Phone.htmlbackground[3];
        app.style.background = config.Phone.htmlbackground[3];
        app.innerHTML = "<img src=" + config.ImgSrc.High + "style=" + "width:100%;" + ">";
        rendererSource("100");
       console.log("100");
    } else if (parseInt(_play.source*6.25)>= 80&&parseInt(_play.source*6.25)!=100) { // 99-80
        body.style.background = config.Phone.htmlbackground[3];
        app.style.background = config.Phone.htmlbackground[3];
        app.innerHTML = "<img src=" + config.ImgSrc.High + "style=" + "width:100%;" + ">";
        rendererSource();   //80 -60
      console.log("80-60");
    } else if(parseInt(_play.source*6.25)<80&&parseInt(_play.source*6.25)>=60){
        body.style.background = config.Phone.htmlbackground[4];
        app.style.background = config.Phone.htmlbackground[4];
        app.innerHTML = "<img src=" + config.ImgSrc.Nomal + "style=" + "width:100%;" + ">";
        rendererSource();
    }else if(parseInt(_play.source*6.25)>=10&&parseInt(_play.source*6.25)<60) {  //个位数的大佬
        body.style.background = config.Phone.htmlbackground[5];
        app.style.background = config.Phone.htmlbackground[5];
        app.innerHTML = "<img src=" + config.ImgSrc.Low + "style=" + "width:100%;" + ">";
        rendererSource();
    }else if(parseInt(_play.source*6.25)<10){
        body.style.background = config.Phone.htmlbackground[5];
        app.style.background = config.Phone.htmlbackground[5];
        app.innerHTML = "<img src=" + config.ImgSrc.Low + "style=" + "width:100%;" + ">";
        rendererSource("0");
    }
}

function rendererSource(str) {
    var app = document.getElementById("app");
    app.innerHTML += config.templete.source;
    var source = document.getElementById("source");
    app.removeEventListener("click", done);
    if(str=="0"){
       source.style.right = 0.5+"rem";
    }
    if(str=="100"){
        source.style.right = 0.23+"rem";
    }
    source.innerText = parseInt(_play.source*6.25);
    app.innerHTML += config.templete.buttonUrl;
    var Btn1 = document.getElementById("Btn1");
    $("#Btn1").attr("action-type","click").attr("qrac-id","D_homework");
    $("#Btn2").attr("action-type","click").attr("qrac-id","D_game_dalibao");
    $("#Btn3").attr("action-type","click").attr("qrac-id","D_game_share");
 
    btn3ADD();
    
}


function btn3ADD(){
    Btn1.addEventListener("click", function () {
        location.href = "https://touch.qunar.com/mis/6bYbum?bd_source=zthd_805677";
    });
    Btn2.addEventListener("click", function () {
        location.href = "https://d.qunar.com/P2wpZS";
    });
    Btn3.addEventListener("click", function () {
        var app = document.getElementById("app");
        app.innerHTML += config.templete.buttonDone;
        //app.innerHTML = " <img src=\"https://img1.qunarzz.com/desmisact/images/1806/a2/de51dbfeadb75d.png\" style=\"width:100%\">";
        app.innerHTML += "<img id=\"blackimg\" src=\"https://img1.qunarzz.com/desmisact/images/1806/cc/5f2f827ab10a3d.png\">";
        var body = document.getElementsByTagName("body")[0];
        body.style.background = config.Phone.htmlbackground[6];
        app.style.background = config.Phone.htmlbackground[6];
        var black = document.getElementById("black");
        var blackimg = document.getElementById("blackimg");
        black.addEventListener("click",function(){
            app.removeChild(blackimg);
            app.removeChild(black);
            btn3ADD();
        });
        blackimg.addEventListener("click",function(){
            app.removeChild(blackimg);
            app.removeChild(black);
            btn3ADD();
        });
    });
}


// 线上专题链接:https://touch.qunar.com/mis/vuiMZz