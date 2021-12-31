<template>
  <div>
    <h2>hello,{{ student.name }}</h2>
    <div>
      {{ time }}
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
  computed: {
    myName: function () {
      return this.name + "hahhaah";
    },
  },
  watch: {
    name: function (newval, old) {
      console.log(newval, old, "watch");
    },
    //用deep来深度监听对象，但是newval == old，因为两个对象指向同一个地址
    student: {
      handler: function (newval, old) {
        console.log(newval == old);
      },
      deep: true
    },
  },
};
</script>