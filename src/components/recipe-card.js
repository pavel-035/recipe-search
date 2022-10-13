Vue.component('recipe-card', {
  data() {
    return {
      isShowRecipe: false,
      recipesInfo: []
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  methods: {
    async getRecipeInfo(id) {
      this.isShowRecipe = !this.isShowRecipe
      this.$set(this.recipesInfo, id, {
        title: 'Char-Grilled Beef Tenderloin with Three-Herb Chimichurri',
        image: 'https://spoonacular.com/recipeImages/char-grilled-beef-tenderloin-with-three-herb-chimichurri-156992.jpg',
        readyInMinutes: 45,
        aggregateLikes:0,
        extendedIngredients: [
          {
            id: 1022009,
            original:"1 1/2 teaspoons chipotle chile powder or ancho chile powder"
          },
          {
            id:13926,
            original:"1 3 1/2-pound beef tenderloin"
          }
        ],
        instructions: 'PreparationFor spice rub: Combine all ingredients in small bowl. Do ahead: Can be made 2 days ahead. Store airtight at room temperature. For chimichurri sauce: Combine first 8 ingredients in blender; blend until almost smooth. Add 1/4 of parsley, 1/4 of cilantro, and 1/4 of mint; blend until incorporated. Add remaining herbs in 3 more additions, pureeing until almost smooth after each addition. Do ahead: Can be made 3 hours ahead. Cover; chill. For beef tenderloin: Let beef stand at room temperature 1 hour. Prepare barbecue (high heat). Pat beef dry with paper towels; brush with oil. Sprinkle all over with spice rub, using all of mixture (coating will be thick). Place beef on grill; sear 2 minutes on each side. Reduce heat to medium-high. Grill uncovered until instant-read thermometer inserted into thickest part of beef registers 130F for medium-rare, moving beef to cooler part of grill as needed to prevent burning, and turning occasionally, about 40 minutes. Transfer to platter; cover loosely with foil and let rest 15 minutes. Thinly slice beef crosswise. Serve with chimichurri sauce. *Available at specialty foods stores and from tienda.com.'
      });
      // if(!this.isShowRecipe) {
      //   const options = {
      //     method: 'GET',
      //     url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${id}/information`,
      //   };
      //
      //   try {
      //     const { data } = await axios.request(options);
      //     console.log(data);
      //     this.$set(this.recipesInfo, id, data);
      //     this.isShowRecipe = true
      //   } catch (err) {
      //     this.isShowRecipe = false
      //     console.error(err);
      //   }
      // } else {
      //   this.isShowRecipe = false
      // }
    }
  },
  template: `
    <div class="handbook_card ui-card">
      <h2 class="card_title">
        {{ data.title }}
      </h2>
      <div class="card_image img-box">
        <img :src="data.image" alt="image" />
      </div>
      <button
        class="card_more more-button button"
        @click="getRecipeInfo(data.id)"
      >
        Recipe
      </button>
      
      <v-dialog
        v-if="isShowRecipe"
        v-model="isShowRecipe"
        max-width="620"
      >
        <div class="card_recipe">
          <button
            @click="isShowRecipe = false"
            class="card_close"
          >
            <img src="./src/icons/close.svg" alt="close">
          </button>
          <h2 class="card_title">
            {{ data.title }}
          </h2>
          <div class="card_data">
            <div class="card_image img-box">
              <img :src="recipesInfo[data.id].image" alt="image" />
            </div>
            <div class="card_info">
              <ul class="card_details">
                <li class="card_item">
                  Ready in minutes: {{ recipesInfo[data.id].readyInMinutes }}
                </li>
                <li class="card_item">
                  <div class="card_icon img-box">
                    <img src="./src/icons/like.svg" alt="like">
                  </div>
                  {{ recipesInfo[data.id].aggregateLikes }}
                </li>
              </ul>
            </div>
          </div>
          
          <h2 class="card_heading">
            Ingredients:
          </h2>
          <ul class="card_details">
            <li
              v-for="item in recipesInfo[data.id].extendedIngredients"
              :key="item.id"
              class="card_item"
            >
              {{ item.original }}
            </li>
          </ul>
  
          <h2 class="card_heading">
            Instructions:
          </h2>
          <p class="card_instructions">
            {{ recipesInfo[data.id].instructions }}  
          </p>
        </div>
      </v-dialog>
    </div>
  `
})
