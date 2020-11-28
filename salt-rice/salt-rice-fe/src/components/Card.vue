<template>
  <pu-skeleton-theme
    :color="categoryID === 1 ? '#fffae1' : undefined"
    :highlight="categoryID === 1 ? '#ffc529' : undefined"
  >
    <router-link
      :to="{ name: 'Post', params: { id: postID || 1 } }"
      :style="{ [categoryID === 1 ? '' : 'backgroundColor']: '#fff' }"
      tag="li"
      :disable="loading"
      class="card-route"
    >
      <div class="cards">
        <div class="card-message">
          <p>
            <strong>
              <template v-if="loading">
                <pu-skeleton />
                <pu-skeleton width="30%" />
              </template>
              <template v-else>{{
                title.length > 75 ? `${title.substring(0, 75)}...` : title
              }}</template>
            </strong>
          </p>
          <p>
            <pu-skeleton v-if="loading" :count="6" />
            <template v-else>{{
              body.length > 300 ? `${body.substring(0, 300)}...` : body
            }}</template>
          </p>
        </div>
        <div class="card-info">
          <p>
            <template v-if="loading"><pu-skeleton /></template>
            <template v-else>
              <template v-if="isAnonymous"
                >This post is anonymously posted</template
              >
              <template v-else>Posted by {{ authorNickname }}</template>
            </template>
          </p>
          <p>
            <template v-if="loading"><pu-skeleton /></template>
            <template v-else>Last updated {{ updatedAtCalender }}</template>
          </p>
          <p>
            <img alt="love image" class="love-img" src="/images/love.svg" />
            <pu-skeleton v-if="loading" width="15%" style="margin-left: 20px" />
            <span v-else class="like-count">{{ this.likes }} likes</span>
          </p>
          <p>
            <img
              alt="comment image"
              class="comment-img"
              src="/images/message.svg"
            />
            <pu-skeleton v-if="loading" width="20%" style="margin-left: 20px" />
            <span v-else class="comment-count"
              >{{ commentCount }} comments</span
            >
          </p>
        </div>
      </div>
    </router-link>
  </pu-skeleton-theme>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime)


export default {
  name: "Card",
  components: {
    PuSkeleton: () => import("vue-loading-skeleton/src/skeleton.vue"),
    PuSkeletonTheme: () =>
      import("vue-loading-skeleton/src/skeleton-theme.vue"),
  },
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
    commentCount: Number,
    loading: Boolean,
  },
  computed: {
    likes() {
      return this.upVote - this.downVote;
    },
    updatedAtCalender() {

      return dayjs().to(new Date(this.updatedAt))
    }

  },
  watch: {
    title(title) {
      console.log(title);
    },
  },
};
</script>


<style lang="scss" scoped>
li {
  border: 1px solid color(grey);
  border-radius: $border-radius;
  margin: $margin-top-card-elements 0;
  background-color: color(yellow);
  height: auto;
  width: 100%;
  color: color(black);
  cursor: pointer;

  @include layout(tablet) {
    display: inline-block;
    margin: calc(#{$margin-top-card-elements} - 4%) 0;
  }

  .card-message {
    padding: 2em;
    margin: 0;
  }
  .card-info {
    padding: 1em 2em;
    border-top: 1px solid color(grey);
    text-align: left;
    font-size: calc(#{$font-size} - 2pt);
    color: color(black);

    .love-img,
    .comment-img {
      width: 20px;
      position: relative;
      top: 0.3em;
      margin-right: 10px;
    }
  }
}
</style>
