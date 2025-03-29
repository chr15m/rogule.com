The video game Rogule. <https://rogule.com>

A dungeon a day keeps the Balrog away.

![Rogule GIF](./resources/gifs/april-update.gif)

# Dev

```
npm install
make watch
```

# Build

```
make
cd build && node server.js
```

# Testing

Re-generate level at a particular seed:

```
(reset-game! nil "2025-3-9")
```
