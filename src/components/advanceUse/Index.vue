<template>
  <div>
    <h2>hello,{{ name }}</h2>
    <div>
        <Child v-model="name" v-if="showComponent" />
        <button @click="show">点击显示组件</button>
    </div>
  </div>
</template>

<script>
// import Child from './Child.vue'
export default {
  data() {
    return {
      name: "xiang2",
      showComponent: false,
    };
  },
  mounted() {
  },
  computed: {
  },
  methods: {
    show(){
      this.showComponent = !this.showComponent
    }
  },
  components: {
      Child: ()=>import('./Child.vue')
  }
};
</script>