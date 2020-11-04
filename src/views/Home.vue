<template>
  <div class="home flex items-center justify-center h-full w-full flex-col">
    <img src="../assets/images/lspd_logo.png" alt="lspd logo" />
    <p class="mt-8">
      <span class="font-bold">P</span>
      <span class="font-bold">D</span>
      <span class="font-bold">A</span>
      <span class="font-bold"></span>
      <span class="font-bold">-</span>
      Trámites de Denuncias
    </p>
    <search class="mt-4 md:w-1/3 w-full" />
  </div>
</template>
<script>
import search from "../components/search";
export default {
  name: "Home",
  components: { search },
  mounted() {
    // eslint-disable-next-line no-undef
    mp.trigger("getUserData");
  }
};
</script>
<style lang="scss">
.mt-8{
  margin-top: 2rem;
  margin-left: 5px;
  font-size: 17px;
}
</style>
