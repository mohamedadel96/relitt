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
              v-model="form.friends"
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
              v-model="form.relitt"
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
      form: {
        friends: false,
        relitt: false,
        notification_followed: false,
        notification_comments: false,
        notification_likes: false,
        notification_friend_activity: false,
        notification_relitt_updates: false
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
  @media (min-width: 576px) {
    .modal-content {
      border: none;
      &::after {
        content: "";
        width: 15px;
        height: 15px;
        display: block;
        position: absolute;
        top: -7.5px;
        right: 31%;
        background: white;
        transform: rotate(45deg);
        z-index: 1;
      }
    }
    .modal-dialog {
      max-width: 365px;
    }
  }
}
</style>