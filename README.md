# avif-encoder.js

**.png, .jpeg, .webp, etc. -> .avif**

## Summary / 概要

AVIF Image Encoder for JavaScript (only support for browsers, no supports for Node.js/Deno/Bun etc.)

ブラウザ JavaScript で AVIF 画像をエンコーディングするためのスクリプト


## Usage / 使い方

### Install

```bash
# install all sources into "avif-encoder.js" directory in your current path
git clone "https://github.com/m4k15y6666fk/avif-encoder.js.git"
```

### in your JavaScript

```js
// import the module
import Avif from "./avif-encoder.js/dist/index.js";

// initialize the encoder
const avif = new Avif();
await avif.init();

// ...
// ...


// encode image file (File Object) into Uint8Array
// Uint8Array - https://developer.mozilla.org/en-US/docs/Web/API/Uint8Array
const array = await avif.encode(
    file, // File Object - https://developer.mozilla.org/en-US/docs/Web/API/File
    {
        quality: 60,
        speed: 4,
        debug: false
    }
);

// OR
// encode ImageData into Uint8Array
const array = await avif.encode_from_pixels(
    pixels, // ImageData Object - https://developer.mozilla.org/en-US/docs/Web/API/ImageData
    {
        quality: 60,
        speed: 4,
        debug: false
    }
)
```

> [!NOTE]
> Depending on the environment, encoding may take about 200 seconds or more.
>
> 環境によっては、エンコードには 200 秒以上の時間がかかる可能性があります.


## Donate / ご支援

### OFUSE

[https://ofuse.me/m4k15y6666fk](https://ofuse.me/m4k15y6666fk)


## Special Thanks

### ravif

rav1e-based pure Rust library for encoding images in AVIF format (powers the cavif tool)

[https://lib.rs/crates/ravif](https://lib.rs/crates/ravif)
