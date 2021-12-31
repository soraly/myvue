<template>
  <div>
    <h2>hello,{{ student.name }}</h2>
    <div>
      {{ count }}
    </div>
    <button @click="add">点我加一</button>
    CHILD:
    <Child />
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import Vuex from 'vuex'
import Child from './child.vue'

Vue.use(Vuex)
console.log(Vuex,'vuexxx')

const store = new Vuex.Store({
  state: {
    count: 1,
    studentList: [
      {id: 1, name: 'xiang', active: false},
      {id: 2, name: 'fenfen', active: false},
      {id: 3, name: 'xiaomi', active: true},
    ]
  },
  getters: {
    activeCount: state => {
      return state.studentList.filter(one=>one.active).length
    }
  },
  mutations: {
    add(state){
      state.count++
    },
    addStudent(state,val){
      console.log(val,'val')
      state.studentList.push(val)
    }
  },
  actions: {
    add(context){
      setTimeout(()=>{
        context.commit('add')
      },1000)
    }
  }
})
console.log(store,'storestore');
store.state.count ++;
store.commit('add');
console.log(store.state.count,'count..')

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
  store: store,
  methods: {
    add(){
      this.$store.commit('add');
      console.log(this.$store.state.count,'this.$store.state.count')
    }
  },
  mounted() {
    console.log(this.$store)
    setTimeout(() => {
      this.student.name = "fenfen";
    }, 1000);
  },
  computed: {
    count: function(){
      return store.state.count
    }
  },
  components: {
    Child
  }
};
</script>