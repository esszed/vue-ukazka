<template>
  <nav>
    <router-link to="/">Home</router-link>
    <span v-for="view in this.views" :key="view.id">
      |
      <router-link :to="{ path: `/pages/${view.attributes.route}` }">{{
        view.attributes.route
      }}</router-link>
    </span>
  </nav>
  <router-view />
</template>

<script>
export default {
  data() {
    return {
      views: null,
    };
  },
  mounted() {
    fetch("http://localhost:1337/api/views", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => (this.views = data.data));
  },
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
