<template>
  <v-container>
    <v-textarea
      class="mt-3"
      outlined
      auto-grow
      label="Log"
      :value="logText"
    ></v-textarea>
    <v-btn small color="primary" @click="$emit('input', [])">Clear</v-btn>
  </v-container>
</template>

<script>
export default {
  name: "EchoLog",
  props: {
    value: {
      type: Array, // The logs array
      required: true
    }
  },
  computed: {
    logText() {
      const logs = this.value || [];
      return logs.join("\n");
    }
  }
};
</script>
