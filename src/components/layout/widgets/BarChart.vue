<template>
  <v-chart :options="bar" :autoresize="true" :theme=" isDarkThemeEnabled ? 'dark' : 'default'" />
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
      bar: {
        grid: {
          left: "4%",
          right: "4%",
          top: "60",
          bottom: "4%",
          containLabel: true
        },
        legend: { show: true },
        tooltip: { show: true },
        dataset: {
          dimensions: ["product", "2015", "2016", "2017"],
          source: [
            {
              product: "Matcha Latte",
              "2015": 43.3,
              "2016": 85.8,
              "2017": 93.7
            },
            { product: "Milk Tea", "2015": 83.1, "2016": 73.4, "2017": 55.1 },
            {
              product: "Cheese Cocoa",
              "2015": 86.4,
              "2016": 65.2,
              "2017": 82.5
            },
            {
              product: "Walnut Brownie",
              "2015": 72.4,
              "2016": 53.9,
              "2017": 39.1
            }
          ]
        },
        xAxis: {
          type: "category"
        },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }, { type: "bar" }]
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
