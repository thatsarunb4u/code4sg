<template>
  <div class="comment">
    <div class="profile">
      <skeleton v-if="loading" circle class="author-image" />
      <img
        v-else
        src="/images/iconfinder_1_avatar_2754574.svg"
        alt=""
        class="author-image"
      />
    </div>
    <div class="profile-comment">
      <p class="username">
        <skeleton>{{ comment.authorNickname }}</skeleton>
      </p>
      <p>
        <skeleton :count="6">{{ comment.body }}</skeleton>
      </p>
      <div class="profile-comment-action">
        <div class="actionPostSection responsive-marginpost">
          <div class="margin-right" @click="upVote">
            <svg
              class="icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 31.367 30.711"
            >
              <g transform="translate(0 -9.667)">
                <g data-name="Group 98" transform="translate(0 23.388)">
                  <g data-name="Group 97">
                    <path
                      data-name="Path 167"
                      d="M3.267,224A3.272,3.272,0,0,0,0,227.267v10.456a3.272,3.272,0,0,0,3.267,3.267H7.188a3.244,3.244,0,0,0,1.96-.661V224Z"
                      transform="translate(0 -224)"
                    />
                  </g>
                </g>
                <g data-name="Group 100" transform="translate(10.456 9.667)">
                  <g data-name="Group 99">
                    <path
                      data-name="Path 168"
                      d="M191.578,28.637a2.9,2.9,0,0,0-.851-2.057,3.245,3.245,0,0,0,.836-2.495,3.378,3.378,0,0,0-3.408-2.963h-8.073a18.791,18.791,0,0,0,1.04-5.228c0-2.835-2.409-5.228-3.921-5.228a4.111,4.111,0,0,0-2.369.8.657.657,0,0,0-.244.511v4.432l-3.764,8.154-.157.08V38.647a8.563,8.563,0,0,0,3.267.772h12a3.006,3.006,0,0,0,2.962-2.283,2.94,2.94,0,0,0-.237-1.963,2.927,2.927,0,0,0,1.308-3.922A2.926,2.926,0,0,0,191.578,28.637Z"
                      transform="translate(-170.667 -10.667)"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <span id="like-count-comment-1"
              ><skeleton width="5%"> {{ comment.upVote }}</skeleton></span
            >
          </div>
          <div class="innerflex-7" @click="downVote">
            <div>
              <svg
                class="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 29.904 27.416"
              >
                <g data-name="Group 98" transform="translate(21.182 0)">
                  <g data-name="Group 97" transform="translate(0)">
                    <path
                      data-name="Path 167"
                      d="M5.607,240.2a3.119,3.119,0,0,0,3.115-3.115v-9.968A3.119,3.119,0,0,0,5.607,224H1.869a3.093,3.093,0,0,0-1.869.63V240.2Z"
                      transform="translate(0 -224)"
                    />
                  </g>
                </g>
                <g data-name="Group 100" transform="translate(0 0.004)">
                  <g data-name="Group 99">
                    <path
                      data-name="Path 168"
                      d="M170.667,20.947a2.763,2.763,0,0,0,.811,1.961,3.094,3.094,0,0,0-.8,2.379,3.221,3.221,0,0,0,3.25,2.825h7.7a17.915,17.915,0,0,0-.992,4.984c0,2.7,2.3,4.984,3.738,4.984a3.919,3.919,0,0,0,2.259-.759.626.626,0,0,0,.233-.487V32.608l3.589-7.774.15-.076V11.4a8.164,8.164,0,0,0-3.115-.736H176.051a2.866,2.866,0,0,0-2.823,2.177,2.8,2.8,0,0,0,.226,1.872,2.791,2.791,0,0,0-1.247,3.739A2.789,2.789,0,0,0,170.667,20.947Z"
                      transform="translate(-170.667 -10.667)"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <span id="dislike-count-comment"
              ><skeleton width="5%"> {{ comment.downVote }}</skeleton></span
            >
          </div>
          <!-- <div class="margin-right delete-margin" @click="deleteComment">
            <svg
              class="icon"
              style="enable-background: new 0 0 24 24"
              version="1.1"
              viewBox="0 0 24 24"
              xml:space="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <g />
              <g>
                <g>
                  <path
                    d="M18.9,8H5.1c-0.6,0-1.1,0.5-1,1.1l1.6,13.1c0.1,1,1,1.7,2,1.7h8.5c1,0,1.9-0.7,2-1.7l1.6-13.1C19.9,8.5,19.5,8,18.9,8z"
                  />
                  <path
                    d="M20,2h-5l0,0c0-1.1-0.9-2-2-2h-2C9.9,0,9,0.9,9,2l0,0H4C2.9,2,2,2.9,2,4v1c0,0.6,0.4,1,1,1h18c0.6,0,1-0.4,1-1V4    C22,2.9,21.1,2,20,2z"
                  />
                </g>
              </g>
            </svg>
          </div> -->
          <div class="margin-left margin-right" @click="flag">
            <svg
              class="icon flag"
              xmlns="http://www.w3.org/2000/svg"
              width="132.972"
              height="177.296"
              viewBox="0 0 132.972 177.296"
            >
              <g id="iconfinder_interface-54_4634431" transform="translate(-4)">
                <g data-name="Group 183" transform="translate(4)">
                  <path
                    id="Path_280"
                    data-name="Path 280"
                    d="M9.541,177.3A5.539,5.539,0,0,1,4,171.756V5.541a5.541,5.541,0,0,1,11.081,0V171.756A5.539,5.539,0,0,1,9.541,177.3Z"
                    transform="translate(-4)"
                  />
                </g>
                <g data-name="Group 184" transform="translate(26.162 11.08)">
                  <path
                    data-name="Path 281"
                    d="M81.893,91.369A51.291,51.291,0,0,1,59.25,86.007c-26.4-12.845-42.76-3.669-42.928-3.565A5.544,5.544,0,0,1,8,77.647V11.523A5.545,5.545,0,0,1,10.759,6.73c.868-.5,21.694-12.206,53.338,3.187,25.373,12.353,44.522-5.589,45.325-6.363a5.549,5.549,0,0,1,9.388,3.988V73.665a5.551,5.551,0,0,1-1.677,3.971C111.111,83.5,98.036,91.369,81.893,91.369Z"
                    transform="translate(-8 -2)"
                  />
                </g>
              </g>
            </svg>
          </div>
        </div>
        <skeleton v-if="loading" width="5%" />
        <div class="replay-comment">
          <skeleton v-if="loading" width="5%" />
          <a
            v-else
            @click="isReplying = !isReplying"
            class="actionButtonClear inline-flex cursor"
          >
            REPLY
          </a>
        </div>
      </div>
      <skeleton v-if="loading" width="5%" />
      <div class="comments" v-show="isReplying">
        <div class="margin-bottom-layout">
          <!-- Start of Post -->
          <div class="new-comment">
            <div class="profile">
              <div>
                <img
                  class="no-margin"
                  src="@/assets/images/iconfinder_1_avatar_2754574.svg"
                  alt=""
                />
              </div>
              <div>
                <span>Username</span>
              </div>
            </div>
            <div class="profile-comment">
              <form action="#">
                <textarea
                  id="textarea"
                  placeholder="Add your comment"
                  v-model="replyComment"
                />
                <div class="button-group">
                  <button type="submit" class="cancel-button" @click="cancel">
                    Cancel
                  </button>
                  <button type="submit" class="submit-button margin-left-responsive" @click="reply">
                    Reply
                  </button>
                </div>
              </form>
            </div>
          </div>
          <!-- End of NewComment -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {protectedFetch} from '../mixins/appUtils';


export default {
  name: "Comment",
  props: {
    comment: {
      body: String,
      postID: Number,
      upVote: Number,
      downVote: Number,
      isActive: Number,
      isFlagged: Number,
      isAnonymous: Number,
      createdAt: String,
      updatedAt: String,
      authorNickname: String,
      authorID: Number,
      commentID: Number,
    },
    loading: Boolean,
  },
  components: {
    Skeleton: () => import("vue-loading-skeleton/src/skeleton.vue"),
  },
  data() {
    return {
      isReplying: false,
      replyComment: `@${this.comment.authorNickname} `,
    };
  },
  methods: {
    async upVote() {
      this.comment.upVote++;
      await protectedFetch(`${process.env.VUE_APP_BASE_API}/post/comment/${this.comment.commentID}/upvote`);
    },
    async downVote() {
      this.comment.downVote++;
      await protectedFetch(`${process.env.VUE_APP_BASE_API}/post/comment/${this.comment.commentID}/downvote`);
    },
    reply() {
      this.$emit("reply", this.formatReply(this.replyComment));
      this.cancel();
    },
    formatReply(reply) {
      // find every @mention and format to <@userID>
      return reply;
    },
    cancel() {
      this.isReplying = false;
      this.replyComment = `@${this.comment.authorNickname} `;
    },
    async deleteComment() {
      await protectedFetch(
        `${process.env.VUE_APP_BASE_API}/post/comment/${this.comment.commentID}`,
        { method: "DELETE",
         }
      );

      this.$emit("delete", this.comment);
    },
    async flag() {
      await protectedFetch(
        `${process.env.VUE_APP_BASE_API}/post/comment/${this.comment.commentID}/flag`
      );
    },
  },
};
</script>

<style lang="scss">
.responsive-margintoppost {
  margin-top: margin-top-card-element-responsive(pc-small);
  @include layout(tablet) {
    margin-top: margin-top-card-element-responsive(pc);
  }
}

.comment {
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

    .flag {
      height: 1.4em;
      margin: 0.2em 0;
    }

    .delete-margin {
      margin: 0.2em 0.7em;
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
.comment {
  margin: margin-top-card-element-responsive(mobile) 0;

  @include layout(tablet) {
    margin: margin-top-card-element-responsive(pc) 0;
  }

  .username {
    font-weight: bold;
  }

  .profile {
    img {
      margin-top: 1em;
    }
  }
}
</style>
