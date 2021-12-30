<template>
    <div class="component Navigation">
      <div class="navigation_background" v-if="is_opened" v-on:click="closeState"></div>
      <div class="position_fixed top_0 left_0 right_0">
        <div class="topbar_height" style="margin-top: 2px;"></div>
        <div class="position_absolute navigation_component" :class="{ is_selected: is_opened }">
          <div class="">
            Here you can put whatever you want to have at the navigation menu.
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: "Navigation",
    props: {},
    data() {
      return {
        is_opened: false
      };
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
      toggleState() {
        this.is_opened = !this.is_opened;
      },
      closeState() {
        this.is_opened = false;
      }
    }

}
</script>

<style>
</style>