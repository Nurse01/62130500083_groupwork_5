const app = Vue.createApp({
    data() {
        return {
            items: [
                { name: 'tumamink', image: 'images/tumamink.jpg', liked: false ,isShow: true},
                { name: 'yoda', image: 'images/yoda.jpg', liked: false ,isShow: true},
                { name: 'jubcream', image: 'images/jubcream.jpg', liked: false , isShow: true }
            ],
            
            isShow : false,       
            showSrc:"",
            isNoPhoto:false
        }
    },
    methods: {
        searchFunc(searching){
            console.log(searching);
            let photoAmout = this.items.length;
            let i =0;
             this.items.forEach( item=> {
                if (item.name.includes(searching)) {
                    item.isShow = true;
                }else{
                    item.isShow = false;
                    i++;
                    // console.log(i)
                }
            }); 
            if(photoAmout == i ){
                this.isNoPhoto = true;
            }       
        },
        show(item){
            this.isShow = true;
            this.showSrc = item.image;
            console.log(this.showSrc);
        },
        close(){
            this.isShow = false;
        }

    },

    computed: {
        countimage() {
            return this.items.length
        }
    },
});
