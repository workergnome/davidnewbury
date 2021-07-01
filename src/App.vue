<template>
  <div id="app">
    <!--     <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Spartan";
  src: url("/fonts/Spartan-VariableFont_wght.ttf") format("truetype");
  font-weight: 100 1000;
}
html {
  background: $white;
  color: $black;
  font-family: Spartan;
}
#app {
  max-width: 800px;
  margin: auto;
}

a {
  font-weight: bold;
  color: $orange;

  &.router-link-exact-active {
    color: $dark-orange;
    text-decoration: none;
  }
}
</style>
