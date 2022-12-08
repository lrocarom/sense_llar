<template>
<div class="bg2">
  <div class = "big_container">
    <a style="color: white" href="#/">Que es</a> |
    <a style="color: white" href="#/page1">Campanya</a> |
    <a style="color: white"  href="#/page2">Links interes</a> |
  </div>
</div>
<p></p>
</template>
<script>

export default {
  name: 'pageBocetas',
  components: {
  }
}
</script>

<style>
template, html,#app {
  height: 1000px;

}
.container{
  margin: 35px;
  padding: 15px;
  width: auto;
  height: auto;
  background-color: #000;
  color: #fff;
  opacity: .7;
  border-radius: 25px;
  font-family: Helvetica, sans-serif;
  font-size: 46px;
}
p{
  font-family: Garamond, serif;
  font-size: 18px;
}

.container_light{
  margin: 15px;
  padding: 5px;
  width: auto;
  height: auto;
  background-color: #778899;
  color: #fff;
  opacity: .8;
  border-radius: 25px;
  text-align: center;

}
.big_container{
  margin-right: 50px;
  margin-left: 50px;

}
.bg2 {
  /* The image used */
  height: 1000px;
  width: 1300px;
  overflow-x: scroll;
  background-image: url("../assets/img2.png");
  /* Full height */


  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
