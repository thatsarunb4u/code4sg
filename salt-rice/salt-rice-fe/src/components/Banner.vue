<template>
  <section id="mainSection">
    <h3>Need to <span class="font-yellow">discuss on something</span>?</h3>

    <p class="subhead">Find Right Person to Advice</p>
    <br />
    <div class="container">
      <a href="#card" class="cta bold">Lai, Lets Talk</a>
    </div>
    <img src="@/assets/images/banner.png" alt="" />
  </section>
</template>

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