<template>
  <div>
    <div class="author">
      <skeleton v-if="loading" circle class="author-image" />
      <img v-else src="/images/iconfinder_1_avatar_2754574.svg" alt="" class="author-image" />
      <div style="width: 100%;">
        <p><skeleton>{{ comment.authorNickname }}</skeleton></p>
        <p><skeleton :count="6">{{ comment.body }}</skeleton></p>
        <div class="post-actions">
          <span class="underline" @click="upVote">
            <img src="/images/like.svg" alt="Likes" />
            <skeleton width="5%"> {{ comment.upVote }}</skeleton>
          </span>
          <span class="underline" @click="downVote">
            <img src="/images/dislike.svg" alt="Dislikes" />
            <skeleton width="5%"> {{ comment.downVote }}</skeleton>
          </span>
          <span @click="deleteComment"><img alt="Delete post" src="/images/trash.svg" /></span>
          <span @click="flag"><img alt="Flag post" src="/images/flag.svg" /></span>
          <skeleton v-if="loading" width="5%" />
          <button v-else @click="isReplying = !isReplying" type="button">REPLY</button>
          <div v-show="isReplying">
            <div class="new-reply">
              <img src="/images/iconfinder_1_avatar_2754574.svg" alt="" />
              <input placeholder="Reply to this comment" v-model="replyComment" />
            </div>
            <div style="float: right; margin-top: 5px;">
              <button @click="cancel" type="button" class="cancel-button" style="margin-right: 20px;">Cancel</button>
              <button @click="reply" type="button" class="submit-button">Reply</button>
            </div>
          </div>
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
      isActive: Number,
      isFlagged: Number,
      isAnonymous: Number,
      createdAt: String,
      updatedAt: String,
      authorNickname: String,
      authorID: Number,
      commentID: Number
    },
    loading: Boolean
  },
  components: {
    Skeleton: () => import("vue-loading-skeleton/src/skeleton.vue")
  },
  data() {
    return {
     isReplying: false,
     replyComment: `@${this.comment.authorNickname} `
    };
  },
  methods: {
    upVote() {
      // simulate upvoting
      this.comment.upVote++;
    },
    downVote() {
      // simulate upvoting
      this.comment.downVote++;
    },
    reply() {
      this.$emit("reply", this.formatReply(this.replyComment));
      this.cancel();
    },
    formatReply(reply) {
      // find every @mention and format to <@userID>
      return reply;
    },
    cancel() {
      this.isReplying = false;
      this.replyComment = `@${this.comment.authorNickname} `;
    },
    async deleteComment() {
      await fetch(
          `${process.env.VUE_APP_BASE_API}/post/comment/${this.comment.commentID}`,
          { method: "DELETE" }
      );

      this.$emit("delete", this.comment);
    },
    async flag() {
      await fetch(`${process.env.VUE_APP_BASE_API}/post/comment/${this.comment.commentID}/flag`);
    }
  }
}
</script>

<style scoped>
.author {
  display: flex;
  margin-top: 10px;
}

.author-image {
  margin-right: 1em;
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.post-actions > button {
  padding: 5px 5px 0 5px;
  border: none;
  background: none;
}

div p:first-child {
  font-weight: 600;
  font-size: 16px;
  display: inline;
}

.new-reply {
  margin-top: 10px;
  display: flex;
}

.new-reply img {
  margin-right: 1em;
  vertical-align: middle;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.new-reply p {
  margin-top: 8px;
}

.new-reply input {
  resize: none;
  width: 100%;
  border: none;
  border-bottom: 1px solid #000000;
  margin-left: 2px;
  padding: 0 2px;
  font-family: "Montserrat", sans-serif;
}

.submit-button {
  background-color: #707070;
  color: #fff;
}
</style>
