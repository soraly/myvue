<template>
  <div>
    <h2>
      i am list
    </h2>
    <div>
     <ul>
         <li v-for="item in list" :key="item.id">{{item.name}}
             <button @click="deleteItem(item)">删除</button>
         </li>
     </ul>
    </div>
  </div>
</template>

<script>
import event from './event'
export default {
  data() {
    return {
    };
  },
  props: ['list'],
  
  //生命周期顺序
  beforeCreate() {
    console.log("list before create");
  },
  created() {
    console.log("list created");
  },
  beforeMount() {
    console.log("list before mount");
  },
  mounted() {
    console.log("list mounted");
  },
  beforeUpdate() {
    console.log("list beforeUpdate");
  },
  updated() {
    console.log("list updated");
  },
  beforeDestroy() {
    console.log("list beforeDestroy");
  },
  destroyed() {
    console.log("list destroyed");
  },

  computed: {
  },
  methods: {
      deleteItem(item){
          event.$emit('onDelete', item.id);
      }
  }
  
};
</script>