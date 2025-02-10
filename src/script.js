var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
const autoplayCheckbox = document.getElementById("autoplay");

var player;

// eslint-disable-next-line no-unused-vars
function onYouTubeIframeAPIReady() {
  // eslint-disable-next-line no-undef
  player = new YT.Player("player", {
    height: "360",
    width: "640",
    videoId: "6dh2TTlvBdY",
    events: {
      "onReady": onPlayerReady,
      "onError": onPlayerError,
    }
  });
}

function onPlayerError(event) {
  console.log("onPlayerError", event);
  switch (event.data) {
  case 2:
    console.log("Invalid parameter");
    break;
  case 5:
    console.log("HTML 5 error");
    break;
  case 100:
    console.log("Video not found");
    break;
  case 101:
  case 150:
    console.log("Video not embeddable");
    break;
  }
  const isAutoplay = autoplayCheckbox.checked;
  if (isAutoplay) {
    playRandomVideo();
  }
}

// eslint-disable-next-line no-unused-vars
async function onPlayerReady(event) {
  await fetchVideoData();
  createVideoDataButtons();
  playRandomVideo();
}

let videoData = [];

async function fetchVideoData() {
  const response = await fetch("./data/maikka.json");
  const data = await response.json();
  videoData = data;
}

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

// 再生開始からお問い合わせフォームの表示時間[s]
const FORM_TIME = 20 * 1000;

// お問い合わせの表示
function showForm(playerInfo, titleText) {
  const aWarningLink = document.createElement("a");
  const formUrl = [
    "https://docs.google.com/forms/d/e/1FAIpQLScHja9YvKUg8U0fIIcN44_JG0tIVnMSnY9VDExAvSXWjLrXHg/viewform?",
    "usp=pp_url&",
    "entry.69819494=%E3%83%9F%E3%82%B9%E5%A0%B1%E5%91%8A&",
    "entry.1514793395=", encodeURI(titleText)
  ].join("");
  aWarningLink.href = formUrl;
  aWarningLink.textContent = "こちら";
  aWarningLink.target = "_blank";
  const divWarning = document.createElement("div");
  divWarning.innerHTML = `再生開始から20秒経過しました。もし「まいっか」がなければ ${aWarningLink.outerHTML} から報告お願いいたします。`;
  playerInfo.appendChild(divWarning);
}

// お問い合わせフォームの表示スケジュール
let showFormSchedule = null;

function playVideo(video) {
  const videoId = video.videoId;
  const startTime = video.startTime;
  const titleText = `${video.title} (${convertSecondsToHms(video.startTime)})`;
  player.loadVideoById(videoId, startTime);
  {
    const playerInfo = document.getElementById("player-info");
    playerInfo.innerHTML = "";
    playerInfo.textContent = "YouTube で見る: ";
    const aLink = document.createElement("a");
    aLink.href = video.startUrl;
    aLink.textContent = titleText;
    playerInfo.appendChild(aLink);
    const divContent = document.createElement("div");
    divContent.textContent = video.publishedAt.split("T")[0];
    playerInfo.appendChild(divContent);
  }
  resetProgress();
  // 指定秒数後にお問い合わせフォームを表示する
  if (showFormSchedule !== null) {
    clearTimeout(showFormSchedule);
  }
  showFormSchedule = setTimeout(() => {
    const isAutoplay = autoplayCheckbox.checked;
    if (isAutoplay) {
      playRandomVideo();
    } else {
      const playerInfo = document.getElementById("player-info");
      showForm(playerInfo, titleText);
    }
  }, FORM_TIME);
}

function playRandomVideo() {
  const randomIndex = Math.floor(Math.random() * videoData.length);
  playVideo(videoData[randomIndex]);
}

// publishedAt 文字列から年を取得する
function getYear(publishedAt) {
  const year = parseInt(publishedAt.split("-")[0]);
  return year;
}

function createVideoDataButtons() {
  // 動画リストを作成
  const videoList = document.getElementById("video-list");
  let no = 1;
  let year = 0;
  videoData.forEach(video => {
    if (year !== getYear(video.publishedAt)) {
      year = getYear(video.publishedAt);
      const divYear = document.createElement("div");
      divYear.classList.add("year");
      divYear.textContent = year;
      videoList.appendChild(divYear);
    }
    const button = document.createElement("button");
    button.classList.add("video-button");
    button.textContent = `[${no}] ${video.title} (${convertSecondsToHms(video.startTime)})`;
    no++;
    button.addEventListener("click", () => {
      playVideo(video);
    });
    videoList.appendChild(button);
  });
}

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

// プログレスバーの初期化
let progress = 0;
const duration = 20; // 秒
const interval = 33; // 更新間隔(ミリ秒)

// プログレスバーを描画する関数
function drawProgressBar() {
  progress += interval / 1000;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const percent = Math.min(1, Math.max(0, progress / duration));
  ctx.fillStyle = "blue";
  if (percent > 0.8) {
    ctx.fillStyle = "red";
  }
  ctx.fillRect(0, 0, canvas.width * (progress / duration), canvas.height);
}

function resetProgress() {
  progress = 0;
}

setInterval(() => {  
  drawProgressBar();
}, interval);

// シャッフルボタン設定
const shuffleButton = document.getElementById("shuffle-button");
shuffleButton.addEventListener("click", () => {
  playRandomVideo();
});
