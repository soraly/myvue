<template>
  <div>
    <h2>hello,{{ name2 }}</h2>
    <div>
      <input type="text" :value="name2" @input="$emit('inputchange', $event.target.value)">
    </div>
  </div>
</template>

<script>
import mix from './mix'


export default {
  mixins: [mix],
  model: {
    prop: 'name2',
    event: 'inputchange'
  },
  props: ['name2'],
  created(){
    console.log('aaa create');
    this.getDowtime()
  },
  mounted() {
    console.log('aaa mounted');
  },
  destroyed(){
    console.log('a destroy')
  },
  computed: {
  },
};
</script>