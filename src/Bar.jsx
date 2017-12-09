/**
 * Created by kana on 2017/12/8.
 */
const React = require('react');


const Bar = React.createClass({
    getDefaultProps() {
        return {
            title: "", //柱状图data
            data:[],     //画柱状图data
            width:'50',  //柱子宽度
            color:'red',  //柱子颜色
            show:true,  // 是否显示y轴刻度
            y:'50',  //y轴间隔
        };
    },
    render() {
        var data=this.props.data;
        var width=this.props.width;
        var color=this.props.color;
        var y=this.props.y;
        var dataLen=data.length;

        //取最大值设置y轴高度
        var temp=[];
        for(var i=0;i<dataLen;i++){
            temp.push(data[i].value);
        }
        var maxValue=Math.max.apply( Math, temp);

        var str=[];
        var ystr=[];
        //画每个柱子
        for(var j=0 ;j<dataLen;j++){
            str.push(<div key={j}><span className="innerValue" style={{width:width+'px',left:Number(20+width)*j+Number(20)+'px',height:Number(data[j].value)+Number(30)+'px'}}>{data[j].value}</span><div  className="inner" style={{width:width+'px',backgroundColor:color,left:Number(20+width)*j+Number(20)+'px',height:data[j].value+'px'}}></div></div>)
        }
        //y轴刻度
        for(var z=0;z<Math.ceil(Number(maxValue)/Number(y))+1;z++){
            {this.props.show ?
                ystr.push(<div  key={z}><span className="yname" style={{height:Number(y)*z+'px'}}>{Number(y)*z}</span><label className="yLabel" style={{height:Number(y)*z+'px'}}></label></div>)
                :ystr.push(<div  key={z}><span className="yname" style={{height:Number(y)*z+'px'}}>{Number(y)*z}</span></div>)}
        }

        return (
            <div>
                <div className="title">{this.props.title}</div>
                <div className="bar" style={{height:Number(maxValue+20)+'px'}}>
                    {ystr}
                    {str}
                </div>
            </div>

        )
    },
});


module.exports = Bar;
