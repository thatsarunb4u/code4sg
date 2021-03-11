<template>
	<modal name="modal-popup" class="popup" :adaptive="true" @before-close="this.sendClosed">
		<div slot="top-right">
			<button style="cursor: pointer" @click="this.closed">
				❌
			</button>
		</div>
		<div>
			<h4 class="popupText">Authentication Required</h4>
			<p class="popupText">{{ this.popupMsg }}</p>
			<div class="d-flex justify-content-center pb-2">
				
				<button class="login-button" @click="goToLogin">
					Login
				</button>
			</div>
		</div>
	</modal>
</template>
<script>
export default {
	name: 'Popup',
	props: {
		popupMsg: String,
	},
	data() {
		return {};
	},
	created() {},
	mounted() {
		this.$modal.show('modal-popup');
	},
	methods: {
		closed() {
			//console.log("called");
			this.$modal.hide('modal-popup');
			this.sendClosed();
		},
		sendClosed() {
			this.$emit('popupClose');
		},
		async goToLogin() {
			await this.$router.push('/login');
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
<style lang="scss">
.popupText {
	text-align: center;
}
.d-flex {
	display: flex;
}
.justify-content-center {
	justify-content: center;
}
.vm--modal {
	height: auto !important;
}
.pb-2 {
	padding-bottom: 20px;
}
</style>
