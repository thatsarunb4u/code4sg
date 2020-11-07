<template>
  <div>
    <div class="author">
      <img src="/images/iconfinder_1_avatar_2754574.svg" alt="" />
      <div>
        <p>{{ comment.author.nickname }}</p>
        <p>{{ comment.body }}</p>
        <div class="post-actions">
          <span class="underline" @click="upVote">
            <img src="/images/like.svg" alt="Likes" /> {{ comment.upVote }}
          </span>
          <span class="underline" @click="downVote">
            <img src="/images/dislike.svg" alt="Dislikes" /> {{ comment.downVote }}
          </span>
          <button @click="reply" type="button">REPLY</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment",
  props: {
    comment: {
      body: String,
      postID: Number,
      upVote: Number,
      downVote: Number,
      isActive: Boolean,
      isFlagged: Boolean,
      isAnonymous: Boolean,
      createdAt: Date,
      updatedAt: Date,
      author: {
        nickname: String,
        userID: String
      }
    }
  },
  methods: {
    upVote() {
      return 0;
    },
    downVote() {
      return 0;
    },
    reply() {
      return 0;
    }
  }
}
</script>

<style scoped>
.author {
  display: flex;
  margin-top: 10px;
}

.author > img {
  margin-right: 1em;
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

button {
  padding: 0;
  border: none;
  background: none;
}

div p:first-child {
  font-weight: 600;
  font-size: 16px;
  display: inline;
}
</style>
