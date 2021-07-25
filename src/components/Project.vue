<template>
  <div class="project">
    <a :href="project.url">{{ project.name }} ({{ yearText }})</a>
    <div v-html="htmlDesc" class="description"></div>
    <small v-if="project.code"
      ><a href="project.code">View Project on GitHub</a></small
    >
  </div>
</template>

<script>
import marked from "marked";

export default {
  name: "Project",
  data: function () {
    return {};
  },
  props: ["project"],
  computed: {
    htmlDesc: function () {
      return marked(this.project.description);
    },
    yearText: function () {
      const p = this.project;
      return p.endYear ? `${p.year}-${p.endYear}` : p.year;
    },
  },
};
</script>

<style lang="scss">
.description p {
  margin-bottom: 0;
  margin-top: 0.25rem;
  &:last-child {
    padding-bottom: 0;
  }
}
.project {
  margin-bottom: 1.5rem;
}
</style>
