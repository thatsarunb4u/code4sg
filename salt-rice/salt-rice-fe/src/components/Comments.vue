<template>
  <div>
    <Comment
      v-for="comment in computedComments"
      :key="loading ? Math.random() : comment.commentID"
      :comment="comment"
      :loading="loading"
      @reply="(e) => $emit('reply', e)"
      @subReply="subReply"
      @delete="deleteComment"
    />
  </div>
</template>

<script>
export default {
  name: "Comments",
  props: {
    comments: Array,
    loading: Boolean,
    loadedComments: {
      type: Number,
      default: 20,
    },
  },
  components: {
    Comment: () => import("./Comment.vue"),
  },
  computed: {
    computedComments() {
      console.log(this.comments);
      if (!this.loading) return this.comments;
      return Array(this.loadedComments)
        .fill()
        .map((v, commentID) => ({
          commentID,
          authorNickname: null,
        }));
    },
  },
  methods: {
    deleteComment(comment) {
      this.$delete(
        this.comments,
        this.comments.findIndex(
          ({ commentID }) => commentID === comment.commentID
        )
      );
    },
    subReply(reply){

      this.$emit("subReply", reply);
    }
  },
};
</script>
