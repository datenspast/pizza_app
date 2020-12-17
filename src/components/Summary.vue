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
                <ul>
                    <li>
                        Eins
                    </li>
                </ul>

            </div>
        </v-card-text>
        </div>
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
        
    
  }
}
</script>