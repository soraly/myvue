<template>
  <div>
    <h2>hello, 我是组件B</h2>
    <div>
    </div>
  </div>
</template>

<script>
export default {
  model: {
    prop: 'name2',
    event: 'inputchange'
  },
  props: ['name2'],
  methods: {
  },
  created(){
    console.log('b create');
  },
  mounted() {
    console.log('b mounted');
  },
  destroyed(){
    console.log('b destroy')
  },
  computed: {
  },
};
</script>