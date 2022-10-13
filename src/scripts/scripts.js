const app = new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  data() {
    return {
      recipesData: [
        {
          id: 749013,
          image: "https://spoonacular.com/recipeImages/749013-312x231.jpeg",
          imageType: "jpeg",
          title: "Pasta"
        },
        {
          id: 749014,
          image: "https://spoonacular.com/recipeImages/749013-312x231.jpeg",
          imageType: "jpeg",
          title: "Pasta"
        }
      ],
      filters: {
        query: {
          value: null
        },
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
      isShowFilters: false,
      isShowMainLoader: false,
      isShowDataLoader: false
    }
  },
  mounted() {
    this.getRecipesData();
  },
  methods: {
    searchRecipes() {
      this.isShowFilters = false;
      this.getRecipesData();
    },
    async getRecipesData() {
      console.log('getData');
      // const options = {
      //   method: 'GET',
      //   url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/complexSearch',
      //   params: {
      //     query: this.filters.query.value || 'pasta'
      //   },
      // };
      //
      // try {
      //   this.isShowDataLoader = true
      //   const { data } = await axios.request(options);
      //
      //   console.log(data);
      //   this.recipesData = data.results;
      //   this.isShowDataLoader = false;
      // } catch (err) {
      //   console.error(err);
      // }
    }
  }
})
