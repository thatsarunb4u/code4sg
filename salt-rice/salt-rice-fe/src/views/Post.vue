<template>
  <div class="post">
    <article>
      <h1>{{ post.title }}</h1>
      <p>{{ post.body }}</p>
      <div class="post-actions">
        <span class="underline" @click="upVote">
          <img src="/images/like.svg" alt="Likes" /> {{ post.upVote }}
        </span>
        <span class="underline" @click="downVote">
          <img src="/images/dislike.svg" alt="Dislikes" /> {{ post.downVote }}
        </span>
        <span @click="copyLink">
          <img src="/images/share.svg" alt="Dislikes" /> SHARE
        </span>
      </div>
    </article>
    <div>
      <p>Last updated {{ updatedAtCalendar }}</p>
      <p>Posted by
        <router-link class="font-yellow" tag="a" :to="`/user/${author.userID}`">{{ author.nickname }}</router-link>
      </p>
    </div>
    <section>
      <div style="margin-bottom: 50px;">
        <div class="new-comment">
          <div>
            <img src="/images/iconfinder_1_avatar_2754574.svg" alt="" />
            <p>Nick name</p>
          </div>
          <textarea id="textarea" placeholder="Add your comment" v-model="comment" />
        </div>
        <div style="float: right;">
          <button @click="cancel" type="button" class="cancel-button" style="margin-right: 20px;">Cancel</button>
          <button @click="reply" type="button" class="submit-button">Submit</button>
        </div>
      </div>
      <comments :comments="comments.comments"/>
      <div style="margin-top: 30px;" class="more container">
        <a @click="loadMore" class="more-label">More comments</a>
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
        updatedAt: null
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
    upVote() {
      // simulate posting  data to server
      return 0;
    },
    downVote() {
      // simulate posting  data to server
      return 0;
    },
    reply() {
      // simulate posting  data to server
      return 0;
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
    }
  },
  beforeCreate() {
    /**
     * todo: request post from server
     *       request author from server
     *
     */

    // simulate getting data from server
    setTimeout(() => {
      this.post = {
        postID: 1,
        title: "Zwei finke Boxer jagen die quirlige Eva und ihren Mops durch Sylt.",
        body: "Zwei flinke Boxer jagen die quirlige Eva und ihren Mops durch Sylt. " +
            "Franz jagt im komplett verwahrlosten Taxi quer durch Bayern. Zwölf Boxkämpfer " +
            "jagen Viktor quer über den großen Sylter Deich. Vogel Quax zwickt Johnys Pferd " +
            "Bim. Sylvia wagt quick den Jux bei Pforzheim. Polyfon zwitschernd aßen Mäxchens " +
            "Vögel Rüben, Joghurt und Quark. \"Fix, Schwyz!\" quäkt Jürgen blöd vom Paß. Victor " +
            "jagt zwölf Boxkämpfer quer über den großen Sylter Deich. Falsches Üben von " +
            "Xylophonmusik quält jeden größeren Zwerg. Heizölrückstoßabdämpfung. " +
            "Zwei flinke Boxer jagen die quirlige Eva und ihren Mops.",
        categoryID: 1,
        authorID: 1,
        upVote: 200,
        downVote: 20
      }

      this.author = { userID: 1, nickname: "Al-Khamai" }

      this.comments.comments.push(
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
      )
    }, 200)
    return 0;
  }
}
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
