<template>
  <div class="post">
    <article>
      <h1><skeleton>{{ post.title }}</skeleton></h1>
      <p><skeleton :count="30">{{ post.body }}</skeleton></p>
      <div v-for="tag in post.tags" :key="tag.tagID" class="tag-button">#{{ tag.tagName }}</div>
      <div class="post-actions">
        <span class="underline" @click="upVote">
          <img alt="Likes" src="/images/like.svg"/>
          <skeleton v-if="loading" width="5%" />
          <template v-else>{{ postUpVotes }}</template>
        </span>
        <span class="underline" @click="downVote">
          <img alt="Dislikes" src="/images/dislike.svg"/>
          <skeleton v-if="loading" width="5%" />
          <template v-else>{{ postDownVotes }}</template>
        </span>
        <span @click="deletePost"><img alt="Delete post" src="/images/trash.svg" /></span>
        <span @click="flag"><img alt="Flag post" src="/images/flag.svg" /></span>
      </div>
    </article>
    <div>
      <p>
        <skeleton v-if="loading" width="20%" />
        <template v-else>Category: Relationship</template>
      </p>
      <p>
        <skeleton v-if="loading" width="25%"/>
        <template v-else>Last updated {{ updatedAtCalendar }}</template>
      </p>
      <p>
        <skeleton v-if="loading" width="15%" />
        <template v-else>
          Posted by
          <router-link :to="`/user/${author.userID}`" class="font-yellow" tag="a">{{ author.nickname }}</router-link>
        </template>
      </p>
    </div>
    <section>
      <div style="margin-bottom: 50px;">
        <div class="new-comment">
          <div>
            <img alt="" src="/images/iconfinder_1_avatar_2754574.svg"/>
            <p>Nick name</p>
          </div>
          <textarea id="textarea" v-model="comment" placeholder="Add your comment"/>
        </div>
        <div style="float: right;">
          <button class="cancel-button" style="margin-right: 20px;" type="button" @click="cancel">Cancel</button>
          <button class="submit-button" type="button" @click="reply">Comment</button>
        </div>
      </div>
      <comments
          :comments="post.comments"
          :loading="loading"
          @reply="(replyComment) => { this.comment = replyComment; this.reply(); }"
      />
      <div class="more container" style="margin: 30px 0;">
        <a class="more-label" @click="loadMore">More comments</a>
      </div>
    </section>
  </div>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime)

async function getPostData(postID) {
    const post = await (await fetch(`${process.env.VUE_APP_BASE_API}/post/bypostid/${postID}`)).json();
    const author = await (await fetch(`${process.env.VUE_APP_BASE_API}/user/byID/${post.authorID}`)).json();

    // put 500 page error when true
    if (post.errno || author.errno) return new Error(post.errno || author.errno);
    return { post, author };
}

export default {
  name: "Post",
  components: {
    Comments: () => import("../components/Comments.vue"),
    Skeleton: () => import("vue-loading-skeleton/src/skeleton.vue")
  },
  data() {
    return {
      loading: true,
      error: false,
      comment: "",
      post: {
        postID: null,
        title: null,
        body: null,
        categoryID: null,
        authorID: null,
        upVote: 0,
        downVote: 0,
        isAnonymous: false,
        isFlagged: false,
        isActive: true,
        createdAt: null,
        updatedAt: null,
        tags: [],
        comments: []
      },
      author: {
        userID: null,
        nickname: null,
      },
    };
  },
  methods: {
    async upVote() {
      try {
        this.post.upVote++;
        await fetch(`${process.env.VUE_APP_BASE_API}/post/${this.post.postID}/upvote`);
        const { post, author } = await getPostData(this.$route.params.id);

        this.post = post;
        this.author = author;
      } catch (err) {
        console.error(err);
      }
    },
    async downVote() {
      try {
        this.post.downVote++;
        await fetch(`${process.env.VUE_APP_BASE_API}/post/${this.post.postID}/downvote`);
        const { post, author } = await getPostData(this.$route.params.id);

        this.post = post;
        this.author = author;
      } catch (err) {
        console.error(err);
      }
    },
    async reply() {
      if (!this.comment) return;

      this.post.comments.push({
        authorID: 1,
        authorNickname: "User", // both should be variables when authentication is implemented
        body: this.comment,
        commentID: this.post.comments.length + 1,
        createdAt: new Date(),
        downVote: 0,
        isActive: 1,
        isFlagged: 0,
        postID: this.post.postID,
        upVote: 0,
        updatedAt: new Date()
      })

      await fetch(`${process.env.VUE_APP_BASE_API}/post/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          body: this.comment,
          postID: this.post.postID,
          authorID: 1,
          isAnonymous: false
        })
      });

      // clear posting comment data
      this.cancel();

      const { post, author } = await getPostData(this.$route.params.id);

      this.post = post;
      this.author = author;
    },
    cancel() {
      this.comment = "";
    },
    async loadMore() {
      // pagination for comment
    },
    async deletePost() {
      // todo: Modal that verifies the user intention
      // todo: user authorization token
      await fetch(`${process.env.VUE_APP_BASE_API}/post/${this.post.postID}`, { method: "DELETE" });
      await this.$router.push("/");
    },
    async flag() {
      await fetch(`${process.env.VUE_APP_BASE_API}/post/${this.post.postID}/flag`);
    }
  },
  computed: {
    updatedAtCalendar() {
      return dayjs().to(new Date(this.post.updatedAt))
    },
    postUpVotes() {
      return this.post.upVote;
    },
    postDownVotes() {
      return this.post.downVote;
    }
  },
  async beforeRouteEnter(to, from, next) {
    try {
      const { post, author } = await getPostData(to.params.id);

      next((vm) => {
        setTimeout(() => {
          vm.post = post;
          vm.author = author;
          vm.loading = false;
        }, 1000)

        // todo: if post ID is missing, put up 404 page error
      })
    } catch (err) {
      console.error(err);
      // todo: put up 500 page error
    }
  }
};
</script>

<style scoped>
.post {
  text-align: left;
  padding: 1rem 5rem;
}

h1 {
  font-weight: 900;
  font-size: 25px;
}

article > p {
  margin-top: 30px;
  margin-bottom: 25px;
  font-size: 19px;
}

.underline {
  padding-bottom: 3px;
  border-bottom: 1px solid #000000;
}

div > p {
  font-weight: 600;
  font-size: 14px;
  color: #919090;
}

textarea {
  resize: none;
  width: 100%;
  height: 60px;
  line-height: 2;
  top: -12px;
  border: none;
  border-bottom: 1px solid #000000;
  margin-left: 2px;
  padding: 0 2px;
  font-family: "Montserrat", sans-serif;
}

.new-comment {
  display: flex;
}

.new-comment img {
  margin-right: 1em;
  vertical-align: middle;
  width: 70px;
  height: 70px;
  border-radius: 50%;
}

.new-comment p {
  margin-top: 8px;
}

.submit-button {
  background-color: #707070;
  color: #fff;
}

.tag-button {
  margin-bottom: 1rem;
}

@media (max-width: 576px) {
  .post {
    padding: 1rem;
  }

  .new-comment img {
    margin-right: 5px;
  }

  .new-comment p {
    font-size: 13px;
  }
}

@media (max-width: 650px) {
  .post {
    padding: 1rem 3rem;
  }
}
</style>
