<template>
  <section id="create-post" class="rounded py-1">
    <div class="post-body">
      <div :class="['col-12 px-0', startPosting ? '' : 'smallHeight']" @click="startPosting = true">
        <textarea-autosize
          placeholder="what's in your mind"
          class="col-12 py-2 px-4"
          v-model="form.body"
          :min-height="40"
          :max-height="350"
        />
      </div>
      <div class="post-media" v-show="startPosting">
        <viewer :images="form.images">
          <div class="d-inline-block position-relative" v-for="(url,i) in form.images" :key="i">
            <img class="m-3 rounded pointer border" :src="url" alt />
            <div
              class="dlt-img border-rounded text-white font-weight-bold pointer"
              @click="form.images.splice(i, 1)"
            >x</div>
          </div>
        </viewer>
      </div>
      <div
        :class="['col-12 px-3 pb-2', {'d-flex flex-wrap align-items-end justify-content-between showBtn' : startPosting}]"
        v-show="startPosting"
      >
        <div class="d-flex">
          <button :disabled="disablePost" @click="$refs.pic.click()" class="btn btn-light">
            <input
              ref="pic"
              @change="uploadFiles('pic')"
              class="d-none"
              type="file"
              name="pic"
              accept="image/*"
              multiple
            />
            <img class="pointer" src="../../../assets/img/icon/path.svg" alt />
            <span class="px-2 d-none d-lg-inline">Picture</span>
          </button>
          <button :disabled="disablePost" @click="$refs.video.click()" class="btn btn-light mx-3">
            <input
              ref="video"
              @change="uploadFiles('video')"
              class="d-none"
              type="file"
              name="video"
              accept="video/*"
              multiple
            />
            <img class="pointer" src="../../../assets/img/icon/path2.png" alt />
            <span class="px-2 d-none d-lg-inline">Video</span>
          </button>
        </div>
        <div class="d-flex">
          <button
            :disabled="disablePost"
            @click="startPosting = !startPosting"
            class="btn btn-danger mx-3"
          >Cancle</button>

          <button
            v-show="!editState"
            :disabled="disablePost"
            @click="post"
            class="btn btn-primary px-4"
          >Post</button>

          <button
            v-show="editState"
            :disabled="disablePost"
            @click="editPost"
            class="btn btn-primary px-4"
          >Edit</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["postData"],
  data() {
    return {
      form: {
        postId: null,
        body: null,
        images: []
      },
      startPosting: false,
      editState: false,
      disablePost: false
    };
  },
  watch: {
    postData: {
      immediate: true,
      handler(val, oldVal) {
        if (val) {
          this.form.postId = val.id;
          this.form.body = val.body;
          this.form.images = val.images.map(img => img.url);
          this.editState = true;
          this.startPosting = true;
          this.$toasted.info("you can edit post now");
          this.$scrollTo("#app");
          this.$emit("clearPostData");
        }
      }
    },
    startPosting(val) {
      if (!val) {
        this.disablePost = false;
        this.startPosting = false;
        this.editState = false;
        this.form.body = null;
        this.form.images = [];
      }
    }
  },
  methods: {
    uploadFiles(ref) {
      try {
        this.disablePost = true;
        let formData = new FormData();

        for (let i = 0; i < this.$refs[ref].files.length; i++) {
          let file = this.$refs[ref].files[i];
          formData.append("files[" + i + "]", file);
        }

        this.$store.dispatch("UPLOADFILES", formData).then(res => {
          this.$toasted.success("uploaded successfully");
          res.map(file => this.form.images.push(file.filePath));

          this.disablePost = false;
        });
      } catch (error) {
        this.$toasted.error("error while uploading files");
      }
    },
    post() {
      try {
        this.disablePost = true;
        this.$store.dispatch("POST", this.form).then(res => {
          this.$toasted.success("your post uploaded successfully");
          this.clearPost();
        });
      } catch (error) {
        console.log("error while uploading post");
      }
    },
    editPost() {
      try {
        this.disablePost = true;
        this.$store.dispatch("EDITPOST", this.form).then(res => {
          this.$toasted.success("your post uploaded successfully");
          this.clearPost();
        });
      } catch (error) {
        console.log("error while uploading post");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#create-post {
  background: $background_white;
  box-shadow: 1px 1px 4px #ddd;
  position: relative;

  .post-media {
    overflow: hidden;

    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
    }
  }

  .post-body {
    .smallHeight {
      height: 40px;
      overflow: hidden;
    }
    textarea {
      background: none;
      border: none;
      outline: none;
    }

    .showBtn {
      -webkit-animation-name: showBtn;
      -webkit-animation-duration: 2s;
      animation-name: showBtn;
      animation-duration: 2s;
      opacity: 1;
    }
  }

  .dlt-img {
    position: absolute;
    top: 21px;
    left: 24px;
    font-size: 22px;
    text-align: center;
    background: #000000c2;
    width: 35px;
    height: 35px;
    z-index: 2;
  }

  @-webkit-keyframes showBtn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  /* Standard syntax */
  @keyframes showBtn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
}
</style>
