<template>
  <div id="home">
    <Banner />
    <div id="card" class="card">
      <div class="container">
        <!-- Start of Filter Component -->
        <div class="filter">
          <div class="search-filter">
            <p class="search-label bold">Search</p>
            <div class="search-container">
              <input
                v-model.lazy="searchQuery"
                placeholder="Search by title and tags"
                type="text"
                id="search"
              />
            </div>
          </div>
          <div class="category-filter">
            <p class="category-label bold">Category</p>
            <div class="category-container">
              <select @change="changeCategory($event)">
                <option value="0">All</option>
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
            </div>
          </div>
        </div>
        <div class="sort-filter">
          <div
            :class="{ active: currentSort === 'trending' }"
            @click="sort('trending')"
          >
            <img src="http://localhost:8080/images/trending.svg" alt="" />
            <span>Trending</span>
          </div>
          <div
            :class="{ active: currentSort === 'advise' }"
            @click="sort('advise')"
          >
            <img
              src="http://localhost:8080/images/question-answer.svg"
              alt=""
            />
            <span>Needs advise</span>
          </div>
          <div
            :class="{ active: currentSort === 'recent' }"
            @click="sort('recent')"
          >
            <img src="http://localhost:8080/images/new.svg" alt="" />
            <span>Recent posts</span>
          </div>
        </div>
        <!-- End of Filter Component -->
      </div>
      <Cards :cards="resultQuery" :loading="loading" />
      <div class="more">
        <a class="more-label" @click="loadMore">More posts</a>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "../components/Banner.vue";
import Cards from "../components/Cards.vue";
import {protectedFetch} from '../mixins/appUtils';
/* import store from '../store'; */

export default {
  name: "Index",
  components: {
    Cards,
    Banner,
  },
  data() {
    return {
      loading: true,
      error: false,
      searchQuery: "",
      category: 0,
      currentSort: "",
      page: 0,
      cards: [],
    };
  },
  methods: {
    changeCategory(event) {
      this.category = parseInt(event.target.value);
    },
    loadMore() {
      // todo: pagination
      this.cards = Object.freeze([...this.cards, ...this.cards]);
    },
    async sort(method) {
      try {
        this.loading = true;
        this.currentSort = method;
        const response = await (
          await protectedFetch(`${process.env.VUE_APP_BASE_API}/post?sort=${method}`)
        ).json();

        setTimeout(async () => {
          this.cards = Object.freeze(response);
          this.loading = false;
          if (response.errno) this.error = true;
        }, 500);
      } catch (err) {
        console.error(err);
      }
    },
  },
  computed: {
    resultQuery() {
      if (!this.category) return this.cards;
      return this.cards.filter(
        ({ categoryID }) => categoryID === this.category
      );
    },
  },
  watch: {
    async searchQuery(query) {
      try {
        this.loading = true;
        const response = await (
          await protectedFetch(
            `${process.env.VUE_APP_BASE_API}/${
              query ? `post/bytagortitle/${query}` : "post"
            }`
          )
        ).json();

        setTimeout(async () => {
          this.cards = Object.freeze(response);
          this.loading = false;
          if (response.errno) this.error = true;
        }, 500);
      } catch (err) {
        console.error(err);
        // show 500 error
      }
    },
  },
  async beforeRouteEnter(to, from, next) {
    try {
      /* console.log(defaultOpts); */
      const response = await (
        await protectedFetch(`${process.env.VUE_APP_BASE_API}/post`)
      ).json();

      next((vm) => {
        setTimeout(() => {
          vm.cards = Object.freeze(response);
          vm.loading = false;
        }, 1000);

        if (response.errno) vm.error = true;
        // show 500 error
      });
    } catch (err) {
      console.error(err);
      // show 500 error
    }
  },
};
</script>

<style lang="scss">
.card {
  width: 100%;
  margin: $margin-top-card-elements auto;
  background-size: 30%;
  background-position: 0 30%, 100% 100%;
  background-repeat: no-repeat, no-repeat;
  height: 100%;
  background-image: url("../assets/images/yellow.png"),
    url("../assets/images/green.png");
  //padding: 1.8em side-space(mobile) 0 0;

  @include layout(pc) {
    margin: calc(#{$margin-top-card-elements} - 4%) auto;
  }
}

/* Start of filter Style */
.filter {
  @include layout(tablet) {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;

    .search-filter,
    .category-filter {
      width: 50%;
    }

    .category-filter {
      .category-label {
        text-align: left;
        padding-left: side-space(mobile);
      }

      .category-container {
        width: 100%;
        text-align: left;
        padding-left: side-space(mobile);

        select {
          cursor: pointer;
        }
      }
    }

    .search-filter {
      .search-label {
        text-align: right;
        padding-right: side-space(mobile);
      }

      .search-container {
        text-align: right;
        padding-right: side-space(mobile);
      }
    }
  }

  @include layout(pc) {
    .category-filter {
      .category-label {
        padding-left: side-space(pc);
      }

      .category-container {
        padding-left: side-space(pc);
      }
    }

    .search-filter {
      .search-label {
        text-align: right;
        padding-right: side-space(pc);
      }

      .search-container {
        padding-right: side-space(pc);
      }
    }
  }

  .search-filter,
  .category-filter {
    width: 100%;
  }

  .search-label,
  .category-label {
    text-align: center;
    padding-right: side-space(mobile);
  }

  .search-container {
    input {
      padding: 0.5em 1em;
      border: 1px solid color(grey);
      border-radius: $border-radius-button;
      font-size: $font-size;
      width: 14em;
    }
  }

  .category-container {
    .search-container {
      margin: $margin-top-card-elements auto;
    }

    select {
      padding: 0.5em 1em;
      border: 1px solid color(grey);
      border-radius: $border-radius-button;
      font-size: $font-size;
      content: "";
      width: 16em;
    }
  }
}

/* Felix sort-filter */
.sort-filter {
  background-color: #fffae1;
  border: 1px solid #707070;
  border-radius: 27px;
  display: inline-flex;
  max-height: 60px;
  align-items: center;
  align-self: center;
  margin-top: 35px;
  padding: 2px 20px 2px 20px;
}

.sort-filter div {
  display: inline-flex;
  padding: 10px;
  line-height: 21px;
  cursor: pointer;
}

.sort-filter div:hover {
  background-color: #d26b17;
  border-radius: 25px;
}

.sort-filter div.active {
  background-color: #ffc529;
  border-radius: 25px;
}

.sort-filter span {
  font-size: 14px;
  font-weight: 500;
  margin-left: 5px;
}

.sort-filter img {
  height: 20px;
  width: 20px;
}

/* End of filter Style */
</style>
