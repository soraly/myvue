<template>
  <div>
    <h2>
      <Input @addTodo="handleAdd" />
    </h2>
    <div>
      <List :list="list" />
    </div>
  </div>
</template>

<script>
import Input from "./Input.vue";
import List from "./List.vue";
import event from "./event";

export default {
  data() {
    return {
      value: "",
      list: [
        { id: 1, name: "吃饭" },
        { id: 2, name: "睡觉" },
        { id: 3, name: "打豆豆" },
      ],
    };
  },
  methods: {
    //父组件响应子组件的事件
    handleAdd(val) {
      return;
      this.list.push({
        id: +new Date(),
        name: val,
      });
    },
    handleAddCustom(val) {
      this.list.push({
        id: +new Date(),
        name: val,
      });
    },
    handleDelete(id) {
      for (var i = 0; i < this.list.length; i++) {
        if(this.list[i].id == id){
          console.log(i,'iii');
          break;
        }
      }

     this.list.splice(i,1)
    },
  },
  //生命周期顺序
  beforeCreate(){
    console.log('index before create')
  },
  created() {
     console.log('index created')
    //接受自定义事件
    event.$on("onAdd", this.handleAddCustom);

    event.$on("onDelete", this.handleDelete);
  },
  beforeMount(){
    console.log('index before mount')
  },
  mounted() {
    console.log('index mounted')
  },
  beforeUpdate(){
    console.log('index beforeUpdate')
  },
  updated(){
    console.log('index updated')
  },
  beforeDestroy(){
    console.log('index beforeDestroy')
  },
  destroyed(){
    console.log('index destroyed')
  },
  computed: {},
  components: {
    List,
    Input,
  },
  beforeDestroy() {
    event.$off("onAdd", this.handleAddCustom);
  },
};
</script>