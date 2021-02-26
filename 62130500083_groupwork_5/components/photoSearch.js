app.component("photo-search", {
    template: /*html*/`
    <div id="search" class="flex justify-end ">
        <img src="images/search.png"  v-if="search"  @click="toggleSearch" class=" w-14 h-12 float-right mt-3 mr-8 ">
        <div v-if="!search">
            <input type="text" placeholder="Please enter text for searching photos"  class=" mx-5 mt-5 p-1.5" v-model="searching">  
            <button  value="cancel" @click="toggleSearch" class="bg-white mx-5">Cancel</button>
        </div>
    </div>
    `,
    data() {
        return {
            search : true,
            searching: "",
        }
    },
    methods: {
        toggleSearch() {
            this.search = !this.search
            this.searching = "";
        },
    },
    beforeUpdate() {
        this.$emit("search", this.searching);
    },
})