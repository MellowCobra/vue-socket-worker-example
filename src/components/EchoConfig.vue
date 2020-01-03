<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <v-text-field
            outlined
            label="Location"
            v-model="location"
          ></v-text-field>
          <v-row class="ma-0">
            <v-btn
              small
              color="primary"
              class="mr-1"
              @click="$emit('connect', location)"
              >Connect</v-btn
            >
            <v-btn small color="warning" @click="$emit('disconnect')"
              >Disconnect</v-btn
            >
          </v-row>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            outlined
            label="Message"
            v-model="message"
          ></v-text-field>
          <v-row class="ma-0">
            <v-btn small color="primary" @click="$emit('send', message)"
              >Send</v-btn
            >
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "EchoConfig",
  data() {
    return {
      location: "wss://echo.websocket.org",
      message: ""
    };
  }
};
</script>
