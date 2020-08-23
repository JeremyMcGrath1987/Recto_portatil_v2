<template>
  <div class="files flex flex-col flex-no-wrap">
     <span class="spaceTop"></span>
    <div class="files-wrapper flex flex-wrap p-4 filePosition">
      <file
        class="w-1/1 sm:w-1/1 md:w-1/1 lg:w-1/1 xl:w-1/1 p-1"
        v-for="(file, index) in files"
        :key="index"
        :file="file"
        @click.native="gotofile"
      />
    </div>
    <span class="spaceBottom"></span>
    <topbar />  
    <div class="buttonPosition bg-recto-dark">
      <button
        @click="$router.push({ name: 'Home' })"
        class="flex-shrink-0 bg-recto-light hover:bg-blue-500 text-white py-2 px-4 border border-recto-light hover:border-blue-500 buttonHome"
        type="button"
      >INICIO</button>
    </div>
  </div>
</template>
<script>
import topbar from "../components/topbar";
import file from "../components/file";
export default {
  name: "files",
  components: { topbar, file },
  data: () => {
    return {
      files: [
        {
          name: "Frank Castle",
          id: "2856",
          identification: "X4388998899"
        },
        {
          name: "Natasha Romanoff",
          id: "12854",
          identification: "N48569951"
        },
        {
          name: "harley Quinn",
          id: "1784",
          identification: "Z478451262"
        },
        {
          name: "Frank Castle",
          id: "2856",
          identification: "X4388998899"
        },
        {
          name: "Natasha Romanoff",
          id: "12854",
          identification: "N48569951"
        },
        {
          name: "harley Quinn",
          id: "1784",
          identification: "Z478451262"
        },
        {
          name: "Frank Castle",
          id: "2856",
          identification: "X4388998899"
        },
        {
          name: "Natasha Romanoff",
          id: "12854",
          identification: "N48569951"
        },
        {
          name: "harley Quinn",
          id: "1784",
          identification: "Z478451262"
        },
        {
          name: "Frank Castle",
          id: "2856",
          identification: "X4388998899"
        },
        {
          name: "Natasha Romanoff",
          id: "12854",
          identification: "N48569951"
        },
        {
          name: "harley Quinn",
          id: "1784",
          identification: "Z478451262"
        },
        {
          name: "Frank Castle",
          id: "2856",
          identification: "X4388998899"
        },
        {
          name: "Natasha Romanoff",
          id: "12854",
          identification: "N48569951"
        },
        {
          name: "harley Quinn",
          id: "1784",
          identification: "Z478451262"
        },
        {
          name: "Frank Castle",
          id: "2856",
          identification: "X4388998899"
        },
        {
          name: "Natasha Romanoff",
          id: "12854",
          identification: "N48569951"
        },
        {
          name: "harley Quinn",
          id: "1784",
          identification: "Z478451262"
        }
      ]
    };
  },
  mounted() {
    this.$store.dispatch("loadingScreen/ISLOADING", false);
  },
  methods: {
    gotofile: async function() {
      await this.$store.dispatch("loadingScreen/ISLOADING", true);
      await this.$router.push({ name: "Report" });
    }
  }
};
</script>
<style lang="scss">
.buttonHome {
  height: 35px;
  width: 248px;
  margin-left: 14px;
  margin-top: 16px;
}
.buttonPosition {
  position: fixed;
  width: 337px;
  text-align: center;
  margin-top: 539px;
  height: 67px;
}
.filePosition{
    height: 100%;
}
.spaceTop{
    margin-bottom: 57px;
}
.spaceBottom{
 margin-bottom: 50px;
}
</style>