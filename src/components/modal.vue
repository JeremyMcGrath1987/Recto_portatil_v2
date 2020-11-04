<template>
  <transition name="modal">
    <div class="modal-mask ">
      <div class="modal-wrapper">
        <div class="modal-container bg-recto-dark border border-recto-light">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              Búsqueda vacía, escribe en el recuadro de búsqueda
            </slot>
            
          </div>
          <div class="modal-default-button">
              <button
                class="flex-shrink-0 bg-recto-light hover:bg-blue-500 text-white py-2 px-4 border border-recto-light hover:border-blue-500"
                @click="$emit('close')"
              >OK</button>
          </div>          
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "modal",
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>
<style lang="scss">
.modal-mask {
  position: absolute;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 276px;
  margin: 0px auto;
  padding: 20px 30px;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #ffffff;
}

.modal-footer {
  margin: 20px 0;
}

.modal-default-button {
  text-align: center;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>