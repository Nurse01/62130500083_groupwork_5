app.component("photo-item", {
    template: /*html*/`
    
    <div v-for="(item, index) in items" class=" flex flex-col items-center">           
        <img :src="item.image" @dblclick="toggleDone(index)" @click="show(item)" class="w-64 h-60 my-7"  v-if="item.isShow">
        <p class="text-xl" v-if="item.isShow">{{item.name}}</p>
        <img v-show="item.liked" src="./images/paw.png" class="w-14 h-12 " v-if="item.isShow">
    </div>
    `,
    props:{
        items:Array
        
    },
    methods: {
        toggleDone(index) {
            this.items[index].liked = !this.items[index].liked
        },
        show(item){
            this.$emit("clicked-view",item)
        }

    },
})