<template>
    <div class="component WelcomeView">
        {{ $t("Welcome") }}
    </div>
</template>

<script>
export default {
    name: "WelcomeView",
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

}
</script>

<style>
.component.WelcomeView {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
}
</style>