<template>
  <div id="app">
    <WelcomeView v-if="!is_loaded" />
    <div class="app_header">
      <Navigation ref="Navigation" />
      <Topbar ref="Topbar" />
    </div>
    <div class="app_static">
      <BadgeViewer ref="BadgeViewer" />
      <DialogViewer ref="DialogViewer" />
    </div>
    <!-- You can start here! -->
    <div class="app_body">
      <router-view></router-view>
    </div>
    <div class="app_footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import "./styles/app.css";
import "./styles/theme.css";
import "./styles/framework.css";
import "./styles/custom.css";

export default {
  name: "App",
  components: {},
  data() {
    return {
      is_loaded: false,
    };
  },
  methods: {},
  async beforeCreate() {
    try {
      this.$root = this;
      await this.$storage.initialize();
      await this.$database.initialize();
    } catch (error) {
      console.error("Error loading App (on beforeCreate):", error);
    }
  },
  created() {},
  beforeMount() {},
  async mounted() {
    try {
      await this.$dialogs.initialize(this);
      await this.$badges.initialize(this);
      // @TODO: remove this conditional once you get the thing:
      if(!this.$route.path.startsWith('/demo')) {
        this.$router.push("/demo");
      }
      await this.$utils.timeout(3000);
      this.is_loaded = true;
    } catch (error) {
      console.error("Error loading App (on mounted):", error);
    }
    // @TOREMOVE: Just for debug purposes:
    window.app = this;
  },
  beforeUpdate() {},
  updated() {},
  beforeUnmount() {},
  unmounted() {},
  activated() {},
  deactivated() {},
};
</script>

<style>
@font-face {
  font-family: "Roboto";
  src: local("Roboto"), url(./assets/fonts/Roboto/Roboto-Regular.ttf);
}
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
