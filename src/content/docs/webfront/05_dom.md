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
