var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
const autoplayCheckbox = document.getElementById("autoplay");

var player;

// ゲーム要素: スコア
let score = 0;

// 効果音再生
const switchSound = new Audio('sounds/決定ボタンを押す3.mp3');
switchSound.volume = 0.5;

function playVideoSwitchSound() {
  // 音声ファイルを最初から再生
  switchSound.currentTime = 0;
  switchSound.play().catch(err => {
    console.log('音声再生エラー:', err);
  });
}

// eslint-disable-next-line no-unused-vars
function onYouTubeIframeAPIReady() {
  // eslint-disable-next-line no-undef
  player = new YT.Player("player", {
    height: "450",
    width: "800",
    videoId: "6dh2TTlvBdY",
    events: {
      "onReady": onPlayerReady,
      "onError": onPlayerError,
    }
  });
}

function onPlayerError(event) {
  console.log("onPlayerError", event);
  
  // 現在再生しようとしていた動画をエラーリストに追加
  if (currentPlayingVideo) {
    const videoId = currentPlayingVideo.videoId;
    failedVideos.add(videoId);
    
    // 該当するボタンを全て見つけて無効化し、リンクを追加
    const buttons = document.querySelectorAll(`button[data-video-id="${videoId}"]`);
    buttons.forEach(button => {
      if (!button.classList.contains('video-error')) {
        button.classList.add('video-error');
        button.disabled = true;
        button.style.cursor = 'default';
        
        // ボタンの後にYouTubeリンクを追加
        const link = document.createElement('a');
        link.href = currentPlayingVideo.startUrl;
        link.target = '_blank';
        link.className = 'error-video-link';
        link.textContent = 'YouTubeで開く';
        link.onclick = (e) => e.stopPropagation();
        button.appendChild(link);
      }
    });
  }
  
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
  const stopButton = document.getElementById("stop-button");
  const isPaused = stopButton && stopButton.getAttribute("data-state") === "paused";
  const isAutoplay = autoplayCheckbox.checked;
  if (isAutoplay && !isPaused) {
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
let currentPlayingVideo = null;
const failedVideos = new Set(); // 再生できなかった動画のvideoIdを記録

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
  currentPlayingVideo = video; // 現在再生しようとしている動画を記録
  const videoId = video.videoId;
  const startTime = video.startTime;
  const titleText = `${video.title} (${convertSecondsToHms(video.startTime)})`;
  
  // 効果音を再生
  playVideoSwitchSound();
  
  // プレイヤーにアニメーションクラスを追加
  const playerContainer = document.querySelector('.player-progress-container');
  playerContainer.classList.remove('video-switching');
  void playerContainer.offsetWidth; // リフロー強制
  playerContainer.classList.add('video-switching');
  
  player.loadVideoById(videoId, startTime);
  {
    const playerInfo = document.getElementById("player-info");
    
    // プレイヤー情報にアニメーションクラスを追加
    playerInfo.classList.remove('player-info-switching');
    void playerInfo.offsetWidth; // リフロー強制
    playerInfo.classList.add('player-info-switching');
    
    playerInfo.innerHTML = "";
    
    // タイトルリンク
    const titleWrapper = document.createElement("div");
    titleWrapper.style.marginBottom = "8px";
    titleWrapper.innerHTML = "🎬 ";
    const aLink = document.createElement("a");
    aLink.href = video.startUrl;
    aLink.target = "_blank";
    aLink.textContent = titleText;
    titleWrapper.appendChild(aLink);
    playerInfo.appendChild(titleWrapper);
    
    // 日付表示
    const divContent = document.createElement("div");
    divContent.innerHTML = `📅 ${video.publishedAt.split("T")[0]}`;
    playerInfo.appendChild(divContent);
  }
  resetProgress();
  // 指定秒数後にお問い合わせフォームを表示する
  if (showFormSchedule !== null) {
    clearTimeout(showFormSchedule);
  }
  showFormSchedule = setTimeout(() => {
    const stopButton = document.getElementById("stop-button");
    const isPaused = stopButton && stopButton.getAttribute("data-state") === "paused";
    const isAutoplay = autoplayCheckbox.checked;
    if (isAutoplay && !isPaused) {
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
  // 動画リストを作成（時間降順にソート）
  const sortedData = [...videoData].sort((a, b) => {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });
  
  // 各年の動画数をカウント
  const yearCounts = {};
  sortedData.forEach(video => {
    const videoYear = getYear(video.publishedAt);
    yearCounts[videoYear] = (yearCounts[videoYear] || 0) + 1;
  });
  
  const videoList = document.getElementById("video-list");
  let no = 1;
  let year = 0;
  let currentYearContainer = null;
  let currentYearHeader = null;
  
  sortedData.forEach(video => {
    if (year !== getYear(video.publishedAt)) {
      year = getYear(video.publishedAt);
      
      // 年ヘッダーを作成
      const divYear = document.createElement("div");
      divYear.classList.add("year");
      divYear.textContent = `${year} (${yearCounts[year]}件)`;
      currentYearHeader = divYear;
      videoList.appendChild(divYear);
      
      // 年ごとにグリッドコンテナを作成
      const yearContainer = document.createElement("div");
      yearContainer.classList.add("video-list-container");
      currentYearContainer = yearContainer;
      videoList.appendChild(yearContainer);
      
      // 折り畳み機能を追加（クロージャで正しくキャプチャ）
      divYear.addEventListener("click", (function(header, container) {
        return function() {
          header.classList.toggle("collapsed");
          container.classList.toggle("collapsed");
        };
      })(divYear, yearContainer));
    }
    
    const button = document.createElement("button");
    button.classList.add("video-button");
    button.setAttribute("data-video-id", video.videoId);
    
    // ボタンテキストを整形
    const buttonText = document.createElement("span");
    buttonText.style.position = "relative";
    buttonText.style.zIndex = "1";
    buttonText.style.paddingLeft = "30px";
    buttonText.textContent = `[${no}] ${video.title} (${convertSecondsToHms(video.startTime)})`;
    button.appendChild(buttonText);
    
    no++;
    button.addEventListener("click", () => {
      // エラー動画の場合は何もしない（リンクで開く）
      if (failedVideos.has(video.videoId)) {
        return;
      }
      playVideo(video);
    });
    // ゲームエフェクトを追加
    addGameEffectsToButton(button);
    currentYearContainer.appendChild(button);
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
  
  // グラデーション効果
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
  if (percent > 0.8) {
    // 警告色（赤系）
    gradient.addColorStop(0, "#FF6347");
    gradient.addColorStop(0.5, "#FF4500");
    gradient.addColorStop(1, "#DC143C");
  } else if (percent > 0.5) {
    // 中間色（黄色系）
    gradient.addColorStop(0, "#FFD700");
    gradient.addColorStop(0.5, "#FFA500");
    gradient.addColorStop(1, "#FF8C00");
  } else {
    // 安全色（青〜緑系）
    gradient.addColorStop(0, "#00CED1");
    gradient.addColorStop(0.5, "#4169E1");
    gradient.addColorStop(1, "#1E90FF");
  }
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width * percent, canvas.height);
  
  // 光沢効果（上半分）
  const gloss = ctx.createLinearGradient(0, 0, 0, canvas.height / 2);
  gloss.addColorStop(0, "rgba(255, 255, 255, 0.4)");
  gloss.addColorStop(1, "rgba(255, 255, 255, 0)");
  ctx.fillStyle = gloss;
  ctx.fillRect(0, 0, canvas.width * percent, canvas.height / 2);
  
  // 下半分の影
  const shadow = ctx.createLinearGradient(0, canvas.height / 2, 0, canvas.height);
  shadow.addColorStop(0, "rgba(0, 0, 0, 0)");
  shadow.addColorStop(1, "rgba(0, 0, 0, 0.2)");
  ctx.fillStyle = shadow;
  ctx.fillRect(0, canvas.height / 2, canvas.width * percent, canvas.height / 2);
  
  // テキスト表示（残り秒数）
  const remainingSeconds = Math.ceil(duration - progress);
  if (remainingSeconds > 0) {
    ctx.fillStyle = "white";
    ctx.font = "bold 12px 'RocknRoll One'";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
    ctx.shadowBlur = 4;
    ctx.fillText(`${remainingSeconds}秒`, canvas.width / 2, canvas.height / 2);
    ctx.shadowBlur = 0;
  }
}

function resetProgress() {
  progress = 0;
}

let progressBarInterval = setInterval(() => {  
  drawProgressBar();
}, interval);

// シャッフルボタン設定
const shuffleButton = document.getElementById("shuffle-button");
shuffleButton.addEventListener("click", (event) => {
  // パーティクル生成
  createParticles(event.clientX, event.clientY);
  
  // スコア加算
  updateScore(50);
  
  playRandomVideo();
});

// 停止/再生ボタン設定
const stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", (event) => {
  // パーティクル生成
  createParticles(event.clientX, event.clientY);
  
  const currentState = stopButton.getAttribute("data-state");
  
  if (currentState === "playing") {
    // 停止処理
    if (player && typeof player.pauseVideo === 'function') {
      player.pauseVideo();
    }
    
    // プログレスバー更新を停止
    if (progressBarInterval) {
      clearInterval(progressBarInterval);
      progressBarInterval = null;
    }
    
    // 自動再生のタイムアウトをクリア
    if (showFormSchedule !== null) {
      clearTimeout(showFormSchedule);
      showFormSchedule = null;
    }
    
    stopButton.setAttribute("data-state", "paused");
  } else {
    // 再生処理
    if (player && typeof player.playVideo === 'function') {
      player.playVideo();
    }
    
    // プログレスバー更新を再開
    if (!progressBarInterval) {
      progressBarInterval = setInterval(() => {  
        drawProgressBar();
      }, interval);
    }
    
    // 自動再生のタイムアウトを再設定（残り時間を計算）
    const elapsedTime = progress * 1000; // 経過時間（ミリ秒）
    const remainingTime = Math.max(0, FORM_TIME - elapsedTime);
    if (remainingTime > 0) {
      showFormSchedule = setTimeout(() => {
        const stopBtn = document.getElementById("stop-button");
        const isPaused = stopBtn && stopBtn.getAttribute("data-state") === "paused";
        const isAutoplay = autoplayCheckbox.checked;
        if (isAutoplay && !isPaused) {
          playRandomVideo();
        }
      }, remainingTime);
    }
    
    stopButton.setAttribute("data-state", "playing");
  }
});

// ゲーム機能: パーティクルエフェクト
function createParticles(x, y) {
  const particlesContainer = document.getElementById("particles");
  const colors = ["#EC1D2F", "#FFD700", "#FF69B4", "#00CED1", "#FF6347", "#9370DB"];
  
  for (let i = 0; i < 15; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.backgroundColor = color;
    particle.style.left = x + "px";
    particle.style.top = y + "px";
    
    // ランダムな方向に飛ばす
    const angle = (Math.random() * 360) * Math.PI / 180;
    const distance = Math.random() * 100 + 50;
    const dx = Math.cos(angle) * distance;
    const dy = Math.sin(angle) * distance;
    
    particle.style.setProperty("--dx", dx + "px");
    particle.style.setProperty("--dy", dy + "px");
    
    particlesContainer.appendChild(particle);
    
    // アニメーション終了後に削除
    setTimeout(() => {
      particle.remove();
    }, 1000);
  }
}

// スコア更新
function updateScore(points) {
  score += points;
  document.getElementById("score").textContent = score;
  
  // スコア表示をアニメーション
  const scoreDisplay = document.getElementById("score-display");
  scoreDisplay.style.animation = "none";
  setTimeout(() => {
    scoreDisplay.style.animation = "scoreFloat 0.5s ease";
  }, 10);
}

// 動画ボタンにクリックイベントを追加（パーティクルとスコア）
function addGameEffectsToButton(button) {
  button.addEventListener("click", (event) => {
    // パーティクル生成
    createParticles(event.clientX, event.clientY);
    
    // スコア加算
    updateScore(100);
  });
}
