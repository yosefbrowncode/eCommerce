import { reactive } from "vue";

export const store = reactive({
  count: 0,
});

export const cart = reactive({
  count: 0,
});

export const showing = reactive({
  shows: false,
});
