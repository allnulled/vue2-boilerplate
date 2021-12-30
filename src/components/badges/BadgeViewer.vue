<template>
    <div class="component BadgeViewer">
      <div class="position_fixed bottom_0 left_0 right_0">
        <div class="badge_viewer">
          <div class="badge_style" :class="'badge_type_' + badge.mode" v-for="(badge, badgeIndex) in current_badges" v-bind:key="'badge-id-' + badgeIndex" v-on:click="badge.close">
            <div class="badge_title">{{ badge.title }}</div>
            <div class="badge_message">{{ badge.message }}</div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

const DEFAULT_BADGE_OPTIONS = {
  title: "",
  message: "...",
  mode: "inform",
  timeout: 5000,
};

export default {
    name: "BadgeViewer",
    props: {},
    data() {
      return {
        current_badges: [],
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

      send(badgeOptionsParameter = {}) {
        const id = this.$utils.getRandomString(10);
        const options = Object.assign({}, DEFAULT_BADGE_OPTIONS, badgeOptionsParameter, { id });
        const close = () => {
          const position = this.current_badges.indexOf(options);
          this.current_badges.splice(position, 1);
        };
        options.close = close;
        this.current_badges.unshift(options);
        setTimeout(close, options.timeout);
        return { badge: options, close };
      },

      closeAll() {
        this.current_badges = [];
      }

    }
}
</script>

<style>
</style>