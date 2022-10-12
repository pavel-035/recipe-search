Vue.component('recipe-card', {
  data() {
    return {
      isShow: false
    }
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  template: `
    <div class="handbook_card ui-card">
      <span class="card_title">
        On the Job: Pan Roasted Cauliflower From Food52
      </span>
      <div class="card_data">
        <div class="card_info">
          <div class="card_image img-box">
            <img src="https://spoonacular.com/recipeImages/479101-556x370.jpg" alt="image">
          </div>
          <ul class="card_details">
            <li class="card_item">
              Preparation minutes: 10
            </li>
            <li class="card_item">
              Cooking minutes: 10
            </li>
            <li class="card_item">
              <div class="card_icon img-box">
                <img src="./src/icons/like.svg" alt="like">
              </div>
              255
            </li>
          </ul>
        </div>
        <div class="card_summery">
          <p>
            On the Job: Pan Roasted Cauliflower From Food52 is a <b>dairy free</b> side dish. One portion of this dish contains roughly <b>7g of protein</b>, <b>26g of fat</b>, and a total of <b>350 calories</b>. This recipe serves 4. For <b>$1.99 per serving</b>, this recipe <b>covers 20%</b> of your daily requirements of vitamins and minerals. This recipe is liked by 225 foodies and cooks. A mixture of breadcrumbs, rosemary, sea salt, and a handful of other ingredients are all it takes to make this recipe so tasty. From preparation to the plate, this recipe takes around <b>20 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 97%</b>. This score is tremendous. Try <a href="https://spoonacular.com/recipes/food52s-roasted-broccoli-with-smoked-paprika-vinaigrette-and-marcona-almonds-110229">Food52's Roasted Broccoli with Smoked Paprika Vinaigrette and Marconan Almonds</a>, <a href="https://spoonacular.com/recipes/sheet-pan-chicken-cauliflower-921598">Sheet Pan Chicken Cauliflower</a>, and <a href="https://spoonacular.com/recipes/sheet-pan-roasted-broccoli-918006">Sheet Pan Roasted Broccoli</a> for similar recipes.
          </p>
        </div>
      </div>

      <button
        class="card_more more-button button"
        @click="isShow = !isShow"
      >
        Recipe
        <div :class="['more-button_arrow', { 'more-button_arrow-open': isShow }]">
          <img src="./src/icons/arrow.svg" alt="arrow">
        </div>
      </button>

      <div
        v-if="isShow"
        class="card_recipe"
      >
        <h2 class="card_heading">
          Ingredients
        </h2>
        <ul class="card_details">
          <li class="card_item">
            1/2 cup fresh breadcrumbs (I used gluten-free!)
          </li>
          <li class="card_item">
            1 head of cauliflower
          </li>
          <li class="card_item">
            1 handful parsley, chopped
          </li>
          <li class="card_item">
            2 teaspoons fresh rosemary, chopped
          </li>
        </ul>

        <h2 class="card_heading">
          Instructions
        </h2>
        <p class="card_instructions">
          Cut the florets off the stems and then chop them into tiny florets. You can also chop up the stems into tiny pieces if you want. You should have about 6 cups of chopped cauliflower. In a large skillet heat 2 tablespoons of olive oil over medium-high heat. Add the cauliflower, 1 teaspoon of salt, rosemary, and sumac. Sauté until cauliflower is tender and starts to brown a bit, stirring as necessary, about 15 minutes. You can also add a bit of olive oil if the pan starts to get too dry or the cauliflower is starting to stick. Meanwhile, in a small skillet, toast the pinenuts over medium heat until golden brown. Set aside. Heat the remaining 2 tablespoons of olive oil in the same pan. Once oil is shimmering, toss in the breadcrumbs and stir, toasting the breadcrumbs. Season with a pinch of kosher salt and a few turns of freshly ground black pepper. Remove from the heat and toss in half of the chopped parsley. When cauliflower is done, remove from the heat and season to taste with freshly ground black pepper and a pinch or so of salt if necessary. Toss in the toasted pine nuts, the chopped raisins, and the remaining parsley. When ready to serve, sprinkle the top with the toasted breadcrumbs and some pecorino.
        </p>
      </div>
    </div>
  `
})

const app = new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data() {
    return {
      recipesData: [{"name": "John", "age": 38}, {"name": "Mary", "age": 33}],
      filters: {
        cuisine: {
          value: null,
          options: ['african', 'mexican', 'japanese', 'korean', 'vietnamese', 'thai', 'indian', 'british', 'irish', 'french', 'italian', 'mexican', 'spanish', 'middle eastern', 'jewish', 'american', 'cajun', 'southern', 'greek', 'german', 'nordic', 'eastern european', 'caribbean', 'latin american']
        },
        excludeCuisine: {
          value: null,
          options: ['african', 'mexican', 'japanese', 'korean', 'vietnamese', 'thai', 'indian', 'british', 'irish', 'french', 'italian', 'mexican', 'spanish', 'middle eastern', 'jewish', 'american', 'cajun', 'southern', 'greek', 'german', 'nordic', 'eastern european', 'caribbean', 'latin american']
        },
        diet: {
          value: null,
          options: ['pescetarian', 'lacto vegetarian', 'ovo vegetarian', 'vegan', 'paleo', 'primal', 'vegetarian']
        },
        intolerances: {
          value: null,
          options: ['dairy', 'egg', 'gluten', 'peanut', 'sesame', 'seafood', 'shellfish', 'soy', 'sulfite', 'tree nut', 'wheat']
        }
      },
      isShowFilters: false
    }
  },
  mounted() {
    this.getRecipesData();
  },
  methods: {
    getRecipesData() {
      console.log('getData');
    }
  }
})
