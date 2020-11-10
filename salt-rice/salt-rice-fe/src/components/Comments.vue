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
