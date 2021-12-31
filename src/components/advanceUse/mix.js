export default {
    data(){
        return {
            time: new Date()
        }
    },
    methods: {
        getDowtime(){
            console.log('现在时间是：', this.time);
          }
    }
}