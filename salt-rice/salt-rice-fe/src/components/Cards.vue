<template>
  <div class="cards" style="margin: 0 5em;">
    <ul>
      <li v-for="card in cards" :key="card.postID">
        <card
          :title="card.title"
          :body="card.body"
          :categoryID="card.categoryID"
          :author="card.author"
          :upvote="card.upvote"
          :downvote="card.downvote"
          :is-anonymous="card.isAnonymous"
          :updated-at="card.updatedAt"
          :comments="card.comments"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
  name: "Cards",
  props: {
    cards: Array
  },
  components: {
    Card
  }
};
</script>

<style scoped>
ul {
  -webkit-column-count: 1;
  list-style-type: none;
  column-count: 1;
  padding: 0;
  margin: 7% 0;
}

ul li {
  border: 1px solid #707070;
  border-radius: 5px;
  margin: 7% 0;
  background-color: #ffc529;
  height: auto;
  width: 100%;
}

@media (min-width: 650px) {
  ul {
    display: block;
    -webkit-column-count: 2;
    column-count: 2;
    margin: calc(7% - 2%) 0;
  }

  ul li {
    display: inline-block;
    margin: calc(7% - 4%) 0;
  }
}

@media (min-width: 1024px) {
  ul {
    display: block;
    -webkit-column-count: 3;
    column-count: 3;
  }
}

@media (min-width: 1200px) {
  ul {
    display: block;
    -webkit-column-count: 4;
    column-count: 4;
  }
}
</style>
