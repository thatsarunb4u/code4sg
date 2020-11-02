<template>
  <div>
    <section style="padding-top: 6vw;">
      <h3>Need to <span class="font-yellow">discuss on something</span>?</h3>
      <p class="subhead">Find Right Person to Advice</p>
      <div class="container"><a href="#card" class="cta bold">Lai, Lets Talk</a></div>
      <img src="/images/banner.png" alt="">
    </section>
    <div class="card container" id="card">
      <div class="filter">
        <div class="search-filter">
          <p class="search-label bold">Search</p>
          <div class="search-container">
            <input v-model.lazy="searchQuery" type="text" placeholder="How to...">
          </div>
        </div>
        <div class="category-filter">
          <p class="category-label bold">Category</p>
          <div class="category-container">
            <a
                :class="`relationship-category${category === 0 ? ' active' : ''}`"
                @click="changeCategory(0)"
            >Relationship</a>
            <a
                :class="`social-category${category === 1 ? ' active' : ''}`"
                @click="changeCategory(1)"
            >Social</a>
          </div>
        </div>
      </div>
      <Cards :cards="resultQuery" />
      <div class="more"><a @click="loadMore" class="more-label">More</a></div>
    </div>
  </div>
</template>

<script>
import Cards from "../components/Cards.vue";

export default {
  name: "Index",
  components: {
    Cards
  },
  data() {
    return {
      searchQuery: "",
      category: null,
      page: 0,
      cards: []
    };
  },
  methods: {
    changeCategory(newCategory) {
      if (this.category === newCategory) return this.category = null;
      return this.category = newCategory;
    },
    loadMore() {
      // todo: pagination
      this.cards = [...this.cards, ...this.cards];
    }
  },
  computed: {
    resultQuery() {
      // todo: Send search request to server instead of filtering dummy data
      if (!this.searchQuery && this.category === null) return this.cards;

      return this.cards.filter(({ title, body, author, categoryID }) =>
          (this.searchQuery.length && title.includes(this.searchQuery)) ||
          (this.searchQuery.length &&body.includes(this.searchQuery)) ||
          (this.searchQuery.length &&(author && author.nickname.includes(this.searchQuery))) ||
          (categoryID === this.category)
      );
    }
  },
  beforeCreate() {
    // simulate getting posts from api
    setTimeout(() => this.cards.push({
      "title": "test",
      "body": "more test",
      "categoryID": 1,
      "author": {
        "userID": 1,
        "UUID": "meow",
        "nickname": "Username"
      },
      "upvote": 12,
      "downvote": 2,
      "isAnonymous": false,
      "updatedAt": new Date(),
      "comments": []
    }, {
      "title": "test",
      "body": "more test",
      "categoryID": 1,
      "author": {
        "userID": 1,
        "UUID": "meow",
        "nickname": "Username"
      },
      "upvote": 12,
      "downvote": 2,
      "isAnonymous": false,
      "updatedAt": new Date(),
      "comments": []
    },{
      "title": "test",
      "body": "more test",
      "categoryID": 1,
      "author": {
        "userID": 1,
        "UUID": "meow",
        "nickname": "Username"
      },
      "upvote": 12,
      "downvote": 2,
      "isAnonymous": false,
      "updatedAt": new Date(),
      "comments": []
    },{
      "title": "test",
      "body": "more test",
      "categoryID": 1,
      "author": {
        "userID": 1,
        "UUID": "meow",
        "nickname": "Username"
      },
      "upvote": 12,
      "downvote": 2,
      "isAnonymous": false,
      "updatedAt": new Date(),
      "comments": []
    },{
      "title": "test",
      "body": "more test",
      "categoryID": 1,
      "author": {
        "userID": 1,
        "UUID": "meow",
        "nickname": "Username"
      },
      "upvote": 12,
      "downvote": 2,
      "isAnonymous": false,
      "updatedAt": new Date(),
      "comments": []
    },{
      "title": "test",
      "body": "more test",
      "categoryID": 1,
      "author": {
        "userID": 1,
        "UUID": "meow",
        "nickname": "Username"
      },
      "upvote": 12,
      "downvote": 2,
      "isAnonymous": false,
      "updatedAt": new Date(),
      "comments": []
    },{
      "title": "test",
      "body": "more test",
      "categoryID": 0,
      "author": {
        "userID": 1,
        "UUID": "meow",
        "nickname": "Username"
      },
      "upvote": 12,
      "downvote": 2,
      "isAnonymous": false,
      "updatedAt": new Date(),
      "comments": []
    }, {
      "title": "test",
      "body": "more test",
      "categoryID": 1
    }), 200);
  }
}
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

.card .cards {
  margin: 7% 2em;
}

.more {
  padding-top: calc(7%/ 2);
}

.more-label {
  text-decoration: none;
  color: #000000;
  border: 1px solid #ffc529;
  padding: 0.5em 2.5em;
  border-radius: 5px;
}

.card .more .more-label:hover {
  border: 3px solid #ffc529;
}

.card {
  width: 100%;
  margin: 7% auto;
  background-size: 30%;
  background-position: 0 30%, 100% 100%;
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
  border-radius: 5px 0 0 5px;
  font-size: 12pt;
}

.search-container button {
  padding: 0.5em 1em;
  border: 1px solid #707070;
  border-radius: 0 5px 5px 0;
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

.relationship-category, .social-category {
  text-decoration: none;
  z-index: 1;
  color: black;
  padding: 0.5em 2.5em;
  border: 1px solid #707070;
}

.relationship-category.active, .social-category.active {
  background: #ffc529;
  border-radius: 5px 0 0 5px;
}

.card .filter .category-container .social-category {
  background: #fff;
  border-radius: 0 5px 5px 0;
}

.card .filter .category-container .search-container {
  margin: 7% auto;
}

.card {
  margin: calc(7% - 4%) auto;
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

.filter .search-filter, .filter .category-filter {
  width: 50%;
}

.filter .category-filter .category-label {
  text-align: left;
  padding-left: 5em;
}

.filter .category-filter .category-container {
  width: 100%;
  text-align: left;
  padding-left: 5em;
}

.filter .search-filter .search-label {
  padding-right: 5em;
}

.filter .search-filter .search-container {
  text-align: right;
  padding-right: 5em;
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
}
</style>
