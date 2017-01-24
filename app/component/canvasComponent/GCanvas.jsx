/**
 *
 * GCanvas.scss 文件作用
 * @author hurong<353486474@QQ.COM>
 * @date 2016/12/21
 *
 * @内容 作用
 * @内容 作用
 */
'use strict'
import React, {PureComponent} from 'react'
import * as D3 from 'd3'
import {Button}from 'antd'
import './GCanvas.scss'

var normFac = 90
var fontSize = 10
var lineSpace = 2
const viewportWidth=2200;
const viewportHeight=2200;
var boxHeight = 200
var boxWidth = 300
var infoBoxHeight = boxHeight*4.5
var infoBoxWidth = boxWidth*4.5
import TreeLinkComponent from './TreeLInk.jsx'
class GCanvas extends PureComponent {
    static displayName = 'GCanvas';
    static defaultProps={
        depict:'今天好想吃汉堡今天好想吃汉堡今天好想吃汉堡'
    };

    constructor(props) {
        super(props);
        console.log('GCanvas ' + 'constructor' + arguments);
        this.state= {
            linkData: [],
            nodeData: [],
            viewport:{
                x:0,
                y:0,
                scale:1
            }
        }
        this.viewport_x=0;
        this.viewport_y=0;
        this.current_x=0;
        this.current_y=0;
        this.viewportStep=10;
        this.viewportScale=1;
    }

    componentWillMount() {
        console.log('GCanvas ' + ' componentWillMount' + arguments);
    }
    wrapText(text){

    }
    componentDidMount() {
        console.log('GCanvas ' + ' componentDidMount' + arguments);
        let data =  {
            name: 'root',
            id:0,
            children: [{
                name: 'a',
                id:1,
                children: [{
                    name: 'a1',
                    id:2,
                }, {
                    name: 'a2',
                    id:3,

                }]
            }, {
                name: 'b',
                id:4,
                children: [{
                    name: 'b1',
                    id:5,
                    children: [{
                        name: 'b11',
                        id:6,
                        children: [{
                            name: 'b111',
                            id:8,
                            children: [{
                                name: 'b1111',
                                id:9,
                                children: [{
                                    name: 'b11111',
                                    id:10,
                                }]
                            }]
                        }]
                    }]
                }]
            }, {
                name: 'c',
                id:7,
            }]
        };
        let treeData=D3.hierarchy(data);
        let layoutWidth=treeData.height*400+200;

        let nodeData=treeData.descendants();
        let linkData=treeData.descendants().slice(1);
        let endChildren=nodeData.filter((item)=>{
            const bool=Array.isArray(item.children)
            return !bool
        });
        let layoutHeight=endChildren.length*500+200
        let tree=D3.tree().size([3000,3000])

        let LayoutData=tree(treeData);

        this.setState({
            linkData:linkData,
            nodeData:nodeData
        });
       // var g = D3.select(this.baseSVG).append("g");
        // var link = g.selectAll(".link")
        //     .data(treeData.descendants().slice(1))
        //     .enter().append("path")
        //     .attr("class", "link")
        //     .attr("d", function(d) {
        //         return "M" + d.y + "," + d.x
        //          + "H" + (d.parent.y+d.y)/2 + " " +
        //            "V" + (d.parent.x) + " "
        //             +"L" + d.parent.y + "," + d.parent.x;
        //            // "M" + d.x + "," + d.y
        //            //  + "C" + (d.parent.x ) + "," + d.y
        //            //  + " " + (d.parent.x ) + "," + d.parent.y
        //            //  + " " + d.parent.x + "," + d.parent.y;
        //     });
        // var node = g.selectAll(".node")
        //     .data(LayoutData.descendants())
        //     .enter().append("g")
        //     .attr("class", function(d) { return "node" + (d.children ? " node--internal" : " node--leaf"); })
        //     .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })
        //         .on("click",function (d) {
        //             console.log(d.data.id);
        //         });
        // node.append('rect').attr('class', 'nodebox')
        //     .attr("x", -boxWidth/2)
        //     .attr("y", -boxHeight/2)
        //     .attr("width", boxWidth)
        //     .attr("height", boxHeight);
        // node.append("circle")
        //     .attr("r", 5).on("click",function (d) {
        //     console.log('circle');
        // });
        // ;
        // node.append("text")
        //     .attr("dy", 3)
        //     .attr("x", function(d) { return d.children ? -8 : 8; })
        //     .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
        //     .text(function(d) {
        //         console.log(d);
        //         return d.data.name
        //     });
    }
    wheelHandle(e){
      e.preventDefault();
      if(this.viewportScale>=0.1){

          let scale;
          if (e.deltaY>0) scale=this.viewportScale+0.1;
          else scale=this.viewportScale-0.1;
          scale>=0.1?this.viewportScale=scale:this.viewportScale=0.1;
      }
      this.setState({
          viewport:{
              x:this.state.viewport.x,
              y:this.state.viewport.y,
              scale:this.viewportScale
          }
      })
    }

    componentWillReceiveProps() {
        console.log('GCanvas' + ' componentWillReceiveProps' + arguments);
    }
    shouldComponentUpdate() {
        console.log('GCanvas ' + ' shouldComponentUpdate' + arguments);
        return true;
    }
    componentWillUpdate() {
        console.log('GCanvas' + ' componentWillUpdate' + arguments);
    }
    componentDidUpdate() {
        console.log('GCanvas' + ' componentDidUpdate' + arguments);
    }
    componentWillUnmount() {
        console.log('GCanvas' + ' componentWillUnmount' + arguments);
    }
    mouseDownHandle(e){
        e.preventDefault();
        let {clientX,clientY} =e;
        this.dragSwitcher=true;
        this.current_x=clientX;
        this.current_y=clientY;
    }
    mouseMoveHandle(e){
        e.preventDefault();
        let {clientX,clientY} =e;
        if(this.dragSwitcher)
        {
            let x = this.current_x-clientX;
            let y = this.current_y-clientY;
            this.setState({
                viewport:{
                    x:this.state.viewport.x+x*this.viewportStep*this.viewportScale,
                    y:this.state.viewport.y+y*this.viewportStep*this.viewportScale,
                    scale:this.state.viewport.scale
                }
            });
            this.current_x=clientX;
            this.current_y=clientY;
        }
    }
    mouseUpHandle(e){
        e.preventDefault();
        this.dragSwitcher=false
    }
    render() {

        let linkNode=this.state.linkData.map((d)=>{
            return  <TreeLinkComponent key={`g_rect_node_item_${d.data.id}`} d={d}></TreeLinkComponent>
        })
        let rectNode=this.state.nodeData.map((item)=>{
            return(<g className="svg_graphic_node_rect" style={{filter:'url(#f1)'}} key={`g_rect_node_item_${item.data.id}`} transform={`translate(${item.y} ,${item.x})`}>
            <rect fill="white" x={-boxWidth/2} y={-boxHeight/2} width={boxWidth} height={boxHeight}>
               </rect>
                <rect x={-boxWidth/2} y={-boxHeight/2} width={boxWidth} height={'50px'} fill="gray"></rect>
                <text x={-boxWidth/2+10} y={-boxHeight/2+35} className='g_rect_node_text_title'>标题</text>
                <text x={boxWidth/2-70} y={-boxHeight/2+35} onClick={()=>{console.log(item.data.id)}} className='g_rect_node_text_mod'>修改</text>
                <text x={boxWidth/2-10} y={-boxHeight/2+35} className='g_rect_node_text_del'>删除</text>
                <text className='g_rect_node_text_content'>

                    <tspan x={-boxWidth/2+10} y={-boxHeight/2+70} dx={5}dy={5}>简介：简介简介简介简介简介简介简介简介简介简介</tspan>
                    <tspan x={-boxWidth/2+10} y={-boxHeight/2+70} dx={5}dy={20}>简介：简介简介简介简介简介简介简介简介简介简介</tspan>
                    <tspan x={-boxWidth/2+10} y={-boxHeight/2+70} dx={5}dy={35}>简介：简介简介简介简介简介简介简介简介简介简介</tspan>

                </text>
                <path d={"M"+(-boxWidth/2)+" "+boxHeight/5+"h"+boxWidth} stroke="black"/>
                <text x={-boxWidth/2+10} y={boxHeight/5+20} className='g_rect_node_text_member1'>组长：XXX</text>
                <text x={10} y={boxHeight/5+20} className='g_rect_node_text_member2'>副组长：XXX</text>
                <text x={-boxWidth/2+10} y={boxHeight/5+50} className='g_rect_node_text_member3'>组员：XXX，XXX，XXX</text>
            </g>)
        })
        return (
            <div className="g2_container">
              <svg  onMouseDown={this.mouseDownHandle.bind(this)} onMouseLeave={this.mouseUpHandle.bind(this)} onMouseUp={this.mouseUpHandle.bind(this)} onMouseMove={this.mouseMoveHandle.bind(this)} onWheel={this.wheelHandle.bind(this)} ref={ref=>{this.baseSVG=ref}} viewBox={`${this.state.viewport.x} ${this.state.viewport.y} ${this.state.viewport.scale*viewportHeight} ${this.state.viewport.scale*viewportWidth}`}>
                  <defs>
                      <filter id="f1" x="0" y="0" width="200%" height="200%">
                          <feOffset result="offOut" in="SourceAlpha" dx="0" dy="1" />
                          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="6" />
                          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                      </filter>
                  </defs>
                <g className="svg_g_link">
                    {linkNode}
                </g>
                  <g className="svg_g_rect">
                      {rectNode}
                  </g>
              </svg>
            </div>
        )
    }
}
export default GCanvas;