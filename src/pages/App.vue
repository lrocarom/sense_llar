<template>
  <div class="bg">
    <div class = "big_container">
      <a style="color: white" href="#/">Que es</a> |
      <a style="color: white" href="#/page1">Campanya</a> |
      <a style="color: white"  href="#/page2">Links interes</a> |
      <div class="row">
        <div class="col-lg-4 container" >
          <h1>QUÈ ÉS EL SENSELLARISME?</h1>
        </div>
        <div class="col-lg-5 container">
          <p>Les persones sense llar no només són les persones sense sostre,sinó que són totes aquelles persones que es troben en una situació que no disposen d’un habitatge digne, adequat i estable.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-2"></div>
        <div class="col-lg-4 container_light">
          <h1>SENSE SOSTRE</h1>
          <p>No es disposa d’un espai físic per viure</p>
        </div>
      </div>
      <div class="row">
        <div class="col-4"></div>
        <div class="col-lg-5 container_light">
          <h1>SENSE HABITATGE</h1>
          <p>Pot disposar d’un espai físic per viure, encara que aquest no reuneixi les condicions necessàries de privacitat per considerar-se com a llar <propi></propi></p>
        </div>
      </div>
      <div class="row">
        <div class="col-2"></div>
        <div class="col-lg-4 container_light">
          <h1>HABITATGE INSEGUR</h1>
          <p>Es disposa d’un espai físic on pot desenvolupar la vida privada però no es gaudeix de permís legal per utilitzar l’allotjament o està sota amenaça de violència</p>
        </div>
      </div>
      <div class="row">
        <div class="col-4"></div>
        <div class="col-lg-5 container_light">
          <h1>HABITATGE INADEQUAT</h1>
          <p>La persona viu en un espai que no reuneix les condicions adequades per a l’habitabilitat</p>
        </div>
      </div>
    </div>
  </div>
  <p></p>
</template>
<script>

export default {
  name: 'App',
  components: {
  }
}
console.log("SSSSSSSSs")
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
  background-image: url("../assets/img.png");
  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
