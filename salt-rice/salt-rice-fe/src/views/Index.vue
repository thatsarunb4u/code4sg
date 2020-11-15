<template>
  <div>
    <section style="padding-top: 6vw;" v-once>
      <h3>Need to <span class="font-yellow">discuss on something</span>?</h3>
      <p class="subhead">Find Right Person to Advice</p>
      <div class="container"><router-link to="/post" class="cta bold">Lai, Lets Talk</router-link></div>
      <img alt="" src="/images/banner.png">
    </section>
    <div id="card" class="card container">
      <div class="filter">
        <div class="search-filter">
          <label for="search"><p class="search-label bold">Search posts</p></label>
          <div class="search-container">
            <input v-model.lazy="searchQuery" placeholder="Search by title and tags" type="text" id="search">
          </div>
        </div>
        <div class="category-filter">
          <p class="category-label bold">Category</p>
          <div class="category-container">
            <select name="" id="" @change="changeCategory($event)">
              <option value="0">-Select-</option>
              <option value="1">Reflections</option>
              <option value="2">Family-Children</option>
              <option value="3">Growing Old</option>
              <option value="4">Health</option>
              <option value="5">Mental Health</option>
              <option value="6">Dating</option>
              <option value="7">Food Recipes</option>
              <option value="8">Past time/Passion</option>
              <option value="9">Professional Work/Occupation</option>
            </select>
            <!-- <a class="relationship-category" @click="changeCategory(1)">Relationship</a>
            <a class="social-category" @click="changeCategory(2)">Social</a> -->
          </div>
        </div>
      </div>
      <Cards :cards="resultQuery" :loading="loading" />
      <div class="more"><a class="more-label" @click="loadMore">More posts</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {
    Cards: () => import("../components/Cards.vue")
  },
  data() {
    return {
      loading: true,
      error: false,
      searchQuery: "",
      category: null,
      page: 0,
      cards: []
    };
  },
  methods: {
    changeCategory(event) {
      let newCategory = event.target.value
      console.log("Selected Category:"+newCategory)
      if (this.category === newCategory) return this.category = null;
      return this.category = newCategory;
    },
    loadMore() {
      // todo: pagination
      this.cards = Object.freeze([...this.cards, ...this.cards]);
    }
  },
  computed: {
    resultQuery() {
      console.log(this.category)
      if (this.category === null) return this.cards;
      return this.cards.filter(({ categoryID }) => categoryID == this.category);
    }
  },
  watch: {
    async searchQuery(query) {
      try {
        this.loading = true;
        const response = await (await fetch(`${process.env.VUE_APP_BASE_API}/${query ? `post/bytagortitle/${query}` : "post"}`)).json();

        this.cards = Object.freeze(response);
        this.loading = false;
        if (response.errno) this.error = true;
      } catch (err) {
        console.error(err);
        // show 500 error
      }
    }
  },
  async beforeRouteEnter(to, from ,next) {
    try {
      const response =  await (await fetch(`${process.env.VUE_APP_BASE_API}/post`)).json();

      next((vm) => {
        setTimeout(() => {
          vm.cards = Object.freeze(response);
          vm.loading = false;
        }, 1000);

        if (response.errno) vm.error = true;
        // show 500 error
      })
    } catch (err) {
      console.error(err);
      // show 500 error
    }
  }
};
</script>

<style scoped>
section {
  background-size: 100%;
  background-position: left bottom;
  height: 100%;
  background-color: #fffae1;
  padding: 1.8em 2em 0 0;
}

section h3, section .subhead {
  text-align: right;
  position: relative;
  z-index: 3;
}

section .subhead {
  font-weight: 400;
}

section img {
  width: 100%;
  position: inherit;
  bottom: 0;
  left: 0;
}

section .cta {
  background: #ffc529;
  padding: 1.3em 0.7em 1.3em 1.3em;
  text-decoration: none;
  z-index: 1;
  color: black;
  -webkit-clip-path: polygon(7% 19%, 100% 8%, 100% 83%, 59% 82%, 51% 100%, 42% 83%, 0 83%);
  clip-path: polygon(7% 19%, 100% 8%, 100% 83%, 59% 82%, 51% 100%, 42% 83%, 0 83%);
  position: absolute;
  right: 35%;
}

.card .cards {
  margin: 7% 2em;
}

.card {
  width: 100%;
  margin: 7% auto;
  background-size: 30%;
  background-position: 0 30%, 100% 62%;
  background-repeat: no-repeat, no-repeat;
  height: 100%;
  background-image: url("/images/yellow.png"), url("/images/green.png");
}

.card .filter .search-label, .card .filter .category-label {
  text-align: right;
  padding-right: 2em;
}

.search-container form {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
}

.search-container input {
  padding: 0.5em 1em;
  border: 1px solid #707070;
  border-radius: 27px;
  font-size: 12pt;
}

.search-container button {
  padding: 0.5em 1em;
  border: 1px solid #707070;
  border-radius: 0 27px 27px 0;
  font-size: 12pt;
  background-color: #000000;
  color: #fff;
}

.category-container {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  cursor: pointer;
  
}

select{
  padding: 12px 20px;
  margin: 8px 0 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font: 1em/1.25em Arial, Montserrat, sans-serif;
}

.relationship-category, .social-category {
  text-decoration: none;
  z-index: 1;
  color: black;
  padding: 0.5em 2.5em;
  border: 1px solid #707070;
}

.relationship-category {
  background: #ffc529;
  border-radius: 27px 0 0 27px;
}

.card .filter .category-container .social-category {
  background: #fff;
  border-radius: 0 27px 27px 0;
}

.card {
  margin: calc(7% - 4%) auto;
}

@media (min-width: 650px) {
  section {
    padding: 1.8em 2em 0 0;
  }

  section h3 {
    font-size: calc(12pt + 3pt);
  }

  section img {
    width: 65%;
    margin-top: -15%;
    margin-left: -35%;
  }

  section .cta {
    right: 2em;
    padding: 1.2em 0.9em 1.2em 1.2em;
    font-size: calc(12pt + 1pt);
    margin-top: 2%;
  }
}

@media (min-width: 1024px) {
  section .cta {
    right: 3.8em;
    padding: 1.2em 0.9em 1.2em 1.2em;
    font-size: calc(12pt + 4pt);
    margin-top: 5%;
  }

  section h3, section .subhead {
    font-size: calc(12pt + 8pt);
  }

  .filter {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
    width: 100%;
  }

  .search-filter, .category-filter {
    width: 50%;
  }

  .filter .category-filter .category-label {
    text-align: left;
    padding-left: 5em;
  }

  .category-container {
    width: 100%;
    text-align: left;
    padding-left: 5em;
  }

  .filter .search-filter .search-label {
    padding-right: 5em;
  }

  .search-container {
    text-align: right;
    padding-right: 5em;
  }
}
</style>
