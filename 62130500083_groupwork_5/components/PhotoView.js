app.component("photo-view",{
    template: /*html*/ `

    <div id="preview" class="bg-yellow-200 flex justify-center m-2">
      <img :src="showSrc" class="h-96 p-2" > 
      
            <!-- Close preview  -->
          <div id="close" class="bg-red-200 w-10 h-10 absolute right-3 mt-3" @click="closePreview">
            <p class="text-2xl text-center">X</p>
          </div>
    </div>

    `,
    props:{
      showSrc: String
  
    },
    methods: {
        closePreview(){          
          this.$emit("close",false)       
        } 
    },
    beforeUpdate() {
      console.log(this.showSrc)
    },
})