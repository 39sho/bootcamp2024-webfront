---
title: HTMLとCSS
description: HTMLとCSSを学ぶ
---

## 資料

### HTML

https://eraser5th.github.io/web-tutorial-document/docs/category/html

### CSS

https://eraser5th.github.io/web-tutorial-document/docs/category/css

## サイトを作ってみる

上の資料を読んだ後は、実際にサイトを作ってみましょう。あたらしいディレクトリを作って、VSCode で開いてください。

```bash title="ディレクトリの作成と移動"
mkdir bootcamp
cd bootcamp
code .
```

HTML と CSS ファイルを作りましょう。

```html title="index.html"
<!DOCTYPE html>
<html>
    <head>
        <link href="main.css" rel="stylesheet" />
    </head>
    <body>
        <div class="greeting">こんにちは、世界</div>
    </body>
</html>
```

```css title="main.css"
.greeting {
    font-size: 3rem;
    color: green;
}
```

サーバーを起動してみてください。

```bash
npx serve
```