<template>
  <div>
    <Comment
        v-for="comment in comments"
        :key="comment.commentID"
        :comment="comment"
        @reply="(e) => $emit('reply', e)"
    />
  </div>
</template>

<script>
export default {
  name: "Comments",
  props: {
    comments: Array
  },
  components: {
    Comment: () => import("./Comment.vue")
  }
}
</script>
