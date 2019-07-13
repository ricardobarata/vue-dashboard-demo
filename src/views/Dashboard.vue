<template>
  <v-content class="grid-layout-content">
    <GridLayout />
  </v-content>
</template>

<script>
import GridLayout from "../components/layout/GridLayout";

export default {
  components: {
    GridLayout
  }
};
</script>

<style lang="scss">
.grid-layout-content {
  height: 100%;
  .v-content__wrap {
    height: 100%;
    overflow: auto;
  }
}
</style>
