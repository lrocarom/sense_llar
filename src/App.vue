<template>
  <router-view></router-view>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";

export default {
  name: 'MainApp',
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
.bg {
  /* The image used */
  background-image: url("assets/img.png");
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
