<template>
  <section id="changePassword">
    <div class="mb-5 mx-md-3 mx-1">
      <p class="title">Reset your password</p>
    </div>

    <div>
      <form @submit.prevent>
        <div>
          <input 
          class="col-12 border-0 py-3" 
          type="text" 
          placeholder="New password" 
          id="password"
          v-on:keyup="matchPassword"          
          />
        </div>
        <div class="mt-3">
          <input 
          class="col-12 border-0 py-3" 
          type="text" 
          placeholder="Confirm password"  
          id="confirm_password"
          v-on:keyup="matchPassword"
          />
        </div>
          <div class="mb-5 mx-md-3 mx-1">
            <p id="check" class="check" ></p>
           </div>
        <div class="mt-4">
          <button :disabled="!this.flag" @click="submit" class="btn btn-primary btn-block py-3">Done</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      flag:false,
  
    };
  },
  methods: {
    async submit() {
      try {
        let res = await this.$store.dispatch("CHANGEPASSWORD", this.form);

        this.$router.push("/registration");
      } catch (error) {
        console.log(error);
      }
    },
    matchPassword(form){

      if (document.getElementById('password').value == document.getElementById('confirm_password').value) {
          document.getElementById('check').style.color = 'green';
          document.getElementById('check').innerHTML = 'matching';
          this.flag=true
        } else {
          document.getElementById('check').style.color = 'red';
          document.getElementById('check').innerHTML = 'not matching';
          this.flag=false
        }
    }

  }
};
</script>

<style lang="scss" scoped>
#changePassword {
    margin-top: 100px;
    margin-bottom: 100px;

  p.title {
    color: $fontColor_white;
    text-align: center;
    font-weight: bold;
  }

  input {
    border-radius: 9px;
    outline: none;
  }

  .py-3 {
    padding-top: 0.8rem !important;
    padding-bottom: 0.8rem !important;
  }

  a {
    text-decoration: none;
  }
  p.check{
    padding-top: 25px;
    text-align: center;
    font-weight: bold;

  }
  
}
</style>
