<template>
  <div class="tob-bar flex flex-row items-center w-full p-4 bg-recto-dark fixTopbar searchPosition">    
    <search class="ml-4 searchText" />    
  </div>
</template>
<script>
import search from "../components/search";
export default {
  name: "topbar",
  components: { search }
};
</script>
<style lang="scss">
.searchText {
  height: 35px;
  width: 248px;
  margin-left: 101px;
  margin-bottom: 20px;
}
.searchPosition {
  position: fixed;
  text-align: center;
  width: 337px;
  height: 64px;
  margin-top: 0px;
  margin-left: 0px;
}
</style>