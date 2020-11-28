<template>
  <div class="cards">
    <ul>
      <card
        v-for="card in computedCards"
        :key="card.postID"
        :postID="card.postID"
        :title="card.title"
        :body="card.body"
        :categoryID="card.categoryID"
        :authorID="card.authorID"
        :authorNickname="card.nickname"
        :upVote="card.upVote"
        :downVote="card.downVote"
        :is-anonymous="card.isAnonymous"
        :updated-at="card.updatedAt"
        :commentCount="card.commentCount"
        :loading="loading"
      />
    </ul>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props: {
    cards: Array,
    loading: Boolean,
    loadingCards: {
      type: Number,
      default: 8,
    },
  },
  components: {
    Card: () => import("./Card.vue"),
  },
  computed: {
    computedCards() {
      if (!this.loading) return this.cards;
      return Array(this.loadingCards)
        .fill()
        .map(() => ({ categoryID: Math.floor(Math.random() * 2) }));
    },
  },
};
</script>

<style lang="scss" scoped>
.cards {
  margin: $margin-top-card-elements side-space(mobile);
  @include layout(pc) {
    margin: 0 side-space(pc);
  }
  ul {
    column-count: 1;
    padding: 0;
    margin: $margin-top-card-elements 0;
    @include layout(tablet) {
      display: block;
      column-count: 3;
      margin: calc(#{$margin-top-card-elements} - 2%) 0;
    }
    @include layout(pc) {
      display: block;
      column-count: 4;
    }
  }
}
</style>
