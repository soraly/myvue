<template>
  <div>
    <h2>
      <input type="text" v-model="value" />
      <button @click="addTodo">提交</button>
    </h2>
  </div>
</template>

<script>
import event from "./event";
export default {
  data() {
    return {
      value: "",
    };
  },
  //   props: ['value'],
  methods: {
    addTodo() {
      //父子组件交互
      this.$emit("addTodo", this.value);

      //自定义事件
      event.$emit("onAdd", this.value);
    },
  },

  //生命周期顺序
  beforeCreate() {
    console.log("todo before create");
  },
  created() {
    console.log("todo created");
  },
  beforeMount() {
    console.log("todo before mount");
  },
  mounted() {
    console.log("todo mounted");
  },
  beforeUpdate() {
    console.log("todo beforeUpdate");
  },
  updated() {
    console.log("todo updated");
  },
  beforeDestroy() {
    console.log("todo beforeDestroy");
  },
  destroyed() {
    console.log("todo destroyed");
  },

  computed: {},
};
</script>