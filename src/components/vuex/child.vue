<template>
  <div>
    <h2>this is child,{{ student.name }}</h2>
    <div>
      {{ time }} <button @click="add">add</button> activeCount:
      {{ activeCount }}
      延迟add：<button @click="addSync">延迟add：</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      student: {
        id: 1,
        name: "xiang",
      },
      name: "xiang2",
      time: Date.now(),
    };
  },
  mounted() {
    setTimeout(() => {
      this.student.name = "fenfen";
    }, 1000);
  },
  methods: {
    add() {
      this.$store.commit("add");
      this.$store.commit("addStudent", {
        id: +new Date(),
        name: "hahaha",
        active: true,
      });
    },
    addSync(){
        this.$store.dispatch('add');
    }
  },
  computed: {
    myName: function () {
      return this.name + "hahhaah";
    },
    activeCount: function () {
      return this.$store.getters.activeCount;
    },
  },
  watch: {
    name: function (newval, old) {},
    //用deep来深度监听对象，但是newval == old，因为两个对象指向同一个地址
    student: {
      handler: function (newval, old) {},
      deep: true,
    },
  },
};
</script>