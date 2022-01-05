<template>
</template>

<script>
	{var option = {
        color: ['#1AFFFD', '#FEE581', '#06B8F8', '#FF5C58', '#AD5FF'], // 设置环形图各个区块的颜色
        // 点击每块区域的弹出层显示
        tooltip: {
          trigger: 'item', // 标题
          formatter: '{a} <br/>{b}: {c} ({d}%)' // 数据的显示方式
        },
        // 设置环形图项
        legend: {
          orient: 'vertical', // 图项的显示方式，垂直显示
          x: 'left', // 靠左显示，不写此项默认居中显示
          textStyle: {
            color: '#fff' // 图项字体颜色
          },
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'] // 图项名称
        },
        // 配置环形图的显示与数据
        series: [
          {
            name: '访问来源', // 弹出层图表名称
            type: 'pie', // 饼图
            radius: ['40%', '50%'], // 40%内环圆心大小，若为0则为饼图，50%：外环圆心大小
            avoidLabelOverlap: false, // 是否启用防止标签重叠策略，默认开启，false则都居中显示，在标签拥挤重叠的情况下会挪动各个标签的位置，防止标签间的重叠。
            label: {
              normal: {
                show: false, // 标签不显示，鼠标滑过才显示
                position: 'center' // 高亮时标签显示在中间，不写默认显示侧边
              },
              // 高亮图区的标签样式
              emphasis: {
                show: true,
                // 修改环形中间字体样式
                textStyle: {
                  fontSize: '18',
                  fontWeight: 'bold',
                  color: '#fff'
                }
              }
            },
            // 标签的引导线
            labelLine: {
              normal: {
                show: false // 标签的引导线不显示，若显示还可设置线的样式，参考echart文档
              }
            },
            // 展示数据
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ]
          }
        ]
      }}
</script>

<style>
</style>
