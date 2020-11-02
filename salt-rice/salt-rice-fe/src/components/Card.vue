<template>
  <div>
    <p class="card-message">
      <strong>{{ title }}</strong>
      {{ body }}
    </p>
    <div class="card-info" v-if="upvote !== 0 && downvote !== 0 && updatedAt && comments && comments.length !== undefined">
      <p v-if="author && !isAnonymous">Posted by {{ author.nickname }}</p>
      <p>Last updated {{ updatedAtCalender }}</p>
      <p>
        <img src="/images/love.svg" alt="love image" class="love-img">
        <span class="like-count">{{ this.likes }} likes</span>
      </p>
      <p>
        <img src="/images/message.svg" alt="comment image" class="comment-img">
        <span class="comment-count">{{ comments.length }} comments</span>
      </p>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Card",
  props: {
    title: String,
    body: String,
    categoryID: Number,
    author: {
      userID: Number,
      UUID: String,
      nickname: String
    },
    upvote: Number,
    downvote: Number,
    isAnonymous: Boolean,
    updatedAt: Date,
    comments: Array
  },
  computed: {
    likes() {
      return this.upvote - this.downvote;
    },
    updatedAtCalender() {
      return moment(this.updatedAt).fromNow();
    }
  }
}
</script>

<style scoped>
.card-message {
  padding: 2em;
  margin: 0;
}

.card-info {
  padding: 1em 2em;
  border-top: 1px solid #707070;
  text-align: left;
  font-size: calc(12pt - 2pt);
  color: #000000;
}

.love-img, .comment-img {
  width: 20px;
  position: relative;
  top: 0.3em;
  margin-right: 10px;
}
</style>
