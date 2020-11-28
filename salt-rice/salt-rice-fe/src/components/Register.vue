<template>
  <div>
    <h1>Register</h1>
    <form>
      <label for="email">Email</label>
      <input id="email" type="email" placeholder="Enter Your Email.." />
      <label for="password">Password</label>
      <input id="password" type="password" placeholder="Enter Your Password.." />
      <label for="nickname">Nickname</label>
      <input id="nickname" type="text" placeholder="Enter Your Nickname.." />
      <label for="age">Age</label>
      <input id="age" type="number" placeholder="Enter Your Age.." />
      <label for="gender">Gender</label>
      <div id="gender" class="margin-top">
        <div class="width-50">
          <input type="radio" id="male" name="gender" value="male" />
          <label for="male" class="genderLabel">Male</label>
        </div>
        <div class="width-50">
          <input type="radio" id="female" name="gender" value="female" />
          <label for="female" class="genderLabel">Female</label>
        </div>
      </div>
      <label for="avatar" class="avatar-label">Profile Picture</label>
      <div id="avatar">
        <ul class="avatar">
          <li class="avatar-img">
            <img
              class=""
              src="@/assets/images/iconfinder_1_avatar_2754574.svg"
              alt=""
            />
          </li>
          <li class="avatar-img">
            <img
              class=""
              src="@/assets/images/iconfinder_1_avatar_2754574.svg"
              alt=""
            />
          </li>
          <li class="avatar-img">
            <img
              class=""
              src="@/assets/images/iconfinder_1_avatar_2754574.svg"
              alt=""
            />
          </li>
          <li class="avatar-img">
            <img
              class=""
              src="@/assets/images/iconfinder_1_avatar_2754574.svg"
              alt=""
            />
          </li>
          <li class="avatar-img">
            <img
              class=""
              src="@/assets/images/iconfinder_1_avatar_2754574.svg"
              alt=""
            />
          </li>
          <li class="avatar-img">
            <img
              class=""
              src="@/assets/images/iconfinder_1_avatar_2754574.svg"
              alt=""
            />
          </li>
          <li class="avatar-img">
            <img
              class=""
              src="@/assets/images/iconfinder_1_avatar_2754574.svg"
              alt=""
            />
          </li>
          <li class="avatar-img">
            <img
              class=""
              src="@/assets/images/iconfinder_1_avatar_2754574.svg"
              alt=""
            />
          </li>
          <li class="avatar-img">
            <img
              class=""
              src="@/assets/images/iconfinder_1_avatar_2754574.svg"
              alt=""
            />
          </li>
          <li class="avatar-img">
            <img
              class=""
              src="@/assets/images/iconfinder_1_avatar_2754574.svg"
              alt=""
            />
          </li>
          <li class="avatar-img">
            <img
              class=""
              src="@/assets/images/iconfinder_1_avatar_2754574.svg"
              alt=""
            />
          </li>
          <li class="avatar-img">
            <img
              class=""
              src="@/assets/images/iconfinder_1_avatar_2754574.svg"
              alt=""
            />
          </li>
        </ul>
      </div>
      <div class="button-group">
        <router-link class="cancel-button" tag="button" to="/" type="button"
          >Cancel</router-link
        >
        <button class="submit-button margin-left-responsive" type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>