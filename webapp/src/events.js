const listeners = {};

export const registerListener = (key, id, listener) => {
  if (!listeners[key]) listeners[key] = [];
  listeners[key].push({
    id,
    listener,
  });
};

export const removeListener = (key, id) => {
  if (listeners[key]) {
    listeners[key] = listeners[key].filter(
      (listenerObject) => listenerObject.id !== id
    );
  }
};
export const emit = (event) => {
  if (listeners[event]) {
    listeners[event].forEach((listenerObject) => listenerObject.listener());
  }
};
