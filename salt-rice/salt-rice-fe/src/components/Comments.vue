<template>
  <div>
    <Comment v-for="comment in comments" :key="comment.commentID" :comment="comment" />
  </div>
</template>

<script>
import Comment from "./Comment.vue";

export default {
  name: "Comments",
  props: {
    comments: Array
  },
  components: {
    Comment
  }
}
</script>

<style scoped>
</style>
