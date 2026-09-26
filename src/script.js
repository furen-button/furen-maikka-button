/* global YT */

const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
if (firstScriptTag.parentNode) {
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

const FORM_TIME = 20 * 1000;
const DEFAULT_VIDEO_ID = "6dh2TTlvBdY";
const STORAGE_KEYS = {
  autoNext: "maikka.autoNext",
  mode: "maikka.mode",
  playCount: "maikka.playCount",
};
const MODES = ["random", "sequential", "repeat"];
const JST_DATE_TIME_FORMATTER = new Intl.DateTimeFormat("ja-JP", {
  timeZone: "Asia/Tokyo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});
const JST_DATE_FORMATTER = new Intl.DateTimeFormat("ja-JP", {
  timeZone: "Asia/Tokyo",
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});
const JST_YEAR_FORMATTER = new Intl.DateTimeFormat("ja-JP", {
  timeZone: "Asia/Tokyo",
  year: "numeric",
});
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const mobileViewport = window.matchMedia("(max-width: 767px)");
const storageFallback = {};

const playCountElement = document.getElementById("play-count");
const playerInfoElement = document.getElementById("player-info");
const currentTitleElement = document.getElementById("current-title");
const currentDateElement = document.getElementById("current-date");
const currentTimeElement = document.getElementById("current-time");
const currentLinkElement = document.getElementById("current-link");
const nowPlayingDetails = document.getElementById("now-playing-details");
const progressBarElement = document.getElementById("progress-bar");
const remainingTimeElement = document.getElementById("remaining-time");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
const sealButton = document.getElementById("seal-button");
const pauseButton = document.getElementById("pause-button");
const modeControl = document.getElementById("mode-control");
const autoNextInput = document.getElementById("auto-next");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const videoCountElement = document.getElementById("video-count");
const videoListElement = document.getElementById("video-list");
const emptySearchElement = document.getElementById("empty-search");
const petalLayer = document.getElementById("petal-layer");
const stageElement = document.querySelector(".stage");
const ledgerToolbar = document.querySelector(".ledger-toolbar");

let player = null;
let videoData = [];
let videoItems = [];
let visibleVideoItems = [];
let currentPlayingVideo = null;
let currentPlayingRow = null;
let currentPlayingChip = null;
let mode = normalizeMode(getStoredValue(STORAGE_KEYS.mode, "random"));
let autoNext = getStoredValue(STORAGE_KEYS.autoNext, "true") !== "false";
let playCount = readStoredNumber(STORAGE_KEYS.playCount, 0);
let displayedPlayCount = playCount;
let progressFrameId = null;
let progressStartedAt = 0;
let elapsedBeforePause = 0;
let progressComplete = false;
let isPaused = false;
let sealAnimationTimer = null;
const failedVideos = new Set();
const videoItemsById = new Map();
const yearDividerNodes = new Map();
const playHistory = [];

const switchSound = new Audio("sounds/決定ボタンを押す3.mp3");
switchSound.volume = 0.5;

setPlayCountDisplay(playCount);
autoNextInput.checked = autoNext;
setMode(mode, {persist: false});
syncNowPlayingDetails();
initControls();
initStickyOffset();

window.onYouTubeIframeAPIReady = function() {
  player = new YT.Player("player", {
    height: "100%",
    width: "100%",
    videoId: DEFAULT_VIDEO_ID,
    events: {
      "onReady": onPlayerReady,
      "onError": onPlayerError,
    },
  });
};

// 効果音再生
function playVideoSwitchSound() {
  switchSound.currentTime = 0;
  switchSound.play().catch((err) => {
    console.log("音声再生エラー:", err);
  });
}

async function onPlayerReady() {
  await fetchVideoData();
  buildVideoItems();
  renderList();
  playRandomVideo({recordHistory: false});
}

function onPlayerError(event) {
  console.log("onPlayerError", event);

  if (currentPlayingVideo) {
    failedVideos.add(currentPlayingVideo.videoId);
    markFailedVideo(currentPlayingVideo.videoId);
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
  default:
    console.log("Unknown YouTube error");
    break;
  }

  if (autoNext && !isPaused) {
    playNextAfterError();
  }
}

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

// お問い合わせの表示
function showForm(playerInfo, titleText) {
  clearReportNotice();

  const aWarningLink = document.createElement("a");
  const formUrl = [
    "https://docs.google.com/forms/d/e/1FAIpQLScHja9YvKUg8U0fIIcN44_JG0tIVnMSnY9VDExAvSXWjLrXHg/viewform?",
    "usp=pp_url&",
    "entry.69819494=%E3%83%9F%E3%82%B9%E5%A0%B1%E5%91%8A&",
    "entry.1514793395=", encodeURI(titleText),
  ].join("");
  aWarningLink.href = formUrl;
  aWarningLink.textContent = "こちら";
  aWarningLink.target = "_blank";
  aWarningLink.rel = "noreferrer";

  const divWarning = document.createElement("div");
  divWarning.className = "report-notice";
  divWarning.append("再生開始から20秒経過しました。もし「まいっか」がなければ ");
  divWarning.appendChild(aWarningLink);
  divWarning.append(" から報告お願いいたします。");
  playerInfo.appendChild(divWarning);
}

// 追従スクロールの余白として、画面上部に固定されている要素（1カラム時は stage、2カラム時はツールバー）の高さを CSS 変数に渡す
function initStickyOffset() {
  const updateStickyOffset = () => {
    let offset = 0;
    [stageElement, ledgerToolbar].forEach((element) => {
      if (window.getComputedStyle(element).position === "sticky") {
        offset = Math.max(offset, element.offsetHeight);
      }
    });
    document.documentElement.style.setProperty("--sticky-offset", `${offset}px`);
  };
  const resizeObserver = new ResizeObserver(updateStickyOffset);
  resizeObserver.observe(stageElement);
  resizeObserver.observe(ledgerToolbar);
  window.addEventListener("resize", updateStickyOffset);
  updateStickyOffset();
}

function initControls() {
  prevButton.addEventListener("click", (event) => {
    const point = getEventPoint(event, prevButton);
    createPetals(point.x, point.y, 8);
    playPrevious();
  });

  nextButton.addEventListener("click", (event) => {
    const point = getEventPoint(event, nextButton);
    createPetals(point.x, point.y, 8);
    playNextByMode();
  });

  sealButton.addEventListener("click", (event) => {
    const point = getEventPoint(event, sealButton);
    animateSealPress();
    createPetals(point.x, point.y, 18);
    if (isPaused) {
      resumePlayback();
    } else {
      playNextByMode();
    }
  });

  pauseButton.addEventListener("click", () => {
    if (isPaused) {
      resumePlayback();
    } else {
      pausePlayback();
    }
  });

  modeControl.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    const button = target.closest("button[data-mode]");
    if (!button) {
      return;
    }

    setMode(button.dataset.mode);
  });

  autoNextInput.addEventListener("change", () => {
    autoNext = autoNextInput.checked;
    setStoredValue(STORAGE_KEYS.autoNext, String(autoNext));
  });

  searchInput.addEventListener("input", () => {
    renderList();
  });

  sortSelect.addEventListener("change", () => {
    renderList();
  });

  videoListElement.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) {
      return;
    }

    const chip = target.closest(".clip-chip");
    if (!chip || chip.disabled) {
      return;
    }

    const videoId = chip.dataset.videoId;
    const startTime = Number.parseInt(chip.dataset.startTime, 10);
    const video = findVideoClip(videoId, startTime);
    if (!video || failedVideos.has(video.videoId)) {
      return;
    }

    const point = getEventPoint(event, chip);
    createPetals(point.x, point.y, 7);
    playVideo(video);
  });
}

function syncNowPlayingDetails() {
  nowPlayingDetails.open = !mobileViewport.matches;
}

function buildVideoItems() {
  const groups = new Map();
  videoData.forEach((clip) => {
    let item = groups.get(clip.videoId);
    if (!item) {
      item = {
        clips: [],
        dateText: formatJstDate(clip.publishedAt),
        row: null,
        timestamp: Date.parse(clip.publishedAt),
        title: clip.title,
        videoId: clip.videoId,
        year: formatJstYear(clip.publishedAt),
      };
      groups.set(clip.videoId, item);
    }
    item.clips.push(clip);
  });

  videoItems = Array.from(groups.values());
  videoItems.forEach((item) => {
    item.clips.sort((a, b) => {
      return a.startTime - b.startTime;
    });
    item.row = createVideoRow(item);
    videoItemsById.set(item.videoId, item);
  });
}

function createVideoRow(item) {
  const row = document.createElement("article");
  row.className = "video-row";
  row.dataset.videoId = item.videoId;

  const thumbnail = document.createElement("div");
  thumbnail.className = "thumbnail";
  const image = document.createElement("img");
  image.src = `https://i.ytimg.com/vi/${item.videoId}/mqdefault.jpg`;
  image.loading = "lazy";
  image.decoding = "async";
  image.width = 320;
  image.height = 180;
  image.alt = "";
  thumbnail.appendChild(image);
  row.appendChild(thumbnail);

  const body = document.createElement("div");
  body.className = "row-body";

  const heading = document.createElement("div");
  heading.className = "row-heading";
  const title = document.createElement("h2");
  title.className = "video-title";
  title.textContent = item.title;
  const count = document.createElement("span");
  count.className = "clip-count";
  count.textContent = `×${item.clips.length}`;
  heading.append(title, count);
  body.appendChild(heading);

  const meta = document.createElement("div");
  meta.className = "row-meta";
  const date = document.createElement("time");
  date.className = "published-date";
  date.dateTime = item.clips[0].publishedAt;
  date.textContent = item.dateText;
  const equalizer = document.createElement("span");
  equalizer.className = "equalizer";
  equalizer.setAttribute("aria-hidden", "true");
  for (let i = 0; i < 3; i++) {
    equalizer.appendChild(document.createElement("span"));
  }
  meta.append(date, equalizer);
  body.appendChild(meta);

  const chipList = document.createElement("div");
  chipList.className = "chip-list";
  item.clips.forEach((clip) => {
    const chip = document.createElement("button");
    chip.className = "clip-chip";
    chip.type = "button";
    chip.dataset.videoId = clip.videoId;
    chip.dataset.startTime = String(clip.startTime);
    chip.textContent = convertSecondsToHms(clip.startTime);
    chipList.appendChild(chip);
  });
  body.appendChild(chipList);

  const failedLink = document.createElement("a");
  failedLink.className = "failed-video-link";
  failedLink.href = item.clips[0].startUrl;
  failedLink.target = "_blank";
  failedLink.rel = "noreferrer";
  failedLink.textContent = "YouTubeで開く";
  failedLink.hidden = true;
  body.appendChild(failedLink);

  row.appendChild(body);
  return row;
}

function renderList() {
  const sortedItems = getSortedItems();
  const query = searchInput.value.trim().toLocaleLowerCase("ja-JP");
  const fragment = document.createDocumentFragment();
  const showYearDividers = sortSelect.value !== "count";
  visibleVideoItems = [];
  let currentYear = "";

  sortedItems.forEach((item) => {
    const matches = !query ||
      item.title.toLocaleLowerCase("ja-JP").includes(query);
    item.row.hidden = !matches;

    if (matches) {
      visibleVideoItems.push(item);
      if (showYearDividers && currentYear !== item.year) {
        currentYear = item.year;
        fragment.appendChild(getYearDividerNode(currentYear));
      }
    }

    fragment.appendChild(item.row);
  });

  videoListElement.replaceChildren(fragment);
  const visibleClipCount = visibleVideoItems.reduce((sum, item) => sum + item.clips.length, 0);
  videoCountElement.textContent = `${visibleVideoItems.length.toLocaleString("ja-JP")}本 / ${visibleClipCount.toLocaleString("ja-JP")}ボタン`;
  emptySearchElement.hidden = visibleVideoItems.length > 0;
  updatePlayingState();

  if (mode === "sequential") {
    scrollCurrentRow();
  }
}

function getSortedItems() {
  const items = videoItems.slice();
  const sortValue = sortSelect.value;

  if (sortValue === "oldest") {
    return items.sort((a, b) => {
      return a.timestamp - b.timestamp || a.title.localeCompare(b.title, "ja-JP");
    });
  }

  if (sortValue === "count") {
    return items.sort((a, b) => {
      return b.clips.length - a.clips.length ||
        b.timestamp - a.timestamp ||
        a.title.localeCompare(b.title, "ja-JP");
    });
  }

  return items.sort((a, b) => {
    return b.timestamp - a.timestamp || a.title.localeCompare(b.title, "ja-JP");
  });
}

function getYearDividerNode(year) {
  let node = yearDividerNodes.get(year);
  if (!node) {
    node = document.createElement("div");
    node.className = "year-divider";
    node.textContent = year;
    yearDividerNodes.set(year, node);
  }
  return node;
}

function playVideo(video, options = {}) {
  if (!video || failedVideos.has(video.videoId) || !player) {
    return;
  }

  if (currentPlayingVideo &&
      options.recordHistory !== false &&
      !isSameClip(currentPlayingVideo, video)) {
    playHistory.push(currentPlayingVideo);
  }

  currentPlayingVideo = video;
  clearReportNotice();
  setPaused(false);
  updateNowPlaying(video);
  updatePlayingState();
  incrementPlayCount();
  playVideoSwitchSound();
  player.loadVideoById(video.videoId, video.startTime);
  startProgress();

  if (mode === "sequential") {
    scrollCurrentRow();
  }
}

function playRandomVideo(options = {}) {
  const video = getRandomPlayableClip();
  if (video) {
    playVideo(video, options);
  }
}

function playNextByMode(options = {}) {
  if (mode === "repeat" && currentPlayingVideo &&
      !failedVideos.has(currentPlayingVideo.videoId)) {
    playVideo(currentPlayingVideo, {recordHistory: false});
    return;
  }

  if (mode === "random") {
    playRandomVideo(options);
    return;
  }

  playDisplayedClipOffset(1, options);
}

function playPrevious() {
  if (mode === "repeat" && currentPlayingVideo &&
      !failedVideos.has(currentPlayingVideo.videoId)) {
    playVideo(currentPlayingVideo, {recordHistory: false});
    return;
  }

  if (mode === "random") {
    while (playHistory.length > 0) {
      const previousVideo = playHistory.pop();
      if (!failedVideos.has(previousVideo.videoId)) {
        playVideo(previousVideo, {recordHistory: false});
        return;
      }
    }
    return;
  }

  playDisplayedClipOffset(-1);
}

function playNextAfterError() {
  if (mode === "random") {
    playRandomVideo({recordHistory: false});
    return;
  }

  const nextVideo = getNextAvailableAfterFailed(currentPlayingVideo);
  if (nextVideo) {
    playVideo(nextVideo, {recordHistory: false});
    return;
  }

  playRandomVideo({recordHistory: false});
}

function playDisplayedClipOffset(offset, options = {}) {
  const video = getRelativeDisplayedClip(offset);
  if (video) {
    playVideo(video, options);
  }
}

function getRandomPlayableClip() {
  const candidates = videoData.filter((video) => {
    return !failedVideos.has(video.videoId);
  });

  if (candidates.length === 0) {
    return null;
  }

  let playableCandidates = candidates;
  if (currentPlayingVideo && candidates.length > 1) {
    playableCandidates = candidates.filter((video) => {
      return !isSameClip(video, currentPlayingVideo);
    });
  }

  const index = Math.floor(Math.random() * playableCandidates.length);
  return playableCandidates[index];
}

function getRelativeDisplayedClip(offset) {
  const clips = getDisplayedClips(false);
  if (clips.length === 0) {
    return null;
  }

  const currentIndex = clips.findIndex((clip) => {
    return isSameClip(clip, currentPlayingVideo);
  });

  if (currentIndex < 0) {
    return offset < 0 ? clips[clips.length - 1] : clips[0];
  }

  const nextIndex = (currentIndex + offset + clips.length) % clips.length;
  return clips[nextIndex];
}

function getNextAvailableAfterFailed(video) {
  const clips = getDisplayedClips(true);
  if (clips.length === 0) {
    return null;
  }

  const currentIndex = clips.findIndex((clip) => {
    return isSameClip(clip, video);
  });
  const startIndex = currentIndex < 0 ? -1 : currentIndex;

  for (let i = 1; i <= clips.length; i++) {
    const clip = clips[(startIndex + i + clips.length) % clips.length];
    if (!failedVideos.has(clip.videoId)) {
      return clip;
    }
  }

  return null;
}

function getDisplayedClips(includeFailed) {
  const clips = [];
  visibleVideoItems.forEach((item) => {
    item.clips.forEach((clip) => {
      if (includeFailed || !failedVideos.has(clip.videoId)) {
        clips.push(clip);
      }
    });
  });
  return clips;
}

function findVideoClip(videoId, startTime) {
  return videoData.find((video) => {
    return video.videoId === videoId && video.startTime === startTime;
  });
}

function updateNowPlaying(video) {
  currentTitleElement.textContent = video.title;
  currentDateElement.textContent = formatJstDateTime(video.publishedAt);
  currentTimeElement.textContent = convertSecondsToHms(video.startTime);
  currentLinkElement.href = video.startUrl;
}

function updatePlayingState() {
  if (currentPlayingRow) {
    currentPlayingRow.classList.remove("is-playing");
  }
  if (currentPlayingChip) {
    currentPlayingChip.classList.remove("is-playing");
  }

  currentPlayingRow = null;
  currentPlayingChip = null;

  if (!currentPlayingVideo) {
    return;
  }

  const item = videoItemsById.get(currentPlayingVideo.videoId);
  if (!item) {
    return;
  }

  currentPlayingRow = item.row;
  currentPlayingRow.classList.add("is-playing");
  currentPlayingChip = item.row.querySelector(
    `.clip-chip[data-start-time="${currentPlayingVideo.startTime}"]`);
  if (currentPlayingChip) {
    currentPlayingChip.classList.add("is-playing");
  }
}

function markFailedVideo(videoId) {
  const item = videoItemsById.get(videoId);
  if (!item) {
    return;
  }

  item.row.classList.add("is-failed");
  item.row.querySelectorAll(".clip-chip").forEach((chip) => {
    chip.disabled = true;
  });

  const failedLink = item.row.querySelector(".failed-video-link");
  if (failedLink && currentPlayingVideo &&
      currentPlayingVideo.videoId === videoId) {
    failedLink.href = currentPlayingVideo.startUrl;
    failedLink.hidden = false;
  }

  renderList();
}

function startProgress() {
  cancelProgressFrame();
  elapsedBeforePause = 0;
  progressStartedAt = performance.now();
  progressComplete = false;
  updateProgress(0);
  progressFrameId = requestAnimationFrame(updateProgressFrame);
}

function updateProgressFrame(now) {
  const elapsed = elapsedBeforePause + now - progressStartedAt;
  updateProgress(elapsed);

  if (elapsed >= FORM_TIME && !progressComplete) {
    progressComplete = true;
    cancelProgressFrame();
    handleFormTimeReached();
    return;
  }

  progressFrameId = requestAnimationFrame(updateProgressFrame);
}

function updateProgress(elapsed) {
  const ratio = Math.min(1, Math.max(0, elapsed / FORM_TIME));
  const remainingSeconds = Math.max(0, Math.ceil((FORM_TIME - elapsed) / 1000));
  progressBarElement.style.transform = `scaleX(${ratio})`;
  remainingTimeElement.textContent = `${remainingSeconds}秒`;
}

function handleFormTimeReached() {
  if (autoNext && !isPaused) {
    playNextByMode();
    return;
  }

  if (currentPlayingVideo) {
    const titleText = `${currentPlayingVideo.title} (${convertSecondsToHms(currentPlayingVideo.startTime)})`;
    showForm(playerInfoElement, titleText);
  }
}

function pausePlayback() {
  if (isPaused) {
    return;
  }

  if (player && typeof player.pauseVideo === "function") {
    player.pauseVideo();
  }

  elapsedBeforePause = getElapsedProgress();
  cancelProgressFrame();
  setPaused(true);
}

function resumePlayback() {
  if (!isPaused) {
    return;
  }

  if (player && typeof player.playVideo === "function") {
    player.playVideo();
  }

  setPaused(false);
  if (!progressComplete) {
    progressStartedAt = performance.now();
    cancelProgressFrame();
    progressFrameId = requestAnimationFrame(updateProgressFrame);
  }
}

function getElapsedProgress() {
  if (isPaused || progressFrameId === null) {
    return elapsedBeforePause;
  }
  return elapsedBeforePause + performance.now() - progressStartedAt;
}

function cancelProgressFrame() {
  if (progressFrameId !== null) {
    cancelAnimationFrame(progressFrameId);
    progressFrameId = null;
  }
}

function setPaused(paused) {
  isPaused = paused;
  pauseButton.dataset.state = paused ? "paused" : "playing";
  pauseButton.textContent = paused ? "再生" : "一時停止";
  sealButton.setAttribute(
    "aria-label", paused ? "再生を再開" : "次のまいっかを再生");
}

function setMode(nextMode, options = {}) {
  mode = normalizeMode(nextMode);
  modeControl.dataset.mode = mode;
  modeControl.querySelectorAll("button[data-mode]").forEach((button) => {
    const active = button.dataset.mode === mode;
    button.setAttribute("aria-checked", String(active));
  });

  if (options.persist !== false) {
    setStoredValue(STORAGE_KEYS.mode, mode);
  }

  if (mode === "sequential") {
    scrollCurrentRow();
  }
}

function normalizeMode(value) {
  if (MODES.includes(value)) {
    return value;
  }
  return "random";
}

function scrollCurrentRow() {
  if (!currentPlayingRow || currentPlayingRow.hidden) {
    return;
  }

  currentPlayingRow.scrollIntoView({
    block: "nearest",
    behavior: reduceMotion.matches ? "auto" : "smooth",
  });
}

function incrementPlayCount() {
  const previousCount = playCount;
  playCount += 1;
  setStoredValue(STORAGE_KEYS.playCount, String(playCount));
  animatePlayCount(previousCount, playCount);

  if (playCount > 0 && playCount % 100 === 0) {
    createFlowerShower();
  }
}

function animatePlayCount(from, to) {
  if (reduceMotion.matches) {
    setPlayCountDisplay(to);
    return;
  }

  const startedAt = performance.now();
  const duration = 360;

  function tick(now) {
    const ratio = Math.min(1, (now - startedAt) / duration);
    const value = Math.round(from + (to - from) * ratio);
    setPlayCountDisplay(value);
    if (ratio < 1) {
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
}

function setPlayCountDisplay(value) {
  displayedPlayCount = value;
  playCountElement.textContent = displayedPlayCount.toLocaleString("ja-JP");
}

function animateSealPress() {
  if (reduceMotion.matches) {
    return;
  }

  sealButton.classList.remove("is-pressing");
  void sealButton.offsetWidth;
  sealButton.classList.add("is-pressing");

  if (sealAnimationTimer !== null) {
    clearTimeout(sealAnimationTimer);
  }
  sealAnimationTimer = setTimeout(() => {
    sealButton.classList.remove("is-pressing");
    sealAnimationTimer = null;
  }, 460);
}

function createPetals(x, y, count) {
  if (reduceMotion.matches) {
    return;
  }

  const classes = ["petal--seal", "petal--paper", "petal--gilt"];
  for (let i = 0; i < count; i++) {
    const petal = document.createElement("span");
    const petalClass = classes[Math.floor(Math.random() * classes.length)];
    const duration = randomBetween(1200, 2200);
    petal.className = `petal ${petalClass}`;
    petal.style.setProperty("--petal-left", `${x}px`);
    petal.style.setProperty("--petal-top", `${y}px`);
    petal.style.setProperty("--petal-size", `${randomBetween(8, 16)}px`);
    petal.style.setProperty("--petal-x", `${randomBetween(-120, 120)}px`);
    petal.style.setProperty("--petal-y", `${randomBetween(120, 280)}px`);
    petal.style.setProperty("--petal-rise", `${randomBetween(-86, -28)}px`);
    petal.style.setProperty("--petal-rotate", `${randomBetween(180, 620)}deg`);
    petal.style.setProperty("--petal-duration", `${duration}ms`);
    petalLayer.appendChild(petal);

    setTimeout(() => {
      petal.remove();
    }, duration + 120);
  }
}

function createFlowerShower() {
  if (reduceMotion.matches) {
    return;
  }

  for (let i = 0; i < 40; i++) {
    setTimeout(() => {
      const x = randomBetween(0, window.innerWidth);
      createPetals(x, -24, 1);
    }, i * 28);
  }
}

function getEventPoint(event, fallbackElement) {
  if (event.clientX > 0 || event.clientY > 0) {
    return {x: event.clientX, y: event.clientY};
  }

  const rect = fallbackElement.getBoundingClientRect();
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  };
}

function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function clearReportNotice() {
  const notice = playerInfoElement.querySelector(".report-notice");
  if (notice) {
    notice.remove();
  }
}

function isSameClip(a, b) {
  return Boolean(a && b && a.videoId === b.videoId && a.startTime === b.startTime);
}

function formatJstDateTime(isoText) {
  const values = getDateParts(JST_DATE_TIME_FORMATTER, isoText);
  return `${values.year}/${values.month}/${values.day} ${values.hour}:${values.minute}`;
}

function formatJstDate(isoText) {
  const values = getDateParts(JST_DATE_FORMATTER, isoText);
  return `${values.year}/${values.month}/${values.day}`;
}

function formatJstYear(isoText) {
  const values = getDateParts(JST_YEAR_FORMATTER, isoText);
  return values.year;
}

function getDateParts(formatter, isoText) {
  const values = {};
  formatter.formatToParts(new Date(isoText)).forEach((part) => {
    values[part.type] = part.value;
  });
  return values;
}

function getStoredValue(key, fallbackValue) {
  try {
    const storedValue = window.localStorage.getItem(key);
    if (storedValue === null) {
      return fallbackValue;
    }
    return storedValue;
  } catch {
    if (Object.prototype.hasOwnProperty.call(storageFallback, key)) {
      return storageFallback[key];
    }
    return fallbackValue;
  }
}

function setStoredValue(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    storageFallback[key] = value;
  }
}

function readStoredNumber(key, fallbackValue) {
  const value = Number.parseInt(getStoredValue(key, String(fallbackValue)), 10);
  if (Number.isFinite(value) && value >= 0) {
    return value;
  }
  return fallbackValue;
}
