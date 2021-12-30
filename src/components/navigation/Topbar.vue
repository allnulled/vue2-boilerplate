<template>
  <div class="component Topbar">
    <div class="topbar_height"></div>
    <div class="position_fixed top_0 left_0 right_0 shadowed">
      <div class="display_table topbar_height background_color_1">
        <div class="display_table_cell width_1x100 height_100x100" style="padding: 1px;">
          <button class="button height_100x100 topbar_height_as_width opacity_09" v-on:click="onNavigationButtonClicked">...</button>
        </div>
        <div class="display_table_cell width_100x100 height_100x100 text_align_center opacity_09 padding_horizontal_1">
          <div class="topbar_title no_break_line">
            <span>{{ $metadata.app }}</span>
            <span> (v.{{ $metadata.version }})</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Topbar",
  props: {},
  data() {
    return {};
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  activated() {},
  deactivated() {},
  methods: {
    onNavigationButtonClicked() {
      this.$root.$refs.Navigation.toggleState();
    }
  }
};
</script>

<style scoped>
</style>