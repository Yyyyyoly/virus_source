webpackJsonp([0],{10:function(t,e,i){"use strict";$("#chart").height(200);var a=echarts.init(document.getElementById("chart")),o={color:["#ffffff"],tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:"3%",left:"-4%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],axisLine:{lineStyle:{color:"#fff"}},axisTick:{show:!1,alignWithLabel:!0},splitArea:{show:!0,areaStyle:{color:["rgba(250,250,250,0)","rgba(0,0,0,0.05)"]}}}],yAxis:[{show:!1,type:"value",axisLine:{lineStyle:{color:"#fff"}},axisTick:{show:!1},splitLine:{show:!1}}],series:[{name:"浏览量",type:"bar",barWidth:10,data:[10,52,200,334,390,330,220],itemStyle:{normal:{barBorderRadius:[10,10,0,0]}}}]};a.setOption(o)},9:function(t,e,i){"use strict";i(10)}},[9]);