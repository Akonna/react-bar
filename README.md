# react-bar-kn
---

react-bar-kn

[![build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![npm download][download-image]][download-url]

[travis-image]: https://travis-ci.org/konna/react-bar-kn.svg?style=flat-square
[travis-url]: https://travis-ci.org/konna/react-bar-kn
[npm-image]: https://img.shields.io/npm/v/react-bar-kn.svg?style=flat-square
[npm-url]: http://npmjs.org/package/react-bar-kn
[coveralls-image]: https://coveralls.io/repos/github/konna/react-bar-kn/badge.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/konna/react-bar-kn?branch=master
[download-image]: https://img.shields.io/npm/dm/react-bar-kn.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-bar-kn

## install

[![react-bar-kn](https://nodei.co/npm/react-bar-kn.png)](https://npmjs.org/package/react-bar-kn)

## Usage

```js
const Bar = require('react-bar-kn/src/Bar');
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
                                <tr>
                                                                  <td>y</td>
                                                                  <td>Number</td>
                                                                  <td>50</td>
                                                                  <td>y轴间隔默认50</td>
                                                                </tr>
    </tbody>
</table>

## Development

```
npm install react-bar-kn --save
npm run start
```





