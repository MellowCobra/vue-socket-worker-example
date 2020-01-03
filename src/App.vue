<template>
  <v-app>
    <v-app-bar app>
      <div class="d-flex align-center">
        <h2>Vue Socket Worker</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/MellowCobra/vue-socket-worker-example"
        target="_blank"
        text
      >
        <span class="mr-2">Github</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <echo></echo>
    </v-content>
  </v-app>
</template>

<script>
import Echo from "./views/Echo.vue";

export default {
  name: "App",

  components: {
    Echo
  },

  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
