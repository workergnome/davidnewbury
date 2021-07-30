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
  margin-bottom: 0.75rem;
}
h2 {
  font-size: 130%;
  font-weight: 500;
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
