app.component('footer-banco', {
    props: ['valor', 'fecha'],
    template: /*html*/`
        <div class="bg-dark py-3 mt-5 text-white">
            <h3>{{ texto }} - {{ valor }}</h3>
            <p>{{ fecha }} </p>
        
        </div>
    `,
    data() {
        return {
            texto: 'Footer en mi sitio web dinamico',
            
        }
    }
})