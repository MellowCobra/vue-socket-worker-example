let socket = null;

self.addEventListener(
  "message",
  function(e) {
    const { command = null, data = null } = e.data;
    switch (command) {
      case "connect":
        return connect(data);
      case "disconnect":
        return disconnect();
      case "send":
        return doSend(data);
      default:
        return;
    }
  },
  false
);

function connect(url) {
  socket = new WebSocket(url);
  socket.onopen = onOpen;
  socket.onclose = onClose;
  socket.onmessage = onMessage;
  socket.onerror = onError;
}

function disconnect() {
  socket.close();
  socket = null;
}

function doSend(message) {
  socket.send(message);
}

function onOpen() {
  self.postMessage("CONNECTED");
}

function onClose() {
  self.postMessage("DISCONNECTED");
}

function onMessage(e) {
  self.postMessage(`RESPONSE: ${e.data}`);
}

function onError(e) {
  self.postMessage(`ERROR: ${e.data}`);
}
