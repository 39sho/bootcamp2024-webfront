---
title: DOM API
description: DOM APIを学ぶ
---

## 資料

https://eraser5th.github.io/web-tutorial-document/docs/category/dom

## 補足

DocumentFragment というものがある。これ自体はあまり使われないが、DocumentFragment に実装されている DOM API は Element にも同様に実装されており、かつ比較的良く使われるものであるから覚えておいた方が良い。

https://developer.mozilla.org/ja/docs/Web/API/DocumentFragment

特に便利な API は`querySelector`で、これは引数が CSS セレクター。CSS が書ければ様々な状況に対応できる。

```js
const fuga = document.querySelector("#fuga");
console.log(fuga);
```

## 実行方法

前の章では以下の実行方法を案内していましたが、今回は使えません。
(DOM API はブラウザ用なのでブラウザ上で実行する要がある)

```bash
node hoge.js
```

なので今回は、以下の方法で実行してください。

```html title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <link href="main.css" rel="stylesheet" />
        <script src="main.js" type="module"></script>
    </head>
    <body>
        <div class="greeting">こんにちは、世界</div>
    </body>
</html>
```

```js title="main.js"
console.log("こんにちは、世界");
```

```bash
npx serve
```