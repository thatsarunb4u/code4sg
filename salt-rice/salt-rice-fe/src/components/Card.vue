<template>
  <router-link tag="a" :to="{ name: 'Post', params: { id: postID }}">
    <div :style="{ [categoryID === 1 ? '' : 'backgroundColor']: '#fff', borderRadius: '27px' }">
      <p class="card-message">
        <strong>{{ title }}</strong>
        {{ body.length > 300 ? `${body.substring(0, 300)}...` : body }}
      </p>
      <div class="card-info">
        <p v-if="!isAnonymous">Posted by {{ authorNickname }}</p>
        <p v-else>This post is anonymously posted</p>
        <p>Last updated {{ updatedAtCalender }}</p>
        <p>
          <img src="/images/love.svg" alt="love image" class="love-img">
          <span class="like-count">{{ this.likes }} likes</span>
        </p>
        <p>
          <img src="/images/message.svg" alt="comment image" class="comment-img">
          <span class="comment-count">{{ commentCount }} comments</span>
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
import moment from "moment";

export default {
  name: "Card",
  props: {
    postID: Number,
    title: String,
    body: String,
    categoryID: Number,
    authorID: Number,
    authorNickname: String,
    upVote: Number,
    downVote: Number,
    isAnonymous: Number,
    updatedAt: String,
    commentCount: Number
  },
  computed: {
    likes() {
      return this.upVote - this.downVote;
    },
    updatedAtCalender() {
      return moment(this.updatedAt).fromNow();
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

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
