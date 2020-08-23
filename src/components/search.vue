<template>
  <div class="busqueda md:w-1/3">
    <div class="flex items-center border-teal-500 py-2">
      <input
        v-model="query"
        class="appearance-none bg-recto-dark border border-recto-light inputBuscar p-2 uppercase focus:outline-none placeholder-gray-700"
        type="text"
        placeholder="NOMBRE O ID"
      />
      <button
        @click="searchForFiles"
        class="flex-shrink-0 bg-recto-light hover:bg-blue-500 text-white py-2 px-4 border border-recto-light hover:border-blue-500"
        type="button"
      >
        BUSCAR FICHAS
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "search",
  data: () => {
    return {
      query: undefined
    };
  },
  methods: {
    searchForFiles: async function() {
      let query = this.query;
      await this.$router.push({ name: "Files", params: { query } });
    }
  }
};
</script>
<style lang="scss">

.inputBuscar{
  width: 150px;
  margin-left: -87px;
  text-align: center;
}
    
</style>
