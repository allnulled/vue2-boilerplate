<template>
  <div class="component Footer">
    <div class="footer_space">
      <div class="footer_message font_small">
        <span>{{ $t("Made with") }} </span>
        <img class="footer_love_icon" src="favicon.ico" alt="love" />
        <span> {{ $t("by") }} </span>
        <span>
          <a class="link_like" href="https://github.com/allnulled/">allnulled</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
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
};
</script>

<style>
</style>