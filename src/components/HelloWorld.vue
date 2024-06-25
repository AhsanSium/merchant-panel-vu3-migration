<template>
  <div class="hello px-10">
    <div class="flex justify-around">
      <div class="w-1/2 side-bg ">
        
      </div>
      <div class="flex-col content-center w-1/2 justify-center">
        <div class="w-4/5">
          <h1 class="header text-grey-800 text-3xl font-bold text-left" > {{ msg }} </h1>
        </div>
        <div class="w-4/5">
          <p class="text-grey-800 text-left">
            A Simple Vue 3 Project created with Vite, Vue-Router, Tailwindcss.
            To show Merchant Order List separately
          </p>
        </div>
      </div>
    </div>
    
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Vue 3 Merchant Panel'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-bg{
  height: 500px;
  background: url("https://merchant.p-stageenv.xyz/img/bg.018f7d0e.svg") no-repeat center center; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: auto;
}
/* .hello{
  text-align: center;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
