/**
 * Created by kana on 2017/12/8.
 */
require('../assets/index.less');
const React = require('react');
const ReactDOM = require('react-dom');
const Bar = require('react-bar/src/Bar');

const TestBar = React.createClass({


  render() {
    let data=[{"value":'18'},{"value":'8'},{"value":'188'},{"value":'86'},{"value":'26'},{"value":'35'},{"value":'33'},{"value":'19'}];
    //定义的数据 调用组件传data:值，width:宽度，默认值50px color：柱子背景色，默认红色 title:柱状图标题 默认无
    return (<Bar  data={data} width={40} color={'#ccc'} title="各组待处理工单" show={true}/>);
  },

});

ReactDOM.render(<TestBar />, document.getElementById('__react-content'));
