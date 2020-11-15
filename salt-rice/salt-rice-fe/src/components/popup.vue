<template>
  <div class="edit-profile hide" id="editprofile-screen">
    <div class="head">
      <img src="images/iconfinder_1_avatar_2754574.svg" alt="toogle user-icon" class="usericon-edit"
           id="user-icon-edit">

      <a href="#">
        <img src="images/edit.png" alt="toogle icon-pen" class="icon-pen" id="icon-pen-picture">
      </a>
    </div>
    <div class="border"></div>
    <div class="body">
      <div class="nickname">
        <p>Nick Name</p>
        <a href="#"><img src="images/edit.png" alt="toogle icon-pen" class="icon-pen"
                         id="icon-pen-nickname"></a>
      </div>
      <div class="inline-flex">
                        <span>
                            <svg class="star" xmlns="http://www.w3.org/2000/svg" width="15.77" height="15"
                                 viewBox="0 0 31.242 29.713">
                                <path
                                    d="M15.621,1.318,20.448,11.1l10.794,1.569L23.431,20.28l1.844,10.75-9.654-5.075L5.967,31.031,7.811,20.28,0,12.668,10.794,11.1Z"
                                    transform="translate(0 -1.318)"/>
                            </svg>
                            <svg class="star" xmlns="http://www.w3.org/2000/svg" width="15.77" height="15"
                                 viewBox="0 0 31.242 29.713">
                                <path
                                    d="M15.621,1.318,20.448,11.1l10.794,1.569L23.431,20.28l1.844,10.75-9.654-5.075L5.967,31.031,7.811,20.28,0,12.668,10.794,11.1Z"
                                    transform="translate(0 -1.318)"/>
                            </svg>
                            <svg class="star" xmlns="http://www.w3.org/2000/svg" width="15.77" height="15"
                                 viewBox="0 0 31.242 29.713">
                                <path
                                    d="M15.621,1.318,20.448,11.1l10.794,1.569L23.431,20.28l1.844,10.75-9.654-5.075L5.967,31.031,7.811,20.28,0,12.668,10.794,11.1Z"
                                    transform="translate(0 -1.318)"/>
                            </svg>
                            <svg class="star" xmlns="http://www.w3.org/2000/svg" width="15.77" height="15"
                                 viewBox="0 0 31.242 29.713">
                                <path
                                    d="M15.621,1.318,20.448,11.1l10.794,1.569L23.431,20.28l1.844,10.75-9.654-5.075L5.967,31.031,7.811,20.28,0,12.668,10.794,11.1Z"
                                    transform="translate(0 -1.318)"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15.77" height="15"
                                 viewBox="0 0 31.242 29.713">
                                <path
                                    d="M15.621,1.318,20.448,11.1l10.794,1.569L23.431,20.28l1.844,10.75-9.654-5.075L5.967,31.031,7.811,20.28,0,12.668,10.794,11.1Z"
                                    transform="translate(0 -1.318)" fill="#ffc529"/>
                            </svg>
                        </span>
        <span id="rating_value">4.98</span></div>
      <div class="margin-top"><a href="" class="actionButtonClear"><span>25 </span><span>Posts</span></a>
      </div>
      <div class="margin-top"><span>25 </span><span>Comments</span></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "popup"
}
</script>

<style scoped>

svg.star {
  fill: #ffc529;
  cursor: pointer;
}

.edit-profile .head #icon-pen-picture {
  width: 25px;
  top: 4em;
  right: 4em;
}
.icon-login a {
  margin-left: 1em;
}

.edit-profile {
  position: absolute;
  background-color: #fff;
  width: 155px;
  right: 7%;
  top: 73px;
  border: 1px solid #000000;
  padding: 2em;
  text-align: center;
  z-index: 10;
}


@media (min-width: 1024px) {
  .edit-profile {
    right: 7%;
    top: 69px;
  }
}

.edit-profile .head {
  display: inline-block;
  margin-bottom: 1em;
}

.edit-profile .head #icon-pen-picture {
  width: 25px;
  position: absolute;
  top: 4em;
  right: 4em;
}

.border {
  border-bottom: 1px solid #000000;
}

.inline-flex {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
}

.edit-profile .body .nickname {
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
}

.edit-profile .body .nickname #icon-pen-nickname {
  width: 25px;
  height: 22px;
  margin: 1em 0.5em;
}

.edit-profile .body #rating_value {
  margin-left: 0.5em;
}

.margin-top {
  margin-top: 1em;
}

</style>