<template>
  <div id="app">
    <!--
    <WelcomeView v-if="!is_loaded" />
    <div class="app_header">
      <Navigation ref="Navigation" />
      <Topbar ref="Topbar" />
    </div>
    -->
    <div class="app_navigation">
      <div class="display_table width_100x100">
        <div class="display_table_cell width_50x100">
          <button class="navigation_button" :class="{selected: $route.path.startsWith('/tareas')}" v-on:click="() => goToPath('/tareas')">Tareas</button>
        </div>
        <div class="display_table_cell width_50x100">
          <button class="navigation_button" :class="{selected: $route.path.startsWith('/horas')}" v-on:click="() => goToPath('/horas')">Horas</button>
        </div>
      </div>
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
  methods: {
    goToPath(newPath) {
      if(this.$route.path !== newPath) {
        this.$router.push(newPath);
      }
    }
  },
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
      if(!this.$route.path.startsWith("/horas")) {
        this.$router.push("/horas");
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
.navigation_button {
  width: 100%;
  height: 100%;
  border: 1px solid #DDDDDD;
  border-left: 0px;
  padding: 10px;
  cursor: pointer;
  font-size: 17px;
  color: #333333;
  text-shadow: 0 0 1px #333333;
  text-transform: uppercase;
  background-color: #FFFFFF;
}
.navigation_button:hover {
  background-color: #EEEEEE;
}
.navigation_button.selected {
  background-color: #DDDDDD;
}
</style>
