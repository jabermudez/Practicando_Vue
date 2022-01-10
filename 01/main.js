const app =Vue.createApp({
    data() {
        return {
            titulo: 'Mi Banco con Vue.js',
            cantidad: 0,
            enlace: 'https://youtube.com/bluuweb',
            estado: false,
            servicios: ['tranferencias', 'pagos', 'giros', 'recaudos'],
            desactivar: false
        }
    },

    methods: {
        agregarSaldo() {
            this.cantidad = this.cantidad + 1000
        },

        disminuirSaldo(valor) {
            if (this.cantidad === 0) {
                alert('saldo encero')
                this.desactivar = true
                return
            }
            this.cantidad = this.cantidad - valor
        }
    },

    computed: {
        colorCantidad() {
            return this.cantidad > 5000 ? 'text-success' : 'text-danger'
        },
        mayusculaTexto(){
            return this.titulo.toUpperCase()
        }
    }
})