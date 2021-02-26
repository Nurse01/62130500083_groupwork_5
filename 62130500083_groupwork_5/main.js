const app = {
    data() {
        return {
            items: [
                { name: 'tumamink', image: 'images/tumamink.jpg', liked: false ,isShow: true},
                { name: 'yoda', image: 'images/yoda.jpg', liked: false ,isShow: true},
                { name: 'jubcream', image: 'images/jubcream.jpg', liked: false , isShow: true }
            ],
            search : true,
            searching: "",
            isShow : false,
            showSrc: "",
            isNoPhoto:false
        }
    },
    methods: {
        toggleDone(index) {
            this.items[index].liked = !this.items[index].liked
        },
        toggleSearch() {
            this.search = !this.search
            this.searching = "";

        },
        searchFunc(searching){
            let photoAmout = this.items.length;
            let i =0;
             this.items.forEach( item=> {
                if (item.name.includes(searching)) {
                    item.isShow = true;
                }else{
                    item.isShow =false;
                    i++;
                    console.log(i)

                }
            }); 
            if(photoAmout == i ){
                this.isNoPhoto = true;
            }       
        },
        show(item){
            this.isShow = true;
            this.showSrc = item.image;

        },
        closePreview(){
            this.isShow = false;
        }
        
    },

    computed: {
        countimage() {
            return this.items.length
        }
    },
    beforeUpdate() {
        this.searchFunc(this.searching)
    }
}
Vue.createApp(app)