<template>
  <link href='https://fonts.googleapis.com/css?family=Schoolbell' rel='stylesheet'>
  <div class="bg">
    <div class = "big_container">
      <a style="color: white" href="#/">Que es</a> |
      <a style="color: white" href="#/page1">Campanya</a> |
      <a style="color: white"  href="#/page2">Links interes</a> |
      <div style="text-align: center;font-family:Schoolbell">
        <h1 style="padding-top: 50px;padding-bottom: 25px">Si vols més informació sobre el sensellarisme:</h1>
        <a style="padding-bottom: 25px" href="https://www.sensellarisme.cat/wp-content/uploads/GUIA_SENSELLARISME_CAST_ACC.pdf">https://www.sensellarisme.cat/wp-content/uploads/GUIA_SENSELLARISME_CAST_ACC.pdf</a>
        <h1 style="padding-top: 50px;padding-bottom: 25px">Si vols més informació sobre el sensellarisme a Barcelona:</h1>
        <a href="https://img.arrelsfundacio.org/wp-content/uploads/2022/05/viure-al-carrer-a-barcelona_2021.pdf">https://img.arrelsfundacio.org/wp-content/uploads/2022/05/viure-al-carrer-a-barcelona_2021.pdf</a>

      </div>
    </div>
  </div>
  <p></p>
</template>
<script>

export default {
  name: 'pageConclusion',
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
</style>
