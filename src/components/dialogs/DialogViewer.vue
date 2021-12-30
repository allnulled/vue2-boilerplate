<template>
  <div class="component DialogViewer">
    <div class="dialogs_viewer" v-if="Object.keys(current_active_dialogs).length">
      <div class="dialogs_container">
        <div class="dialogs_content">
          <div class="dialog" v-if="'Loading dialog' in current_active_dialogs">
            <div class="">
              <!-- This dialog has no box, header, body or footer -->
              <div>Loading...</div>
              <div>{{ current_active_dialogs['Loading dialog'].options.message }}</div>
            </div>
          </div>
          <div class="dialog_box" v-if="'Hello dialogs!' in current_active_dialogs">
            <div class="dialog_header padding_1">Example of dialog...</div>
            <div class="dialog_body">
              <div class="padding_1">
                <div>Here it starts.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Contents of the dialog.</div>
                <div>Here it ends.</div>
              </div>
            </div>
            <div class="dialog_footer padding_1 text_align_right">
              <button class="button" v-on:click="current_active_dialogs['Hello dialogs!'].onOkay">
                Okay
              </button>
              <span style="display: inline-block; min-width: 4px;"></span>
              <button class="button" v-on:click="current_active_dialogs['Hello dialogs!'].onCancel">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import dialogFactory from "./factory.js";

export default {
  name: "DialogViewer",
  props: {},
  data() {
    return {
      current_active_dialogs: {},
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
    open(name, options = {}) {
      this.current_active_dialogs[name] = dialogFactory(name, options, this);
      this.$forceUpdate(true);
      return this.current_active_dialogs[name];
    },

    close(name) {
      delete this.current_active_dialogs[name];
    },

    closeAll() {
      this.current_active_dialogs = {};
    },
  },
};
</script>

<style>
</style>