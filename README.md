# react-bar
---

react-bar

[![build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![npm download][download-image]][download-url]

[travis-image]: https://travis-ci.org/konna/react-bar.svg?style=flat-square
[travis-url]: https://travis-ci.org/konna/react-bar
[npm-image]: https://img.shields.io/npm/v/react-bar.svg?style=flat-square
[npm-url]: http://npmjs.org/package/react-bar
[coveralls-image]: https://coveralls.io/repos/github/konna/react-bar/badge.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/konna/react-bar?branch=master
[download-image]: https://img.shields.io/npm/dm/react-bar.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-bar

## install

[![react-bar](https://nodei.co/npm/react-bar.png)](https://npmjs.org/package/react-bar)

## Usage

```js
const Bar = require('react-bar/src/Bar');
var React = require('react');
React.render(<Bar />, container);
```

## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
           <tr>
              <td>data</td>
              <td>Array</td>
              <td>[]</td>
              <td>柱状图data</td>
            </tr>
            <tr>
              <td>width</td>
              <td>Number</td>
              <td>50</td>
              <td>每个柱子宽度</td>
            </tr>
        <tr>
          <td>color</td>
          <td>String</td>
          <td>红色</td>
          <td>每个柱子背景色</td>
        </tr>
        <tr>
                  <td>title</td>
                  <td>String</td>
                  <td>无</td>
                  <td>柱状图标题</td>
                </tr>
                <tr>
                                  <td>show</td>
                                  <td>Boolean</td>
                                  <td>true</td>
                                  <td>是否显示y的刻度，false不显示，true显示</td>
                                </tr>
    </tbody>
</table>

## Development

```
npm install react-bar --save
npm run start
```

## Example




