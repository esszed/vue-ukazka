<template>
  <div class="content">
    <span v-if="this.data.attributes.Message.length > 0">
      <MessagePrime
        v-for="message in this.data.attributes.Message"
        :key="message.id"
        :severity="message.typ"
        >{{ message.obsah }}</MessagePrime
      >
    </span>
    <h1>{{ this.data.attributes.Nadpis }}</h1>
    <!-- <p v-html="this.data.attributes.obsah"></p> -->
    <Markdown class="mardkdown" :source="this.data.attributes.obsah" />
    <span v-if="this.data.attributes.Tlacitko">
      <ButtonPrime
        v-for="button in this.data.attributes.Tlacitko"
        :key="button.id"
        :label="button.text"
        @click="handleClick(button.odkaz)"
        :class="`button p-button-${button.typ.toLowerCase()}`"
      ></ButtonPrime>
    </span>
  </div>
</template>

<script>
import Markdown from "vue3-markdown-it";
export default {
  props: ["data"],
  components: {
    Markdown,
  },
  data() {
    return {
      handleClick(odkaz) {
        window.open(odkaz, "_blank");
      },
    };
  },
};
</script>

<style>
.content {
  width: 65%;
  margin: auto;
}
p {
  text-align: left;
}
.p-button {
  margin: 5px !important;
}
</style>
