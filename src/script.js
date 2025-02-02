// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: '6dh2TTlvBdY',
        events: {
            'onReady': onPlayerReady,
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    createVideoDataButtons();
    event.target.playVideo();
}

const videoData = [
    {
      "publishedAt": "2021-12-03T16:40:20Z",
      "title": "40万人記念！自分の切り抜きを見るぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=klewiLktS6I",
      "videoId": "klewiLktS6I",
      "startTime": 331,
      "startUrl": "https://www.youtube.com/watch?v=klewiLktS6I&t=331s"
    },
    {
      "publishedAt": "2021-12-03T16:40:20Z",
      "title": "40万人記念！自分の切り抜きを見るぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=klewiLktS6I",
      "videoId": "klewiLktS6I",
      "startTime": 358,
      "startUrl": "https://www.youtube.com/watch?v=klewiLktS6I&t=358s"
    },
    {
      "publishedAt": "2021-12-03T16:40:20Z",
      "title": "40万人記念！自分の切り抜きを見るぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=klewiLktS6I",
      "videoId": "klewiLktS6I",
      "startTime": 471,
      "startUrl": "https://www.youtube.com/watch?v=klewiLktS6I&t=471s"
    },
    {
      "publishedAt": "2021-12-03T16:40:20Z",
      "title": "40万人記念！自分の切り抜きを見るぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=klewiLktS6I",
      "videoId": "klewiLktS6I",
      "startTime": 588,
      "startUrl": "https://www.youtube.com/watch?v=klewiLktS6I&t=588s"
    },
    {
      "publishedAt": "2021-12-03T16:40:20Z",
      "title": "40万人記念！自分の切り抜きを見るぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=klewiLktS6I",
      "videoId": "klewiLktS6I",
      "startTime": 674,
      "startUrl": "https://www.youtube.com/watch?v=klewiLktS6I&t=674s"
    },
    {
      "publishedAt": "2021-12-03T16:40:20Z",
      "title": "40万人記念！自分の切り抜きを見るぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=klewiLktS6I",
      "videoId": "klewiLktS6I",
      "startTime": 784,
      "startUrl": "https://www.youtube.com/watch?v=klewiLktS6I&t=784s"
    },
    {
      "publishedAt": "2021-12-03T16:40:20Z",
      "title": "40万人記念！自分の切り抜きを見るぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=klewiLktS6I",
      "videoId": "klewiLktS6I",
      "startTime": 809,
      "startUrl": "https://www.youtube.com/watch?v=klewiLktS6I&t=809s"
    },
    {
      "publishedAt": "2021-12-04T18:13:10Z",
      "title": "【ポケモンブリリアントダイヤモンド】#04 知識ほぼゼロ 女騎士の旅再び【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=tdl1t2AR9Rs",
      "videoId": "tdl1t2AR9Rs",
      "startTime": 3902,
      "startUrl": "https://www.youtube.com/watch?v=tdl1t2AR9Rs&t=3902s"
    },
    {
      "publishedAt": "2021-12-04T18:13:10Z",
      "title": "【ポケモンブリリアントダイヤモンド】#04 知識ほぼゼロ 女騎士の旅再び【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=tdl1t2AR9Rs",
      "videoId": "tdl1t2AR9Rs",
      "startTime": 6029,
      "startUrl": "https://www.youtube.com/watch?v=tdl1t2AR9Rs&t=6029s"
    },
    {
      "publishedAt": "2021-12-04T18:13:10Z",
      "title": "【ポケモンブリリアントダイヤモンド】#04 知識ほぼゼロ 女騎士の旅再び【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=tdl1t2AR9Rs",
      "videoId": "tdl1t2AR9Rs",
      "startTime": 12098,
      "startUrl": "https://www.youtube.com/watch?v=tdl1t2AR9Rs&t=12098s"
    },
    {
      "publishedAt": "2021-12-05T13:07:27Z",
      "title": "【ポケモンブリリアントダイヤモンド】#05 知識ほぼゼロ 女騎士の旅再び【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=pnYM10cGgWI",
      "videoId": "pnYM10cGgWI",
      "startTime": 1305,
      "startUrl": "https://www.youtube.com/watch?v=pnYM10cGgWI&t=1305s"
    },
    {
      "publishedAt": "2021-12-05T13:07:27Z",
      "title": "【ポケモンブリリアントダイヤモンド】#05 知識ほぼゼロ 女騎士の旅再び【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=pnYM10cGgWI",
      "videoId": "pnYM10cGgWI",
      "startTime": 3638,
      "startUrl": "https://www.youtube.com/watch?v=pnYM10cGgWI&t=3638s"
    },
    {
      "publishedAt": "2021-12-11T11:26:48Z",
      "title": "【ポケモンブリリアントダイヤモンド】#06 知識ほぼゼロ 女騎士の旅再び【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=wtIlWpvtuNE",
      "videoId": "wtIlWpvtuNE",
      "startTime": 1921,
      "startUrl": "https://www.youtube.com/watch?v=wtIlWpvtuNE&t=1921s"
    },
    {
      "publishedAt": "2021-12-11T11:26:48Z",
      "title": "【ポケモンブリリアントダイヤモンド】#06 知識ほぼゼロ 女騎士の旅再び【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=wtIlWpvtuNE",
      "videoId": "wtIlWpvtuNE",
      "startTime": 2850,
      "startUrl": "https://www.youtube.com/watch?v=wtIlWpvtuNE&t=2850s"
    },
    {
      "publishedAt": "2021-12-12T10:31:53Z",
      "title": "【ポケモンブリリアントダイヤモンド】#07 知識ほぼゼロ 女騎士の旅再び【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=b_PGU1DgXb4",
      "videoId": "b_PGU1DgXb4",
      "startTime": 523,
      "startUrl": "https://www.youtube.com/watch?v=b_PGU1DgXb4&t=523s"
    },
    {
      "publishedAt": "2021-12-16T15:39:12Z",
      "title": "【MinuteGlass】死を繰り返す女の子を救うゲーム【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=TJ1RZ0fyWfE",
      "videoId": "TJ1RZ0fyWfE",
      "startTime": 4576,
      "startUrl": "https://www.youtube.com/watch?v=TJ1RZ0fyWfE&t=4576s"
    },
    {
      "publishedAt": "2021-12-29T10:37:57Z",
      "title": "【ポケモンブリリアントダイヤモンド】#08 知識ほぼゼロ 女騎士の旅再び【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Mh0M72st-C8",
      "videoId": "Mh0M72st-C8",
      "startTime": 2552,
      "startUrl": "https://www.youtube.com/watch?v=Mh0M72st-C8&t=2552s"
    },
    {
      "publishedAt": "2021-12-29T10:37:57Z",
      "title": "【ポケモンブリリアントダイヤモンド】#08 知識ほぼゼロ 女騎士の旅再び【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Mh0M72st-C8",
      "videoId": "Mh0M72st-C8",
      "startTime": 4304,
      "startUrl": "https://www.youtube.com/watch?v=Mh0M72st-C8&t=4304s"
    },
    {
      "publishedAt": "2022-01-05T16:10:18Z",
      "title": "【雀魂】来いよリスナー‥ドラなんて捨ててかかってこい‥【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=6LIxG_VV4Ak",
      "videoId": "6LIxG_VV4Ak",
      "startTime": 6519,
      "startUrl": "https://www.youtube.com/watch?v=6LIxG_VV4Ak&t=6519s"
    },
    {
      "publishedAt": "2022-01-14T15:28:03Z",
      "title": "【Minecraft】アプデきたらしいし洞窟探検するか～～！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=qZa1oWzbYGM",
      "videoId": "qZa1oWzbYGM",
      "startTime": 256,
      "startUrl": "https://www.youtube.com/watch?v=qZa1oWzbYGM&t=256s"
    },
    {
      "publishedAt": "2022-01-18",
      "title": "【ママにゲーム隠された】やべっ【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=krNheJFswrc",
      "videoId": "krNheJFswrc",
      "startTime": 141,
      "startUrl": "https://www.youtube.com/watch?v=krNheJFswrc&t=141s"
    },
    {
      "publishedAt": "2022-01-18",
      "title": "【ママにゲーム隠された】やべっ【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=krNheJFswrc",
      "videoId": "krNheJFswrc",
      "startTime": 1618,
      "startUrl": "https://www.youtube.com/watch?v=krNheJFswrc&t=1618s"
    },
    {
      "publishedAt": "2022-01-22T08:25:27Z",
      "title": "【ポケモンブリリアントダイヤモンド】#09 知識ほぼゼロ 女騎士の旅再び【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=eLQsGpfL-7E",
      "videoId": "eLQsGpfL-7E",
      "startTime": 1337,
      "startUrl": "https://www.youtube.com/watch?v=eLQsGpfL-7E&t=1337s"
    },
    {
      "publishedAt": "2022-01-23T13:18:05Z",
      "title": "【ポケモンブリリアントダイヤモンド】シロナ戦！ 知識ほぼゼロ 女騎士の旅再び【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=FLhMrXsWACU",
      "videoId": "FLhMrXsWACU",
      "startTime": 3226,
      "startUrl": "https://www.youtube.com/watch?v=FLhMrXsWACU&t=3226s"
    },
    {
      "publishedAt": "2022-01-24T16:22:28Z",
      "title": "【雑談】ポテトSかMか問題【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=ERVcNXsozRk",
      "videoId": "ERVcNXsozRk",
      "startTime": 1887,
      "startUrl": "https://www.youtube.com/watch?v=ERVcNXsozRk&t=1887s"
    },
    {
      "publishedAt": "2022-01-24T16:22:28Z",
      "title": "【雑談】ポテトSかMか問題【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=ERVcNXsozRk",
      "videoId": "ERVcNXsozRk",
      "startTime": 1908,
      "startUrl": "https://www.youtube.com/watch?v=ERVcNXsozRk&t=1908s"
    },
    {
      "publishedAt": "2022-01-29T11:44:50Z",
      "title": "【ポケモンレジェンズアルセウス】#01 新しい冒険の始まりだ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=ijvN-p4Csrw",
      "videoId": "ijvN-p4Csrw",
      "startTime": 8607,
      "startUrl": "https://www.youtube.com/watch?v=ijvN-p4Csrw&t=8607s"
    },
    {
      "publishedAt": "2022-01-29T11:44:50Z",
      "title": "【ポケモンレジェンズアルセウス】#01 新しい冒険の始まりだ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=ijvN-p4Csrw",
      "videoId": "ijvN-p4Csrw",
      "startTime": 8630,
      "startUrl": "https://www.youtube.com/watch?v=ijvN-p4Csrw&t=8630s"
    },
    {
      "publishedAt": "2022-01-29T11:44:50Z",
      "title": "【ポケモンレジェンズアルセウス】#01 新しい冒険の始まりだ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=ijvN-p4Csrw",
      "videoId": "ijvN-p4Csrw",
      "startTime": 17201,
      "startUrl": "https://www.youtube.com/watch?v=ijvN-p4Csrw&t=17201s"
    },
    {
      "publishedAt": "2022-01-31T16:16:00Z",
      "title": "【ポケモンレジェンズアルセウス】#02 ポケモンのケツ大好き騎士【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Zq19xinUlw4",
      "videoId": "Zq19xinUlw4",
      "startTime": 4084,
      "startUrl": "https://www.youtube.com/watch?v=Zq19xinUlw4&t=4084s"
    },
    {
      "publishedAt": "2022-01-31T16:16:00Z",
      "title": "【ポケモンレジェンズアルセウス】#02 ポケモンのケツ大好き騎士【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Zq19xinUlw4",
      "videoId": "Zq19xinUlw4",
      "startTime": 5827,
      "startUrl": "https://www.youtube.com/watch?v=Zq19xinUlw4&t=5827s"
    },
    {
      "publishedAt": "2022-02-03T16:03:46Z",
      "title": "【ポケモンレジェンズアルセウス】#03 楽しすぎて裏でやりすぎた女【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Nzz8oA3TqmY",
      "videoId": "Nzz8oA3TqmY",
      "startTime": 6136,
      "startUrl": "https://www.youtube.com/watch?v=Nzz8oA3TqmY&t=6136s"
    },
    {
      "publishedAt": "2022-02-06T12:14:21Z",
      "title": "【ポケモンレジェンズアルセウス】#05 ※この配信は寄り道多めです※【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=75ZDn_QYVms",
      "videoId": "75ZDn_QYVms",
      "startTime": 11119,
      "startUrl": "https://www.youtube.com/watch?v=75ZDn_QYVms&t=11119s"
    },
    {
      "publishedAt": "2022-02-08T16:13:46Z",
      "title": "【ポケモンレジェンズアルセウス】#06 あ！野生のフレンだ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=MrH81QkaFeA",
      "videoId": "MrH81QkaFeA",
      "startTime": 3190,
      "startUrl": "https://www.youtube.com/watch?v=MrH81QkaFeA&t=3190s"
    },
    {
      "publishedAt": "2022-02-11T16:45:00Z",
      "title": "タイトル画面から進ませてくれないゲーム【There Is No Game】",
      "url": "https://www.youtube.com/watch?v=8kS-sWYdJMc",
      "videoId": "8kS-sWYdJMc",
      "startTime": 2431,
      "startUrl": "https://www.youtube.com/watch?v=8kS-sWYdJMc&t=2431s"
    },
    {
      "publishedAt": "2022-02-17T15:24:39Z",
      "title": "【歌枠】落ち着いた曲を歌う枠【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=J8OAjp2LMBw",
      "videoId": "J8OAjp2LMBw",
      "startTime": 2522,
      "startUrl": "https://www.youtube.com/watch?v=J8OAjp2LMBw&t=2522s"
    },
    {
      "publishedAt": "2022-02-20T16:30:25Z",
      "title": "【Minecraft】なんということでしょう‥‥【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=nsc5GzJAfYM",
      "videoId": "nsc5GzJAfYM",
      "startTime": 679,
      "startUrl": "https://www.youtube.com/watch?v=nsc5GzJAfYM&t=679s"
    },
    {
      "publishedAt": "2022-02-20T16:30:25Z",
      "title": "【Minecraft】なんということでしょう‥‥【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=nsc5GzJAfYM",
      "videoId": "nsc5GzJAfYM",
      "startTime": 1037,
      "startUrl": "https://www.youtube.com/watch?v=nsc5GzJAfYM&t=1037s"
    },
    {
      "publishedAt": "2022-02-20T16:30:25Z",
      "title": "【Minecraft】なんということでしょう‥‥【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=nsc5GzJAfYM",
      "videoId": "nsc5GzJAfYM",
      "startTime": 1196,
      "startUrl": "https://www.youtube.com/watch?v=nsc5GzJAfYM&t=1196s"
    },
    {
      "publishedAt": "2022-02-20T16:30:25Z",
      "title": "【Minecraft】なんということでしょう‥‥【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=nsc5GzJAfYM",
      "videoId": "nsc5GzJAfYM",
      "startTime": 2644,
      "startUrl": "https://www.youtube.com/watch?v=nsc5GzJAfYM&t=2644s"
    },
    {
      "publishedAt": "2022-02-23T16:04:22Z",
      "title": "フレンの履歴書と免許証を作る【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=9a6_s5betMc",
      "videoId": "9a6_s5betMc",
      "startTime": 872,
      "startUrl": "https://www.youtube.com/watch?v=9a6_s5betMc&t=872s"
    },
    {
      "publishedAt": "2022-02-23T16:04:22Z",
      "title": "フレンの履歴書と免許証を作る【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=9a6_s5betMc",
      "videoId": "9a6_s5betMc",
      "startTime": 2307,
      "startUrl": "https://www.youtube.com/watch?v=9a6_s5betMc&t=2307s"
    },
    {
      "publishedAt": "2022-02-27T09:07:37Z",
      "title": "ナレーションが指示厨してくるので喧嘩します【ICEY】",
      "url": "https://www.youtube.com/watch?v=Vk0zIqxvYMU",
      "videoId": "Vk0zIqxvYMU",
      "startTime": 373,
      "startUrl": "https://www.youtube.com/watch?v=Vk0zIqxvYMU&t=373s"
    },
    {
      "publishedAt": "2022-02-27T09:07:37Z",
      "title": "ナレーションが指示厨してくるので喧嘩します【ICEY】",
      "url": "https://www.youtube.com/watch?v=Vk0zIqxvYMU",
      "videoId": "Vk0zIqxvYMU",
      "startTime": 894,
      "startUrl": "https://www.youtube.com/watch?v=Vk0zIqxvYMU&t=894s"
    },
    {
      "publishedAt": "2022-03-09T17:23:29Z",
      "title": "【#フレン生誕祭2022】みんなと一緒に迎える誕生日【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=JTUDxOK1z6E",
      "videoId": "JTUDxOK1z6E",
      "startTime": 4068,
      "startUrl": "https://www.youtube.com/watch?v=JTUDxOK1z6E&t=4068s"
    },
    {
      "publishedAt": "2022-03-09T17:23:29Z",
      "title": "【#フレン生誕祭2022】みんなと一緒に迎える誕生日【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=JTUDxOK1z6E",
      "videoId": "JTUDxOK1z6E",
      "startTime": 4091,
      "startUrl": "https://www.youtube.com/watch?v=JTUDxOK1z6E&t=4091s"
    },
    {
      "publishedAt": "2022-03-12T09:06:33Z",
      "title": "【ポケモンレジェンズアルセウス】大大大発生ポケモン捕獲隊【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=twSqdqGMw-U",
      "videoId": "twSqdqGMw-U",
      "startTime": 269,
      "startUrl": "https://www.youtube.com/watch?v=twSqdqGMw-U&t=269s"
    },
    {
      "publishedAt": "2022-03-13T13:02:17Z",
      "title": "【Vampire Survivors】隠しキャラ、ハイパーステージ色んな要素で遊ぶ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=YGDPvIVmNxM",
      "videoId": "YGDPvIVmNxM",
      "startTime": 1176,
      "startUrl": "https://www.youtube.com/watch?v=YGDPvIVmNxM&t=1176s"
    },
    {
      "publishedAt": "2022-03-13T13:02:17Z",
      "title": "【Vampire Survivors】隠しキャラ、ハイパーステージ色んな要素で遊ぶ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=YGDPvIVmNxM",
      "videoId": "YGDPvIVmNxM",
      "startTime": 1567,
      "startUrl": "https://www.youtube.com/watch?v=YGDPvIVmNxM&t=1567s"
    },
    {
      "publishedAt": "2022-03-13T13:02:17Z",
      "title": "【Vampire Survivors】隠しキャラ、ハイパーステージ色んな要素で遊ぶ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=YGDPvIVmNxM",
      "videoId": "YGDPvIVmNxM",
      "startTime": 4013,
      "startUrl": "https://www.youtube.com/watch?v=YGDPvIVmNxM&t=4013s"
    },
    {
      "publishedAt": "2022-03-13T13:02:17Z",
      "title": "【Vampire Survivors】隠しキャラ、ハイパーステージ色んな要素で遊ぶ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=YGDPvIVmNxM",
      "videoId": "YGDPvIVmNxM",
      "startTime": 5669,
      "startUrl": "https://www.youtube.com/watch?v=YGDPvIVmNxM&t=5669s"
    },
    {
      "publishedAt": "2022-03-13T13:02:17Z",
      "title": "【Vampire Survivors】隠しキャラ、ハイパーステージ色んな要素で遊ぶ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=YGDPvIVmNxM",
      "videoId": "YGDPvIVmNxM",
      "startTime": 14141,
      "startUrl": "https://www.youtube.com/watch?v=YGDPvIVmNxM&t=14141s"
    },
    {
      "publishedAt": "2022-03-13T13:02:17Z",
      "title": "【Vampire Survivors】隠しキャラ、ハイパーステージ色んな要素で遊ぶ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=YGDPvIVmNxM",
      "videoId": "YGDPvIVmNxM",
      "startTime": 16175,
      "startUrl": "https://www.youtube.com/watch?v=YGDPvIVmNxM&t=16175s"
    },
    {
      "publishedAt": "2022-03-26T10:48:07Z",
      "title": "【星のカービィ ディスカバリー】完全初見！3Dかびたゃかゎぽょ～～～♡【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=UUCIrieWkQI",
      "videoId": "UUCIrieWkQI",
      "startTime": 84,
      "startUrl": "https://www.youtube.com/watch?v=UUCIrieWkQI&t=84s"
    },
    {
      "publishedAt": "2022-03-26T10:48:07Z",
      "title": "【星のカービィ ディスカバリー】完全初見！3Dかびたゃかゎぽょ～～～♡【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=UUCIrieWkQI",
      "videoId": "UUCIrieWkQI",
      "startTime": 882,
      "startUrl": "https://www.youtube.com/watch?v=UUCIrieWkQI&t=882s"
    },
    {
      "publishedAt": "2022-03-27T13:53:55Z",
      "title": "【星のカービィ ディスカバリー】完全初見！私も吸われたいナア【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=EjT0rf9PpTo",
      "videoId": "EjT0rf9PpTo",
      "startTime": 1081,
      "startUrl": "https://www.youtube.com/watch?v=EjT0rf9PpTo&t=1081s"
    },
    {
      "publishedAt": "2022-03-27T13:53:55Z",
      "title": "【星のカービィ ディスカバリー】完全初見！私も吸われたいナア【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=EjT0rf9PpTo",
      "videoId": "EjT0rf9PpTo",
      "startTime": 11218,
      "startUrl": "https://www.youtube.com/watch?v=EjT0rf9PpTo&t=11218s"
    },
    {
      "publishedAt": "2022-04-03T09:57:16Z",
      "title": "【星のカービィ ディスカバリー】#03 完全初見！砂漠への挑戦‥！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=cz3dfnnIIAQ",
      "videoId": "cz3dfnnIIAQ",
      "startTime": 13936,
      "startUrl": "https://www.youtube.com/watch?v=cz3dfnnIIAQ&t=13936s"
    },
    {
      "publishedAt": "2022-04-06T16:10:53Z",
      "title": "【無人島】一つだけ物を持っていけるとしたらどうする？【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=pubYyMvmQ9M",
      "videoId": "pubYyMvmQ9M",
      "startTime": 151,
      "startUrl": "https://www.youtube.com/watch?v=pubYyMvmQ9M&t=151s"
    },
    {
      "publishedAt": "2022-04-10T17:22:50Z",
      "title": "【星のカービィ ディスカバリー】#04 完全初見！ついに終盤‥？火山のボスに挑む！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=8YQ40iWowVk",
      "videoId": "8YQ40iWowVk",
      "startTime": 437,
      "startUrl": "https://www.youtube.com/watch?v=8YQ40iWowVk&t=437s"
    },
    {
      "publishedAt": "2022-04-10T17:22:50Z",
      "title": "【星のカービィ ディスカバリー】#04 完全初見！ついに終盤‥？火山のボスに挑む！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=8YQ40iWowVk",
      "videoId": "8YQ40iWowVk",
      "startTime": 8077,
      "startUrl": "https://www.youtube.com/watch?v=8YQ40iWowVk&t=8077s"
    },
    {
      "publishedAt": "2022-04-10T17:22:50Z",
      "title": "【星のカービィ ディスカバリー】#04 完全初見！ついに終盤‥？火山のボスに挑む！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=8YQ40iWowVk",
      "videoId": "8YQ40iWowVk",
      "startTime": 10373,
      "startUrl": "https://www.youtube.com/watch?v=8YQ40iWowVk&t=10373s"
    },
    {
      "publishedAt": "2022-04-10T17:22:50Z",
      "title": "【星のカービィ ディスカバリー】#04 完全初見！ついに終盤‥？火山のボスに挑む！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=8YQ40iWowVk",
      "videoId": "8YQ40iWowVk",
      "startTime": 10544,
      "startUrl": "https://www.youtube.com/watch?v=8YQ40iWowVk&t=10544s"
    },
    {
      "publishedAt": "2022-04-10T17:22:50Z",
      "title": "【星のカービィ ディスカバリー】#04 完全初見！ついに終盤‥？火山のボスに挑む！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=8YQ40iWowVk",
      "videoId": "8YQ40iWowVk",
      "startTime": 13785,
      "startUrl": "https://www.youtube.com/watch?v=8YQ40iWowVk&t=13785s"
    },
    {
      "publishedAt": "2022-04-14T16:24:14Z",
      "title": "【Who is Zombie】ゾンビか人間か選別するゲーム【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=UbgbgDSE4-A",
      "videoId": "UbgbgDSE4-A",
      "startTime": 562,
      "startUrl": "https://www.youtube.com/watch?v=UbgbgDSE4-A&t=562s"
    },
    {
      "publishedAt": "2022-04-15T16:02:15Z",
      "title": "【雑談】告知アリ！親知らずが見つかりました【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=ktwisOvbGqc",
      "videoId": "ktwisOvbGqc",
      "startTime": 110,
      "startUrl": "https://www.youtube.com/watch?v=ktwisOvbGqc&t=110s"
    },
    {
      "publishedAt": "2022-04-16T09:43:00Z",
      "title": "【MOTHER2】#01 完全初見！おとなもこどもも、おねーさんも【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=9GYhi7QeSLs",
      "videoId": "9GYhi7QeSLs",
      "startTime": 2115,
      "startUrl": "https://www.youtube.com/watch?v=9GYhi7QeSLs&t=2115s"
    },
    {
      "publishedAt": "2022-04-16T09:43:00Z",
      "title": "【MOTHER2】#01 完全初見！おとなもこどもも、おねーさんも【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=9GYhi7QeSLs",
      "videoId": "9GYhi7QeSLs",
      "startTime": 12083,
      "startUrl": "https://www.youtube.com/watch?v=9GYhi7QeSLs&t=12083s"
    },
    {
      "publishedAt": "2022-04-17T09:58:02Z",
      "title": "【MOTHER2】#02 完全初見！バットの似合う女騎士【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=6iC-mgQhlEo",
      "videoId": "6iC-mgQhlEo",
      "startTime": 4302,
      "startUrl": "https://www.youtube.com/watch?v=6iC-mgQhlEo&t=4302s"
    },
    {
      "publishedAt": "2022-04-17T09:58:02Z",
      "title": "【MOTHER2】#02 完全初見！バットの似合う女騎士【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=6iC-mgQhlEo",
      "videoId": "6iC-mgQhlEo",
      "startTime": 8004,
      "startUrl": "https://www.youtube.com/watch?v=6iC-mgQhlEo&t=8004s"
    },
    {
      "publishedAt": "2022-04-22T18:10:28Z",
      "title": "【スーパーマリオ3Dワールド】#フレンとこ で一緒にマリオ💓【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=T9RYRP-uul0",
      "videoId": "T9RYRP-uul0",
      "startTime": 5876,
      "startUrl": "https://www.youtube.com/watch?v=T9RYRP-uul0&t=5876s"
    },
    {
      "publishedAt": "2022-04-22T18:10:28Z",
      "title": "【スーパーマリオ3Dワールド】#フレンとこ で一緒にマリオ💓【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=T9RYRP-uul0",
      "videoId": "T9RYRP-uul0",
      "startTime": 8318,
      "startUrl": "https://www.youtube.com/watch?v=T9RYRP-uul0&t=8318s"
    },
    {
      "publishedAt": "2022-04-22T18:10:28Z",
      "title": "【スーパーマリオ3Dワールド】#フレンとこ で一緒にマリオ💓【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=T9RYRP-uul0",
      "videoId": "T9RYRP-uul0",
      "startTime": 13808,
      "startUrl": "https://www.youtube.com/watch?v=T9RYRP-uul0&t=13808s"
    },
    {
      "publishedAt": "2022-04-24T10:57:11Z",
      "title": "【MOTHER2】#03 完全初見！その名も名探偵コナン【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=ct-qVfScbSY",
      "videoId": "ct-qVfScbSY",
      "startTime": 2117,
      "startUrl": "https://www.youtube.com/watch?v=ct-qVfScbSY&t=2117s"
    },
    {
      "publishedAt": "2022-04-24T10:57:11Z",
      "title": "【MOTHER2】#03 完全初見！その名も名探偵コナン【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=ct-qVfScbSY",
      "videoId": "ct-qVfScbSY",
      "startTime": 13852,
      "startUrl": "https://www.youtube.com/watch?v=ct-qVfScbSY&t=13852s"
    },
    {
      "publishedAt": "2022-04-25T14:11:00Z",
      "title": "【#フレンアイドル新衣装】新衣装お披露目＆イラコン結果発表",
      "url": "https://www.youtube.com/watch?v=ODu2XV5Txfs",
      "videoId": "ODu2XV5Txfs",
      "startTime": 2388,
      "startUrl": "https://www.youtube.com/watch?v=ODu2XV5Txfs&t=2388s"
    },
    {
      "publishedAt": "2022-04-25T14:11:00Z",
      "title": "【#フレンアイドル新衣装】新衣装お披露目＆イラコン結果発表",
      "url": "https://www.youtube.com/watch?v=ODu2XV5Txfs",
      "videoId": "ODu2XV5Txfs",
      "startTime": 3684,
      "startUrl": "https://www.youtube.com/watch?v=ODu2XV5Txfs&t=3684s"
    },
    {
      "publishedAt": "2022-04-29T17:12:22Z",
      "title": "【パワプロ2022】ガチはじめてのパワプロ！サクセス進めるぞ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=iljeIg8jxMY",
      "videoId": "iljeIg8jxMY",
      "startTime": 5167,
      "startUrl": "https://www.youtube.com/watch?v=iljeIg8jxMY&t=5167s"
    },
    {
      "publishedAt": "2022-04-29T17:12:22Z",
      "title": "【パワプロ2022】ガチはじめてのパワプロ！サクセス進めるぞ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=iljeIg8jxMY",
      "videoId": "iljeIg8jxMY",
      "startTime": 5712,
      "startUrl": "https://www.youtube.com/watch?v=iljeIg8jxMY&t=5712s"
    },
    {
      "publishedAt": "2022-04-29T17:12:22Z",
      "title": "【パワプロ2022】ガチはじめてのパワプロ！サクセス進めるぞ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=iljeIg8jxMY",
      "videoId": "iljeIg8jxMY",
      "startTime": 8761,
      "startUrl": "https://www.youtube.com/watch?v=iljeIg8jxMY&t=8761s"
    },
    {
      "publishedAt": "2022-04-30T12:23:56Z",
      "title": "【MOTHER2】#04 完全初見！カポエラーを探して‥‥【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=vpJEwKq6DIU",
      "videoId": "vpJEwKq6DIU",
      "startTime": 1208,
      "startUrl": "https://www.youtube.com/watch?v=vpJEwKq6DIU&t=1208s"
    },
    {
      "publishedAt": "2022-04-30T12:23:56Z",
      "title": "【MOTHER2】#04 完全初見！カポエラーを探して‥‥【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=vpJEwKq6DIU",
      "videoId": "vpJEwKq6DIU",
      "startTime": 6881,
      "startUrl": "https://www.youtube.com/watch?v=vpJEwKq6DIU&t=6881s"
    },
    {
      "publishedAt": "2022-05-03T15:04:45Z",
      "title": "【MOTHER2】#05 完全初見！こころを取り戻すぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=33ZPrHP_G4Y",
      "videoId": "33ZPrHP_G4Y",
      "startTime": 3575,
      "startUrl": "https://www.youtube.com/watch?v=33ZPrHP_G4Y&t=3575s"
    },
    {
      "publishedAt": "2022-05-03T15:04:45Z",
      "title": "【MOTHER2】#05 完全初見！こころを取り戻すぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=33ZPrHP_G4Y",
      "videoId": "33ZPrHP_G4Y",
      "startTime": 4811,
      "startUrl": "https://www.youtube.com/watch?v=33ZPrHP_G4Y&t=4811s"
    },
    {
      "publishedAt": "2022-05-05T16:16:12Z",
      "title": "【Vampire Survivors】最弱キャラで先にクリアしたら勝ち！vs社さん【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=PDrVH7yi3OE",
      "videoId": "PDrVH7yi3OE",
      "startTime": 2034,
      "startUrl": "https://www.youtube.com/watch?v=PDrVH7yi3OE&t=2034s"
    },
    {
      "publishedAt": "2022-05-05T16:16:12Z",
      "title": "【Vampire Survivors】最弱キャラで先にクリアしたら勝ち！vs社さん【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=PDrVH7yi3OE",
      "videoId": "PDrVH7yi3OE",
      "startTime": 3138,
      "startUrl": "https://www.youtube.com/watch?v=PDrVH7yi3OE&t=3138s"
    },
    {
      "publishedAt": "2022-05-09T15:32:50Z",
      "title": "【MOTHER2】#06 完全初見！ピラミッドへの旅路！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=KQaCzJ4eRW0",
      "videoId": "KQaCzJ4eRW0",
      "startTime": 356,
      "startUrl": "https://www.youtube.com/watch?v=KQaCzJ4eRW0&t=356s"
    },
    {
      "publishedAt": "2022-05-09T15:32:50Z",
      "title": "【MOTHER2】#06 完全初見！ピラミッドへの旅路！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=KQaCzJ4eRW0",
      "videoId": "KQaCzJ4eRW0",
      "startTime": 4656,
      "startUrl": "https://www.youtube.com/watch?v=KQaCzJ4eRW0&t=4656s"
    },
    {
      "publishedAt": "2022-05-09T15:32:50Z",
      "title": "【MOTHER2】#06 完全初見！ピラミッドへの旅路！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=KQaCzJ4eRW0",
      "videoId": "KQaCzJ4eRW0",
      "startTime": 4918,
      "startUrl": "https://www.youtube.com/watch?v=KQaCzJ4eRW0&t=4918s"
    },
    {
      "publishedAt": "2022-05-09T15:32:50Z",
      "title": "【MOTHER2】#06 完全初見！ピラミッドへの旅路！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=KQaCzJ4eRW0",
      "videoId": "KQaCzJ4eRW0",
      "startTime": 5609,
      "startUrl": "https://www.youtube.com/watch?v=KQaCzJ4eRW0&t=5609s"
    },
    {
      "publishedAt": "2022-05-09T15:32:50Z",
      "title": "【MOTHER2】#06 完全初見！ピラミッドへの旅路！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=KQaCzJ4eRW0",
      "videoId": "KQaCzJ4eRW0",
      "startTime": 5920,
      "startUrl": "https://www.youtube.com/watch?v=KQaCzJ4eRW0&t=5920s"
    },
    {
      "publishedAt": "2022-05-09T15:32:50Z",
      "title": "【MOTHER2】#06 完全初見！ピラミッドへの旅路！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=KQaCzJ4eRW0",
      "videoId": "KQaCzJ4eRW0",
      "startTime": 6033,
      "startUrl": "https://www.youtube.com/watch?v=KQaCzJ4eRW0&t=6033s"
    },
    {
      "publishedAt": "2022-05-12T15:24:53Z",
      "title": "【Out of Sight】ぬいぐるみを使った新感覚ホラーゲーム【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=uhdYUjftk04",
      "videoId": "uhdYUjftk04",
      "startTime": 1574,
      "startUrl": "https://www.youtube.com/watch?v=uhdYUjftk04&t=1574s"
    },
    {
      "publishedAt": "2022-05-14T15:53:03Z",
      "title": "【MOTHER2】#07 完全初見！ペンロケは縛ろう！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=5wJTAUcRRKo",
      "videoId": "5wJTAUcRRKo",
      "startTime": 612,
      "startUrl": "https://www.youtube.com/watch?v=5wJTAUcRRKo&t=612s"
    },
    {
      "publishedAt": "2022-05-14T15:53:03Z",
      "title": "【MOTHER2】#07 完全初見！ペンロケは縛ろう！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=5wJTAUcRRKo",
      "videoId": "5wJTAUcRRKo",
      "startTime": 5660,
      "startUrl": "https://www.youtube.com/watch?v=5wJTAUcRRKo&t=5660s"
    },
    {
      "publishedAt": "2022-05-14T15:53:03Z",
      "title": "【MOTHER2】#07 完全初見！ペンロケは縛ろう！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=5wJTAUcRRKo",
      "videoId": "5wJTAUcRRKo",
      "startTime": 7487,
      "startUrl": "https://www.youtube.com/watch?v=5wJTAUcRRKo&t=7487s"
    },
    {
      "publishedAt": "2022-05-14T15:53:03Z",
      "title": "【MOTHER2】#07 完全初見！ペンロケは縛ろう！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=5wJTAUcRRKo",
      "videoId": "5wJTAUcRRKo",
      "startTime": 9512,
      "startUrl": "https://www.youtube.com/watch?v=5wJTAUcRRKo&t=9512s"
    },
    {
      "publishedAt": "2022-05-15T09:29:22Z",
      "title": "【MOTHER2】最終回 完全初見！大人も子供も、おねーさんも。【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=G72pxQqbKxw",
      "videoId": "G72pxQqbKxw",
      "startTime": 1281,
      "startUrl": "https://www.youtube.com/watch?v=G72pxQqbKxw&t=1281s"
    },
    {
      "publishedAt": "2022-05-15T09:29:22Z",
      "title": "【MOTHER2】最終回 完全初見！大人も子供も、おねーさんも。【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=G72pxQqbKxw",
      "videoId": "G72pxQqbKxw",
      "startTime": 4829,
      "startUrl": "https://www.youtube.com/watch?v=G72pxQqbKxw&t=4829s"
    },
    {
      "publishedAt": "2022-05-15T09:29:22Z",
      "title": "【MOTHER2】最終回 完全初見！大人も子供も、おねーさんも。【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=G72pxQqbKxw",
      "videoId": "G72pxQqbKxw",
      "startTime": 9443,
      "startUrl": "https://www.youtube.com/watch?v=G72pxQqbKxw&t=9443s"
    },
    {
      "publishedAt": "2022-05-15T09:29:22Z",
      "title": "【MOTHER2】最終回 完全初見！大人も子供も、おねーさんも。【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=G72pxQqbKxw",
      "videoId": "G72pxQqbKxw",
      "startTime": 10510,
      "startUrl": "https://www.youtube.com/watch?v=G72pxQqbKxw&t=10510s"
    },
    {
      "publishedAt": "2022-05-20T15:11:02Z",
      "title": "体育館の天井に挟まったマッチョを助けるゲーム【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=xLteZYKdMas",
      "videoId": "xLteZYKdMas",
      "startTime": 1072,
      "startUrl": "https://www.youtube.com/watch?v=xLteZYKdMas&t=1072s"
    },
    {
      "publishedAt": "2022-05-22T09:00:44Z",
      "title": "【RAFT】メイフでイカダのおうちを作りたい【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=_-qUH_DJt90",
      "videoId": "_-qUH_DJt90",
      "startTime": 5917,
      "startUrl": "https://www.youtube.com/watch?v=_-qUH_DJt90&t=5917s"
    },
    {
      "publishedAt": "2022-05-23T14:49:08Z",
      "title": "【プロセカ】誕生日ガチャ引いたり参加型したりする【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=wqnFUkZ8jo0",
      "videoId": "wqnFUkZ8jo0",
      "startTime": 660,
      "startUrl": "https://www.youtube.com/watch?v=wqnFUkZ8jo0&t=660s"
    },
    {
      "publishedAt": "2022-05-26T16:13:10Z",
      "title": "【Card Shark】イカサマで金を巻き上げる最強ゲーム【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=vx_f09CVw0k",
      "videoId": "vx_f09CVw0k",
      "startTime": 3332,
      "startUrl": "https://www.youtube.com/watch?v=vx_f09CVw0k&t=3332s"
    },
    {
      "publishedAt": "2022-05-26T16:13:10Z",
      "title": "【Card Shark】イカサマで金を巻き上げる最強ゲーム【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=vx_f09CVw0k",
      "videoId": "vx_f09CVw0k",
      "startTime": 7431,
      "startUrl": "https://www.youtube.com/watch?v=vx_f09CVw0k&t=7431s"
    },
    {
      "publishedAt": "2022-06-05T13:46:57Z",
      "title": "【ゲーム発展国++】笑顔の絶えないアットホームな職場です＾＾【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=zPoQ8qAy4Ew",
      "videoId": "zPoQ8qAy4Ew",
      "startTime": 1540,
      "startUrl": "https://www.youtube.com/watch?v=zPoQ8qAy4Ew&t=1540s"
    },
    {
      "publishedAt": "2022-06-05T13:46:57Z",
      "title": "【ゲーム発展国++】笑顔の絶えないアットホームな職場です＾＾【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=zPoQ8qAy4Ew",
      "videoId": "zPoQ8qAy4Ew",
      "startTime": 16648,
      "startUrl": "https://www.youtube.com/watch?v=zPoQ8qAy4Ew&t=16648s"
    },
    {
      "publishedAt": "2022-06-08T14:49:26Z",
      "title": "【ときどきメモリーズ２Lite】女の子を5人同時に惚れさせるぞ！！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=46Y249i3dCE",
      "videoId": "46Y249i3dCE",
      "startTime": 3031,
      "startUrl": "https://www.youtube.com/watch?v=46Y249i3dCE&t=3031s"
    },
    {
      "publishedAt": "2022-06-17T16:42:16Z",
      "title": "【雑談】深夜のまったりレイディオ【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=N2TpTddX048",
      "videoId": "N2TpTddX048",
      "startTime": 4301,
      "startUrl": "https://www.youtube.com/watch?v=N2TpTddX048&t=4301s"
    },
    {
      "publishedAt": "2022-06-26T11:26:34Z",
      "title": "【まんが一本道〆】売れっ子漫画家目指します！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=1eCxqN3vlCU",
      "videoId": "1eCxqN3vlCU",
      "startTime": 8565,
      "startUrl": "https://www.youtube.com/watch?v=1eCxqN3vlCU&t=8565s"
    },
    {
      "publishedAt": "2022-06-30T14:53:24Z",
      "title": "【Aperture Desk Job】24時間対応受付中です！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=K-YAdN1SMfE",
      "videoId": "K-YAdN1SMfE",
      "startTime": 1504,
      "startUrl": "https://www.youtube.com/watch?v=K-YAdN1SMfE&t=1504s"
    },
    {
      "publishedAt": "2022-07-01T14:59:14Z",
      "title": "【Minecraft】ひさびさ！家の周辺整備するよ～～！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=lPQSn8KiJHc",
      "videoId": "lPQSn8KiJHc",
      "startTime": 5413,
      "startUrl": "https://www.youtube.com/watch?v=lPQSn8KiJHc&t=5413s"
    },
    {
      "publishedAt": "2022-07-02T12:04:41Z",
      "title": "【まんが一本道〆】夢の印税生活目指しちゃうぞ♡【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=AE6g6hvo7g8",
      "videoId": "AE6g6hvo7g8",
      "startTime": 8853,
      "startUrl": "https://www.youtube.com/watch?v=AE6g6hvo7g8&t=8853s"
    },
    {
      "publishedAt": "2022-07-02T12:04:41Z",
      "title": "【まんが一本道〆】夢の印税生活目指しちゃうぞ♡【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=AE6g6hvo7g8",
      "videoId": "AE6g6hvo7g8",
      "startTime": 9444,
      "startUrl": "https://www.youtube.com/watch?v=AE6g6hvo7g8&t=9444s"
    },
    {
      "publishedAt": "2022-07-02T12:04:41Z",
      "title": "【まんが一本道〆】夢の印税生活目指しちゃうぞ♡【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=AE6g6hvo7g8",
      "videoId": "AE6g6hvo7g8",
      "startTime": 10237,
      "startUrl": "https://www.youtube.com/watch?v=AE6g6hvo7g8&t=10237s"
    },
    {
      "publishedAt": "2022-07-02T12:04:41Z",
      "title": "【まんが一本道〆】夢の印税生活目指しちゃうぞ♡【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=AE6g6hvo7g8",
      "videoId": "AE6g6hvo7g8",
      "startTime": 10677,
      "startUrl": "https://www.youtube.com/watch?v=AE6g6hvo7g8&t=10677s"
    },
    {
      "publishedAt": "2022-07-03T11:23:47Z",
      "title": "【まんが一本道〆】こちら人気漫画家ですが＾＾なにか？＾＾【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=yokT3I15OSg",
      "videoId": "yokT3I15OSg",
      "startTime": 4739,
      "startUrl": "https://www.youtube.com/watch?v=yokT3I15OSg&t=4739s"
    },
    {
      "publishedAt": "2022-07-08T16:02:11Z",
      "title": "【Minecraft】実におもしろい……(強制終了)【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=wapyYwgZgvI",
      "videoId": "wapyYwgZgvI",
      "startTime": 1407,
      "startUrl": "https://www.youtube.com/watch?v=wapyYwgZgvI&t=1407s"
    },
    {
      "publishedAt": "2022-07-09T15:35:58Z",
      "title": "【まんが一本道〆】宇宙一の漫画家目指してます【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=PnIiixuu5zM",
      "videoId": "PnIiixuu5zM",
      "startTime": 1955,
      "startUrl": "https://www.youtube.com/watch?v=PnIiixuu5zM&t=1955s"
    },
    {
      "publishedAt": "2022-07-09T15:35:58Z",
      "title": "【まんが一本道〆】宇宙一の漫画家目指してます【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=PnIiixuu5zM",
      "videoId": "PnIiixuu5zM",
      "startTime": 2238,
      "startUrl": "https://www.youtube.com/watch?v=PnIiixuu5zM&t=2238s"
    },
    {
      "publishedAt": "2022-07-09T15:35:58Z",
      "title": "【まんが一本道〆】宇宙一の漫画家目指してます【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=PnIiixuu5zM",
      "videoId": "PnIiixuu5zM",
      "startTime": 4605,
      "startUrl": "https://www.youtube.com/watch?v=PnIiixuu5zM&t=4605s"
    },
    {
      "publishedAt": "2022-07-09T15:35:58Z",
      "title": "【まんが一本道〆】宇宙一の漫画家目指してます【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=PnIiixuu5zM",
      "videoId": "PnIiixuu5zM",
      "startTime": 7399,
      "startUrl": "https://www.youtube.com/watch?v=PnIiixuu5zM&t=7399s"
    },
    {
      "publishedAt": "2022-07-10T07:51:28Z",
      "title": "【雑談】おひるのおざつだん【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=qy1VJLm6m8w",
      "videoId": "qy1VJLm6m8w",
      "startTime": 854,
      "startUrl": "https://www.youtube.com/watch?v=qy1VJLm6m8w&t=854s"
    },
    {
      "publishedAt": "2022-07-14T16:52:49Z",
      "title": "【スーパーマリオ3Dワールド】#フレンとこ でマリオを攻略！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=SwXNiMot7vo",
      "videoId": "SwXNiMot7vo",
      "startTime": 9678,
      "startUrl": "https://www.youtube.com/watch?v=SwXNiMot7vo&t=9678s"
    },
    {
      "publishedAt": "2022-07-21T15:17:39Z",
      "title": "アヒルが100万回バウンドするまで帰れない【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=oxvaUYLvN4E",
      "videoId": "oxvaUYLvN4E",
      "startTime": 2193,
      "startUrl": "https://www.youtube.com/watch?v=oxvaUYLvN4E&t=2193s"
    },
    {
      "publishedAt": "2022-07-24T13:55:59Z",
      "title": "【まんが一本道〆】全ての出版社は私に平伏す【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=jvfYfiesxSg",
      "videoId": "jvfYfiesxSg",
      "startTime": 1033,
      "startUrl": "https://www.youtube.com/watch?v=jvfYfiesxSg&t=1033s"
    },
    {
      "publishedAt": "2022-07-24T13:55:59Z",
      "title": "【まんが一本道〆】全ての出版社は私に平伏す【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=jvfYfiesxSg",
      "videoId": "jvfYfiesxSg",
      "startTime": 6721,
      "startUrl": "https://www.youtube.com/watch?v=jvfYfiesxSg&t=6721s"
    },
    {
      "publishedAt": "2022-07-28T16:02:11Z",
      "title": "【Vampire Survivors】アプデ要素盛りだくさん！遊ぶぞ～！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=vvMhIWr47mA",
      "videoId": "vvMhIWr47mA",
      "startTime": 2300,
      "startUrl": "https://www.youtube.com/watch?v=vvMhIWr47mA&t=2300s"
    },
    {
      "publishedAt": "2022-07-28T16:02:11Z",
      "title": "【Vampire Survivors】アプデ要素盛りだくさん！遊ぶぞ～！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=vvMhIWr47mA",
      "videoId": "vvMhIWr47mA",
      "startTime": 3717,
      "startUrl": "https://www.youtube.com/watch?v=vvMhIWr47mA&t=3717s"
    },
    {
      "publishedAt": "2022-08-13T15:43:40Z",
      "title": "【MENSA IQ Test】IQ5000のフーディンです 対よろ【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=d3djWKZjQM4",
      "videoId": "d3djWKZjQM4",
      "startTime": 355,
      "startUrl": "https://www.youtube.com/watch?v=d3djWKZjQM4&t=355s"
    },
    {
      "publishedAt": "2022-08-19T17:46:43Z",
      "title": "【まんが一本道〆】そしてフレンは漫画界の頂点に君臨する【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=tANj6M74_xM",
      "videoId": "tANj6M74_xM",
      "startTime": 268,
      "startUrl": "https://www.youtube.com/watch?v=tANj6M74_xM&t=268s"
    },
    {
      "publishedAt": "2022-08-19T17:46:43Z",
      "title": "【まんが一本道〆】そしてフレンは漫画界の頂点に君臨する【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=tANj6M74_xM",
      "videoId": "tANj6M74_xM",
      "startTime": 639,
      "startUrl": "https://www.youtube.com/watch?v=tANj6M74_xM&t=639s"
    },
    {
      "publishedAt": "2022-08-19T17:46:43Z",
      "title": "【まんが一本道〆】そしてフレンは漫画界の頂点に君臨する【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=tANj6M74_xM",
      "videoId": "tANj6M74_xM",
      "startTime": 3197,
      "startUrl": "https://www.youtube.com/watch?v=tANj6M74_xM&t=3197s"
    },
    {
      "publishedAt": "2022-08-19T17:46:43Z",
      "title": "【まんが一本道〆】そしてフレンは漫画界の頂点に君臨する【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=tANj6M74_xM",
      "videoId": "tANj6M74_xM",
      "startTime": 5544,
      "startUrl": "https://www.youtube.com/watch?v=tANj6M74_xM&t=5544s"
    },
    {
      "publishedAt": "2022-08-19T17:46:43Z",
      "title": "【まんが一本道〆】そしてフレンは漫画界の頂点に君臨する【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=tANj6M74_xM",
      "videoId": "tANj6M74_xM",
      "startTime": 7841,
      "startUrl": "https://www.youtube.com/watch?v=tANj6M74_xM&t=7841s"
    },
    {
      "publishedAt": "2022-08-19T17:46:43Z",
      "title": "【まんが一本道〆】そしてフレンは漫画界の頂点に君臨する【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=tANj6M74_xM",
      "videoId": "tANj6M74_xM",
      "startTime": 9502,
      "startUrl": "https://www.youtube.com/watch?v=tANj6M74_xM&t=9502s"
    },
    {
      "publishedAt": "2022-08-26T16:44:01Z",
      "title": "【Placid Plastic Duck Simulator】プール時々アヒル時々フレン【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=l3oZCB45jtM",
      "videoId": "l3oZCB45jtM",
      "startTime": 5161,
      "startUrl": "https://www.youtube.com/watch?v=l3oZCB45jtM&t=5161s"
    },
    {
      "publishedAt": "2022-08-28T13:05:40Z",
      "title": "【スプラトゥーン3 前夜祭】52ガロンいるか！？お祭りじゃ～～～～！！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=zS_Gu16HD5w",
      "videoId": "zS_Gu16HD5w",
      "startTime": 1538,
      "startUrl": "https://www.youtube.com/watch?v=zS_Gu16HD5w&t=1538s"
    },
    {
      "publishedAt": "2022-08-28T13:05:40Z",
      "title": "【スプラトゥーン3 前夜祭】52ガロンいるか！？お祭りじゃ～～～～！！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=zS_Gu16HD5w",
      "videoId": "zS_Gu16HD5w",
      "startTime": 11548,
      "startUrl": "https://www.youtube.com/watch?v=zS_Gu16HD5w&t=11548s"
    },
    {
      "publishedAt": "2022-08-29T16:31:42Z",
      "title": "【Cult of the Lamb】み～～んなフレンの信者になろうね♡♡【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=BLcvJHaXAzI",
      "videoId": "BLcvJHaXAzI",
      "startTime": 2515,
      "startUrl": "https://www.youtube.com/watch?v=BLcvJHaXAzI&t=2515s"
    },
    {
      "publishedAt": "2022-08-29T16:31:42Z",
      "title": "【Cult of the Lamb】み～～んなフレンの信者になろうね♡♡【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=BLcvJHaXAzI",
      "videoId": "BLcvJHaXAzI",
      "startTime": 3927,
      "startUrl": "https://www.youtube.com/watch?v=BLcvJHaXAzI&t=3927s"
    },
    {
      "publishedAt": "2022-09-03T17:15:02Z",
      "title": "【Cult of the Lamb】リスナーのみんなを信者にしていくよ♡【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=--mDkVAGTOI",
      "videoId": "--mDkVAGTOI",
      "startTime": 10498,
      "startUrl": "https://www.youtube.com/watch?v=--mDkVAGTOI&t=10498s"
    },
    {
      "publishedAt": "2022-09-03T17:15:02Z",
      "title": "【Cult of the Lamb】リスナーのみんなを信者にしていくよ♡【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=--mDkVAGTOI",
      "videoId": "--mDkVAGTOI",
      "startTime": 11748,
      "startUrl": "https://www.youtube.com/watch?v=--mDkVAGTOI&t=11748s"
    },
    {
      "publishedAt": "2022-09-06T16:37:32Z",
      "title": "【スプラトゥーン2】リスナーのみんなと遊ぶぞ～！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Lz31JVM8CI0",
      "videoId": "Lz31JVM8CI0",
      "startTime": 2482,
      "startUrl": "https://www.youtube.com/watch?v=Lz31JVM8CI0&t=2482s"
    },
    {
      "publishedAt": "2022-09-06T16:37:32Z",
      "title": "【スプラトゥーン2】リスナーのみんなと遊ぶぞ～！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Lz31JVM8CI0",
      "videoId": "Lz31JVM8CI0",
      "startTime": 3455,
      "startUrl": "https://www.youtube.com/watch?v=Lz31JVM8CI0&t=3455s"
    },
    {
      "publishedAt": "2022-09-06T16:37:32Z",
      "title": "【スプラトゥーン2】リスナーのみんなと遊ぶぞ～！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Lz31JVM8CI0",
      "videoId": "Lz31JVM8CI0",
      "startTime": 3667,
      "startUrl": "https://www.youtube.com/watch?v=Lz31JVM8CI0&t=3667s"
    },
    {
      "publishedAt": "2022-09-06T16:37:32Z",
      "title": "【スプラトゥーン2】リスナーのみんなと遊ぶぞ～！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Lz31JVM8CI0",
      "videoId": "Lz31JVM8CI0",
      "startTime": 4149,
      "startUrl": "https://www.youtube.com/watch?v=Lz31JVM8CI0&t=4149s"
    },
    {
      "publishedAt": "2022-09-08T19:41:06Z",
      "title": "【スプラトゥーン3】この時を待ってた 遊び倒すぞ！！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=3l_klkdkeUc",
      "videoId": "3l_klkdkeUc",
      "startTime": 5843,
      "startUrl": "https://www.youtube.com/watch?v=3l_klkdkeUc&t=5843s"
    },
    {
      "publishedAt": "2022-09-10T18:16:10Z",
      "title": "【Cult of the Lamb】リスナーのみんなと新世界を作るよ♡【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=2QLJryx-edk",
      "videoId": "2QLJryx-edk",
      "startTime": 7155,
      "startUrl": "https://www.youtube.com/watch?v=2QLJryx-edk&t=7155s"
    },
    {
      "publishedAt": "2022-09-10T18:16:10Z",
      "title": "【Cult of the Lamb】リスナーのみんなと新世界を作るよ♡【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=2QLJryx-edk",
      "videoId": "2QLJryx-edk",
      "startTime": 8481,
      "startUrl": "https://www.youtube.com/watch?v=2QLJryx-edk&t=8481s"
    },
    {
      "publishedAt": "2022-09-10T18:16:10Z",
      "title": "【Cult of the Lamb】リスナーのみんなと新世界を作るよ♡【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=2QLJryx-edk",
      "videoId": "2QLJryx-edk",
      "startTime": 13443,
      "startUrl": "https://www.youtube.com/watch?v=2QLJryx-edk&t=13443s"
    },
    {
      "publishedAt": "2022-09-10T18:16:10Z",
      "title": "【Cult of the Lamb】リスナーのみんなと新世界を作るよ♡【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=2QLJryx-edk",
      "videoId": "2QLJryx-edk",
      "startTime": 17496,
      "startUrl": "https://www.youtube.com/watch?v=2QLJryx-edk&t=17496s"
    },
    {
      "publishedAt": "2022-09-10T18:16:10Z",
      "title": "【Cult of the Lamb】リスナーのみんなと新世界を作るよ♡【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=2QLJryx-edk",
      "videoId": "2QLJryx-edk",
      "startTime": 24945,
      "startUrl": "https://www.youtube.com/watch?v=2QLJryx-edk&t=24945s"
    },
    {
      "publishedAt": "2022-09-10T18:16:10Z",
      "title": "【Cult of the Lamb】リスナーのみんなと新世界を作るよ♡【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=2QLJryx-edk",
      "videoId": "2QLJryx-edk",
      "startTime": 29405,
      "startUrl": "https://www.youtube.com/watch?v=2QLJryx-edk&t=29405s"
    },
    {
      "publishedAt": "2022-09-10T18:16:10Z",
      "title": "【Cult of the Lamb】リスナーのみんなと新世界を作るよ♡【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=2QLJryx-edk",
      "videoId": "2QLJryx-edk",
      "startTime": 31473,
      "startUrl": "https://www.youtube.com/watch?v=2QLJryx-edk&t=31473s"
    },
    {
      "publishedAt": "2022-09-10T18:16:10Z",
      "title": "【Cult of the Lamb】リスナーのみんなと新世界を作るよ♡【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=2QLJryx-edk",
      "videoId": "2QLJryx-edk",
      "startTime": 31887,
      "startUrl": "https://www.youtube.com/watch?v=2QLJryx-edk&t=31887s"
    },
    {
      "publishedAt": "2022-09-14T17:13:48Z",
      "title": "【50万人直前！】自分の切り抜きを見るぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=AfuQrjuX35Y",
      "videoId": "AfuQrjuX35Y",
      "startTime": 3225,
      "startUrl": "https://www.youtube.com/watch?v=AfuQrjuX35Y&t=3225s"
    },
    {
      "publishedAt": "2022-09-14T17:13:48Z",
      "title": "【50万人直前！】自分の切り抜きを見るぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=AfuQrjuX35Y",
      "videoId": "AfuQrjuX35Y",
      "startTime": 3722,
      "startUrl": "https://www.youtube.com/watch?v=AfuQrjuX35Y&t=3722s"
    },
    {
      "publishedAt": "2022-09-14T17:13:48Z",
      "title": "【50万人直前！】自分の切り抜きを見るぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=AfuQrjuX35Y",
      "videoId": "AfuQrjuX35Y",
      "startTime": 3842,
      "startUrl": "https://www.youtube.com/watch?v=AfuQrjuX35Y&t=3842s"
    },
    {
      "publishedAt": "2022-09-17T19:10:46Z",
      "title": "【スプラトゥーン3】バンカラA＋目指すぞ～～！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Rhsb018Kfv8",
      "videoId": "Rhsb018Kfv8",
      "startTime": 965,
      "startUrl": "https://www.youtube.com/watch?v=Rhsb018Kfv8&t=965s"
    },
    {
      "publishedAt": "2022-09-17T12:42:37Z",
      "title": "【Cult of the Lamb】最終回！！リスナーのみんなと新しい世界を作ります【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=kgO4UphiBso",
      "videoId": "kgO4UphiBso",
      "startTime": 1938,
      "startUrl": "https://www.youtube.com/watch?v=kgO4UphiBso&t=1938s"
    },
    {
      "publishedAt": "2022-09-17T12:42:37Z",
      "title": "【Cult of the Lamb】最終回！！リスナーのみんなと新しい世界を作ります【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=kgO4UphiBso",
      "videoId": "kgO4UphiBso",
      "startTime": 2266,
      "startUrl": "https://www.youtube.com/watch?v=kgO4UphiBso&t=2266s"
    },
    {
      "publishedAt": "2022-09-17T12:42:37Z",
      "title": "【Cult of the Lamb】最終回！！リスナーのみんなと新しい世界を作ります【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=kgO4UphiBso",
      "videoId": "kgO4UphiBso",
      "startTime": 3176,
      "startUrl": "https://www.youtube.com/watch?v=kgO4UphiBso&t=3176s"
    },
    {
      "publishedAt": "2022-09-18T16:26:26Z",
      "title": "【スプラトゥーン3】激むずと噂のヒーローモード攻略するぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Qbc1UxJzKE0",
      "videoId": "Qbc1UxJzKE0",
      "startTime": 3200,
      "startUrl": "https://www.youtube.com/watch?v=Qbc1UxJzKE0&t=3200s"
    },
    {
      "publishedAt": "2022-09-18T16:26:26Z",
      "title": "【スプラトゥーン3】激むずと噂のヒーローモード攻略するぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Qbc1UxJzKE0",
      "videoId": "Qbc1UxJzKE0",
      "startTime": 10680,
      "startUrl": "https://www.youtube.com/watch?v=Qbc1UxJzKE0&t=10680s"
    },
    {
      "publishedAt": "2022-09-23T20:06:28Z",
      "title": "【スプラトゥーン3】SからS+になる女騎士【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=ndDSUIWmnAw",
      "videoId": "ndDSUIWmnAw",
      "startTime": 98,
      "startUrl": "https://www.youtube.com/watch?v=ndDSUIWmnAw&t=98s"
    },
    {
      "publishedAt": "2022-09-23T20:06:28Z",
      "title": "【スプラトゥーン3】SからS+になる女騎士【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=ndDSUIWmnAw",
      "videoId": "ndDSUIWmnAw",
      "startTime": 5637,
      "startUrl": "https://www.youtube.com/watch?v=ndDSUIWmnAw&t=5637s"
    },
    {
      "publishedAt": "2022-09-29T15:02:17Z",
      "title": "【Trombone Champ】秋　の　大　演　奏　会【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=ZHhrCwUSvuA",
      "videoId": "ZHhrCwUSvuA",
      "startTime": 320,
      "startUrl": "https://www.youtube.com/watch?v=ZHhrCwUSvuA&t=320s"
    },
    {
      "publishedAt": "2022-10-08T15:12:41Z",
      "title": "イブラヒムとフレンに100の質問！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=gwkHo5_7rP0",
      "videoId": "gwkHo5_7rP0",
      "startTime": 5230,
      "startUrl": "https://www.youtube.com/watch?v=gwkHo5_7rP0&t=5230s"
    },
    {
      "publishedAt": "2022-10-10T14:55:14Z",
      "title": "【スプラトゥーン3】S+から！ランクあげてくぞ～～！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=RRp8dG6SvsM",
      "videoId": "RRp8dG6SvsM",
      "startTime": 779,
      "startUrl": "https://www.youtube.com/watch?v=RRp8dG6SvsM&t=779s"
    },
    {
      "publishedAt": "2022-10-10T14:55:14Z",
      "title": "【スプラトゥーン3】S+から！ランクあげてくぞ～～！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=RRp8dG6SvsM",
      "videoId": "RRp8dG6SvsM",
      "startTime": 1644,
      "startUrl": "https://www.youtube.com/watch?v=RRp8dG6SvsM&t=1644s"
    },
    {
      "publishedAt": "2022-10-19T14:17:22Z",
      "title": "【Go Home Annie: An SCP Game】・・・・？？？【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=m_dDGPx7MOk",
      "videoId": "m_dDGPx7MOk",
      "startTime": 1377,
      "startUrl": "https://www.youtube.com/watch?v=m_dDGPx7MOk&t=1377s"
    },
    {
      "publishedAt": "2022-11-18T15:03:34Z",
      "title": "ただいま！！！！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=k_Wy2d01E9U",
      "videoId": "k_Wy2d01E9U",
      "startTime": 5892,
      "startUrl": "https://www.youtube.com/watch?v=k_Wy2d01E9U&t=5892s"
    },
    {
      "publishedAt": "2022-11-19T11:04:06Z",
      "title": "【ポケモンSV】#01 知識が抜け落ちた女騎士のスカーレット！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=HaAW6Ng2PfQ",
      "videoId": "HaAW6Ng2PfQ",
      "startTime": 19138,
      "startUrl": "https://www.youtube.com/watch?v=HaAW6Ng2PfQ&t=19138s"
    },
    {
      "publishedAt": "2022-11-20T11:03:22Z",
      "title": "【ポケモンSV】#02 初めてのジム！バッジゲットするぞ～！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=-mtPd5juKdE",
      "videoId": "-mtPd5juKdE",
      "startTime": 6623,
      "startUrl": "https://www.youtube.com/watch?v=-mtPd5juKdE&t=6623s"
    },
    {
      "publishedAt": "2022-11-26T12:46:29Z",
      "title": "【ポケモンSV】#03 バッジ3つ目！ナンジャモちゃんに会うぞ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=jJPSQIPRtWA",
      "videoId": "jJPSQIPRtWA",
      "startTime": 2074,
      "startUrl": "https://www.youtube.com/watch?v=jJPSQIPRtWA&t=2074s"
    },
    {
      "publishedAt": "2022-11-26T12:46:29Z",
      "title": "【ポケモンSV】#03 バッジ3つ目！ナンジャモちゃんに会うぞ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=jJPSQIPRtWA",
      "videoId": "jJPSQIPRtWA",
      "startTime": 4401,
      "startUrl": "https://www.youtube.com/watch?v=jJPSQIPRtWA&t=4401s"
    },
    {
      "publishedAt": "2022-11-26T12:46:29Z",
      "title": "【ポケモンSV】#03 バッジ3つ目！ナンジャモちゃんに会うぞ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=jJPSQIPRtWA",
      "videoId": "jJPSQIPRtWA",
      "startTime": 7261,
      "startUrl": "https://www.youtube.com/watch?v=jJPSQIPRtWA&t=7261s"
    },
    {
      "publishedAt": "2022-11-26T12:46:29Z",
      "title": "【ポケモンSV】#03 バッジ3つ目！ナンジャモちゃんに会うぞ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=jJPSQIPRtWA",
      "videoId": "jJPSQIPRtWA",
      "startTime": 8569,
      "startUrl": "https://www.youtube.com/watch?v=jJPSQIPRtWA&t=8569s"
    },
    {
      "publishedAt": "2022-12-01T15:24:51Z",
      "title": "【ポケモンSV】#04 レジェンドルートラスト攻略するぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=_CLZ5CnKaN8",
      "videoId": "_CLZ5CnKaN8",
      "startTime": 2943,
      "startUrl": "https://www.youtube.com/watch?v=_CLZ5CnKaN8&t=2943s"
    },
    {
      "publishedAt": "2022-12-03T10:41:40Z",
      "title": "【ポケモンSV】#05 バッジ残り3つ！寒そうな場所にいくぞ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=8Yr_0jRImAY",
      "videoId": "8Yr_0jRImAY",
      "startTime": 4600,
      "startUrl": "https://www.youtube.com/watch?v=8Yr_0jRImAY&t=4600s"
    },
    {
      "publishedAt": "2022-12-03T10:41:40Z",
      "title": "【ポケモンSV】#05 バッジ残り3つ！寒そうな場所にいくぞ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=8Yr_0jRImAY",
      "videoId": "8Yr_0jRImAY",
      "startTime": 6070,
      "startUrl": "https://www.youtube.com/watch?v=8Yr_0jRImAY&t=6070s"
    },
    {
      "publishedAt": "2022-12-03T10:41:40Z",
      "title": "【ポケモンSV】#05 バッジ残り3つ！寒そうな場所にいくぞ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=8Yr_0jRImAY",
      "videoId": "8Yr_0jRImAY",
      "startTime": 9728,
      "startUrl": "https://www.youtube.com/watch?v=8Yr_0jRImAY&t=9728s"
    },
    {
      "publishedAt": "2022-12-03T10:41:40Z",
      "title": "【ポケモンSV】#05 バッジ残り3つ！寒そうな場所にいくぞ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=8Yr_0jRImAY",
      "videoId": "8Yr_0jRImAY",
      "startTime": 11432,
      "startUrl": "https://www.youtube.com/watch?v=8Yr_0jRImAY&t=11432s"
    },
    {
      "publishedAt": "2022-12-14T18:34:54Z",
      "title": "【マリオカート8DX】本戦Aリーグやばくね？？？【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=iEt_Wm10vPs",
      "videoId": "iEt_Wm10vPs",
      "startTime": 2849,
      "startUrl": "https://www.youtube.com/watch?v=iEt_Wm10vPs&t=2849s"
    },
    {
      "publishedAt": "2022-12-14T18:34:54Z",
      "title": "【マリオカート8DX】本戦Aリーグやばくね？？？【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=iEt_Wm10vPs",
      "videoId": "iEt_Wm10vPs",
      "startTime": 3789,
      "startUrl": "https://www.youtube.com/watch?v=iEt_Wm10vPs&t=3789s"
    },
    {
      "publishedAt": "2022-12-16T20:19:27Z",
      "title": "【マリオカート8DX】金銀銅！？開示請求です！！！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=feqGhfA17cc",
      "videoId": "feqGhfA17cc",
      "startTime": 8262,
      "startUrl": "https://www.youtube.com/watch?v=feqGhfA17cc&t=8262s"
    },
    {
      "publishedAt": "2022-12-17T18:55:14Z",
      "title": "【マリオカート8DX】大会前日10人にもまれて練習だ～～～！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=I1WcxSwFvu0",
      "videoId": "I1WcxSwFvu0",
      "startTime": 6317,
      "startUrl": "https://www.youtube.com/watch?v=I1WcxSwFvu0&t=6317s"
    },
    {
      "publishedAt": "2022-12-18T12:28:19Z",
      "title": "【#マリカにじさんじ杯】大会本戦！！勝つぞ！！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Tg58BtCyoRQ",
      "videoId": "Tg58BtCyoRQ",
      "startTime": 8074,
      "startUrl": "https://www.youtube.com/watch?v=Tg58BtCyoRQ&t=8074s"
    },
    {
      "publishedAt": "2022-12-18T12:28:19Z",
      "title": "【#マリカにじさんじ杯】大会本戦！！勝つぞ！！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Tg58BtCyoRQ",
      "videoId": "Tg58BtCyoRQ",
      "startTime": 8264,
      "startUrl": "https://www.youtube.com/watch?v=Tg58BtCyoRQ&t=8264s"
    },
    {
      "publishedAt": "2022-12-23T17:28:09Z",
      "title": "【ポケモンSV】#最終回 みんな宝物は見つかった？【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=ehVGtCx7pm0",
      "videoId": "ehVGtCx7pm0",
      "startTime": 760,
      "startUrl": "https://www.youtube.com/watch?v=ehVGtCx7pm0&t=760s"
    },
    {
      "publishedAt": "2022-12-23T17:28:09Z",
      "title": "【ポケモンSV】#最終回 みんな宝物は見つかった？【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=ehVGtCx7pm0",
      "videoId": "ehVGtCx7pm0",
      "startTime": 5541,
      "startUrl": "https://www.youtube.com/watch?v=ehVGtCx7pm0&t=5541s"
    },
    {
      "publishedAt": "2022-12-25T11:39:09Z",
      "title": "【新衣装お披露目】#フレン冬の新衣装 クリスマスだね♡【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=0xY3oEcs2oM",
      "videoId": "0xY3oEcs2oM",
      "startTime": 622,
      "startUrl": "https://www.youtube.com/watch?v=0xY3oEcs2oM&t=622s"
    },
    {
      "publishedAt": "2023-01-06T13:36:05Z",
      "title": "【ポケモンSV】#08 クリア後！準伝説ポケモン捕まえたりする！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=ZZweb0SOtdg",
      "videoId": "ZZweb0SOtdg",
      "startTime": 1021,
      "startUrl": "https://www.youtube.com/watch?v=ZZweb0SOtdg&t=1021s"
    },
    {
      "publishedAt": "2023-01-11T17:20:15Z",
      "title": "【ポケモンSV】#09 クリア後！学校最強大会の開催だ～～～！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=-sRg2wlaC-c",
      "videoId": "-sRg2wlaC-c",
      "startTime": 6848,
      "startUrl": "https://www.youtube.com/watch?v=-sRg2wlaC-c&t=6848s"
    },
    {
      "publishedAt": "2023-01-15T11:23:10Z",
      "title": "【vampire survivors】うおおおお製品版で遊ぶぞ！！！！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=xl7aDQSsfuk",
      "videoId": "xl7aDQSsfuk",
      "startTime": 774,
      "startUrl": "https://www.youtube.com/watch?v=xl7aDQSsfuk&t=774s"
    },
    {
      "publishedAt": "2023-01-15T11:23:10Z",
      "title": "【vampire survivors】うおおおお製品版で遊ぶぞ！！！！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=xl7aDQSsfuk",
      "videoId": "xl7aDQSsfuk",
      "startTime": 1593,
      "startUrl": "https://www.youtube.com/watch?v=xl7aDQSsfuk&t=1593s"
    },
    {
      "publishedAt": "2023-01-15T11:23:10Z",
      "title": "【vampire survivors】うおおおお製品版で遊ぶぞ！！！！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=xl7aDQSsfuk",
      "videoId": "xl7aDQSsfuk",
      "startTime": 5921,
      "startUrl": "https://www.youtube.com/watch?v=xl7aDQSsfuk&t=5921s"
    },
    {
      "publishedAt": "2023-01-16T15:39:36Z",
      "title": "【にじさんじ共通テスト】まずは問題文の理解から入ります【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=izUyo4BWyhM",
      "videoId": "izUyo4BWyhM",
      "startTime": 2384,
      "startUrl": "https://www.youtube.com/watch?v=izUyo4BWyhM&t=2384s"
    },
    {
      "publishedAt": "2023-01-18T16:18:16Z",
      "title": "【スプラトゥーン3】し　ょ　く　す【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=EWpG-AaywhY",
      "videoId": "EWpG-AaywhY",
      "startTime": 4065,
      "startUrl": "https://www.youtube.com/watch?v=EWpG-AaywhY&t=4065s"
    },
    {
      "publishedAt": "2023-01-21T12:40:02Z",
      "title": "【キャサリン・フルボディ】#01 修羅場をくぐりぬけるゲーム!?【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=_xj3HKP6Oyw",
      "videoId": "_xj3HKP6Oyw",
      "startTime": 14236,
      "startUrl": "https://www.youtube.com/watch?v=_xj3HKP6Oyw&t=14236s"
    },
    {
      "publishedAt": "2023-01-21T12:40:02Z",
      "title": "【キャサリン・フルボディ】#01 修羅場をくぐりぬけるゲーム!?【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=_xj3HKP6Oyw",
      "videoId": "_xj3HKP6Oyw",
      "startTime": 14295,
      "startUrl": "https://www.youtube.com/watch?v=_xj3HKP6Oyw&t=14295s"
    },
    {
      "publishedAt": "2023-01-22T10:06:42Z",
      "title": "【キャサリン・フルボディ】#02 ド修羅場体験ゲーム!?四角関係はどうなるのか‥!?【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=ljcAJ2XpXRs",
      "videoId": "ljcAJ2XpXRs",
      "startTime": 1853,
      "startUrl": "https://www.youtube.com/watch?v=ljcAJ2XpXRs&t=1853s"
    },
    {
      "publishedAt": "2023-01-25T16:08:32Z",
      "title": "【Untitled Goose Game】目的のためなら手段を選ばない【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=HRNc8O1nkqY",
      "videoId": "HRNc8O1nkqY",
      "startTime": 639,
      "startUrl": "https://www.youtube.com/watch?v=HRNc8O1nkqY&t=639s"
    },
    {
      "publishedAt": "2023-02-04T10:36:23Z",
      "title": "【FINAL FANTASY X】#01 はじめてのファイナルファンタジー【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=l96_pTRmKAA",
      "videoId": "l96_pTRmKAA",
      "startTime": 3612,
      "startUrl": "https://www.youtube.com/watch?v=l96_pTRmKAA&t=3612s"
    },
    {
      "publishedAt": "2023-02-11T11:55:07Z",
      "title": "【FINAL FANTASY X】#03 はじめてのファイナルファンタジー【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=3lYmEhz4guo",
      "videoId": "3lYmEhz4guo",
      "startTime": 821,
      "startUrl": "https://www.youtube.com/watch?v=3lYmEhz4guo&t=821s"
    },
    {
      "publishedAt": "2023-02-11T11:55:07Z",
      "title": "【FINAL FANTASY X】#03 はじめてのファイナルファンタジー【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=3lYmEhz4guo",
      "videoId": "3lYmEhz4guo",
      "startTime": 3055,
      "startUrl": "https://www.youtube.com/watch?v=3lYmEhz4guo&t=3055s"
    },
    {
      "publishedAt": "2023-02-11T11:55:07Z",
      "title": "【FINAL FANTASY X】#03 はじめてのファイナルファンタジー【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=3lYmEhz4guo",
      "videoId": "3lYmEhz4guo",
      "startTime": 14717,
      "startUrl": "https://www.youtube.com/watch?v=3lYmEhz4guo&t=14717s"
    },
    {
      "publishedAt": "2023-02-12T12:49:49Z",
      "title": "【FINAL FANTASY X】#04 はじめてのファイナルファンタジー【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=ZqztU8bRBmA",
      "videoId": "ZqztU8bRBmA",
      "startTime": 824,
      "startUrl": "https://www.youtube.com/watch?v=ZqztU8bRBmA&t=824s"
    },
    {
      "publishedAt": "2023-02-18T17:02:01Z",
      "title": "【スプラトゥーン3】みんなクマさんになるお祭りがあるらしい【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=GZuwWeAauCg",
      "videoId": "GZuwWeAauCg",
      "startTime": 15267,
      "startUrl": "https://www.youtube.com/watch?v=GZuwWeAauCg&t=15267s"
    },
    {
      "publishedAt": "2023-02-18T10:57:25Z",
      "title": "【FINAL FANTASY X】#05 はじめてのファイナルファンタジー【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=VOhq2bWRLAs",
      "videoId": "VOhq2bWRLAs",
      "startTime": 3258,
      "startUrl": "https://www.youtube.com/watch?v=VOhq2bWRLAs&t=3258s"
    },
    {
      "publishedAt": "2023-02-18T10:57:25Z",
      "title": "【FINAL FANTASY X】#05 はじめてのファイナルファンタジー【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=VOhq2bWRLAs",
      "videoId": "VOhq2bWRLAs",
      "startTime": 10213,
      "startUrl": "https://www.youtube.com/watch?v=VOhq2bWRLAs&t=10213s"
    },
    {
      "publishedAt": "2023-02-19T10:53:36Z",
      "title": "【FINAL FANTASY X】#06 はじめてのファイナルファンタジー【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=HPuwzbGYLc8",
      "videoId": "HPuwzbGYLc8",
      "startTime": 8048,
      "startUrl": "https://www.youtube.com/watch?v=HPuwzbGYLc8&t=8048s"
    },
    {
      "publishedAt": "2023-02-21T16:07:32Z",
      "title": "【雑談】新髪型２種 ＆ ？？？ お披露目だ～～！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=M_Vi3rfVNoo",
      "videoId": "M_Vi3rfVNoo",
      "startTime": 591,
      "startUrl": "https://www.youtube.com/watch?v=M_Vi3rfVNoo&t=591s"
    },
    {
      "publishedAt": "2023-02-23T14:50:22Z",
      "title": "【歌枠】まさかの去年の夏ぶり歌枠【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=_Hh_EgTu_sE",
      "videoId": "_Hh_EgTu_sE",
      "startTime": 247,
      "startUrl": "https://www.youtube.com/watch?v=_Hh_EgTu_sE&t=247s"
    },
    {
      "publishedAt": "2023-02-23T14:50:22Z",
      "title": "【歌枠】まさかの去年の夏ぶり歌枠【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=_Hh_EgTu_sE",
      "videoId": "_Hh_EgTu_sE",
      "startTime": 1378,
      "startUrl": "https://www.youtube.com/watch?v=_Hh_EgTu_sE&t=1378s"
    },
    {
      "publishedAt": "2023-02-25T12:23:22Z",
      "title": "【FINAL FANTASY X】#07 はじめてのファイナルファンタジー【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=LrOlenHH6yQ",
      "videoId": "LrOlenHH6yQ",
      "startTime": 1991,
      "startUrl": "https://www.youtube.com/watch?v=LrOlenHH6yQ&t=1991s"
    },
    {
      "publishedAt": "2023-02-25T12:23:22Z",
      "title": "【FINAL FANTASY X】#07 はじめてのファイナルファンタジー【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=LrOlenHH6yQ",
      "videoId": "LrOlenHH6yQ",
      "startTime": 10296,
      "startUrl": "https://www.youtube.com/watch?v=LrOlenHH6yQ&t=10296s"
    },
    {
      "publishedAt": "2023-02-25T12:23:22Z",
      "title": "【FINAL FANTASY X】#07 はじめてのファイナルファンタジー【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=LrOlenHH6yQ",
      "videoId": "LrOlenHH6yQ",
      "startTime": 11960,
      "startUrl": "https://www.youtube.com/watch?v=LrOlenHH6yQ&t=11960s"
    },
    {
      "publishedAt": "2023-02-26T11:23:56Z",
      "title": "【FINAL FANTASY X】#08 はじめてのファイナルファンタジー【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=7zzVplZCcrw",
      "videoId": "7zzVplZCcrw",
      "startTime": 2069,
      "startUrl": "https://www.youtube.com/watch?v=7zzVplZCcrw&t=2069s"
    },
    {
      "publishedAt": "2023-02-26T11:23:56Z",
      "title": "【FINAL FANTASY X】#08 はじめてのファイナルファンタジー【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=7zzVplZCcrw",
      "videoId": "7zzVplZCcrw",
      "startTime": 4403,
      "startUrl": "https://www.youtube.com/watch?v=7zzVplZCcrw&t=4403s"
    },
    {
      "publishedAt": "2023-03-02T15:24:19Z",
      "title": "【Euro Truck Simulator 2】むしろ運転しかできません【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=qG4VacSXGkQ",
      "videoId": "qG4VacSXGkQ",
      "startTime": 1720,
      "startUrl": "https://www.youtube.com/watch?v=qG4VacSXGkQ&t=1720s"
    },
    {
      "publishedAt": "2023-03-02T15:24:19Z",
      "title": "【Euro Truck Simulator 2】むしろ運転しかできません【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=qG4VacSXGkQ",
      "videoId": "qG4VacSXGkQ",
      "startTime": 1902,
      "startUrl": "https://www.youtube.com/watch?v=qG4VacSXGkQ&t=1902s"
    },
    {
      "publishedAt": "2023-03-02T15:24:19Z",
      "title": "【Euro Truck Simulator 2】むしろ運転しかできません【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=qG4VacSXGkQ",
      "videoId": "qG4VacSXGkQ",
      "startTime": 2752,
      "startUrl": "https://www.youtube.com/watch?v=qG4VacSXGkQ&t=2752s"
    },
    {
      "publishedAt": "2023-03-10T16:55:38Z",
      "title": "【マリオカート8DX】参加型！誕生日なのでケーキを‥食べ‥食べ‥‥【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=3LPgY2X0AgE",
      "videoId": "3LPgY2X0AgE",
      "startTime": 4132,
      "startUrl": "https://www.youtube.com/watch?v=3LPgY2X0AgE&t=4132s"
    },
    {
      "publishedAt": "2023-03-18T12:01:26Z",
      "title": "【ホグワーツ・レガシー】#01 女騎士が魔法使いにジョブチェンジします【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=-n-GlrUCrRQ",
      "videoId": "-n-GlrUCrRQ",
      "startTime": 13139,
      "startUrl": "https://www.youtube.com/watch?v=-n-GlrUCrRQ&t=13139s"
    },
    {
      "publishedAt": "2023-03-19T11:57:39Z",
      "title": "【ホグワーツ・レガシー】#02 禁書の棚に眠る秘密とは‥？？【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=ff225ZoSGwQ",
      "videoId": "ff225ZoSGwQ",
      "startTime": 12565,
      "startUrl": "https://www.youtube.com/watch?v=ff225ZoSGwQ&t=12565s"
    },
    {
      "publishedAt": "2023-03-19T11:57:39Z",
      "title": "【ホグワーツ・レガシー】#02 禁書の棚に眠る秘密とは‥？？【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=ff225ZoSGwQ",
      "videoId": "ff225ZoSGwQ",
      "startTime": 19896,
      "startUrl": "https://www.youtube.com/watch?v=ff225ZoSGwQ&t=19896s"
    },
    {
      "publishedAt": "2023-03-21T16:37:17Z",
      "title": "【雑談】世界一かわいい女騎士がみなさんと話したがっています【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=i3xF6bNru7Q",
      "videoId": "i3xF6bNru7Q",
      "startTime": 2164,
      "startUrl": "https://www.youtube.com/watch?v=i3xF6bNru7Q&t=2164s"
    },
    {
      "publishedAt": "2023-03-23T15:45:49Z",
      "title": "【Contraband Police】治安が悪すぎる国で入国審査します【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=zEyAZ590YXc",
      "videoId": "zEyAZ590YXc",
      "startTime": 4069,
      "startUrl": "https://www.youtube.com/watch?v=zEyAZ590YXc&t=4069s"
    },
    {
      "publishedAt": "2023-03-25T15:52:11Z",
      "title": "【ホグワーツ・レガシー】#03 エクスペリアームス最強説【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=0lCyjifOE7M",
      "videoId": "0lCyjifOE7M",
      "startTime": 9037,
      "startUrl": "https://www.youtube.com/watch?v=0lCyjifOE7M&t=9037s"
    },
    {
      "publishedAt": "2023-03-25T15:52:11Z",
      "title": "【ホグワーツ・レガシー】#03 エクスペリアームス最強説【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=0lCyjifOE7M",
      "videoId": "0lCyjifOE7M",
      "startTime": 12636,
      "startUrl": "https://www.youtube.com/watch?v=0lCyjifOE7M&t=12636s"
    },
    {
      "publishedAt": "2023-03-25T15:52:11Z",
      "title": "【ホグワーツ・レガシー】#03 エクスペリアームス最強説【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=0lCyjifOE7M",
      "videoId": "0lCyjifOE7M",
      "startTime": 20962,
      "startUrl": "https://www.youtube.com/watch?v=0lCyjifOE7M&t=20962s"
    },
    {
      "publishedAt": "2023-03-26T11:52:05Z",
      "title": "【ホグワーツ・レガシー】#04 レイブンクロー生なので余裕です【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=oJ41_CrqYo8",
      "videoId": "oJ41_CrqYo8",
      "startTime": 4592,
      "startUrl": "https://www.youtube.com/watch?v=oJ41_CrqYo8&t=4592s"
    },
    {
      "publishedAt": "2023-03-26T11:52:05Z",
      "title": "【ホグワーツ・レガシー】#04 レイブンクロー生なので余裕です【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=oJ41_CrqYo8",
      "videoId": "oJ41_CrqYo8",
      "startTime": 12261,
      "startUrl": "https://www.youtube.com/watch?v=oJ41_CrqYo8&t=12261s"
    },
    {
      "publishedAt": "2023-03-30T14:47:58Z",
      "title": "【APEX】アルスさんとえーぺっくすするよ♡【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=fL7mz3uYC1E",
      "videoId": "fL7mz3uYC1E",
      "startTime": 7726,
      "startUrl": "https://www.youtube.com/watch?v=fL7mz3uYC1E&t=7726s"
    },
    {
      "publishedAt": "2023-04-01T10:52:17Z",
      "title": "【ホグワーツ・レガシー】#05 煽りルーモスはホグワーツでは基本【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=RqMGfmV5n48",
      "videoId": "RqMGfmV5n48",
      "startTime": 856,
      "startUrl": "https://www.youtube.com/watch?v=RqMGfmV5n48&t=856s"
    },
    {
      "publishedAt": "2023-04-08T09:59:54Z",
      "title": "【ホグワーツ・レガシー】#06 物語も終盤！遂に許されざる呪文が‥‥【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=qT9Q0X_VrLA",
      "videoId": "qT9Q0X_VrLA",
      "startTime": 3121,
      "startUrl": "https://www.youtube.com/watch?v=qT9Q0X_VrLA&t=3121s"
    },
    {
      "publishedAt": "2023-04-16T10:45:51Z",
      "title": "【ピクミン3 デラックス】完全初見！18匹の犠牲と共に生きる【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=2xz-bffS-GE",
      "videoId": "2xz-bffS-GE",
      "startTime": 498,
      "startUrl": "https://www.youtube.com/watch?v=2xz-bffS-GE&t=498s"
    },
    {
      "publishedAt": "2023-04-16T10:45:51Z",
      "title": "【ピクミン3 デラックス】完全初見！18匹の犠牲と共に生きる【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=2xz-bffS-GE",
      "videoId": "2xz-bffS-GE",
      "startTime": 1736,
      "startUrl": "https://www.youtube.com/watch?v=2xz-bffS-GE&t=1736s"
    },
    {
      "publishedAt": "2023-04-16T10:45:51Z",
      "title": "【ピクミン3 デラックス】完全初見！18匹の犠牲と共に生きる【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=2xz-bffS-GE",
      "videoId": "2xz-bffS-GE",
      "startTime": 4579,
      "startUrl": "https://www.youtube.com/watch?v=2xz-bffS-GE&t=4579s"
    },
    {
      "publishedAt": "2023-04-16T10:45:51Z",
      "title": "【ピクミン3 デラックス】完全初見！18匹の犠牲と共に生きる【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=2xz-bffS-GE",
      "videoId": "2xz-bffS-GE",
      "startTime": 9952,
      "startUrl": "https://www.youtube.com/watch?v=2xz-bffS-GE&t=9952s"
    },
    {
      "publishedAt": "2023-04-19T17:04:29Z",
      "title": "【ピクミン3 デラックス】完全初見！輪廻転生で蘇るピクミンたち【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=at1C4ZuvaD4",
      "videoId": "at1C4ZuvaD4",
      "startTime": 6906,
      "startUrl": "https://www.youtube.com/watch?v=at1C4ZuvaD4&t=6906s"
    },
    {
      "publishedAt": "2023-04-19T17:04:29Z",
      "title": "【ピクミン3 デラックス】完全初見！輪廻転生で蘇るピクミンたち【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=at1C4ZuvaD4",
      "videoId": "at1C4ZuvaD4",
      "startTime": 6930,
      "startUrl": "https://www.youtube.com/watch?v=at1C4ZuvaD4&t=6930s"
    },
    {
      "publishedAt": "2023-05-02T13:24:18Z",
      "title": "【FFBE幻影戦争】スマホゲームがパソコンでできるってマジ！？【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Q2dc9ApP-tQ",
      "videoId": "Q2dc9ApP-tQ",
      "startTime": 2182,
      "startUrl": "https://www.youtube.com/watch?v=Q2dc9ApP-tQ&t=2182s"
    },
    {
      "publishedAt": "2023-05-10T15:36:58Z",
      "title": "【Minecraft】サムネまで作ったのにゲームしくった女の突発マイクラ【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Y9aA0GURQAg",
      "videoId": "Y9aA0GURQAg",
      "startTime": 1852,
      "startUrl": "https://www.youtube.com/watch?v=Y9aA0GURQAg&t=1852s"
    },
    {
      "publishedAt": "2023-05-11T16:12:49Z",
      "title": "【Amanda the Adventurer】包丁女子 VS 女騎士 ＼ﾌｧｲｯ!!／【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=DDaftURiaaA",
      "videoId": "DDaftURiaaA",
      "startTime": 5160,
      "startUrl": "https://www.youtube.com/watch?v=DDaftURiaaA&t=5160s"
    },
    {
      "publishedAt": "2023-05-13T13:46:37Z",
      "title": "【ゼノブレDE】完全初見！ムービー入ると心臓止まります【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=oRyPp1Hy1_A",
      "videoId": "oRyPp1Hy1_A",
      "startTime": 3028,
      "startUrl": "https://www.youtube.com/watch?v=oRyPp1Hy1_A&t=3028s"
    },
    {
      "publishedAt": "2023-05-13T13:46:37Z",
      "title": "【ゼノブレDE】完全初見！ムービー入ると心臓止まります【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=oRyPp1Hy1_A",
      "videoId": "oRyPp1Hy1_A",
      "startTime": 15463,
      "startUrl": "https://www.youtube.com/watch?v=oRyPp1Hy1_A&t=15463s"
    },
    {
      "publishedAt": "2023-05-14T11:32:34Z",
      "title": "【ゼノブレDE】完全初見！未来を見た先に待つものとは【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=LIPPHO9YPqw",
      "videoId": "LIPPHO9YPqw",
      "startTime": 239,
      "startUrl": "https://www.youtube.com/watch?v=LIPPHO9YPqw&t=239s"
    },
    {
      "publishedAt": "2023-05-14T11:32:34Z",
      "title": "【ゼノブレDE】完全初見！未来を見た先に待つものとは【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=LIPPHO9YPqw",
      "videoId": "LIPPHO9YPqw",
      "startTime": 1871,
      "startUrl": "https://www.youtube.com/watch?v=LIPPHO9YPqw&t=1871s"
    },
    {
      "publishedAt": "2023-05-14T11:32:34Z",
      "title": "【ゼノブレDE】完全初見！未来を見た先に待つものとは【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=LIPPHO9YPqw",
      "videoId": "LIPPHO9YPqw",
      "startTime": 12426,
      "startUrl": "https://www.youtube.com/watch?v=LIPPHO9YPqw&t=12426s"
    },
    {
      "publishedAt": "2023-06-11T11:13:58Z",
      "title": "【ゼノブレDE】完全初見！いよいよ明かされる真実‥機神界帝都へ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=TCifIe2Xvt4",
      "videoId": "TCifIe2Xvt4",
      "startTime": 3329,
      "startUrl": "https://www.youtube.com/watch?v=TCifIe2Xvt4&t=3329s"
    },
    {
      "publishedAt": "2023-06-11T11:13:58Z",
      "title": "【ゼノブレDE】完全初見！いよいよ明かされる真実‥機神界帝都へ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=TCifIe2Xvt4",
      "videoId": "TCifIe2Xvt4",
      "startTime": 4684,
      "startUrl": "https://www.youtube.com/watch?v=TCifIe2Xvt4&t=4684s"
    },
    {
      "publishedAt": "2023-06-14T15:42:11Z",
      "title": "一攫千金！！！大金持ち！！！タワマン生活！！！！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=7XlCO9rRQZc",
      "videoId": "7XlCO9rRQZc",
      "startTime": 5150,
      "startUrl": "https://www.youtube.com/watch?v=7XlCO9rRQZc&t=5150s"
    },
    {
      "publishedAt": "2023-06-23T17:55:13Z",
      "title": "【雀魂】大会に向けて！個人練習からのチーム顔合わせ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=ub6t90HG9fc",
      "videoId": "ub6t90HG9fc",
      "startTime": 1687,
      "startUrl": "https://www.youtube.com/watch?v=ub6t90HG9fc&t=1687s"
    },
    {
      "publishedAt": "2023-06-25T13:49:55Z",
      "title": "【Only Up!】頂上に立つに相応しい女騎士【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=WT61_SXiG_U",
      "videoId": "WT61_SXiG_U",
      "startTime": 2652,
      "startUrl": "https://www.youtube.com/watch?v=WT61_SXiG_U&t=2652s"
    },
    {
      "publishedAt": "2023-06-25T13:49:55Z",
      "title": "【Only Up!】頂上に立つに相応しい女騎士【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=WT61_SXiG_U",
      "videoId": "WT61_SXiG_U",
      "startTime": 3102,
      "startUrl": "https://www.youtube.com/watch?v=WT61_SXiG_U&t=3102s"
    },
    {
      "publishedAt": "2023-06-25T13:49:55Z",
      "title": "【Only Up!】頂上に立つに相応しい女騎士【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=WT61_SXiG_U",
      "videoId": "WT61_SXiG_U",
      "startTime": 6416,
      "startUrl": "https://www.youtube.com/watch?v=WT61_SXiG_U&t=6416s"
    },
    {
      "publishedAt": "2023-07-09T10:27:00Z",
      "title": "【原神/Genshin】完全初見！冒険に満ちたブランニューワールドへ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=pziguHKc0WA",
      "videoId": "pziguHKc0WA",
      "startTime": 7543,
      "startUrl": "https://www.youtube.com/watch?v=pziguHKc0WA&t=7543s"
    },
    {
      "publishedAt": "2023-07-09T10:27:00Z",
      "title": "【原神/Genshin】完全初見！冒険に満ちたブランニューワールドへ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=pziguHKc0WA",
      "videoId": "pziguHKc0WA",
      "startTime": 7909,
      "startUrl": "https://www.youtube.com/watch?v=pziguHKc0WA&t=7909s"
    },
    {
      "publishedAt": "2023-07-09T10:27:00Z",
      "title": "【原神/Genshin】完全初見！冒険に満ちたブランニューワールドへ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=pziguHKc0WA",
      "videoId": "pziguHKc0WA",
      "startTime": 7930,
      "startUrl": "https://www.youtube.com/watch?v=pziguHKc0WA&t=7930s"
    },
    {
      "publishedAt": "2023-07-09T10:27:00Z",
      "title": "【原神/Genshin】完全初見！冒険に満ちたブランニューワールドへ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=pziguHKc0WA",
      "videoId": "pziguHKc0WA",
      "startTime": 8003,
      "startUrl": "https://www.youtube.com/watch?v=pziguHKc0WA&t=8003s"
    },
    {
      "publishedAt": "2023-07-15T11:20:56Z",
      "title": "【原神/Genshin】完全初見！序章第二幕 涙のない明日のために【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=V76VGx4kIU8",
      "videoId": "V76VGx4kIU8",
      "startTime": 7768,
      "startUrl": "https://www.youtube.com/watch?v=V76VGx4kIU8&t=7768s"
    },
    {
      "publishedAt": "2023-07-24T15:51:24Z",
      "title": "【原神/Genshin】リサさんのお仕事をお手伝いする回【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=M6KTkx5hZaM",
      "videoId": "M6KTkx5hZaM",
      "startTime": 312,
      "startUrl": "https://www.youtube.com/watch?v=M6KTkx5hZaM&t=312s"
    },
    {
      "publishedAt": "2023-07-26T15:16:55Z",
      "title": "【Trash Bunny House】今までありがとう【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=P1JbHTPQC_A",
      "videoId": "P1JbHTPQC_A",
      "startTime": 3667,
      "startUrl": "https://www.youtube.com/watch?v=P1JbHTPQC_A&t=3667s"
    },
    {
      "publishedAt": "2023-08-09T15:14:07Z",
      "title": "広告ソムリエの女騎士、参る【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=EtFjsxm8SsI",
      "videoId": "EtFjsxm8SsI",
      "startTime": 611,
      "startUrl": "https://www.youtube.com/watch?v=EtFjsxm8SsI&t=611s"
    },
    {
      "publishedAt": "2023-08-14T15:05:20Z",
      "title": "【SEKIRO/隻狼 #1】完全初見！隻腕の狼、戦国に忍ぶ。【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=TqfibX5jui8",
      "videoId": "TqfibX5jui8",
      "startTime": 1229,
      "startUrl": "https://www.youtube.com/watch?v=TqfibX5jui8&t=1229s"
    },
    {
      "publishedAt": "2023-08-14T15:05:20Z",
      "title": "【SEKIRO/隻狼 #1】完全初見！隻腕の狼、戦国に忍ぶ。【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=TqfibX5jui8",
      "videoId": "TqfibX5jui8",
      "startTime": 3635,
      "startUrl": "https://www.youtube.com/watch?v=TqfibX5jui8&t=3635s"
    },
    {
      "publishedAt": "2023-08-14T15:05:20Z",
      "title": "【SEKIRO/隻狼 #1】完全初見！隻腕の狼、戦国に忍ぶ。【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=TqfibX5jui8",
      "videoId": "TqfibX5jui8",
      "startTime": 27104,
      "startUrl": "https://www.youtube.com/watch?v=TqfibX5jui8&t=27104s"
    },
    {
      "publishedAt": "2023-08-22T15:13:10Z",
      "title": "【漢字でGO】不如帰⇒かえらずのごとし【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=4baPpwTy4UY",
      "videoId": "4baPpwTy4UY",
      "startTime": 1559,
      "startUrl": "https://www.youtube.com/watch?v=4baPpwTy4UY&t=1559s"
    },
    {
      "publishedAt": "2023-08-26T16:51:40Z",
      "title": "【SEKIRO/隻狼 #6】完全初見！不死斬りを携えいざ参る【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=gT6tqZGAEcs",
      "videoId": "gT6tqZGAEcs",
      "startTime": 1255,
      "startUrl": "https://www.youtube.com/watch?v=gT6tqZGAEcs&t=1255s"
    },
    {
      "publishedAt": "2023-08-26T16:51:40Z",
      "title": "【SEKIRO/隻狼 #6】完全初見！不死斬りを携えいざ参る【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=gT6tqZGAEcs",
      "videoId": "gT6tqZGAEcs",
      "startTime": 5292,
      "startUrl": "https://www.youtube.com/watch?v=gT6tqZGAEcs&t=5292s"
    },
    {
      "publishedAt": "2023-08-27T13:40:57Z",
      "title": "【SEKIRO/隻狼 #7】完全初見！梟戦、いざ行かん【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=dGOoyYXBbc4",
      "videoId": "dGOoyYXBbc4",
      "startTime": 17958,
      "startUrl": "https://www.youtube.com/watch?v=dGOoyYXBbc4&t=17958s"
    },
    {
      "publishedAt": "2023-09-01T15:57:39Z",
      "title": "【vampire survivors】遊び方を覚えているか怪しい女騎士久々のヴァンサバ【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=mHGP0fDynhg",
      "videoId": "mHGP0fDynhg",
      "startTime": 2181,
      "startUrl": "https://www.youtube.com/watch?v=mHGP0fDynhg&t=2181s"
    },
    {
      "publishedAt": "2023-09-01T15:57:39Z",
      "title": "【vampire survivors】遊び方を覚えているか怪しい女騎士久々のヴァンサバ【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=mHGP0fDynhg",
      "videoId": "mHGP0fDynhg",
      "startTime": 3211,
      "startUrl": "https://www.youtube.com/watch?v=mHGP0fDynhg&t=3211s"
    },
    {
      "publishedAt": "2023-09-16T06:14:42Z",
      "title": "【ポケモンSV DLC前編碧の仮面】新たな出会い！そして旅立ち！ #01【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Ax_NDnDcvX0",
      "videoId": "Ax_NDnDcvX0",
      "startTime": 6706,
      "startUrl": "https://www.youtube.com/watch?v=Ax_NDnDcvX0&t=6706s"
    },
    {
      "publishedAt": "2023-09-17T15:13:21Z",
      "title": "【ポケモンSV DLC前編碧の仮面】ゼイユたちと夏祭り満喫するぞ！！！ #02【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=XK2thc2efR4",
      "videoId": "XK2thc2efR4",
      "startTime": 9527,
      "startUrl": "https://www.youtube.com/watch?v=XK2thc2efR4&t=9527s"
    },
    {
      "publishedAt": "2023-09-23T14:51:23Z",
      "title": "【ピクミン4】新作完全初見！ルーイを追いかけどこまでも‥【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=wHTWYzs7ZMg",
      "videoId": "wHTWYzs7ZMg",
      "startTime": 954,
      "startUrl": "https://www.youtube.com/watch?v=wHTWYzs7ZMg&t=954s"
    },
    {
      "publishedAt": "2023-09-24T10:03:55Z",
      "title": "【ピクミン4】新作完全初見！最終回？ラストステージクリアするぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=AaTGZQvP8-I",
      "videoId": "AaTGZQvP8-I",
      "startTime": 1436,
      "startUrl": "https://www.youtube.com/watch?v=AaTGZQvP8-I&t=1436s"
    },
    {
      "publishedAt": "2023-09-24T10:03:55Z",
      "title": "【ピクミン4】新作完全初見！最終回？ラストステージクリアするぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=AaTGZQvP8-I",
      "videoId": "AaTGZQvP8-I",
      "startTime": 3459,
      "startUrl": "https://www.youtube.com/watch?v=AaTGZQvP8-I&t=3459s"
    },
    {
      "publishedAt": "2023-09-27T14:45:55Z",
      "title": "【スプラトゥーン3】プラベありがとうございます【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Z-Wro6pA3is",
      "videoId": "Z-Wro6pA3is",
      "startTime": 7430,
      "startUrl": "https://www.youtube.com/watch?v=Z-Wro6pA3is&t=7430s"
    },
    {
      "publishedAt": "2023-09-30T15:40:08Z",
      "title": "【逆転裁判 蘇る逆転】完全初見！覚悟の準備をしておいてください！！ #01【※ネタバレ有/にじさんじ】",
      "url": "https://www.youtube.com/watch?v=M718qxseNNk",
      "videoId": "M718qxseNNk",
      "startTime": 1391,
      "startUrl": "https://www.youtube.com/watch?v=M718qxseNNk&t=1391s"
    },
    {
      "publishedAt": "2023-09-30T15:40:08Z",
      "title": "【逆転裁判 蘇る逆転】完全初見！覚悟の準備をしておいてください！！ #01【※ネタバレ有/にじさんじ】",
      "url": "https://www.youtube.com/watch?v=M718qxseNNk",
      "videoId": "M718qxseNNk",
      "startTime": 3941,
      "startUrl": "https://www.youtube.com/watch?v=M718qxseNNk&t=3941s"
    },
    {
      "publishedAt": "2023-10-07T10:19:41Z",
      "title": "【星のカービィ 鏡の大迷宮】４人でクリア耐久いくぞ！！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=4TVTWUuT8F0",
      "videoId": "4TVTWUuT8F0",
      "startTime": 5818,
      "startUrl": "https://www.youtube.com/watch?v=4TVTWUuT8F0&t=5818s"
    },
    {
      "publishedAt": "2023-10-15T11:00:43Z",
      "title": "【逆転裁判 蘇る逆転】完全初見！遂に最終話‥逆転、そしてサヨナラ #05【※ネタバレ有/にじさんじ】",
      "url": "https://www.youtube.com/watch?v=qN6BrSGUhZU",
      "videoId": "qN6BrSGUhZU",
      "startTime": 5690,
      "startUrl": "https://www.youtube.com/watch?v=qN6BrSGUhZU&t=5690s"
    },
    {
      "publishedAt": "2023-10-17T14:30:05Z",
      "title": "【コンビニに来る常連さん】結局は人間が一番怖い。【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=vezto-wi0uY",
      "videoId": "vezto-wi0uY",
      "startTime": 2277,
      "startUrl": "https://www.youtube.com/watch?v=vezto-wi0uY&t=2277s"
    },
    {
      "publishedAt": "2023-10-25T14:45:50Z",
      "title": "【スーパーマリオブラザーズ ワンダー】完全初見！最新作マリオで遊ぶぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Rm84sHTFAE4",
      "videoId": "Rm84sHTFAE4",
      "startTime": 1738,
      "startUrl": "https://www.youtube.com/watch?v=Rm84sHTFAE4&t=1738s"
    },
    {
      "publishedAt": "2023-10-30T15:37:12Z",
      "title": "【スイカゲーム】トリックオアカボチャ！！！！(？)【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=C98cAKhnokY",
      "videoId": "C98cAKhnokY",
      "startTime": 433,
      "startUrl": "https://www.youtube.com/watch?v=C98cAKhnokY&t=433s"
    },
    {
      "publishedAt": "2023-10-30T15:37:12Z",
      "title": "【スイカゲーム】トリックオアカボチャ！！！！(？)【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=C98cAKhnokY",
      "videoId": "C98cAKhnokY",
      "startTime": 461,
      "startUrl": "https://www.youtube.com/watch?v=C98cAKhnokY&t=461s"
    },
    {
      "publishedAt": "2023-10-30T15:37:12Z",
      "title": "【スイカゲーム】トリックオアカボチャ！！！！(？)【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=C98cAKhnokY",
      "videoId": "C98cAKhnokY",
      "startTime": 2041,
      "startUrl": "https://www.youtube.com/watch?v=C98cAKhnokY&t=2041s"
    },
    {
      "publishedAt": "2023-11-09T15:34:10Z",
      "title": "【雑談】鼻声の私にその声もかわいいねって言う会【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=7CjQDyIlo9U",
      "videoId": "7CjQDyIlo9U",
      "startTime": 619,
      "startUrl": "https://www.youtube.com/watch?v=7CjQDyIlo9U&t=619s"
    },
    {
      "publishedAt": "2023-11-10T16:07:24Z",
      "title": "【ファッションドリーマー】世界一可愛い女による世界一可愛い女を作る配信【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=qAmxuIVW0Og",
      "videoId": "qAmxuIVW0Og",
      "startTime": 2719,
      "startUrl": "https://www.youtube.com/watch?v=qAmxuIVW0Og&t=2719s"
    },
    {
      "publishedAt": "2023-11-12T15:26:38Z",
      "title": "【テイルズオブアライズ】完全初見！この痛みは、君の心に触れたから。#02【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=vxx07UrGmWI",
      "videoId": "vxx07UrGmWI",
      "startTime": 6662,
      "startUrl": "https://www.youtube.com/watch?v=vxx07UrGmWI&t=6662s"
    },
    {
      "publishedAt": "2023-11-12T15:26:38Z",
      "title": "【テイルズオブアライズ】完全初見！この痛みは、君の心に触れたから。#02【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=vxx07UrGmWI",
      "videoId": "vxx07UrGmWI",
      "startTime": 10806,
      "startUrl": "https://www.youtube.com/watch?v=vxx07UrGmWI&t=10806s"
    },
    {
      "publishedAt": "2023-11-17T15:32:40Z",
      "title": "棺桶の中で生き埋めにされてました【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=8NYpgAwdJnQ",
      "videoId": "8NYpgAwdJnQ",
      "startTime": 2368,
      "startUrl": "https://www.youtube.com/watch?v=8NYpgAwdJnQ&t=2368s"
    },
    {
      "publishedAt": "2023-11-18T15:28:27Z",
      "title": "【テイルズオブアライズ】※ネタバレ注意 完全初見！この痛みは、君の心に触れたから。#03【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Mj85Q2OV5qc",
      "videoId": "Mj85Q2OV5qc",
      "startTime": 10415,
      "startUrl": "https://www.youtube.com/watch?v=Mj85Q2OV5qc&t=10415s"
    },
    {
      "publishedAt": "2023-11-22",
      "title": "【Headbangers: Rhythm Royale】鳥に囲まれながらリズミカルなダンス(？)【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=gutSPL4knIg",
      "videoId": "gutSPL4knIg",
      "startTime": 5641,
      "startUrl": "https://www.youtube.com/watch?v=gutSPL4knIg&t=5641s"
    },
    {
      "publishedAt": "2023-11-25T16:26:01Z",
      "title": "【テイルズオブアライズ】※ネタバレ注意 完全初見！この痛みは、君の心に触れたから。#05【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=zMnisZP-nCg",
      "videoId": "zMnisZP-nCg",
      "startTime": 6464,
      "startUrl": "https://www.youtube.com/watch?v=zMnisZP-nCg&t=6464s"
    },
    {
      "publishedAt": "2023-11-25T16:26:01Z",
      "title": "【テイルズオブアライズ】※ネタバレ注意 完全初見！この痛みは、君の心に触れたから。#05【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=zMnisZP-nCg",
      "videoId": "zMnisZP-nCg",
      "startTime": 8519,
      "startUrl": "https://www.youtube.com/watch?v=zMnisZP-nCg&t=8519s"
    },
    {
      "publishedAt": "2023-12-03T15:45:29Z",
      "title": "【テイルズオブアライズ】※ネタバレ注意 完全初見！この痛みは、君の心に触れたから。#07【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=001epSSzWnM",
      "videoId": "001epSSzWnM",
      "startTime": 2041,
      "startUrl": "https://www.youtube.com/watch?v=001epSSzWnM&t=2041s"
    },
    {
      "publishedAt": "2023-12-03T15:45:29Z",
      "title": "【テイルズオブアライズ】※ネタバレ注意 完全初見！この痛みは、君の心に触れたから。#07【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=001epSSzWnM",
      "videoId": "001epSSzWnM",
      "startTime": 8838,
      "startUrl": "https://www.youtube.com/watch?v=001epSSzWnM&t=8838s"
    },
    {
      "publishedAt": "2023-12-04T15:21:00Z",
      "title": "【8番出口】駅員さん声掛けRTA走者【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=KrjaatYhQDk",
      "videoId": "KrjaatYhQDk",
      "startTime": 2461,
      "startUrl": "https://www.youtube.com/watch?v=KrjaatYhQDk&t=2461s"
    },
    {
      "publishedAt": "2023-12-11T15:00:44Z",
      "title": "【Lethal Company】ホラーと聞きましたが怖いんですか？？【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=YVmpYtPopBE",
      "videoId": "YVmpYtPopBE",
      "startTime": 2691,
      "startUrl": "https://www.youtube.com/watch?v=YVmpYtPopBE&t=2691s"
    },
    {
      "publishedAt": "2023-12-14T15:36:23Z",
      "title": "【ポケモンSV DLC後編 藍の円盤】ブルーベリー学園に転入します(？) #01【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=PabQYjfmj5E",
      "videoId": "PabQYjfmj5E",
      "startTime": 715,
      "startUrl": "https://www.youtube.com/watch?v=PabQYjfmj5E&t=715s"
    },
    {
      "publishedAt": "2023-12-14T15:36:23Z",
      "title": "【ポケモンSV DLC後編 藍の円盤】ブルーベリー学園に転入します(？) #01【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=PabQYjfmj5E",
      "videoId": "PabQYjfmj5E",
      "startTime": 3589,
      "startUrl": "https://www.youtube.com/watch?v=PabQYjfmj5E&t=3589s"
    },
    {
      "publishedAt": "2023-12-14T15:36:23Z",
      "title": "【ポケモンSV DLC後編 藍の円盤】ブルーベリー学園に転入します(？) #01【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=PabQYjfmj5E",
      "videoId": "PabQYjfmj5E",
      "startTime": 4361,
      "startUrl": "https://www.youtube.com/watch?v=PabQYjfmj5E&t=4361s"
    },
    {
      "publishedAt": "2023-12-17T13:42:17Z",
      "title": "【テイルズオブアライズ】※ネタバレ注意 完全初見！この痛みは、君の心に触れたから。#10【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=1rx34-A9TWo",
      "videoId": "1rx34-A9TWo",
      "startTime": 3837,
      "startUrl": "https://www.youtube.com/watch?v=1rx34-A9TWo&t=3837s"
    },
    {
      "publishedAt": "2023-12-17T13:42:17Z",
      "title": "【テイルズオブアライズ】※ネタバレ注意 完全初見！この痛みは、君の心に触れたから。#10【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=1rx34-A9TWo",
      "videoId": "1rx34-A9TWo",
      "startTime": 8410,
      "startUrl": "https://www.youtube.com/watch?v=1rx34-A9TWo&t=8410s"
    },
    {
      "publishedAt": "2023-12-17T13:42:17Z",
      "title": "【テイルズオブアライズ】※ネタバレ注意 完全初見！この痛みは、君の心に触れたから。#10【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=1rx34-A9TWo",
      "videoId": "1rx34-A9TWo",
      "startTime": 13377,
      "startUrl": "https://www.youtube.com/watch?v=1rx34-A9TWo&t=13377s"
    },
    {
      "publishedAt": "2023-12-28",
      "title": "【ポケモンSV DLC後編 藍の円盤】リベンジアカマツ！！バシャーモは私のだ！！！！ #03【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=xC4hyAFk7ls",
      "videoId": "xC4hyAFk7ls",
      "startTime": 5127,
      "startUrl": "https://www.youtube.com/watch?v=xC4hyAFk7ls&t=5127s"
    },
    {
      "publishedAt": "2023-12-31T17:22:39Z",
      "title": "【雑談】切り抜き見て振り返ってみんなで年越しするぞ～～！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=uYoTnnTdNHY",
      "videoId": "uYoTnnTdNHY",
      "startTime": 4777,
      "startUrl": "https://www.youtube.com/watch?v=uYoTnnTdNHY&t=4777s"
    },
    {
      "publishedAt": "2024-01-03T16:01:04Z",
      "title": "【ポケモンSV DLC後編 藍の円盤】エリアゼロ再び！青の円盤とは一体‥？ #04【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=NXi8Z_oJ9C8",
      "videoId": "NXi8Z_oJ9C8",
      "startTime": 281,
      "startUrl": "https://www.youtube.com/watch?v=NXi8Z_oJ9C8&t=281s"
    },
    {
      "publishedAt": "2024-01-04T13:27:36Z",
      "title": "【マリオカート8DX】皇女と騎士 リスナー参加型チーム紅白戦！みんないくぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Hq5Zz7BS6yA",
      "videoId": "Hq5Zz7BS6yA",
      "startTime": 2578,
      "startUrl": "https://www.youtube.com/watch?v=Hq5Zz7BS6yA&t=2578s"
    },
    {
      "publishedAt": "2024-01-04T13:27:36Z",
      "title": "【マリオカート8DX】皇女と騎士 リスナー参加型チーム紅白戦！みんないくぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Hq5Zz7BS6yA",
      "videoId": "Hq5Zz7BS6yA",
      "startTime": 2816,
      "startUrl": "https://www.youtube.com/watch?v=Hq5Zz7BS6yA&t=2816s"
    },
    {
      "publishedAt": "2024-01-05T17:09:45Z",
      "title": "【雀魂】大会直前練習会！とりあえず一旦ポンで！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=reqrrxzz6VA",
      "videoId": "reqrrxzz6VA",
      "startTime": 2909,
      "startUrl": "https://www.youtube.com/watch?v=reqrrxzz6VA&t=2909s"
    },
    {
      "publishedAt": "2024-01-05T17:09:45Z",
      "title": "【雀魂】大会直前練習会！とりあえず一旦ポンで！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=reqrrxzz6VA",
      "videoId": "reqrrxzz6VA",
      "startTime": 4375,
      "startUrl": "https://www.youtube.com/watch?v=reqrrxzz6VA&t=4375s"
    },
    {
      "publishedAt": "2024-01-06T07:35:31Z",
      "title": "【#にじさんじ麻雀杯2024】予選J卓！ロンしまくって勝ちあがるぞ～～！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=uKz5LJ38sLY",
      "videoId": "uKz5LJ38sLY",
      "startTime": 994,
      "startUrl": "https://www.youtube.com/watch?v=uKz5LJ38sLY&t=994s"
    },
    {
      "publishedAt": "2024-01-14T08:17:38Z",
      "title": "【テイルズオブアライズ】※ネタバレ注意 完全初見！この痛みは、君の心に触れたから。#11【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=ymu62cW0MPA",
      "videoId": "ymu62cW0MPA",
      "startTime": 5588,
      "startUrl": "https://www.youtube.com/watch?v=ymu62cW0MPA&t=5588s"
    },
    {
      "publishedAt": "2024-01-15T15:26:15Z",
      "title": "【#にじさんじ共通テスト】今年も共通テスト受験いたします！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=iXoQ7tnB8_8",
      "videoId": "iXoQ7tnB8_8",
      "startTime": 3685,
      "startUrl": "https://www.youtube.com/watch?v=iXoQ7tnB8_8&t=3685s"
    },
    {
      "publishedAt": "2024-01-18T15:17:59Z",
      "title": "夢の中に閉じ込められました(？)【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=93iHA2NyERg",
      "videoId": "93iHA2NyERg",
      "startTime": 369,
      "startUrl": "https://www.youtube.com/watch?v=93iHA2NyERg&t=369s"
    },
    {
      "publishedAt": "2024-01-18T15:17:59Z",
      "title": "夢の中に閉じ込められました(？)【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=93iHA2NyERg",
      "videoId": "93iHA2NyERg",
      "startTime": 2452,
      "startUrl": "https://www.youtube.com/watch?v=93iHA2NyERg&t=2452s"
    },
    {
      "publishedAt": "2024-01-20T11:03:34Z",
      "title": "【テイルズオブアライズ】※ネタバレ注意 完全初見！この痛みは、君の心に触れたから。#12【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=A_Iq5zT1aLs",
      "videoId": "A_Iq5zT1aLs",
      "startTime": 11024,
      "startUrl": "https://www.youtube.com/watch?v=A_Iq5zT1aLs&t=11024s"
    },
    {
      "publishedAt": "2024-01-26T15:17:24Z",
      "title": "【にじさんじ家系図】もしもフレンの家族や同級生がライバーさんだったら‥【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=XQMtsG8TWWY",
      "videoId": "XQMtsG8TWWY",
      "startTime": 6193,
      "startUrl": "https://www.youtube.com/watch?v=XQMtsG8TWWY&t=6193s"
    },
    {
      "publishedAt": "2024-01-27T12:05:02Z",
      "title": "【テイルズオブアライズ】※ネタバレ注意 完全初見！この痛みは、君の心に触れたから。#Final【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=leLvzQ4CC3s",
      "videoId": "leLvzQ4CC3s",
      "startTime": 678,
      "startUrl": "https://www.youtube.com/watch?v=leLvzQ4CC3s&t=678s"
    },
    {
      "publishedAt": "2024-01-28T10:56:51Z",
      "title": "【モンハンワールド】完全初見で臨む！騎士の本領発揮します【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=B6VLbxAV35g",
      "videoId": "B6VLbxAV35g",
      "startTime": 1413,
      "startUrl": "https://www.youtube.com/watch?v=B6VLbxAV35g&t=1413s"
    },
    {
      "publishedAt": "2024-02-03T08:18:29Z",
      "title": "【モンハンワールド】完全初見で臨む！打倒アンジャナフリベンジ戦！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=lzRoXpayLb0",
      "videoId": "lzRoXpayLb0",
      "startTime": 215,
      "startUrl": "https://www.youtube.com/watch?v=lzRoXpayLb0&t=215s"
    },
    {
      "publishedAt": "2024-02-03T08:18:29Z",
      "title": "【モンハンワールド】完全初見で臨む！打倒アンジャナフリベンジ戦！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=lzRoXpayLb0",
      "videoId": "lzRoXpayLb0",
      "startTime": 346,
      "startUrl": "https://www.youtube.com/watch?v=lzRoXpayLb0&t=346s"
    },
    {
      "publishedAt": "2024-02-19T15:57:38Z",
      "title": "【モンハンワールド】完全初見で臨む！ランスチクチク‥チクチク‥チクチク‥【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=ywmJ4hVvti4",
      "videoId": "ywmJ4hVvti4",
      "startTime": 368,
      "startUrl": "https://www.youtube.com/watch?v=ywmJ4hVvti4&t=368s"
    },
    {
      "publishedAt": "2024-02-23T13:28:51Z",
      "title": "【モンハンワールド】完全初見で臨む！ネルギガンテ討伐再チャレンジいくぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=AI7xfjygEJ0",
      "videoId": "AI7xfjygEJ0",
      "startTime": 2399,
      "startUrl": "https://www.youtube.com/watch?v=AI7xfjygEJ0&t=2399s"
    },
    {
      "publishedAt": "2024-03-10T14:58:07Z",
      "title": "産まれました！！お祝いだ～～！！💗 #フレン生誕祭2024 【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=4ueZj2lq89I",
      "videoId": "4ueZj2lq89I",
      "startTime": 3404,
      "startUrl": "https://www.youtube.com/watch?v=4ueZj2lq89I&t=3404s"
    },
    {
      "publishedAt": "2024-03-13T15:33:35Z",
      "title": "【モンハンワールド】完全初見で臨む！ベリオロスを討伐するぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=vsVtcNrRQ7M",
      "videoId": "vsVtcNrRQ7M",
      "startTime": 530,
      "startUrl": "https://www.youtube.com/watch?v=vsVtcNrRQ7M&t=530s"
    },
    {
      "publishedAt": "2024-03-23T09:13:09Z",
      "title": "【モンハンワールド】完全初見で臨む！ナルガクルガ討伐リベンジ戦！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=SN2lZE6Tt84",
      "videoId": "SN2lZE6Tt84",
      "startTime": 10065,
      "startUrl": "https://www.youtube.com/watch?v=SN2lZE6Tt84&t=10065s"
    },
    {
      "publishedAt": "2024-03-24T10:38:08Z",
      "title": "【Supermarket Simulator】世界一かわいい経営者がいるスーパーはここです【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=NWmghBxId_c",
      "videoId": "NWmghBxId_c",
      "startTime": 208,
      "startUrl": "https://www.youtube.com/watch?v=NWmghBxId_c&t=208s"
    },
    {
      "publishedAt": "2024-03-24T10:38:08Z",
      "title": "【Supermarket Simulator】世界一かわいい経営者がいるスーパーはここです【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=NWmghBxId_c",
      "videoId": "NWmghBxId_c",
      "startTime": 2933,
      "startUrl": "https://www.youtube.com/watch?v=NWmghBxId_c&t=2933s"
    },
    {
      "publishedAt": "2024-03-24T10:38:08Z",
      "title": "【Supermarket Simulator】世界一かわいい経営者がいるスーパーはここです【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=NWmghBxId_c",
      "videoId": "NWmghBxId_c",
      "startTime": 4411,
      "startUrl": "https://www.youtube.com/watch?v=NWmghBxId_c&t=4411s"
    },
    {
      "publishedAt": "2024-03-24T10:38:08Z",
      "title": "【Supermarket Simulator】世界一かわいい経営者がいるスーパーはここです【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=NWmghBxId_c",
      "videoId": "NWmghBxId_c",
      "startTime": 9079,
      "startUrl": "https://www.youtube.com/watch?v=NWmghBxId_c&t=9079s"
    },
    {
      "publishedAt": "2024-03-28T15:48:40Z",
      "title": "【Supermarket Simulator】レジ打ちからようやく昇格した経営者です(？)【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=H9jQzITutac",
      "videoId": "H9jQzITutac",
      "startTime": 249,
      "startUrl": "https://www.youtube.com/watch?v=H9jQzITutac&t=249s"
    },
    {
      "publishedAt": "2024-04-05T16:12:30Z",
      "title": "【Supermarket Simulator】JK経営者です♡お店でっかくなってきたぞ～！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=4oLSy_-wwfY",
      "videoId": "4oLSy_-wwfY",
      "startTime": 6049,
      "startUrl": "https://www.youtube.com/watch?v=4oLSy_-wwfY&t=6049s"
    },
    {
      "publishedAt": "2024-04-17T14:54:22Z",
      "title": "【無駄が多すぎるRPG】作者が注意書きをするほどイラつくRPG【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=73Mjx9pkGvE",
      "videoId": "73Mjx9pkGvE",
      "startTime": 3843,
      "startUrl": "https://www.youtube.com/watch?v=73Mjx9pkGvE&t=3843s"
    },
    {
      "publishedAt": "2024-06-04T14:54:03Z",
      "title": "【8番のりば】おじさん！！おじさんおじさん！！！ああああおじさんおじさんおじs【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=a55J4Ti524U",
      "videoId": "a55J4Ti524U",
      "startTime": 154,
      "startUrl": "https://www.youtube.com/watch?v=a55J4Ti524U&t=154s"
    },
    {
      "publishedAt": "2024-06-08T11:31:31Z",
      "title": "【パワプロ2022/栄冠ナイン】 #06 はじめての栄冠ナイン！春の甲子園勝つぞ！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=qB_Jf-eRV9Q",
      "videoId": "qB_Jf-eRV9Q",
      "startTime": 10004,
      "startUrl": "https://www.youtube.com/watch?v=qB_Jf-eRV9Q&t=10004s"
    },
    {
      "publishedAt": "2024-06-14T16:04:42Z",
      "title": "【60 Parsecs!】 あの神ゲーの続編！？今度は宇宙で生き残れ！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=c4bdzXE2tH8",
      "videoId": "c4bdzXE2tH8",
      "startTime": 3279,
      "startUrl": "https://www.youtube.com/watch?v=c4bdzXE2tH8&t=3279s"
    },
    {
      "publishedAt": "2024-06-15T17:59:18Z",
      "title": "【#にじGTA】20代 無職。重い腰をあげ職探しを始める。【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Mzjswwe2iGI",
      "videoId": "Mzjswwe2iGI",
      "startTime": 3054,
      "startUrl": "https://www.youtube.com/watch?v=Mzjswwe2iGI&t=3054s"
    },
    {
      "publishedAt": "2024-06-15T17:59:18Z",
      "title": "【#にじGTA】20代 無職。重い腰をあげ職探しを始める。【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Mzjswwe2iGI",
      "videoId": "Mzjswwe2iGI",
      "startTime": 10213,
      "startUrl": "https://www.youtube.com/watch?v=Mzjswwe2iGI&t=10213s"
    },
    {
      "publishedAt": "2024-06-18T18:26:34Z",
      "title": "【#にじGTA】夢はでっかく億万長者！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=NKLbGmyE0cg",
      "videoId": "NKLbGmyE0cg",
      "startTime": 5482,
      "startUrl": "https://www.youtube.com/watch?v=NKLbGmyE0cg&t=5482s"
    },
    {
      "publishedAt": "2024-06-19T20:19:57Z",
      "title": "【#にじGTA】みんな幸せにな～～～～れ！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=7uSe0OkNPjY",
      "videoId": "7uSe0OkNPjY",
      "startTime": 611,
      "startUrl": "https://www.youtube.com/watch?v=7uSe0OkNPjY&t=611s"
    },
    {
      "publishedAt": "2024-06-23T20:32:38Z",
      "title": "【#にじGTA】みんなを幸せにして最高の家を作ります！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=rFW-QoUoygc",
      "videoId": "rFW-QoUoygc",
      "startTime": 4019,
      "startUrl": "https://www.youtube.com/watch?v=rFW-QoUoygc&t=4019s"
    },
    {
      "publishedAt": "2024-07-04T14:48:00Z",
      "title": "【僕、アルバイトォォ！！】迷惑客をボコボコにします＾＾【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=yVN-fSk52Kg",
      "videoId": "yVN-fSk52Kg",
      "startTime": 4352,
      "startUrl": "https://www.youtube.com/watch?v=yVN-fSk52Kg&t=4352s"
    },
    {
      "publishedAt": "2024-09-02T15:56:50Z",
      "title": "【ドラゴンボールZ:KAKAROT】#01 -TRUNKS-希望の戦士 これはもう一つの物語…【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=tsUf4M-PtmA",
      "videoId": "tsUf4M-PtmA",
      "startTime": 1583,
      "startUrl": "https://www.youtube.com/watch?v=tsUf4M-PtmA&t=1583s"
    },
    {
      "publishedAt": "2024-10-05T15:24:18Z",
      "title": "【ドラゴンボールZ:KAKAROT】#01 波乱の天下一武道会！幕開け！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Qkk5Pk93GyE",
      "videoId": "Qkk5Pk93GyE",
      "startTime": 5619,
      "startUrl": "https://www.youtube.com/watch?v=Qkk5Pk93GyE&t=5619s"
    },
    {
      "publishedAt": "2024-10-06T16:16:22Z",
      "title": "【ドラゴンボールZ:KAKAROT】#01 魔人ブウとの激闘から10年後・・・【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=jROeBDapFBs",
      "videoId": "jROeBDapFBs",
      "startTime": 3867,
      "startUrl": "https://www.youtube.com/watch?v=jROeBDapFBs&t=3867s"
    },
    {
      "publishedAt": "2024-12-23T16:41:16Z",
      "title": "みんなと話したいことがたくさんある！！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=OXmsgC3IJow",
      "videoId": "OXmsgC3IJow",
      "startTime": 3927,
      "startUrl": "https://www.youtube.com/watch?v=OXmsgC3IJow&t=3927s"
    },
    {
      "publishedAt": "2024-12-25T13:15:08Z",
      "title": "【オフコラボ】リゼ様と一緒におうちでケーキ作り♡♡【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=gNu6ZZvCOsc",
      "videoId": "gNu6ZZvCOsc",
      "startTime": 6352,
      "startUrl": "https://www.youtube.com/watch?v=gNu6ZZvCOsc&t=6352s"
    },
    {
      "publishedAt": "2024-12-29T16:25:13Z",
      "title": "#02 完全初見！星のカービィ64で遊ぶぞ～～～！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=Rp9inBFbsdU",
      "videoId": "Rp9inBFbsdU",
      "startTime": 8427,
      "startUrl": "https://www.youtube.com/watch?v=Rp9inBFbsdU&t=8427s"
    },
    {
      "publishedAt": "2024-12-31T13:28:43Z",
      "title": "【歌枠】歌も司会もやっちゃおう！一人紅白歌合戦！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=0iU1snp0E44",
      "videoId": "0iU1snp0E44",
      "startTime": 3982,
      "startUrl": "https://www.youtube.com/watch?v=0iU1snp0E44&t=3982s"
    },
    {
      "publishedAt": "2025-01-05T14:48:38Z",
      "title": "#FINAL 完全初見！星のカービィ64で遊ぶぞ～～～！！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=vBBT7ALYaW8",
      "videoId": "vBBT7ALYaW8",
      "startTime": 936,
      "startUrl": "https://www.youtube.com/watch?v=vBBT7ALYaW8&t=936s"
    },
    {
      "publishedAt": "2025-01-18T01:05:28Z",
      "title": "【第６話】不仲払拭！？おうちにお泊り楽器練習会！！ #ほしふれんず【星川サラ/フレン/にじさんじ】",
      "url": "https://www.youtube.com/watch?v=8lDdt0QMwxs",
      "videoId": "8lDdt0QMwxs",
      "startTime": 14592,
      "startUrl": "https://www.youtube.com/watch?v=8lDdt0QMwxs&t=14592s"
    },
    {
      "publishedAt": "2025-02-01T11:40:23Z",
      "title": "【ドンキーコングリターンズHD】完全初見！人生初のドンキーコング！！楽しむぞ～！【にじさんじ】",
      "url": "https://www.youtube.com/watch?v=nUo2cc0V3do",
      "videoId": "nUo2cc0V3do",
      "startTime": 10184,
      "startUrl": "https://www.youtube.com/watch?v=nUo2cc0V3do&t=10184s"
    }
  ];

// 秒を hh:mm:ss 形式に変換
function convertSecondsToHms(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    const sec = Math.floor(seconds % 3600 % 60);
    const hh = hours < 10 ? `0${hours}` : hours;
    const mm = minutes < 10 ? `0${minutes}` : minutes;
    const ss = sec < 10 ? `0${sec}` : sec;
    return `${hh}:${mm}:${ss}`;
}

function createVideoDataButtons() {
    // 動画リストを作成
    const videoList = document.getElementById('video-list');
    videoData.forEach(video => {
        const button = document.createElement('button');
        button.textContent = `${video.title} (${convertSecondsToHms(video.startTime)})`;
        button.addEventListener('click', () => {
            const videoId = video.videoId;
            const startTime = video.startTime;
            player.loadVideoById(videoId, startTime); // ボタンがクリックされたら動画を変更
            const playerInfo = document.getElementById('player-info');
            playerInfo.innerHTML = '';
            playerInfo.textContent = 'YouTube で見る: ';
            const aLink = document.createElement('a');
            aLink.href = video.startUrl;
            aLink.textContent = `${video.title} (${convertSecondsToHms(video.startTime)})`;
            playerInfo.appendChild(aLink);
        });
        videoList.appendChild(button);
    });
}
