<template>
  <section id="mainSection">
    <h3>Need to <span class="font-yellow">discuss on something</span>?</h3>

    <p class="subhead">Find Right Person to Advice</p>
    <br />
    <div class="container">
      <a href="#card" class="cta bold">Lai, Lets Talk</a>
    </div>

    <div @click="showDemo" style="cursor:pointer">
      <a class="cte bold"
        ><img class="play-button" src="@/assets/images/play.png" />Take a
        tour</a
      >
    </div>

   <!--  <button @click="showDemo" class="demo" style="display: none">
      <img class="play-button" src="@/assets/images/play.png" /> Take a tour
    </button> -->

    <modal name="modal-player" :height="600" :adaptive="true">
      <div slot="top-right">
        <button style="cursor: pointer" @click="$modal.hide('modal-player')">
          ❌
        </button>
      </div>
      <div class="player-container">
        <vue-core-video-player v-bind:src="video_url"></vue-core-video-player>
      </div>
    </modal>
    <!-- <div v-if="showModal" id="modal-player">
      <div class="player-container">
        <vue-core-video-player src="/demo_mobile.mp4"></vue-core-video-player>
      </div>
    </div> -->

    <img src="@/assets/images/banner.png" alt="" />
  </section>
</template>
<script>
export default {
  name: "Banner",
  data() {
    return {
      video_url: "/demo_desktop.mp4",
    };
  },
  created() {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      this.video_url = "/demo_mobile.mp4";
    } else {
      this.video_url = "/demo_desktop.mp4";
    }
    console.log(this.video_url);
  },
  methods: {
    async showDemo() {
      this.$modal.show("modal-player");
    },
    /* async getVidURL() {
      console.log("Getting video URL")
      let videoURL = "";
      
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        videoURL="/demo_mobile.mp4"
      } else {
        videoURL="/demo_desktop.mp4"
      }
      console.log(videoURL)
      return videoURL
    } */
  },
  computed: {
    /* getVidURL() {
      console.log("Getting video URL")
      //let videoURL = "";
      
      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        this.video_url="/demo_mobile.mp4"
      } else {
        this.video_url="/demo_desktop.mp4"
      }
      console.log(this.video_url)
      return this.video_url
    } */
  },
};
</script>
<style lang="scss" scoped>
section#mainSection {
  background-size: 100%;
  background-position: left bottom;
  height: 100%;
  background-color: color(beidge);
  padding: 1.8em side-space(mobile) 0 0;

  @include layout(tablet) {
    padding: 1.8em side-space(mobile) 0 0;
  }

  @include layout(pc) {
    padding: 1.8em side-space(pc) 0 0;
  }

  h3 {
    @include layout(tablet) {
      font-size: calc(#{$font-size} + 3pt);
    }
  }

  h3,
  .subhead {
    text-align: right;
    position: relative;
    z-index: 3;

    @include layout(pc) {
      font-size: calc(#{$font-size} + 8pt);
    }
  }

  .subhead {
    font-weight: 400;
  }

  .cta {
    background: color(yellow);
    padding: 1.3em 0.7em 1.3em 1.3em;
    text-decoration: none;
    z-index: 1;
    color: black;
    clip-path: polygon(
      7% 19%,
      100% 8%,
      100% 83%,
      59% 82%,
      51% 100%,
      42% 83%,
      0 83%
    );
    position: absolute;
    right: 35%;

    @include layout(tablet) {
      right: side-space(mobile);
      padding: 1.2em 0.9em 1.2em 1.2em;
      font-size: calc(#{$font-size} + 1pt);
      margin-top: 2%;
    }

    @include layout(pc) {
      right: side-space(pc)-1.2em;
      padding: 1.2em 0.9em 1.2em 1.2em;
      font-size: calc(#{$font-size} + 4pt);
      margin-top: 5%;
    }
  }

  /deep/ .vm--modal {
    top: auto !important;
    left: 10% !important;
    height: auto !important;
    width: 80% !important;
  }

  .cte {
    right: 8.2em;
    padding: 0.8em 0.8em 0.8em 0.2em;
    margin-top: 20%;
    position: absolute;
    background: #ffc529;
    text-decoration: none;
    color: black;
    font-size: 12pt;
    font-weight: bold;
    width: 149px;
    text-align: right;

    @include layout(tablet) {
      right: side-space(mobile);
      padding: 0.9em 0.9em 0.9em 0.9em;
      font-size: calc(#{$font-size} + 1pt);
      margin-top: 12%;
      width: 167px;
    }

    @include layout(pc) {
      right: side-space(pc)-1.2em;
      padding: 0.7em 0.9em 0.7em 2.2em;
      font-size: calc(#{$font-size} + 4pt);
      margin-top: 15%;
      width: 216px;
    }
  }

  .play-button {
    width: 24px;
    margin: 11px 13px;
    padding: 0;
    z-index: 2;
    cursor: pointer;

    @include layout(tablet) {
      margin: 14px 19px;
    }

    @include layout(pc) {
      margin: 15px 28px;
    }
  }

  .demo img {
    float: right;
  }

  .demo {
    background: color(yellow);
    padding: 0.7em;
    text-decoration: none;
    z-index: 1;
    color: black;
    position: absolute;
    right: 35%;
    cursor: pointer;
    display: inline-block;

    @include layout(tablet) {
      right: side-space(mobile);
      padding: 1.2em 0.9em 1.2em 1.2em;
      font-size: calc(#{$font-size} + 1pt);
      margin-top: 7%;
    }

    @include layout(pc) {
      right: side-space(pc)-1.2em;
      padding: 1.2em 0.9em 1.2em 1.2em;
      font-size: calc(#{$font-size} + 4pt);
      margin-top: 15%;
    }
  }

  img {
    width: 100%;
    position: inherit;
    bottom: 0;
    left: 0;
    @include layout(tablet) {
      width: 65%;
      margin-top: -15%;
      margin-left: -35%;
    }
  }
}
</style>