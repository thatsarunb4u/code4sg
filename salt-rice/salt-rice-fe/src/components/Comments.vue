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
div {
  width: 100%;
  margin: 7% auto;
  background-size: 30%;
  background-position: 0 30%, 100% 62%;
  background-repeat: no-repeat, no-repeat;
  height: 100%;
  background-image: url("/images/yellow.png"), url("/images/green.png");
}
</style>
