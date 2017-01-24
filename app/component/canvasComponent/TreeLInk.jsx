/**
 *
 * TreeLInk.js 文件
 * @author hurong<353486474@QQ.COM>
 * @date 2017/1/3
 *
 * @内容 作用
 * @内容 作用
 */
import React from 'react'
const TreeLInk = ({d}) => {
        let path_d= "M" + d.y + "," + d.x
            + "H" + (d.parent.y+d.y)/2 + " " +
            "V" + (d.parent.x) + " "
            +"L" + d.parent.y + "," + d.parent.x;
        return  <path key={`g_rect_node_item_${d.data.id}`} className="link" d={path_d}></path>
}
export default  TreeLInk;