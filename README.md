# canvas-string-ellipsis

通过 canvas 测量文字长度，超过长度则使用省略号

> 有时候我们不得不手动根据长度测量截取字符串，那么这个时候这个就很有用

## How to use

``` bash
npm i canvas-string-ellipsis -S
```

``` js
import cse from 'canvas-string-ellipsis';
const str = 'canvas-string-ellipisis';

const [res, sliced, width] = cse(str, 100)
// res: canvas-string-ellipisis
// sliced: false
// width: 96

const [res2, sliced2, width2] = cse(str, 50)
// res: canvas-stri...
// sliced: true
// width: 50
```

## API 参数

``` typescript
function cse(str: string, maxWidth: number, font?: string): [string, boolean, number]
```

### str

原始字符串

### maxWidth

长度

### font

canvas font 设置，默认为 `14px sans-serif` 

### 返回值

返回值有三个组成一个数组，分别为截取后的字符串，是否截取，真实宽度

