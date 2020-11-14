<template>
  <router-link :to="{ name: 'Post', params: { id: postID }}" tag="a" v-once>
    <div :style="{ [categoryID === 1 ? '' : 'backgroundColor']: '#fff' }" class="card">
      <div class="card-message">
        <p><strong>{{ title.length > 75 ? `${title.substring(0, 75)}...` : title }}</strong></p>
        <p>{{ body.length > 300 ? `${body.substring(0, 300)}...` : body }}</p>
      </div>
      <div class="card-info">
        <p v-if="!isAnonymous">Posted by {{ authorNickname }}</p>
        <p v-else>This post is anonymously posted</p>
        <p>Last updated {{ updatedAtCalender }}</p>
        <p>
          <img alt="love image" class="love-img" src="/images/love.svg">
          <span class="like-count">{{ this.likes }} likes</span>
        </p>
        <p>
          <img alt="comment image" class="comment-img" src="/images/message.svg">
          <span class="comment-count">{{ commentCount }} comments</span>
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
import dayjs from "dayjs";
import calendar from "dayjs/plugin/calendar";
dayjs.extend(calendar)

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
      return dayjs().calendar(dayjs(this.updatedAt));
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}

.card {
  border: 1px solid #707070;
  border-radius: 5px;
  margin: 7% 0;
  background-color: #ffc529;
  height: auto;
  width: 100%;
}

.card-message {
  padding: 0.5rem;
  margin: 0;
  min-height: 200px;
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
