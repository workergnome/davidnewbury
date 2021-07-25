<template>
  <div class="home">
    <header>
      <h1>David Newbury</h1>
      <SocialMedia />
    </header>

    <section class="rich-text" v-html="marked(bio)"></section>
    <section class="projects rich-text">
      <h2>Projects</h2>
      <Project
        v-for="project in sortedProjects"
        :key="project.name"
        :project="project"
      />
    </section>
    <section class="rich-text" v-html="marked(content)"></section>
    <footer></footer>
  </div>
</template>

<script>
// @ is an alias to /src
import content from "@/assets/content/home.md";
import bio from "@/assets/content/bio.md";
import marked from "marked";
import projects from "@/assets/content/projects.json";
import SocialMedia from "@/components/SocialMedia.vue";
import Project from "@/components/Project.vue";
export default {
  name: "Home",
  data: function () {
    return { content: content, marked: marked, bio: bio, projects: projects };
  },
  components: { SocialMedia, Project },
  computed: {
    sortedProjects: function () {
      let allProjects = JSON.parse(JSON.stringify(this.projects.projects));
      return allProjects.sort((p1, p2) => (p1.year < p2.year ? 0 : -1));
    },
  },
};
</script>

<style lang="scss">
section {
  border-top: 1px solid #e7f1ef;
  margin-top: 1rem;
  padding-top: 0.5rem;
  &:first-of-type {
    border-top: 0px none;
  }
}
.rich-text {
  hr {
    border-top: $light-grey;
  }
  li,
  p {
    padding-bottom: 0.75rem;
    line-height: 1.6;
    clear: both;
    &::marker {
      color: $light-grey;
    }
  }
  a {
    font-weight: 400;
  }
  li img {
    float: left;
    width: 100px;
    margin-right: 2rem;
  }
}
</style>
