<template>
    <div>
        <v-switch
            v-model="vegi"
            :label="vegiSwitchLabel"
        ></v-switch>
        <v-combobox
          v-model="selectedItems"
          :items="toppings"
          label="Toppings"
          multiple
          chips
          solo
          hide-selected
        >
          <template v-slot:selection="data">
            <v-chip
              :key="JSON.stringify(data.item)"
              v-bind="data.attrs"
              :input-value="data.selected"
              :disabled="data.disabled"
              @click:close="data.parent.selectItem(data.item)"
            >
              <v-avatar
                class="accent white--text"
                left
                v-text="data.item.text.slice(0, 1).toUpperCase()"
              ></v-avatar>
              {{ data.item.text }}
            </v-chip>
          </template>
        </v-combobox>
    </div>
</template>

<script>
  export default {
    data: () => ({
      selectedItems: [{text:"Cheese", cost:0},],
      vegi:false
    }),
    computed: {

      toppings(){
        let toppings =  this.$store.getters["global/toppings"]
        if (this.vegi){
            toppings = toppings.filter(t=>t.vegi)
        }
        return toppings
      },
      vegiSwitchLabel(){
          return "Vegi"
      }
    },
    watch:{
      selectedItems(val){
        this.$store.commit('global/topping', val)
      }
    }
  }
</script>