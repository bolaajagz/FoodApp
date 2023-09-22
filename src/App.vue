
<template>
 <main>
  <div v-if=" isScreenOne">
    <Welcome1  />
  </div>

  <div v-else>
    <Welcome2 />
  </div>

 </main>
</template>

<script>
import Welcome1 from "./components/Welcome1.vue"
import Welcome2 from "./components/Welcome2.vue"
export default{
  name:'App',
  components:{
    Welcome1,
    Welcome2
  },
  data(){
    return{
      isScreenOne:true,
    }
  },
  created() {
    setTimeout(() => {
      this.isScreenOne = !this.isScreenOne;
    }, 3000);
  }
  
}
</script>


