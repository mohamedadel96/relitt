<template>
  <section id="ManageNotifications">
    <slot></slot>
    <b-modal id="ManageNotifications" hide-backdrop content-class="shadow" hide-header hide-footer>
      <div>
        <div>
          <div
            class="title px-3 py-1 border-top border-bottom d-flex justify-content-between align-items-center"
          >
            <p class="mb-0">Friends</p>
            <toggle-button
              class="mb-0"
              v-model="friends"
              :sync="true"
              :width="41"
              color="#007bff50"
              :switch-color="{checked: '#007bff', unchecked: '#fafafa'}"
              :margin="0"
            />
          </div>

          <div
            v-for="(option,i) in options.friends"
            :key="i"
            :class="['mx-3 py-3 d-flex justify-content-between align-items-center', options.friends.length - 1 !== i ? 'border-bottom' : '']"
          >
            <p class="mb-0">{{option.name}}</p>
            <toggle-button
              class="mb-0"
              v-model="form[option.key]"
              :sync="true"
              :width="41"
              color="#007bff50"
              :switch-color="{checked: '#007bff', unchecked: '#fafafa'}"
              :margin="0"
            />
          </div>
        </div>
        <div>
          <div
            class="title px-3 py-1 border-top border-bottom d-flex justify-content-between align-items-center"
          >
            <p class="mb-0">Relitt</p>
            <toggle-button
              class="mb-0"
              v-model="relitt"
              :sync="true"
              :width="41"
              color="#007bff50"
              :switch-color="{checked: '#007bff', unchecked: '#fafafa'}"
              :margin="0"
            />
          </div>

          <div
            v-for="(option,i) in options.relitt"
            :key="i"
            :class="['mx-3 py-3 d-flex justify-content-between align-items-center', options.relitt.length - 1 !== i ? 'border-bottom' : '']"
          >
            <p class="mb-0">{{option.name}}</p>
            <toggle-button
              class="mb-0"
              v-model="form[option.key]"
              :sync="true"
              :width="41"
              color="#007bff50"
              :switch-color="{checked: '#007bff', unchecked: '#fafafa'}"
              :margin="0"
            />
          </div>
        </div>
      </div>
    </b-modal>
  </section>
</template>
<script>
import { Bus } from "../../../main";
export default {
  data() {
    return {
      friends: false,
      relitt: false,
      form: {
        notification_followed: 0,
        notification_comments: 0,
        notification_likes: 0,
        notification_friend_activity: 0,
        notification_relitt_updates: 0
      },
      options: {
        friends: [
          {
            name: "New post by followed user",
            key: "notification_followed"
          },
          {
            name: "Comments",
            key: "notification_comments"
          },
          {
            name: "Likes",
            key: "notification_likes"
          },
          {
            name: "Someone follow you",
            key: "notification_friend_activity"
          }
        ],
        relitt: [
          {
            name: "New Updates",
            key: "notification_relitt_updates"
          }
        ]
      }
    };
  },
  computed: {
    profile() {
      return this.$store.getters.profile;
    },
    friendsData() {
      return [
        this.form.notification_followed,
        this.form.notification_comments,
        this.form.notification_likes,
        this.form.notification_friend_activity
      ].join();
    },
    relittData() {
      return [this.form.notification_relitt_updates].join();
    }
  },
  watch: {
    profile: {
      immediate: true,
      handler(val) {
        this.form.notification_followed =
          val.settings.notification_followed === 1 ? true : false;
        this.form.notification_comments =
          val.settings.notification_comments === 1 ? true : false;
        this.form.notification_likes =
          val.settings.notification_likes === 1 ? true : false;
        this.form.notification_friend_activity =
          val.settings.notification_friend_activity === 1 ? true : false;
        this.form.notification_relitt_updates =
          val.settings.notification_relitt_updates === 1 ? true : false;
      }
    },
    form: {
      deep: true,
      handler(val) {
        this.$store.dispatch("NOTIFICATIONSETTINGS", val);
      }
    },
    friends(val) {
      if (val) {
        this.options.friends.map(item => {
          this.form[item.key] = val;
        });
      }
    },
    relitt(val) {
      if (val) {
        this.options.relitt.map(item => {
          this.form[item.key] = val;
        });
      }
    },
    friendsData: {
      immediate: true,
      handler(val) {
        let check = val.split(",").filter(item => item === "false");
        if (check.length) {
          this.friends = false;
        } else {
          this.friends = true;
        }
      }
    },
    relittData: {
      immediate: true,
      handler(val) {
        let check = val.split(",").filter(item => item === "false");
        if (check.length) {
          this.relitt = false;
        } else {
          this.relitt = true;
        }
      }
    }
  },
  mounted() {
    Bus.$on("openManageNotifications", () => {
      this.$bvModal.show("ManageNotifications");
    });
  }
};
</script>

<style lang="scss">
#ManageNotifications {
  .title {
    background: #007bff10;
  }
  .vue-js-switch > div {
    height: 16px !important;
    div {
      box-shadow: 2px 2px 4px #bbb !important;
      top: -4px !important;
    }
  }
  .modal-body {
    padding: 12px 0;
  }
  .modal-dialog {
    margin: 80px 10px 0 auto;
    position: relative;
    outline: none;
  }
  .menu-item {
    outline: none;
  }
  .modal-content {
    border: none;
  }
  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 365px;
    }
  }
  @media (max-width: 576px) {
    .modal-dialog {
      margin: 80px 10px 0 10px !important;
    }
  }
}
</style>