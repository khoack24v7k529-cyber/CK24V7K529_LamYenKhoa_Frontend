<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <div class="card">
          <div class="card-header text-center">
            <h4>Đăng nhập</h4>
          </div>

          <div class="card-body">
            <form @submit.prevent="login">
              <div class="form-group">
                <label for="username">Tên đăng nhập</label>
                <input
                  id="username"
                  type="text"
                  class="form-control"
                  v-model="username"
                  required
                />
              </div>

              <div class="form-group">
                <label for="password">Mật khẩu</label>
                <input
                  id="password"
                  type="password"
                  class="form-control"
                  v-model="password"
                  required
                />
              </div>

              <div v-if="errorMessage" class="alert alert-danger">
                {{ errorMessage }}
              </div>

              <button type="submit" class="btn btn-primary btn-block">
                Đăng nhập
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",

  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
  },

  methods: {
    login() {
      if (this.username === "test" && this.password === "test123") {
        localStorage.setItem("isLoggedIn", "true");
        this.$router.push({ name: "contactbook" });
      } else {
        this.errorMessage = "Tên đăng nhập hoặc mật khẩu không đúng!";
      }
    },
  },
};
</script>
