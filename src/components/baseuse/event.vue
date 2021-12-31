<template>
  <div>
    <h2>hello,{{ student.name }}</h2>
    <div v-for="(val, key, index) in list" :key="key">
      {{ val }}
      {{ key }}
      {{ index }}
    </div>
    <div>
      <p>
        <button @click="handleClick">点我</button>
        <button @click="handleClick2(555, $event)">点我222</button>
      </p>
      <input type="text" v-model.trim="student.name">
      <input type="text" v-model.trim="name">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      student: {
        id: 1,
        name: "白夜",
      },
      list: {
        id: 1,
        name: "xiang",
        sex: "男",
      },
    };
  },
  methods: {
    handleClick(event) {
      console.log(event);
      console.log(event.target, "target");
      console.log(event.currentTarget, "currentTarget");
    },
    handleClick2(val, event) {
      console.log(val, event);
    },
  },
  mounted() {},
};
</script>