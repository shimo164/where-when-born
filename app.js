const BIRTHS = [
  { name: '高市 早苗', birthDate: '1961-03-07', prefecture: '奈良県' },
  { name: '林 芳正', birthDate: '1961-01-19', prefecture: '東京都' },
  { name: '平口 洋', birthDate: '1948-08-01', prefecture: '広島県' },
  { name: '茂木 敏充', birthDate: '1955-10-07', prefecture: '栃木県' },
  { name: '片山 さつき', birthDate: '1959-05-09', prefecture: '埼玉県' },
  { name: '松本洋平', birthDate: '1973-08-31', prefecture: '東京都' },
  { name: '上野賢一郎', birthDate: '1965-08-03', prefecture: '滋賀県' },
  { name: '鈴木憲和', birthDate: '1982-01-30', prefecture: '東京都' },
  { name: '赤沢亮正', birthDate: '1960-12-18', prefecture: '東京都' },
  { name: '金子恭之', birthDate: '1961-02-27', prefecture: '熊本県' },
  { name: '石原宏高', birthDate: '1964-06-19', prefecture: '神奈川県' },
  { name: '小泉進次郎', birthDate: '1981-04-14', prefecture: '神奈川県' },
  { name: '木原稔', birthDate: '1969-08-12', prefecture: '熊本県' },
  { name: '松本尚', birthDate: '1962-06-03', prefecture: '石川県' },
  { name: '牧野京夫', birthDate: '1959-01-01', prefecture: '静岡県' },
  { name: '赤間二郎', birthDate: '1968-03-27', prefecture: '神奈川県' },
  { name: '黄川田仁志', birthDate: '1970-10-13', prefecture: '東京都' },
  { name: '城内実', birthDate: '1965-04-19', prefecture: '東京都' },
  { name: '小野田紀美', birthDate: '1982-12-07', prefecture: 'アメリカ合衆国' },
].map((entry) => ({
  ...entry,
  year: Number(entry.birthDate.slice(0, 4)),
}));

// 47都道府県のおおよその中心座標（WGS84）
const PREFECTURE_CENTROIDS = [
  { name: '北海道', lat: 43.06417, lon: 141.34694 },
  { name: '青森県', lat: 40.82444, lon: 140.74 },
  { name: '岩手県', lat: 39.70361, lon: 141.1525 },
  { name: '宮城県', lat: 38.26889, lon: 140.87194 },
  { name: '秋田県', lat: 39.71861, lon: 140.1025 },
  { name: '山形県', lat: 38.24056, lon: 140.36333 },
  { name: '福島県', lat: 37.75, lon: 140.46778 },
  { name: '茨城県', lat: 36.34139, lon: 140.44667 },
  { name: '栃木県', lat: 36.56583, lon: 139.88361 },
  { name: '群馬県', lat: 36.39111, lon: 139.06083 },
  { name: '埼玉県', lat: 35.85694, lon: 139.64889 },
  { name: '千葉県', lat: 35.60472, lon: 140.12333 },
  { name: '東京都', lat: 35.68944, lon: 139.69167 },
  { name: '神奈川県', lat: 35.44778, lon: 139.6425 },
  { name: '新潟県', lat: 37.90222, lon: 139.02361 },
  { name: '富山県', lat: 36.69528, lon: 137.21139 },
  { name: '石川県', lat: 36.59444, lon: 136.62556 },
  { name: '福井県', lat: 36.06528, lon: 136.22194 },
  { name: '山梨県', lat: 35.66389, lon: 138.56833 },
  { name: '長野県', lat: 36.65139, lon: 138.18111 },
  { name: '岐阜県', lat: 35.39111, lon: 136.72222 },
  { name: '静岡県', lat: 34.97694, lon: 138.38306 },
  { name: '愛知県', lat: 35.18028, lon: 136.90667 },
  { name: '三重県', lat: 34.73028, lon: 136.50861 },
  { name: '滋賀県', lat: 35.00444, lon: 135.86833 },
  { name: '京都府', lat: 35.02139, lon: 135.75556 },
  { name: '大阪府', lat: 34.68639, lon: 135.52 },
  { name: '兵庫県', lat: 34.69139, lon: 135.18306 },
  { name: '奈良県', lat: 34.68528, lon: 135.83278 },
  { name: '和歌山県', lat: 34.22611, lon: 135.1675 },
  { name: '鳥取県', lat: 35.50361, lon: 134.23833 },
  { name: '島根県', lat: 35.47222, lon: 133.05056 },
  { name: '岡山県', lat: 34.66167, lon: 133.935 },
  { name: '広島県', lat: 34.39639, lon: 132.45944 },
  { name: '山口県', lat: 34.18583, lon: 131.47139 },
  { name: '徳島県', lat: 34.06583, lon: 134.55944 },
  { name: '香川県', lat: 34.34028, lon: 134.04333 },
  { name: '愛媛県', lat: 33.84167, lon: 132.76611 },
  { name: '高知県', lat: 33.55972, lon: 133.53111 },
  { name: '福岡県', lat: 33.60639, lon: 130.41806 },
  { name: '佐賀県', lat: 33.24944, lon: 130.29889 },
  { name: '長崎県', lat: 32.74472, lon: 129.87361 },
  { name: '熊本県', lat: 32.78972, lon: 130.74167 },
  { name: '大分県', lat: 33.23806, lon: 131.6125 },
  { name: '宮崎県', lat: 31.91111, lon: 131.42389 },
  { name: '鹿児島県', lat: 31.56028, lon: 130.55806 },
  { name: '沖縄県', lat: 26.2125, lon: 127.68111 },
];

const CONFIG = {
  minYear: 1945,
  maxYear: 1985,
  autoStepMs: 1400,
  bubbleHoldMsPlaying: 1000,
  bubbleLiftPx: 10,
  bubbleRowGap: 22,
  bubbleColGap: 18,
  bubbleColStep: 8,
  mapWidth: 640,
  mapHeight: 820,
  mapScale: 1400,
};
const projection = d3
  .geoMercator()
  .center([137, 37.5])
  .translate([CONFIG.mapWidth / 2, CONFIG.mapHeight / 2])
  .scale(CONFIG.mapScale);

let japanGeo = null; // GeoJSON Feature for Japan (国境)
const FALLBACK_MARKER = { lat: 43.06417, lon: 131.47139 };

// オフライン時のフォールバック形状（滑らかに描くための点群）
const FALLBACK_SHAPES = [
  {
    name: '北海道',
    points: [
      { lat: 45.5, lon: 141.9 },
      { lat: 45.0, lon: 144.3 },
      { lat: 43.6, lon: 145.8 },
      { lat: 42.6, lon: 143.6 },
      { lat: 41.4, lon: 141.5 },
      { lat: 41.9, lon: 139.7 },
      { lat: 43.5, lon: 139.8 },
    ],
  },
  {
    name: '本州',
    points: [
      { lat: 40.7, lon: 141.2 },
      { lat: 39.7, lon: 142.1 },
      { lat: 38.8, lon: 142.0 },
      { lat: 37.6, lon: 141.6 },
      { lat: 36.7, lon: 141.4 },
      { lat: 35.7, lon: 141.4 },
      { lat: 34.9, lon: 140.4 },
      { lat: 35.0, lon: 139.2 },
      { lat: 35.0, lon: 138.3 },
      { lat: 34.8, lon: 137.3 },
      { lat: 34.0, lon: 135.5 },
      { lat: 34.3, lon: 132.2 },
      { lat: 35.7, lon: 131.5 },
      { lat: 37.3, lon: 136.9 },
      { lat: 38.7, lon: 138.7 },
      { lat: 40.5, lon: 139.9 },
    ],
  },
  {
    name: '四国',
    points: [
      { lat: 34.4, lon: 134.2 },
      { lat: 33.3, lon: 134.8 },
      { lat: 32.9, lon: 133.0 },
      { lat: 33.4, lon: 132.2 },
      { lat: 34.2, lon: 133.2 },
    ],
  },
  {
    name: '九州',
    points: [
      { lat: 33.9, lon: 131.0 },
      { lat: 31.6, lon: 131.4 },
      { lat: 31.0, lon: 130.3 },
      { lat: 31.7, lon: 128.6 },
      { lat: 32.8, lon: 129.8 },
      { lat: 33.8, lon: 129.9 },
    ],
  },
  {
    name: '沖縄',
    points: [
      { lat: 26.8, lon: 128.3 },
      { lat: 26.2, lon: 127.9 },
      { lat: 25.8, lon: 127.5 },
      { lat: 26.0, lon: 126.9 },
      { lat: 26.7, lon: 127.3 },
    ],
  },
];

const dom = {
  map: document.getElementById('map'),
  mapBase: document.getElementById('japanBase'),
  bubbleLayer: document.getElementById('bubbleLayer'),
  yearDisplay: document.getElementById('yearDisplay'),
  yearSlider: document.getElementById('yearSlider'),
  playPauseBtn: document.getElementById('playPause'),
  stepBackBtn: document.getElementById('stepBack'),
  stepForwardBtn: document.getElementById('stepForward'),
};

let currentYear = CONFIG.minYear;
let playing = true;
let timerId = null;

const markers = new Map();
const markerPositions = {};
const bubbleRegistry = new Map();
let currentVisibleEntries = [];
let bubbleZIndex = 1;

function bringBubbleToFront(entry) {
  bubbleZIndex += 1;
  entry.node.style.zIndex = String(bubbleZIndex);
}

function getBubbleKey(person) {
  return `${person.name}|${person.birthDate}|${person.prefecture}`;
}

function ensureBubbleEntry(person, now) {
  const key = getBubbleKey(person);
  let entry = bubbleRegistry.get(key);
  if (!entry) {
    const bubble = document.createElement('div');
    bubble.className = 'callout';
    bubble.dataset.key = key;
    bubble.innerHTML = `
      <div class="name">${person.name}</div>
      <div class="details">${formatDate(person.birthDate)} / ${person.prefecture}</div>
    `;
    dom.bubbleLayer.appendChild(bubble);
    entry = { person, node: bubble, lastSeenAt: now, isOpen: false };
    bubbleRegistry.set(key, entry);
    bringBubbleToFront(entry);
  } else {
    entry.lastSeenAt = now;
  }
  return entry;
}

function projectToPixels({ lat, lon }) {
  const [x, y] = projection([lon, lat]);
  return { x, y };
}

function projectToPercent(coords) {
  const { x, y } = projectToPixels(coords);
  return {
    x: (x / CONFIG.mapWidth) * 100,
    y: (y / CONFIG.mapHeight) * 100,
  };
}

async function loadJapanGeo() {
  if (japanGeo) return japanGeo;
  try {
    const res = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json');
    const topo = await res.json();
    const countries = topojson.feature(topo, topo.objects.countries);
    japanGeo = countries.features.find((f) => String(f.id) === '392');
  } catch (error) {
    console.warn('Failed to load world-atlas; falling back to rough outline.', error);
    japanGeo = null;
  }
  return japanGeo;
}

async function drawBaseMap() {
  if (!dom.mapBase) return;
  const svg = d3.select(dom.mapBase).attr('viewBox', `0 0 ${CONFIG.mapWidth} ${CONFIG.mapHeight}`);
  svg.selectAll('*').remove();

  const geo = await loadJapanGeo();
  if (geo) {
    const pathGen = d3.geoPath(projection);
    svg.append('path').datum(geo).attr('d', pathGen).attr('class', 'land');
    svg.append('path').datum(geo).attr('d', pathGen).attr('class', 'coast');
  } else {
    const landPath = d3
      .line()
      .x((d) => projectToPixels(d).x)
      .y((d) => projectToPixels(d).y)
      .curve(d3.curveCatmullRom.alpha(0.65));
    FALLBACK_SHAPES.forEach((shape) => {
      svg
        .append('path')
        .attr('d', `${landPath(shape.points)} Z`)
        .attr('class', 'land');
    });
  }
}

function createMarkers() {
  const knownPrefectures = new Set(PREFECTURE_CENTROIDS.map((pref) => pref.name));
  PREFECTURE_CENTROIDS.forEach((prefecture) => {
    const pos = projectToPercent(prefecture);
    markerPositions[prefecture.name] = pos;
    const el = document.createElement('div');
    el.className = 'pref-marker';
    el.style.left = `${pos.x}%`;
    el.style.top = `${pos.y}%`;
    markers.set(prefecture.name, el);
    dom.map.appendChild(el);
  });

  const extraPrefs = new Set(
    BIRTHS.map((person) => person.prefecture).filter((name) => !knownPrefectures.has(name)),
  );
  extraPrefs.forEach((name) => {
    const pos = projectToPercent(FALLBACK_MARKER);
    markerPositions[name] = pos;
    const el = document.createElement('div');
    el.className = 'pref-marker';
    el.style.left = `${pos.x}%`;
    el.style.top = `${pos.y}%`;
    markers.set(name, el);
    dom.map.appendChild(el);
  });
}

function formatDate(value) {
  const [y, m, d] = value.split('-').map(Number);
  return `${y}年${m}月${d}日`;
}

function resetMarkers() {
  markers.forEach((marker) => {
    marker.classList.remove('active');
    marker.classList.remove('visible');
  });
}

function layoutBubbles(entries) {
  const mapRect = dom.map.getBoundingClientRect();
  if (!mapRect.width || !mapRect.height) return;

  const placed = [];
  const padding = 4;
  const sorted = [...entries].sort((a, b) => {
    if (a.person.year !== b.person.year) {
      return a.person.year - b.person.year;
    }
    return a.person.name.localeCompare(b.person.name, 'ja');
  });

  sorted.forEach((entry) => {
    const pos = markerPositions[entry.person.prefecture];
    if (!pos) return;

    const bubble = entry.node;
    bubble.classList.toggle('is-open', entry.isOpen);
    bubble.style.visibility = 'hidden';
    bubble.style.left = '0px';
    bubble.style.top = '0px';
    bubble.style.transform = 'translate(-50%, -100%)';

    const bubbleWidth = bubble.offsetWidth;
    const bubbleHeight = bubble.offsetHeight;
    const baseX = (pos.x / 100) * mapRect.width;
    const baseY = (pos.y / 100) * mapRect.height;

    let chosen = { x: 0, y: -CONFIG.bubbleLiftPx };
    let placedRect = null;
    let fallbackRect = null;
    const maxRows = Math.max(3, Math.ceil(sorted.length / 2));
    const candidates = [];

    for (let row = 0; row <= maxRows; row += 1) {
      const yOffset = -(CONFIG.bubbleLiftPx + row * CONFIG.bubbleRowGap);
      const colSpan = row === 0 ? 0 : row;
      for (let col = -colSpan; col <= colSpan; col += 1) {
        const xOffset = col * CONFIG.bubbleColGap;
        const distance = Math.hypot(xOffset, yOffset);
        candidates.push({ xOffset, yOffset, distance });
      }
    }

    candidates.sort((a, b) => a.distance - b.distance);

    for (const candidate of candidates) {
      const rect = {
        x: baseX - bubbleWidth / 2 + candidate.xOffset,
        y: baseY - bubbleHeight + candidate.yOffset,
        w: bubbleWidth,
        h: bubbleHeight,
      };
      const padded = {
        x: rect.x - padding,
        y: rect.y - padding,
        w: rect.w + padding * 2,
        h: rect.h + padding * 2,
      };

      const withinBounds =
        padded.x >= 0 &&
        padded.y >= 0 &&
        padded.x + padded.w <= mapRect.width &&
        padded.y + padded.h <= mapRect.height;

      const overlaps = placed.some(
        (p) =>
          padded.x < p.x + p.w &&
          padded.x + padded.w > p.x &&
          padded.y < p.y + p.h &&
          padded.y + padded.h > p.y,
      );

      if (!overlaps && withinBounds) {
        chosen = { x: candidate.xOffset, y: candidate.yOffset };
        placedRect = rect;
        break;
      }

      if (!overlaps && !fallbackRect) {
        fallbackRect = { rect, candidate };
      }
    }

    if (!placedRect && fallbackRect) {
      chosen = { x: fallbackRect.candidate.xOffset, y: fallbackRect.candidate.yOffset };
      placedRect = fallbackRect.rect;
    }

    if (!placedRect) {
      placedRect = {
        x: baseX - bubbleWidth / 2 + chosen.x,
        y: baseY - bubbleHeight + chosen.y,
        w: bubbleWidth,
        h: bubbleHeight,
      };
    }

    bubble.style.left = `${baseX}px`;
    bubble.style.top = `${baseY}px`;
    bubble.style.transform = `translate(-50%, -100%) translate(${chosen.x}px, ${chosen.y}px)`;
    bubble.style.visibility = 'visible';
    placed.push(placedRect);
  });
}

function clearBubbleRegistry() {
  bubbleRegistry.forEach((entry) => entry.node.remove());
  bubbleRegistry.clear();
}

function renderBubbles() {
  const now = Date.now();
  const holdMs = playing ? CONFIG.bubbleHoldMsPlaying : Infinity;
  const todaysBirths = BIRTHS.filter((b) => b.year === currentYear);
  const visibleEntries = [];

  todaysBirths.forEach((person) => {
    const entry = ensureBubbleEntry(person, now);
    entry.lastSeenAt = now;
  });

  bubbleRegistry.forEach((entry, key) => {
    if (now - entry.lastSeenAt <= holdMs) {
      visibleEntries.push(entry);
      return;
    }

    if (playing) {
      entry.node.remove();
      bubbleRegistry.delete(key);
    }
  });

  resetMarkers();
  visibleEntries.forEach((entry) => {
    const marker = markers.get(entry.person.prefecture);
    if (marker) {
      marker.classList.add('visible');
      marker.classList.add('active');
    }
  });

  currentVisibleEntries = visibleEntries;
  layoutBubbles(currentVisibleEntries);
}

function setYear(year) {
  const nextYear = Number(year);
  const yearChanged = nextYear !== currentYear;
  if (yearChanged && !playing) {
    clearBubbleRegistry();
  }
  currentYear = nextYear;
  dom.yearDisplay.textContent = String(currentYear);
  dom.yearSlider.value = String(currentYear);
  renderBubbles();
}

function stepYear(delta = 1) {
  const next = currentYear + delta;
  if (next > CONFIG.maxYear) {
    setYear(CONFIG.minYear);
  } else if (next < CONFIG.minYear) {
    setYear(CONFIG.maxYear);
  } else {
    setYear(next);
  }
}

function startAuto() {
  playing = true;
  dom.playPauseBtn.textContent = '停止';
  if (timerId) clearInterval(timerId);
  timerId = setInterval(() => stepYear(1), CONFIG.autoStepMs);
}

function stopAuto() {
  playing = false;
  dom.playPauseBtn.textContent = '再生';
  if (timerId) clearInterval(timerId);
  timerId = null;
}

function togglePlay() {
  if (playing) {
    stopAuto();
  } else {
    startAuto();
  }
}

async function init() {
  dom.yearSlider.min = String(CONFIG.minYear);
  dom.yearSlider.max = String(CONFIG.maxYear);
  dom.yearSlider.value = String(CONFIG.minYear);
  await drawBaseMap();
  createMarkers();
  setYear(CONFIG.minYear);
  startAuto();

  dom.playPauseBtn.addEventListener('click', togglePlay);
  dom.stepBackBtn.addEventListener('click', () => stepYear(-1));
  dom.stepForwardBtn.addEventListener('click', () => stepYear(1));
  dom.bubbleLayer.addEventListener('click', (event) => {
    const bubble = event.target.closest('.callout');
    if (!bubble) return;
    const key = bubble.dataset.key;
    const entry = bubbleRegistry.get(key);
    if (!entry) return;
    entry.lastSeenAt = Date.now();
    bringBubbleToFront(entry);
    entry.isOpen = !entry.isOpen;
    bubble.classList.toggle('is-open', entry.isOpen);
    layoutBubbles(currentVisibleEntries);
  });
  dom.yearSlider.addEventListener('input', (event) => {
    stopAuto();
    setYear(Number(event.target.value));
  });
}

init();
