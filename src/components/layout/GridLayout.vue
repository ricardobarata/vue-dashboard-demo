<template>
  <grid-layout
    :layout.sync="layout"
    :col-num="12"
    :row-height="30"
    :is-draggable="true"
    :is-resizable="true"
    :is-mirrored="false"
    :vertical-compact="false"
    :margin="[10, 10]"
    :use-css-transforms="true"
    :responsive="true"
  >
    <grid-item
      v-for="item in layout"
      :key="item.i"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
      :minH="10"
      :minW="2"
      drag-allow-from=".vue-draggable-handle"
      drag-ignore-from=".no-drag"
    >
      <v-card>
        <v-card-title class="vue-draggable-handle" primary-title>
          <h3 class="subheading font-weight-regular">{{ item.name }}</h3>
        </v-card-title>
        <v-divider></v-divider>
        <v-container class="no-drag">
          <PieChart v-if="item.i === '0'" />
          <BarChart v-if="item.i === '1'" />
          <DataTable v-if="item.i === '2'" />
          <Calendar v-if="item.i === '3'" />
        </v-container>
      </v-card>
    </grid-item>
  </grid-layout>
</template>

<script>
import VueGridLayout from "vue-grid-layout";
import PieChart from "./widgets/PieChart";
import BarChart from "./widgets/BarChart";
import DataTable from "./widgets/DataTable";
import Calendar from "./widgets/Calendar";

export default {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem,
    PieChart: PieChart,
    BarChart: BarChart,
    DataTable: DataTable,
    Calendar: Calendar
  },
  data: function() {
    return {
      layout: [
        { x: 0, y: 0, w: 3, h: 15, i: "0", name: "Pie Chart" },
        { x: 6, y: 0, w: 3, h: 10, i: "1", name: "Bar Chart" },
        { x: 3, y: 1, w: 3, h: 20, i: "2", name: "Data Table" },
        { x: 6, y: 5, w: 4, h: 10, i: "3", name: "Calendar" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.vue-grid-item {
  background-color: grey;
  border-color: grey;
  .v-card {
    display: flex;
    flex-direction: column;
    height: 100%;
    .container {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 0;
    }
  }
}
</style>
