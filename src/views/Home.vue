<template>
  <div class="home">
    <header>
      <h1>David Newbury</h1>
      <SocialMedia />
    </header>
    <section class="rich-text" v-html="marked(bio)"></section>
    <section class="rich-text" v-html="marked(content)"></section>
    <footer></footer>
  </div>
</template>

<script>
// @ is an alias to /src
import content from "@/assets/content/home.md";
import bio from "@/assets/content/bio.md";
import marked from "marked";
import SocialMedia from "@/components/SocialMedia.vue";
export default {
  name: "Home",
  data: function () {
    return { content: content, marked: marked, bio: bio };
  },
  components: { SocialMedia },
};
</script>

<style lang="scss">
.rich-text {
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
