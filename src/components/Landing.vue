<template>
  <v-container fluid fill-height class="home imgTransition">
    <v-container>
    <v-layout justify-center align-center column pa-5 welcomeBanner>
      <div class="display-4 font-weight-black text-center" >
        Feine Pizza 
      </div>
      <div
        class="display-3 text-center my-3"
      >
      Lecker Lecker Mmmh Lecker
      </div>
      <div>
        <router-link to="/composition">
          <v-btn x-large height="120" block color="secondary" dark tile class="display-2 ma-5 pa-5">Start</v-btn>
        </router-link>
      </div>
    </v-layout>
    </v-container>
  </v-container>
</template>

<script>
export default {
  components: {},
  data: () => ({})
};
</script>


<style scoped>
.home {
  background: url("../assets/pizza.jpg");
  background-size: auto;
  width: 100%;
  min-height: 1400px;
}
.imgTransition{
    -webkit-transition: background-image 0.5s ease-in-out;
    transition: background-image 0.5s ease-in-out;
}
a {
  text-decoration: none !important;
}
.welcomeBanner {
  background-color: #ffca938a;
}
</style>


<script>
export default {
  name: "Welcome",
  data: () => ({})
};
</script>