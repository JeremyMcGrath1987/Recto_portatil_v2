<template>
  <div class="report relative pb-16">
    <div
      class="lista-delitos-aplicados fixed bg-recto-normal z-20 overflow-y-scroll"
      :class="{ desplegada: isDesplegada }"
    >
      <div class="delitos-header flex flex-row py-4 px-4 flex-grow">
        <a
          @click="isDesplegada = !isDesplegada"
          href="#"
          class="self-start mr-8 border border-recto-light py-1 px-2"
        >{{ isDesplegada ? "Plegar" : "Desplegar" }}</a>
        <ul class="right-0 self-start infoDesplegarText">
          <li class="inline-block ml-4">Penal actual:</li>
          <li class="inline-block ml-4">
            {{ calculateMonths }}
            <span class="text-xs">- Meses</span>
          </li>
          <li class="inline-block ml-4">{{ formatPrice(calculateFine) }} $$</li>
          <li
            v-if="selected.length > 0"
            @click="selected = []"
            class="inline-block ml-4 text-red-400 hover:text-red-800 cursor-pointer ml-1 border border-red-400 py-1 px-2 confirmAndCancel"
          >Cancelar</li>
          <li
            @click="confirmDelito"
            v-if="selected.length > 0"
            class="inline-block ml-4 hover:text-blue-800 cursor-pointer ml-1 border border-recto-light py-1 px-2 confirmAndCancel"
          >Confirmar</li>
        </ul>
      </div>
      <table class="table-auto border-b border-recto-dark w-full">
        <tbody>
          <tr class="border border-recto-dark font-bold bg-recto-dark">
            <td class="px-4 py-2">Delito aplicado</td>
            <td>Pena/Multa</td>
            <td></td>
            <td></td>
          </tr>
          <tr
            class="border-l border-r border-recto-dark"
            v-for="(delito, index) in selected"
            :key="index"
          >
            <td class="px-4 py-2 configPaddingArtic">
              ART. {{ delito.numero }} - {{ delito.titulo }}
              <p class="text-xs">{{ delito.texto }}</p>
            </td>
            <td class="configPaddingMonth">
              {{ delito.pena }}
              <span class="text-xs">meses</span>
              <p></p>
              {{ formatPrice(delito.multa) }} $$
            </td>
            <td class="px-4 py-2 configPaddingRemove">
              <a
                @click="removeDelito(index)"
                class="float-right text-red-400 hover:text-red-900 cursor-pointer ml-1 border border-red-400 py-1 px-2"
              >Eliminar</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="file flex flex-col flex-no-wrap">
      <div class="buttonPositionReport bg-recto-dark">
        <button
          @click="$router.push({ name: 'Home' })"
          class="flex-shrink-0 bg-recto-light hover:bg-blue-500 text-white py-2 px-4 border border-recto-light hover:border-blue-500 buttonHomeReport"
          type="button"
        >INICIO</button>
      </div>
      <top-bar class="hidden"/>
      <ul class="file-details mt-4 searchPositionReport bg-recto-dark">
        <li>
          <span class="font-bold">Nombre:</span>
          {{ singleFile.name }}
        </li>
        <li>
          <span class="font-bold">Id:</span>
          {{ singleFile.id }}
        </li>
      </ul>
      <span class="spaceTopReport"></span>
      <div class="file-details-content flex flex-row">
        <div class="file-content p-4 flex flex-col w-full">
          <p class="mb-2 text-lg font-bold">acta de denuncia</p>
          <input
            v-model="search"
            class="mt-2 mb-4 appearance-none bg-recto-dark border border-recto-light w-full p-2 uppercase focus:outline-none placeholder-gray-700"
            type="text"
            placeholder="Buscar delito"
          />
          <div class="report-tables flex flex-row">
            <table class="table-auto border-b border-recto-dark w-full">
              <tbody>
                <tr class="border border-recto-dark font-bold bg-recto-dark">
                  <td class="px-4 py-2">Código penal</td>
                  <td>Pena/Multa</td>
                  <td></td>
                  <td></td>
                </tr>
                <tr
                  class="border-l border-r border-recto-dark"
                  v-for="(delito, index) in filteredList"
                  :key="index"
                >
                  <td class="px-4 py-2 configPaddingArticAdd">
                    ART. {{ delito.numero }} - {{ delito.titulo }}
                    <p class="text-xs">{{ delito.texto }}</p>
                  </td>
                  <td class="configPaddingMonth">
                    {{ delito.pena }}
                    <span class="text-xs">meses</span>
                    <p></p>
                    {{ formatPrice(delito.multa) }} $
                  </td>
                  <td class="px-4 py-2 configPaddingAdd">
                    <a
                      @click="addDelito(delito)"
                      class="float-right hover:text-blue-800 cursor-pointer ml-1 border border-recto-light py-1 px-2"
                    >Añadir</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import topBar from "@/components/topbar";
import singleFile from "@/mixins/singleFile";
import formatPrice from "@/mixins/formatPrice";
import moment from "moment";
export default {
  name: "report",
  data: () => {
    return {
      search: "",
      selected: [],
      isDesplegada: false
    };
  },
  components: { topBar },
  mixins: [singleFile, formatPrice],
  async mounted() {
    // eslint-disable-next-line no-undef
    mp.trigger("getArticlesList");
    await this.$store.dispatch("loadingScreen/ISLOADING", false);
  },
  computed: {
    filteredList() {
      return this.$store.state.articlesList.data.filter(delito => {
        let d = delito.numero + " " + delito.titulo.toLowerCase();
        let s = this.search.toLowerCase();
        return d.includes(s);
      });
    },
    calculateMonths: function() {
      let selectedMonths = 0;
      this.selected.forEach(delito => {
        selectedMonths += delito.pena;
      });
      return selectedMonths;
    },
    calculateFine: function() {
      let selectedFine = 0;
      this.selected.forEach(delito => {
        selectedFine += delito.multa;
      });
      return selectedFine;
    }
  },
  methods: {
    addDelito: function(delito) {
      this.selected.push(delito);
    },
    removeDelito: function(index) {
      this.selected.splice(index, 1);
    },
    confirmDelito: async function() {
      await this.$store.dispatch("loadingScreen/ISLOADING", true);
      let fine = {
        arts: [],
        pena: undefined,
        multa: undefined,
        user: undefined,
        fecha: moment().format('D MMMM YYYY, H:mm:ss')
      };
      this.selected.forEach(delito => {
        fine.arts.push(`${delito.numero}. - ${delito.titulo}`);
      });
      fine.pena = this.calculateMonths;
      fine.multa = this.calculateFine;
      fine.user = this.$store.state.user.data.name;
      await this.$store.dispatch("ADDFINE", fine);
      await this.$router.push({ name: "Home" });
      await this.$store.dispatch("loadingScreen/ISLOADING", false);
    }
  }
};
</script>
<style lang="scss">
tr:nth-child(odd) {
  background: #0b122f;
}
.lista-delitos-aplicados {
  transition: all 0.4s ease-in-out;
  height: 65px;
  bottom: 259px;
  width: 356px;
}
.desplegada {
  height: 606px !important;
}

.delitos-header {
  font-size: 10px;
}

.infoDesplegarText {
  margin-top: -10px;
  font-size: 12px;
  margin-left: -40px;
  text-align: center;
}

.confirmAndCancel {
  width: 87px;
  font-size: 13px;
  height: 26px;
  text-align: center;
}

.configPaddingArtic {
  padding-left: 16px;
  padding-right: 0;
}

.configPaddingArticAdd {
  padding-left: 6px;
  padding-right: 0;
}

.configPaddingMonth {
  padding-right: 0px;
  text-align: center;
}

.configPaddingRemove {
  padding: 0px;
}

.configPaddingAdd {
  padding-right: 6px;
  padding-left: 0px;
}
.buttonHomeReport {
  height: 35px;
  width: 248px;
  margin-left: 14px;
  margin-top: 15px;
}
.buttonPositionReport {
  position: fixed;
  width: 337px;
  text-align: center;
  margin-top: 0;
  height: 60px;
}
.searchPositionReport {
  position: fixed;
  text-align: center;
  width: 337px;
  height: 50px;
  margin-top: 57px;
  margin-left: 0px;
}
.spaceTopReport {
  margin-bottom: 108px;
}
.hidden{
  display: none;
}
</style>
