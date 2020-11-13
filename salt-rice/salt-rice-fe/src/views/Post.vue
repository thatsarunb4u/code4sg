<template>
  <div class="post">
    <article>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <div v-for="tag in post.tags" :key="tag" class="tag-button">#{{ tag }}</div>
      <div class="post-actions">
        <span class="underline" @click="upVote">
          <img alt="Likes" src="/images/like.svg"/> {{ postUpVotes }}
        </span>
        <span class="underline" @click="downVote">
          <img alt="Dislikes" src="/images/dislike.svg"/> {{ postDownVotes }}
        </span>
        <span @click="copyLink">
          <img alt="Dislikes" src="/images/share.svg"/> SHARE
        </span>
      </div>
    </article>
    <div>
      <p>Category: Relationship</p>
      <p>Last updated {{ updatedAtCalendar }}</p>
      <p>Posted by
        <router-link :to="`/user/${author.userID}`" class="font-yellow" tag="a">{{ author.nickname }}</router-link>
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
      <comments :comments="comments.comments"
                @reply="(replyComment) => { this.comment = replyComment; this.reply(); }"/>
      <div class="more container" style="margin: 30px 0;">
        <a class="more-label" @click="loadMore">More comments</a>
      </div>
    </section>
  </div>
</template>

<script>
import moment from "moment";
import Comments from "../components/Comments.vue";

export default {
  name: "Post",
  components: { Comments },
  data() {
    return {
      isLoading: true,
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
        tags: []
      },
      author: {
        userID: null,
        nickname: null,
      },
      comments: {
        page: 0,
        comments: []
      }
    };
  },
  methods: {
    async getPostData() {
      const post = await this.$http.get(`/post/bypostid/${this.$route.params.id}`);
      const author = await this.$http.get(`/user/byID/${post.data.authorID}`);

      // put 500 page error when true
      if (post.data.errno || author.data.errno) this.error = true;

      this.post = { ...post.data, tags: ["covid", "covid-19"] };
      this.author = author.data;

      return [post, author];
    },
    async upVote() {
      try {
        this.post.upVote++;
        await this.$http.get(`/post/${this.post.postID}/upvote`);
        await this.getPostData();
      } catch (err) {
        console.error(err);
      }
    },
    async downVote() {
      try {
        this.post.downVote++;
        await this.$http.get(`/post/${this.post.postID}/downvote`);
        await this.getPostData();
      } catch (err) {
        console.error(err);
      }
    },
    reply() {
      if (!this.comment) return;

      // simulate posting data to server
      this.comments.comments.push({
        commentID: this.comments.comments.length - 1,
        body: this.comment,
        postID: this.post.postID,
        author: this.author,
        upVote: 0,
        downVote: 0,
        isActive: true,
        isFlagged: false,
        isAnonymous: false,
        createdAt: new Date(),
        updatedAt: new Date()
      });

      // clear posting comment data
      this.cancel();
    },
    cancel() {
      this.comment = "";
    },
    copyLink() {
      navigator.clipboard.writeText(document.location.href);
    },
    loadMore() {
      this.comments.page++;

      // simulate getting data from server
      setTimeout(() => this.comments.comments.push(
          ...Array(25).fill().map((value, commentID) => ({
                commentID,
                body: "Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt." +
                    " Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. " +
                    "Zwölf Boxkämpfer jagen Viktor quer über den großen Sylter Deich. " +
                    "Vogel Quax zwickt Johnys Pferd Bim. Sylvia wagt quick den Jux bei",
                postID: this.post.postID,
                author: this.author,
                upVote: 0,
                downVote: 0,
                isActive: true,
                isFlagged: false,
                isAnonymous: false,
                createdAt: new Date(),
                updatedAt: new Date()
              })
          )
      ), 200);
    }
  },
  computed: {
    updatedAtCalendar() {
      return moment(this.post.updatedAt).fromNow();
    },
    postUpVotes() {
      return this.post.upVote;
    },
    postDownVotes() {
      return this.post.downVote;
    }
  },
  async created() {
    /**
     * todo: get comments from server
     */
    try {
      await this.getPostData();
      this.isLoading = false;

      // todo: if post ID is missing, put up 404 page error
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
