<template>
  <div class="cards" style="margin: 3rem 5em;">
    <card v-for="card in cards" :key="card.postID"
          :postID="card.postID"
          :title="card.title"
          :body="card.body"
          :categoryID="card.categoryID"
          :authorID="card.authorID"
          :authorNickname="card.authorNickname"
          :upVote="card.upVote"
          :downVote="card.downVote"
          :is-anonymous="card.isAnonymous"
          :updated-at="card.updatedAt"
          :commentCount="card.commentCount"
    />
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
.cards {
  display: grid;
  grid-gap: 1rem;
  padding: 0;
}

@media (min-width: 650px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
    margin: calc(7% - 2%) 0;
  }
}

@media (min-width: 900px) {
  .cards {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1200px) {
  .cards {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
