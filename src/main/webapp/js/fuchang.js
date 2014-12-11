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

//自定义元素读取快速方法
function $(e)
{
  return  document.getElementById(e);
}



//Tab Detail 模式 切换控制
function switchTab(clickedTab,  tabs,  details)
{
   assert(tabs.length!=details.length);

    var count=tabs.length;
    for (var i=0;i<count;i++)
    {
        var checked=tabs[i]==clickedTab;
        tabs[i].className=checked?'on':''
        if(checked)
        {
            window.scrollTo(0,getTop(details[i]))
        }

    }



}
function assert(hasError) {
    if(hasError)
        throw new Error("Tabs length is not equal to detail");

}