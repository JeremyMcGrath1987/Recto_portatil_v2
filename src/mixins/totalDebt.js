export default {
    computed: {
        totalDebt: function() {
            let deudas = 0;
            this.$store.state.file.deudas.forEach(deuda => {
                deudas += deuda.deuda;
            });
            return deudas;
        }
    }
};
