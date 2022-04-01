<template>
  <PageComponent v-if="obsah" :data="obsah" />
</template>

<script>
import PageComponent from "@/components/PageComponent.vue";
export default {
  components: {
    PageComponent,
  },
  data() {
    return {
      obsah: null,
      getViews: () => {
        fetch(
          `http://localhost:1337/api/views/${this.$route.params.name}?populate=*`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
          .then((response) => response.json())
          .then((data) => (this.obsah = data.data));
      },
    };
  },

  mounted() {
    this.getViews();
    this.$watch(
      () => this.$route.params,
      () => {
        this.getViews();
      }
    );
  },
};
</script>
