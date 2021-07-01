<template>
  <div class="home">
    <div class="text" v-html="marked(content)"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import content from "@/assets/content/home.md";
import marked from "marked";

export default {
  name: "Home",
  data: function () {
    return { content: content, marked: marked };
  },
  components: {},
};
</script>

<style lang="scss">
.text {
  h1,
  h2,
  h3,
  h4,
  h5 {
    color: $grey;
  }
  h1 {
    font-size: 300%;
    font-weight: 200;
  }
  h2 {
    font-size: 130%;
    font-weight: 500;
  }
  hr {
    border-top: $light-grey;
  }
  li,
  p {
    padding-bottom: 0.75rem;
    line-height: 1.6;
    &::marker {
      color: $light-grey;
    }
  }
  a {
    font-weight: 400;
  }
}
</style>
