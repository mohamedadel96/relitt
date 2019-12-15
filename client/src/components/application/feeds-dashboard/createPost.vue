<template>
  <section id="create-post" class="rounded py-1">
    <div
      class="close border rounded py-1 px-2 pointer overlay"
      v-show="postBtn"
      @click="postBtn = false"
    >x</div>
    <div class="post-media" v-show="postBtn">
      <img v-for="(url,i) in form.images" :key="i" class="m-3" :src="url" alt />
    </div>
    <div class="post-body d-flex justify-content-between align-items-start">
      <textarea
        @focus="postBtn = true"
        v-model="form.body"
        class="py-2 px-4"
        placeholder="what's in your mind"
      ></textarea>

      <div
        v-show="postBtn"
        :class="{ 'd-flex flex-wrap align-items-between justify-content-end enlargement' : postBtn}"
      >
        <div class="col-12 px-0 d-flex align-items-start justify-content-end pt-2">
          <span class="px-0">
            <input
              ref="video"
              @change="uploadFiles('video')"
              class="d-none"
              type="file"
              name="video"
              accept="video/*"
              multiple
            />
            <img
              @click="$refs.video.click()"
              class="pointer"
              src="../../../assets/img/icon/path2.png"
              alt
            />
          </span>
          <span class="px-3">
            <input
              ref="pic"
              @change="uploadFiles('pic')"
              class="d-none"
              type="file"
              name="pic"
              accept="image/*"
              multiple
            />
            <img
              @click="$refs.pic.click()"
              class="pointer"
              src="../../../assets/img/icon/path.svg"
              alt
            />
          </span>
        </div>
        <div
          :class="['col-12 px-3 pb-2 postBtn', {'d-flex align-items-end justify-content-end showBtn' : postBtn}]"
          v-show="postBtn"
        >
          <button :disabled="disablePost" @click="post" class="btn btn-primary">post</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: {
        body: null,
        images: []
      },
      postBtn: false,
      disablePost: false
    };
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
          res.map(file => {
            this.form.images.push(file.filePath);
          });

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
    clearPost() {
      this.disablePost = false;
      this.postBtn = false;
      this.form.body = null;
      this.form.images = [];
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
    textarea {
      background: none;
      border: none;
      outline: none;
      height: 40px;
      width: 98%;
      resize: none;
      transition: 0.4s;

      &:focus {
        height: 250px;
      }
    }

    .enlargement {
      -webkit-animation-name: elongation;
      /* Safari 4.0 - 8.0 */
      -webkit-animation-duration: 2s;
      /* Safari 4.0 - 8.0 */
      animation-name: elongation;
      animation-duration: 2s;
      height: 250px;
    }

    .postBtn {
      position: absolute;
      height: 100;
      bottom: 0;
      opacity: 0;
    }

    .showBtn {
      -webkit-animation-name: showBtn;
      /* Safari 4.0 - 8.0 */
      -webkit-animation-duration: 2s;
      /* Safari 4.0 - 8.0 */
      animation-name: showBtn;
      animation-duration: 2s;
      opacity: 1;
    }
  }

  .close {
    position: absolute;
    top: 8px;
    right: 50%;
  }

  @-webkit-keyframes elongation {
    from {
      height: auto;
    }

    to {
      height: 250px;
    }
  }

  /* Standard syntax */
  @keyframes elongation {
    from {
      height: auto;
    }

    to {
      height: 250px;
    }
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
