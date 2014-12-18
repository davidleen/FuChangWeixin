/**
 * Created by Administrator on 2014/12/11.
 */
//获取元素的纵坐标
function getTop(e){
    var offset=e.offsetTop;
    if(e.offsetParent!=null) offset+=getTop(e.offsetParent);
    return offset;
}
//获取元素的横坐标
function getLeft(e){
    var offset=e.offsetLeft;
    if(e.offsetParent!=null) offset+=getLeft(e.offsetParent);
    return offset;
}

//自定义元素读取快速方法 by id
function $(e)
{
  return  document.getElementById(e);
}
//自定义元素集合读取快速方法 by name
function $n(e)
{
    return  document.getElementsByName(e);
}

/**
 * Tab Detail 模式 切换控制
 */

function switchTab(clickedTab,  tabs,  details) {
    assert(tabs.length != details.length);

    var count = tabs.length;
    for (var i = 0; i < count; i++) {
        var checked = tabs[i] == clickedTab;
        tabs[i].className = checked ? 'on' : ''
        if (checked) {
            window.scrollTo(0, getTop(details[i]))
        }

    }
}
function assert(hasError) {
    if(hasError)
        throw new Error("Tabs length is not equal to detail");

}
/**
 * 删除左右两端的空格
 * @param str
 * @returns {XML|string|void}
 */
function trim(str){
    return str.replace(/(^\s*)|(\s*$)/g, "");
}

//删除左边的空格
function ltrim(str){
    return str.replace(/(^\s*)/g,"");
}
//删除右边的空格
function rtrim(str){
    return str.replace(/(\s*$)/g,"");
}



/**
 * 对Date的扩展，将 Date 转化为指定格式的String
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 * eg:
 * (new Date()).pattern("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
 * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
 * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
 * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
 * (new Date()).pattern("yyyyMMddhhmmss") ==> 2006070208090418
 *
 *
 */
Date.prototype.pattern=function(fmt) {
    var o = {
        "M+" : this.getMonth()+1, //月份
        "d+" : this.getDate(), //日
        "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时
        "H+" : this.getHours(), //小时
        "m+" : this.getMinutes(), //分
        "s+" : this.getSeconds(), //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S" : this.getMilliseconds() //毫秒
    };
    var week = {
        "0" : "/u65e5",
        "1" : "/u4e00",
        "2" : "/u4e8c",
        "3" : "/u4e09",
        "4" : "/u56db",
        "5" : "/u4e94",
        "6" : "/u516d"
    };
    if(/(y+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    if(/(E+)/.test(fmt)){
        fmt=fmt.replace(RegExp.$1, ((RegExp.$1.length>1) ? (RegExp.$1.length>2 ? "/u661f/u671f" : "/u5468") : "")+week[this.getDay()+""]);
    }
    for(var k in o){
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
}





function configDivScrollFuction(id) {


    //var soucePoint;
    //var lastPoint;
    //
    ////定义touchstart事件
    //$(id).addEventListener("touchstart", function (ev) {
    //    // ev.preventDefault();//一定要阻止默认事件
    //    //
    //    // var x = ev.touches[0].pageX;//获得手指触摸点的X坐标
    //    // var y = ev.touches[0].pageY;//获得手指触摸点的Y坐标
    //    // soucePoint = new Point(x, y);
    //    // lastPoint = soucePoint;
    //
    //});
    ////定义touchmove事件
    //$(id).addEventListener("touchmove", function (ev) {
    //    // ev.preventDefault();
    //    // var x = ev.touches[0].pageX;
    //    // var y = ev.touches[0].pageY;
    //    //
    //    // var newLeft=$(id).scrollLeft+(x - lastPoint.x);
    //    // if(newLeft<0) newLeft=0;
    //    // if(newLeft>$(id).width-$("body").width())
    //    // {
    //    //     newLeft=$(id).width-$("body").width()
    //    // }
    //    // $(id).scrollLeft=newLeft ;
    //    // lastPoint = new Point(x, y);
    //
    //
    //});
    //
    //$(id).addEventListener('touchend', function (e) {
    //    //nChangY = e.changedTouches[0].pageY;
    //    //nChangX = e.changedTouches[0].pageX;
    //
    //})
}