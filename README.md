# World News — Tuesday, 17 November 2026

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/ahh955/News-image-17/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/ahh955/News-image-17/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

A newspaper front page summing up the world's news of **Tuesday, 17 November 2026** in one image, for the [make.fun](https://make.fun/bounty/news-image-20261117) news-image bounty.

## The day's stories

1. **Europe — Kerch Bridge struck.** Ukrainian drones and missiles strike the Kerch Bridge linking Russia to Crimea; the bridge is damaged, smoke over the strait.
2. **Middle East — 4th tanker mined in Hormuz.** A fourth oil tanker is hit by a naval mine in the Strait of Hormuz amid the US–Iran war; a burning tanker at sea.
3. **Middle East — West urges: open Gaza aid routes.** The UK, Australia, Canada and Italy jointly call on Israel to open Gaza's crossings for humanitarian aid; aid trucks wait at a border crossing.
4. **Asia — Japan scrambles jets.** Japanese fighter jets scramble after Russian aircraft violate Japan's airspace near Fukuoka.
5. **Global — COP31: $120bn climate deal.** The COP31 draft deal in Antalya calls for a faster fossil-fuel phase-out and $120bn climate finance by 2035.

## How it was made

The five scene panels are original AI-generated artwork (no text in the generated art). The front page — masthead date, region tags and headline labels — was composed with PIL using clean vector text (DejaVu Sans), so every word is spelled correctly and legible at small sizes.

## Running it

`main.ts` (Node 22, standard library only) copies `entry.png` into the output directory:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

It runs with no network and writes identical bytes on every run. The image is 1024×1024 and under the 1 MiB limit.
