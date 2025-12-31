# 仕様: where-when-born

## 概要

- 日本地図上で、西暦カウンターに合わせて出生地の吹き出しを表示する。
- 年は自動で進むほか、手動で前後移動・スライダー選択ができる。

## データ

- 人物データは `/Users/user/workspace/project/where-when-born/app.js` の `BIRTHS` に定義。
- 各項目は `name`, `birthDate` (YYYY-MM-DD), `prefecture` を持つ。
- `birthDate` から `year` を抽出して使用する。

## 年範囲と進行

- 年範囲は `CONFIG.minYear` から `CONFIG.maxYear`。
- 自動進行は `CONFIG.autoStepMs` 間隔で +1 年。
- 末尾を超えたら先頭に戻る（逆方向も同様）。

## 操作 UI

- 一時停止/再生ボタン: 自動進行の開始/停止を切り替える。
- -1 年 / +1 年ボタン: 年を 1 つずつ前後させる。
- スライダー: 年を手動で選択（操作時は自動進行停止）。
- スライダーの `min/max/value` は `CONFIG` に連動。

## 地図描画

- D3.js を使用。
- 国境データは `world-atlas@2` から取得し、TopoJSON から日本のみ描画する。
- 取得失敗時は `FALLBACK_SHAPES` を使用して簡易描画。
- 地図の投影は `geoMercator`。

## マーカーと吹き出し

- 47 都道府県の中心座標は `PREFECTURE_CENTROIDS` に保持。
- 通常時マーカーは非表示。
- 年に該当する人物がいる都道府県のみ、マーカーを表示・強調する。
- 吹き出しは「名前のみ」を表示し、クリック/タップで詳細（生年月日・出生地）を開閉する。
- クリック/タップした吹き出しは最前面に移動する。
- 都道府県名が不明な場合は `FALLBACK_MARKER` の海上位置に表示。
- 吹き出しは全体で重なりを回避するよう配置する（県を跨いでも対象）。

## 吹き出しの保持ルール

- 再生中は `CONFIG.bubbleHoldMsPlaying` の間だけ保持し、その後は消える。
- 停止中は保持無期限。ただし年が変わったときは消える。

## 吹き出しの重なり回避

- できるだけ元の地点に近い候補から配置する。
- クリックで詳細を開閉したときも再レイアウトする。
  - `CONFIG.bubbleLiftPx / bubbleRowGap / bubbleColGap / bubbleColStep` を使用。

## スタイル

- 海は白の単色、陸地は薄い青。
- ページ背景は単色。
- 吹き出しはダーク背景・青の縁取り。
- 詳細行は折り返さず 1 行で表示する。
- スマホ幅（max-width: 720px）では西暦表示の文字サイズを半分程度に縮小。

## GitHub Pages

- GitHub Actions ワークフロー: `.github/workflows/deploy-pages.yml`
- `main` ブランチ push で Pages にデプロイ。
