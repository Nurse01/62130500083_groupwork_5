const app = {
    data() {
        return {
            items: [
                { name: 'tumamink', image: 'images/tumamink.jpg', liked: false },
                { name: 'yoda', image: 'images/yoda.jpg', liked: false },
                { name: 'jubcream', image: 'images/jubcream.jpg', liked: false }
            ]
        }
    },
    methods: {
        toggleDone(index) {
            this.items[index].liked = !this.items[index].liked
        },
        clickSearch() {
            console.log("clicked")
            // this. = !this.items[index].liked

        }
        
    },

    computed: {
        countimage() {
            return this.items.length
        }
    }
}
Vue.createApp(app).mount('#app')