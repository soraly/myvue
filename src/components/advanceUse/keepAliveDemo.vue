<template>
  <div>
    <h2>hello,{{ name }}</h2>
    <div>
      <keep-alive>
        <Child v-if="state == 'A'" />
        <ChildB v-if="state == 'B'" />
      </keep-alive>
      <button @click="show('A')">点击显示组件A</button>
      <button @click="show('B')">点击显示组件B</button>
    </div>
  </div>
</template>

<script>
import ChildB from "./ChildB.vue";
import mix from "./mix";

export default {
  data() {
    return {
      name: "xiang2",
      state: "A",
    };
  },
  mixins: [mix],
  mounted() {
    this.getDowtime();
  },
  computed: {},
  methods: {
    show(type) {
      this.state = type;
    },
  },
  components: {
    Child: () => import("./Child.vue"),
    ChildB,
  },
};
</script>