<template>
  <div class="page has-navbar" v-nav="{ title: '登录' }">
    <div class="page-content text-center">
      <h2 class="padding" v-text="msg"></h2>
      <router-link class="button button-assertive" to="/home">
        <i class="ion-information-circled"></i> Home
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "Hello! Vonic."
    };
  }
};
</script>
<style>
h2 {
  font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
  color: #888;
}

h3 {
  font-family: Candara, Calibri, Segoe, Segoe UI, Optima, Arial, sans-serif;
  line-height: 150px;
  color: #fff;
}

.page.has-navbar .page-content {
  padding-top: 100px;
}
</style>
