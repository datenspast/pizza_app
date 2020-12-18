<template>
    <div>
         <v-card
                class="mb-12"
                :color="backgroundColor"
                height="100%"
        >
        <div>
        <v-card-title class="display-1">YOUR PIZZA</v-card-title>
        <v-card-text :color="backgroundColor">
            <div class="my-5">
                <h3>Style: <span>{{pizza.style}}</span></h3>
                <h3>Dough: <span>{{pizza.dough}}</span></h3>
                <h3>Toppings: <span v-if="pizza.toppings">{{pizza.toppings.map(x=>x.text).join(", ")}}</span></h3>
                <h3>Price: <span>{{pizza.price}} EUR</span></h3>
            </div>

        </v-card-text>
        </div>
        <v-card-actions>
            <v-btn
                block
                color="orange"
                v-on:click="order"
            >
            Order
            </v-btn>
        </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    components: {
    },
    data () {
      return {       
        backgroundColor: "#ffffff5c",

      }
    },
    computed: {
       pizza(){
           return this.$store.getters["global/summary"]
       }, 

    
    }, 
    methods:{
        order(){
            console.log(this.pizza)
        }
    }
}
</script>