<template>
  <div>
    <v-app-bar
      dark
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    <router-link to="/">
      <v-toolbar-title>
          <v-btn text>HOME</v-btn>          
    </v-toolbar-title>
    </router-link>

      
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    data () {
      return {
       
      }
    },
  }
</script>

<style scoped>
a {
    text-decoration: none !important;
}
</style>