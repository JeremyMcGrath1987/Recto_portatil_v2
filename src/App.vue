<template>
  <div id="app">
    <img
      src="./assets/images/rugged_tablet.png"
      alt="rugged tablet"
      class="absolute bottom-0 right-0 z-50 pointer-events-none rugged-tablet"
    />
    <div
      class="recto-screen overflow-y-scroll"
      :style="{
        background:
          'url(' +
          bgpattern +
          '), radial-gradient(circle, rgba(2, 0, 36, 1) 0%, rgba(20, 20, 94, 1) 0%, rgba(22, 18, 51, 1) 100%)'
      }"
    >
      <transition name="fade">
        <loading-screen
          v-show="this.$store.state.loadingScreen.loading"
          style="animation-duration: 0.3s"
        />
      </transition>
      <router-view />
    </div>
  </div>
</template>
<script>
import bgPattern from "./mixins/bgPattern";
import loadingScreen from "./components/loadingScreen";
export default {
  name: "app",
  mixins: [bgPattern],
  components: { loadingScreen }
};
</script>
<style lang="scss">
.rugged-tablet {
  height: 1007px;
}
.recto-screen {
  width: 347px;
  height: 606px;
  position: absolute;
  bottom: 260px;
  right: 502px;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #587fff;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #587fff;
}
</style>
