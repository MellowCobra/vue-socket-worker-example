<template>
  <v-container class="mt-10">
    <v-row>
      <v-col>
        <echo-config
          @connect="connect"
          @disconnect="disconnect"
          @send="doSend"
        ></echo-config>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col>
        <echo-log v-model="logs"></echo-log>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EchoConfig from "@/components/EchoConfig.vue";
import EchoLog from "@/components/EchoLog.vue";

export default {
  name: "Echo",

  components: {
    EchoConfig,
    EchoLog
  },

  data() {
    return {
      worker: null,
      logs: []
    };
  },

  methods: {
    makeWorker() {
      this.worker = new Worker("socket-worker.js");
      this.worker.addEventListener("message", e => {
        this.writeLog(e.data);
      });
      this.worker.postMessage();
    },
    commandWorker(command, data) {
      if (!this.worker) this.makeWorker();
      this.worker.postMessage({ command, data });
    },

    connect(url) {
      this.commandWorker("connect", url);
    },
    disconnect() {
      this.commandWorker("disconnect");
    },
    doSend(msg) {
      this.writeLog(`SENT: ${msg}`);
      this.commandWorker("send", msg);
    },

    writeLog(msg) {
      this.logs.push(msg);
    }
  },

  created() {
    this.makeWorker();
  }
};
</script>
