<template>
    <div>
        <v-list rounded class="transparent" >
          <v-subheader>SELECT PIZZA STYLE</v-subheader>
          <v-list-item-group
            v-model="selectedItem"
            color="orange"
          >
            <v-list-item
              v-for="(item, i) in styles"
              :key="i"
            >  
              <v-list-item-content>
                <v-list-item-title v-text="item"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
    </div>
</template>

<script>
  export default {
    data: () => ({
      selectedItem: 0,
    }),
    computed: {
      styles(){
        return this.$store.getters["global/styles"]
      }
    },
    watch:{
      selectedItem(val){
        console.log(val)
        this.$store.commit('global/style', this.styles[val])
      }
    }
  }
</script>