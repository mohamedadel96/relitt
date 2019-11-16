<template>
  <section id="feeds">
    <div class="search rounded py-1 d-flex justify-content-between align-items-center">
      <input class="py-2 px-4" placeholder="what's in your mind" type="text" />
      <div>
        <span class="px-0">ico</span>
        <span class="px-3">ico</span>
      </div>
    </div>

    <div class="posts">
      <div class="post rounded">
        <div class="post-info px-3 mt-3 d-flex justify-content-between align-items-center">
          <div class="d-flex align-items-center py-2">
            <img
              class="border rounded-circle mr-3"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt="friend profile picture"
            />
            <div>
              <p class="name font-weight-bold">Ahmed reda</p>
              <p class="mb-0 job">12 min ago</p>
            </div>
          </div>
          <div>
            <span>ico</span>
          </div>
        </div>

        <div class="post-media mb-3">
          <img
            class="st-pic col-12 px-0"
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
            alt="post picture"
          />
          <div class="pics">
            <img
              class="col-4"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt="post picture"
            />
            <img
              class="col-4"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt="post picture"
            />
            <img
              class="col-4"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
              alt="post picture"
            />
          </div>
        </div>

        <div class="post-decription px-3">
          <p
            class="description"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis necessitatibus culpa iure eum quas dolore, impedit itaque atque illo voluptate enim illum officia! Soluta explicabo repudiandae id reprehenderit, animi mollitia?</p>
          <div class="details d-flex">
            <p class="mb-0">
              <span>12&nbsp;</span>
              <span>Likes</span>
            </p>
            <p class="px-2 mb-0">-</p>
            <p class="mb-0">
              <span>22&nbsp;</span>
              <span>Comments</span>
            </p>
          </div>
        </div>

        <hr class="border mx-3 my-1" />

        <div class="post-options d-flex col-12 px-0 text-center">
          <div class="col-6 py-2 px-0">Like</div>
          <div class="col-6 py-2 px-0">Comment</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#feeds {
  .search {
    background: $background_white;
    box-shadow: 1px 1px 4px #ddd;
    input {
      background: none;
      border: none;
      outline: none;
    }
  }

  .posts {
    .post {
      background: $background_white;
      box-shadow: 1px 1px 4px #ddd;
      .post-info {
        img {
          width: 60px;
          height: 60px;
        }
        .name {
          font-size: 20px;
          margin-bottom: -5px;
        }
        .job {
          color: #777;
          opacity: 0.7;
          font-size: 16px;
        }
      }
      .post-media {
        .st-pic {
          height: 230px;
          object-fit: cover;
        }
        .pics {
          padding-top: 2px;

          img {
            height: 130px;
            padding: 0 2px 0 0;
            object-fit: cover;
            &:last-of-type {
              padding: 0;
            }
          }
        }
      }
      .post-decription {
        .description {
          color: #777;
        }
        .details {
          font-size: 16px;
          color: #777;
          opacity: 0.6;
        }
      }
      .post-options {
        color: #777;
        opacity: 0.7;
      }
    }
  }
}
</style>