<template>
<v-app style="background: white;" >

    <Navbar/>


    <!-- <Toolbar/> -->


  <!-- Sizes your content based upon application components -->
  <v-main class="text-start">

    <!-- Provides the application the proper gutter -->

      <!-- If using vue-router -->
      <router-view></router-view>

  </v-main>


</v-app>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'App',
  components: {
     Navbar,

  },
  data: () => ({
    //
  }),
};
</script>

<style>
.darkBackground {
  background-color: lightgrey;
}

.whitetrans {
    background-color: #ffffffba  !important;
}
.transparent {
    background-color:#ffffff00 !important;
}
  
</style>