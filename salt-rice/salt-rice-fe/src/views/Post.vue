<template>
  <section id="postSection">
    <!-- Start of Post -->
    <article>
      <h1>
        <skeleton>{{ post.title }}</skeleton>
      </h1>
      <p class="p-line-height">
        <skeleton :count="30">{{ post.body }}</skeleton>
      </p>
      <div v-for="tag in post.tags" :key="tag.tagID" class="tag-button">
        #{{ tag.tagName }}
      </div>
      <div class="actionPostSection">
        <div class="border margin-right">
          <svg
            @click="upVote"
            class="icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 31.367 30.711"
          >
            <g id="likepost" transform="translate(0 -9.667)">
              <g
                id="Group_98"
                data-name="Group 98"
                transform="translate(0 23.388)"
              >
                <g id="Group_97" data-name="Group 97">
                  <path
                    id="Path_167"
                    data-name="Path 167"
                    d="M3.267,224A3.272,3.272,0,0,0,0,227.267v10.456a3.272,3.272,0,0,0,3.267,3.267H7.188a3.244,3.244,0,0,0,1.96-.661V224Z"
                    transform="translate(0 -224)"
                  />
                </g>
              </g>
              <g
                id="Group_100"
                data-name="Group 100"
                transform="translate(10.456 9.667)"
              >
                <g id="Group_99" data-name="Group 99">
                  <path
                    id="Path_168"
                    data-name="Path 168"
                    d="M191.578,28.637a2.9,2.9,0,0,0-.851-2.057,3.245,3.245,0,0,0,.836-2.495,3.378,3.378,0,0,0-3.408-2.963h-8.073a18.791,18.791,0,0,0,1.04-5.228c0-2.835-2.409-5.228-3.921-5.228a4.111,4.111,0,0,0-2.369.8.657.657,0,0,0-.244.511v4.432l-3.764,8.154-.157.08V38.647a8.563,8.563,0,0,0,3.267.772h12a3.006,3.006,0,0,0,2.962-2.283,2.94,2.94,0,0,0-.237-1.963,2.927,2.927,0,0,0,1.308-3.922A2.926,2.926,0,0,0,191.578,28.637Z"
                    transform="translate(-170.667 -10.667)"
                  />
                </g>
              </g>
            </g>
          </svg>
          <skeleton v-if="loading" width="5%" />
          <template v-else>{{ postUpVotes }}</template>
        </div>
        <div class="innerflex-7 border">
          <div>
            <svg
              @click="downVote"
              class="icon"
              id="dislikepost"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 29.904 27.416"
            >
              <g
                id="Group_98_1"
                data-name="Group 98"
                transform="translate(21.182 0)"
              >
                <g
                  id="Group_97_1"
                  data-name="Group 97"
                  transform="translate(0)"
                >
                  <path
                    id="Path_167_1"
                    data-name="Path 167"
                    d="M5.607,240.2a3.119,3.119,0,0,0,3.115-3.115v-9.968A3.119,3.119,0,0,0,5.607,224H1.869a3.093,3.093,0,0,0-1.869.63V240.2Z"
                    transform="translate(0 -224)"
                  />
                </g>
              </g>
              <g
                id="Group_100_1"
                data-name="Group 100"
                transform="translate(0 0.004)"
              >
                <g id="Group_99_1" data-name="Group 99">
                  <path
                    id="Path_168_1"
                    data-name="Path 168"
                    d="M170.667,20.947a2.763,2.763,0,0,0,.811,1.961,3.094,3.094,0,0,0-.8,2.379,3.221,3.221,0,0,0,3.25,2.825h7.7a17.915,17.915,0,0,0-.992,4.984c0,2.7,2.3,4.984,3.738,4.984a3.919,3.919,0,0,0,2.259-.759.626.626,0,0,0,.233-.487V32.608l3.589-7.774.15-.076V11.4a8.164,8.164,0,0,0-3.115-.736H176.051a2.866,2.866,0,0,0-2.823,2.177,2.8,2.8,0,0,0,.226,1.872,2.791,2.791,0,0,0-1.247,3.739A2.789,2.789,0,0,0,170.667,20.947Z"
                    transform="translate(-170.667 -10.667)"
                  />
                </g>
              </g>
            </svg>
          </div>
          <skeleton v-if="loading" width="5%" />
          <template v-else>{{ postDownVotes }}</template>
        </div>
      </div>
      <div>
        <div class="margin-top">
          <a href="#" class="actionButtonClear inline-flex">
            <img
              src="../assets/images/comment.svg"
              alt="icon comment"
              class="icon"
            />
            <span>REPLY</span>
          </a>
          <a href="#" class="actionButtonClear inline-flex">
            <img
              src="../assets/images/share.svg"
              alt="icon comment"
              class="icon"
            />
            <span>SHARE</span>
          </a>
        </div>
        <p>
          <skeleton v-if="loading" width="20%" />
          <template v-else>Category: Relationship</template>
        </p>
        <p>
          <skeleton v-if="loading" width="25%" />
          <template v-else>Last updated {{ updatedAtCalendar }}</template>
        </p>
        <p>
          <skeleton v-if="loading" width="15%" />
          <template v-else>
            Posted by
            <router-link
              :to="`/user/${author.userID}`"
              class="font-yellow"
              tag="a"
              >{{ author.nickname }}</router-link
            >
          </template>
        </p>
      </div>
    </article>
    <!-- Start of NewComment -->
    <div class="comments">
      <div class="margin-bottom-layout">
        <!-- Start of Post -->
        <div class="new-comment">
          <skeleton v-if="loading" width="5%" />
          <div class="profile">
            <div>
              <img
                src="@/assets/images/iconfinder_1_avatar_2754574.svg"
                alt=""
              />
            </div>
            <div>
              <span>Username</span>
            </div>
          </div>
          <div class="profile-comment">
            <form action="#" @submit.prevent>
              <textarea
                id="textarea"
                v-model="comment"
                placeholder="Add your comment"
              />
              <div class="button-group">
                <button type="submit" class="cancel-button" @click="clearComment">
                  Cancel
                </button>
                <button type="submit" class="submit-button margin-left-responsive" @click="reply">
                  Comment
                </button>
              </div>
            </form>
          </div>
        </div>
        <!-- End of NewComment -->
        <comments
          :comments="post.comments"
          :loading="loading"
          @reply="
            (replyComment) => {
              this.comment = replyComment;
              this.reply();
            }
          "
        />
        <!-- <div class="more">
          <a class="more-label" @click="loadMore">More comments</a>
        </div> -->
      </div>
    </div>
  </section>
</template>

<script>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import {protectedFetch} from '../mixins/appUtils';
import {mapState} from 'vuex';

dayjs.extend(relativeTime)

async function getPostData(postID) {
    
  const post = await (
    await protectedFetch(`${process.env.VUE_APP_BASE_API}/post/bypostid/${postID}`)
  ).json();
  const author = await (
    await protectedFetch(`${process.env.VUE_APP_BASE_API}/user/byID/${post.authorID}`)
  ).json();

  // put 500 page error when true
  if (post.errno || author.errno) return new Error(post.errno || author.errno);
  return { post, author };
}

export default {
  name: "Post",
  components: {
    Comments: () => import("../components/Comments.vue"),
    Skeleton: () => import("vue-loading-skeleton/src/skeleton.vue"),
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
        comments: [],
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
        await protectedFetch(
          `${process.env.VUE_APP_BASE_API}/post/${this.post.postID}/upvote`
        );
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
        await protectedFetch(
          `${process.env.VUE_APP_BASE_API}/post/${this.post.postID}/downvote`
        );
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
        authorID: principal.userID,
        authorNickname: "User", // both should be variables when authentication is implemented
        body: this.comment,
        commentID: this.post.comments.length + 1,
        createdAt: new Date(),
        downVote: 0,
        isActive: 1,
        isFlagged: 0,
        postID: this.post.postID,
        upVote: 0,
        updatedAt: new Date(),
      });

      await protectedFetch(`${process.env.VUE_APP_BASE_API}/post/comment`, {
        method: "POST",
        body: JSON.stringify({
          body: this.comment,
          postID: this.post.postID,
          authorID: this.principal.userID,
          isAnonymous: false,
        }),
      });

      
      // clear posting comment data
      this.clearComment();

      
      const { post, author } = await getPostData(this.$route.params.id);

      this.post = post;
      this.author = author;
    },
    clearComment() {
      this.comment = "";
    },
    async loadMore() {
      // pagination for comment
    },
    async deletePost() {
      // todo: Modal that verifies the user intention
      // todo: user authorization token
      await protectedFetch(`${process.env.VUE_APP_BASE_API}/post/${this.post.postID}`, {
        method: "DELETE",
      });
      await this.$router.push("/");
    },
    async flag() {
      await protectedFetch(
        `${process.env.VUE_APP_BASE_API}/post/${this.post.postID}/flag`
      );
    },
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
    },

    ...mapState({
      principal: state => state.auth.principal,
    })
  

  },
  async beforeRouteEnter(to, from, next) {
    try {
      const { post, author } = await getPostData(to.params.id);

      next((vm) => {
        setTimeout(() => {
          vm.post = post;
          vm.author = author;
          vm.loading = false;
        }, 1000);

        // todo: if post ID is missing, put up 404 page error
      });
    } catch (err) {
      console.error(err);
      // todo: put up 500 page error
    }
  },
};
</script>

<style lang="scss">
section#postSection {
        padding: side-space(mobile-mini) side-space(mobile);
        text-align: justify;

        @include layout(tablet) {
            padding: side-space(mobile);
        }

        @include layout(pc) {
            padding: side-space(mobile) side-space(pc);
        }

        .comments {
            margin-top: calc(#{margin-top-card-element-responsive(mobile)} * 2);

            @include layout(pc) {
                margin-top: calc(#{margin-top-card-element-responsive(pc)} * 2);

            }
            .more {
                text-align: center;
            }
        }
    }

/*Begin Style for Post */
.icon {
  width: $icon-size;
  height: auto;
}

svg.icon {
  fill: color(grey);
  cursor: pointer;
  margin-right: $margin-right-small-icon;
}

.profile-comment-action {
  display: block;

  @include layout(tablet) {
    display: flex;
  }

  .replay-comment {
    margin: 1.5% 0 0 1.5%;
  }
}

.actionPostSection {
  margin-top: margin-top-card-element-responsive(mobile);
  display: inline-flex;

  @include layout(tablet) {
    margin-top: margin-top-card-element-responsive(pc-small);
  }
}

.innerflex-7 {
  margin-top: calc(#{margin-top-card-element-responsive(mobile)} - 3%);
  display: inline-flex;
}
/*End Style for post */

/*Begin Style for Comment */
.new-comment {
  display: inline-flex;
  width: 100%;

  .profile {
    margin-right: 1em;
    text-align: center;
    width: 30%;
    display: inline;

    @include layout(tablet) {
      width: 15%;
    }

    @include layout(pc) {
      width: 10%;
    }
  }
  .profile-comment {
    width: 70%;

    @include layout(tablet) {
      width: 85%;
    }

    @include layout(pc) {
      width: 90%;
    }

    textarea {
      resize: none;
      border: none;
      border-bottom: 1px solid color(black);
      height: 4.5em;
      font-size: $font-size;
      width: 100%;

      &:focus {
        outline: none;
      }

      &::placeholder {
        font-size: $font-size;
        font-family: "Montserrat", sans-serif;
      }
    }
    .button-group {
      display: block;
      margin-top: 1em;
      text-align: center;

      @include layout(tablet) {
        text-align: right;
      }
    }
  }
}
/*End Style for Comment */
</style>