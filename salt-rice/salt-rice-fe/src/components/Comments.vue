<template>
  <div>
    <Comment
        v-for="comment in computedComments"
        :key="loading ? Math.random() : comment.commentID"
        :comment="comment"
        :loading="loading"
        @reply="(e) => $emit('reply', e)"
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
      default: 20
    }
  },
  components: {
    Comment: () => import("./Comment.vue")
  },
  computed: {
    computedComments() {
      if (!this.loading) return this.comments;
      return Array(this.loadedComments).fill().map((v, commentID) => ({
        commentID, authorNickname: null
      }));
    }
  }
}
</script>
