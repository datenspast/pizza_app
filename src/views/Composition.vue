<template>
<v-container fluid fill-height :class="imgClass" >
    <v-container align="start">
        <v-row>
            <v-col cols="12" md="8">
                <v-stepper v-model="e1" class="transparent">
                    <v-stepper-header class="whitetrans">
                    <v-stepper-step
                        editable
                        step="1"
                        color="orange"                
                    >
                        Style
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step
                        editable
                        step="2"
                        color="orange"
                    >
                        Dough
                    </v-stepper-step>

                    <v-divider></v-divider>

                    <v-stepper-step 
                        editable
                        step="3"
                        color="orange"
                    >
                        Toppings
                    </v-stepper-step>
                    </v-stepper-header>

                    <v-stepper-items>
                    <v-stepper-content step="1" class="whitetrans">
                        <v-card
                            class="mb-12 whitetrans"
                            :color="backgroundColor"
                            :height="height"
                            flat
                            >       
                            <Style/>
                        </v-card>               
                        <v-btn
                            x-large
                            dark
                            color="orange"
                            @click="e1 = 2"                        
                            class="float-right"
                        >
                        Continue
                        </v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="2" class="whitetrans">
                        <v-card
                            class="mb-12 whitetrans"
                            :color="backgroundColor"
                            :height="height"
                            flat
                            >       
                            <Dough/>
                        </v-card>        

                        <v-btn
                        x-large
                        dark
                        @click="e1 = 3"
                    
                        class="float-right"
                        >
                        Continue
                        </v-btn>
                    </v-stepper-content>

                    <v-stepper-content step="3" class="whitetrans">
                        <v-card
                        class="mb-12"
                        :color="backgroundColor"
                        :height="height"
                        ></v-card>

                    <v-btn
                        x-large
                        dark
                        @click="e1 = 3"
                    
                        class="float-right"
                        >
                        Continue
                        </v-btn>
                    </v-stepper-content>
                    </v-stepper-items>
                </v-stepper>

            </v-col>
            <v-col cols="12" md="4">
               <Summary/>
            </v-col>
        </v-row>
        
        </v-container>
  </v-container>
</template>

<script>

import Style from '@/components/Style.vue'
import Dough from '@/components/Dough.vue'
import Summary from '@/components/Summary.vue'

  export default {
    components: {
        Style,
        Dough,
        Summary
    },
    data () {
      return {
        e1: 1,
        height: "400px",
        backgroundColor: "#ffffff5c",

      }
    },
    computed: {
        imgClass(){
            let imgClass = "dough"
            if (this.e1==1){
                imgClass="style"
            }
            if (this.e1==2){
                imgClass="dough"
            }
            if (this.e1==3){
                imgClass="toppings"
            }
            return imgClass + " " + "imgTransition"
        }
    }
  }
</script>

<style scoped>
.style {
  background: url("../assets/style.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
   display: block;
  /* min-height: 1400px; */

}
.dough {
  background: url("../assets/dough.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
   display: block;
  /* min-height: 1400px; */

}
.toppings {
  background: url("../assets/topping.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
   display: block;
  /* min-height: 1400px; */
 
}
.imgTransition{
    -webkit-transition: background-image 0.5s ease-in-out;
    transition: background-image 0.5s ease-in-out;
}


</style>