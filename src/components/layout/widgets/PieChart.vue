<template>
  <v-chart :options="pie" :autoresize="true" :theme=" isDarkThemeEnabled ? 'dark' : 'default'" />
</template>

<style lang="scss" scoped>
.echarts {
  width: 100%;
  height: 100%;
  padding: 15px;
}
</style>

<script>
import ECharts from "vue-echarts";

export default {
  components: {
    "v-chart": ECharts
  },
  data() {
    return {
      pie: {
        title: {
          show: false
        },
        tooltip: {
          trigger: "item",
          formatter: "{b} : {c} ({d}%)"
        },
        legend: {
          show: true,
          orient: "horizontal",
          x: "center",
          y: "bottom",
          type: "scroll",
          data: ["Others", "Vue", "AngularJs", "Angular", "React"]
        },
        series: [
          {
            type: "pie",
            data: [
              { value: 335, name: "Others" },
              { value: 310, name: "Vue" },
              { value: 234, name: "AngularJs" },
              { value: 135, name: "Angular" },
              { value: 1548, name: "React" }
            ],
            label: {
              normal: {
                formatter: "{d}%",
                position: "inside"
              }
            },
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      }
    };
  },
  computed: {
    isDarkThemeEnabled() {
      return this.$store.state.isDarkThemeEnabled;
    }
  }
};
</script>
