<template>
	<section id="authSection">
		<div :class="`alert alert-${notification.type}`" v-show="notification.show">{{ notification.message }}</div>
		<p class="introduction">
			An anonymous platform to look for life’s answers or advice. Tap into the wealth of life experience and
			knowledge of those that have gone before you, in a safe and open environment.
		</p>

		<div class="authSectionContainer" id="authSectionContainer">
			<div class="form-container sign-in-container">
				<form @submit.prevent="resetComp" class="form">
					<h1>Reset Password</h1>
					<span>using your account</span>
					<label for="phone-login">Username</label>
					<input
						id="phone-login"
						v-model="mobile"
						type="text"
						maxlength="100"
						placeholder="Mobile no. / Email"
					/>
					<label for="pass-login">New Password</label>
					<input id="pass-login" v-model="password" type="password" placeholder="Password" required />
					<label for="pass-login-confirm">New Password Confirmation</label>
					<input
						id="pass-login-confirm"
						v-model="passwordconfirm"
						type="password"
						placeholder="Password"
						required
					/>

					<button class="color-white" type="submit">Reset</button>
				</form>
			</div>
			<div class="overlay-container">
				<div class="overlay">
					<div class="overlay-panel overlay-left">
						<h1>Already registered?</h1>
						<p>
							To keep connected with us please login with your personal info.
						</p>
						<button class="ghost" id="signIn" @click="rightPanelActive = !rightPanelActive">
							Sign In
						</button>
					</div>
					<div class="overlay-panel overlay-right">
						<h1>Remember your password?</h1>
						<p>Proceed to login page!</p>
						<button class="ghost" id="signUp" @click="goToLogin">
							Login
						</button>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import { mapActions } from 'vuex';
/* import store from '../store'; */

export default {
	name: 'ResetPassword',
	components: {},
	data() {
		return {
			notification: {
				show: false,
				type: 'success',
				message: '',
			},
			mobile: '',
			password: '',
			passwordconfirm: '',
		};
	},
	methods: {
		...mapActions(['resetPassword']),
		async resetComp() {
			if (!this.mobile || !this.password || !this.passwordconfirm) return;
			if (this.passwordconfirm != this.password) {
				this.notification.message = 'Passwords do not match. Pls retry!';
				this.notification.show = true;
				this.notification.type = 'error';
				return;
			}
			let response = await this.resetPassword({
				username: this.mobile,
				password: this.password,
			});
			console.log(response.status);
			if (response.status === 200) {
				this.notification.message = 'Password Successfully Reset!';
				this.notification.show = true;
				this.notification.type = 'success';

				setTimeout(() => {
					this.$router.push(`/`);
				}, 2000);
			}
		},
		goToLogin() {
			this.$router.push(`/`);
		},
	},
	/*  async beforeRouteEnter(to, from, next) {
    try {
      if(to.path === '/login'){
            console.log('target login page:'+store.getters.isLoggedIn);
            if(store.getters.isLoggedIn){
                console.log('logged in already');
                this.$router.push(`/`);
                return
            }
        }
        next()
    } catch (err) {
      console.error(err);
      // todo: put up 500 page error
    }
  }, */
};
</script>
<style lang="scss">
* {
	box-sizing: border-box;
}
header .logo {
	@include layout(pc) {
		padding-bottom: 1em;
	}
}

.alert {
	margin: 10px 0px;
	padding: 12px;
	border-radius: 5px;
	font-family: 'Open Sans', sans-serif;
	font-size: 0.9rem;
	font-weight: 300;
	letter-spacing: 1px;
}

.alert-info {
	color: #00529b;
	background-color: #bde5f8;
	border: 1px solid darken(#bde5f8, 15%);
}

.alert-warn {
	color: #9f6000;
	background-color: #feefb3;
	border: 1px solid darken(#feefb3, 15%);
}

.alert-error {
	color: #d8000c;
	background-color: #ffbaba;
	border: 1px solid darken(#ffbaba, 15%);
}

.alert-success {
	color: #4f8a10;
	background-color: #dff2bf;
	border: 1px solid darken(#dff2bf, 15%);
}

section#authSection {
	padding: side-space(mobile-mini) side-space(mobile);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: -20px 0 50px;
	margin-top: 20px;

	@include layout(tablet) {
		padding: side-space(mobile);
	}

	@include layout(pc) {
		padding: side-space(mobile) side-space(pc);
	}

	.cancel-button {
		float: left;
	}

	.genderLabel {
		margin-left: 0.5em;
	}

	#gender {
		display: flex;
	}

	ul.avatar {
		display: block;
		padding-left: 0;
		margin-top: 1em;

		li.avatar-img {
			display: inline-block;
			margin: 1em 1em 1em 0;
		}
	}

	button {
		border-radius: 20px;
		border: 1px solid color(yellow);
		background: color(yellow);
		color: color(black);
		font-size: 12px;
		font-weight: bold;
		padding: 12px 45px;
		letter-spacing: 1px;
		text-transform: uppercase;
		transition: transform 80ms ease-in;
		cursor: pointer;

		&:active {
			transform: scale(0.95);
		}

		&:focus {
			outline: none;
		}
	}

	.color-white {
		color: color(white);
	}

	.ghost {
		color: black;
		background: transparent;
		border-color: color(black);

		&.resp {
			display: block;
			@include layout(tablet) {
				display: none;
			}
		}
	}

	.authSectionContainer {
		background: #fff;
		box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
		position: relative;
		overflow: hidden;
		width: 768px;
		max-width: 100%;
		min-height: 480px;

		.form-container {
			position: absolute;
			top: 0;
			height: 100%;
			transition: all 0.6s ease-in-out;
		}

		.form {
			background: #fff;
			display: flex;
			flex-direction: column;
			padding: 0 50px;
			height: 100%;
			justify-content: center;
			text-align: center;

			label {
				text-align: left;
			}

			input {
				border: 1px solid #ccc;
				padding: 12px 20px;
				margin: 8px 0;
				width: 100%;
			}
		}

		form.sign-up-form {
			.first,
			.second {
				text-align: left;
				width: 100%;
			}

			.first {
				left: 0;
			}

			.second {
				left: 100%;
			}
		}

		.sign-in-container {
			left: 0;
			@include layout(tablet) {
				width: 50%;
				top: 0;
			}
		}

		.sign-up-container {
			opacity: 0;
			width: 100%;
			background-color: #333;
			@include layout(tablet) {
				width: 50%;
			}
		}

		.overlay-container {
			display: none;
			position: absolute;
			top: 0;
			left: 50%;
			width: 50%;
			height: 100%;
			overflow: hidden;
			transition: transform 0.6s ease-in-out;

			@include layout(tablet) {
				display: block;
			}
		}

		.overlay {
			color: color(black);
			position: relative;
			left: -100%;
			height: 100%;
			width: 200%;
			transform: translateY(0);
			transition: transform 0.6s ease-in-out;
			background: #ffc529;
			background: linear-gradient(to right, #ffc529, #ffdf85) no-repeat 0 0 / cover;
		}

		.overlay-panel {
			position: absolute;
			top: 0;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			padding: 0 40px;
			height: 100%;
			width: 50%;
			text-align: center;
			transform: translateY(0);
			transition: transform 0.6s ease-in-out;
		}

		.overlay-right {
			right: 0;
			transform: translateY(0);
		}

		.overlay-left {
			transform: translateY(-20%);
		}

		h1 {
			font-weight: bold;
			margin: 0;
		}

		p {
			font-size: 14px;
			font-weight: 100;
			line-height: 20px;
			letter-spacing: 0.5px;
			margin: 20px 0 30px;
		}

		span {
			font-size: 12px;
			margin-bottom: 1.5em;
		}

		a {
			font-size: 14px;
			text-decoration: none;
			margin: 15px 0;
		}
	}

	.right-panel-active {
		.sign-up-container {
			transform: translateX(0);
			opacity: 1;
		}

		.sign-in-container {
			transform: translateX(-100%);
		}

		@include layout(tablet) {
			.overlay-container {
				transform: translateX(-100%);
			}

			.sign-up-container {
				transform: translateX(100%);
				opacity: 1;
			}

			.sign-in-container {
				transform: translateX(0);
			}

			.overlay {
				transform: translateX(50%);
			}

			.overlay-left {
				transform: translateY(0);
			}

			.overlay-right {
				transform: translateY(20%);
			}
		}
	}
	.right-panel-sign-up-active {
		.first {
			transform: translateX(-100%);
		}

		.second {
			transform: translateX(-100%);
			opacity: 1;
		}
	}
}

.introduction {
	width: 90%;
	padding-bottom: 10px;
	@include layout(tablet) {
		width: 70%;
	}
}
</style>
