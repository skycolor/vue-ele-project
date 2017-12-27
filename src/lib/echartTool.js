import echarts from 'echarts/dist/echarts.min'

/*
*	获取echart 的option
*/
function getOpt1() {
	var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
	        '7a', '8a', '9a','10a','11a',
	        '12p', '1p', '2p', '3p', '4p', '5p',
	        '6p', '7p', '8p', '9p', '10p', '11p'];
	var days = ['Saturday', 'Friday', 'Thursday',
	        'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

	var data = [[0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]];
	data = data.map(function (item) {
	    return [item[1], item[0], item[2]];
	});

	return {
	    title: {
	        text: 'Punch Card of Github',
	        link: 'https://github.com/pissang/echarts-next/graphs/punch-card'
	    },
	    legend: {
	        data: ['Punch Card'],
	        left: 'right'
	    },
	    tooltip: {
	        position: 'top',
	        formatter: function (params) {
	            return params.value[2] + ' commits in ' + hours[params.value[0]] + ' of ' + days[params.value[1]];
	        }
	    },
	    grid: {
	        left: 2,
	        bottom: 10,
	        right: 10,
	        containLabel: true
	    },
	    xAxis: {
	        type: 'category',
	        data: hours,
	        boundaryGap: false,
	        splitLine: {
	            show: true,
	            lineStyle: {
	                color: '#999',
	                type: 'dashed'
	            }
	        },
	        axisLine: {
	            show: false
	        }
	    },
	    yAxis: {
	        type: 'category',
	        data: days,
	        axisLine: {
	            show: false
	        }
	    },
	    series: [{
	        name: 'Punch Card',
	        type: 'scatter',
	        symbolSize: function (val) {
	            return val[2] * 2;
	        },
	        data: data,
	        animationDelay: function (idx) {
	            return idx * 5;
	        }
	    }]
	};
}

function getOpt2(){
	var base = +new Date(1968, 9, 3);
	var oneDay = 24 * 3600 * 1000;
	var date = [];

	var data = [Math.random() * 300];

	for (var i = 1; i < 20000; i++) {
	    var now = new Date(base += oneDay);
	    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
	    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
	}

	return {
	    tooltip: {
	        trigger: 'axis',
	        position: function (pt) {
	            return [pt[0], '10%'];
	        }
	    },
	    title: {
	        left: 'center',
	        text: '大数据量面积图',
	    },
	    toolbox: {
	        feature: {
	            dataZoom: {
	                yAxisIndex: 'none'
	            },
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    xAxis: {
	        type: 'category',
	        boundaryGap: false,
	        data: date
	    },
	    yAxis: {
	        type: 'value',
	        boundaryGap: [0, '100%']
	    },
	    dataZoom: [{
	        type: 'inside',
	        start: 0,
	        end: 10
	    }, {
	        start: 0,
	        end: 10,
	        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
	        handleSize: '80%',
	        handleStyle: {
	            color: '#fff',
	            shadowBlur: 3,
	            shadowColor: 'rgba(0, 0, 0, 0.6)',
	            shadowOffsetX: 2,
	            shadowOffsetY: 2
	        }
	    }],
	    series: [
	        {
	            name:'模拟数据',
	            type:'line',
	            smooth:true,
	            symbol: 'none',
	            sampling: 'average',
	            itemStyle: {
	                normal: {
	                    color: 'rgb(255, 70, 131)'
	                }
	            },
	            areaStyle: {
	                normal: {
	                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                        offset: 0,
	                        color: 'rgb(255, 158, 68)'
	                    }, {
	                        offset: 1,
	                        color: 'rgb(255, 70, 131)'
	                    }])
	                }
	            },
	            data: data
	        }
	    ]
	};

}

function getOpt3(){
	return {
	    title : {
	        text: '蒸发量和降水量',
	        subtext: '纯属虚构'
	    },
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['蒸发量','降水量']
	    },
	    toolbox: {
	        show : true,
	        feature : {
	            dataView : {show: true, readOnly: false},
	            magicType : {show: true, type: ['line', 'bar']},
	            restore : {show: true},
	            saveAsImage : {show: true}
	        }
	    },
	    calculable : true,
	    xAxis : [
	        {
	            type : 'category',
	            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
	        }
	    ],
	    yAxis : [
	        {
	            type : 'value'
	        }
	    ],
	    series : [
	        {
	            name:'蒸发量',
	            type:'bar',
	            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
	            markPoint : {
	                data : [
	                    {type : 'max', name: '最大值'},
	                    {type : 'min', name: '最小值'}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name: '平均值'}
	                ]
	            }
	        },
	        {
	            name:'降水量',
	            type:'bar',
	            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
	            markPoint : {
	                data : [
	                    {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
	                    {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
	                ]
	            },
	            markLine : {
	                data : [
	                    {type : 'average', name : '平均值'}
	                ]
	            }
	        }
	    ]
	};
}

function getOpt4(){
	return {
	    title : {
	        text: '某站点用户访问来源',
	        subtext: '纯属虚构',
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'left',
	        data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
	    },
	    series : [
	        {
	            name: '访问来源',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
	                {value:335, name:'直接访问'},
	                {value:310, name:'邮件营销'},
	                {value:234, name:'联盟广告'},
	                {value:135, name:'视频广告'},
	                {value:1548, name:'搜索引擎'}
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};
}

function getOpt5(){
	return {
	    title: {
	        text: '基础雷达图'
	    },
	    tooltip: {},
	    radar: {
	        // shape: 'circle',
	        name: {
	            textStyle: {
	                color: '#fff',
	                backgroundColor: '#999',
	                borderRadius: 3,
	                padding: [3, 5]
	           }
	        },
	        indicator: [
	           { name: '销售（sales）', max: 6500},
	           { name: '管理（Administration）', max: 16000},
	           { name: '信息技术（Information Techology）', max: 30000},
	           { name: '客服（Customer Support）', max: 38000},
	           { name: '研发（Development）', max: 52000},
	           { name: '市场（Marketing）', max: 25000}
	        ]
	    },
	    series: [{
	        name: '预算 vs 开销（Budget vs spending）',
	        type: 'radar',
	        // areaStyle: {normal: {}},
	        data : [
	            {
	                value : [4300, 10000, 28000, 35000, 50000, 19000],
	                name : '预算分配（Allocated Budget）'
	            },
	             {
	                value : [5000, 14000, 28000, 31000, 42000, 21000],
	                name : '实际开销（Actual Spending）'
	            }
	        ]
	    }]
	};
}

function getOpt6(){
	return {
	    tooltip : {
	        formatter: "{a} <br/>{b} : {c}%"
	    },
	    toolbox: {
	        feature: {
	            restore: {},
	            saveAsImage: {}
	        }
	    },
	    series: [
	        {
	            name: '业务指标',
	            type: 'gauge',
	            detail: {formatter:'{value}%'},
	            data: [{value: 50, name: '完成率'}]
	        }
	    ]
	};
}


export default {
   getOpt1 , getOpt2 , getOpt3 , getOpt4 , getOpt5 , getOpt6
}
