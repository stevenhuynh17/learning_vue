new Vue({
  el: '#app',
  data: {
    name: 'Steven Huynh',
    age: 25,
    picture: "https://pbs.twimg.com/profile_images/875395483128049664/8z_jvdLB_400x400.jpg"
  },
  methods: {
    random: function() {
      return Math.random()
    }
  }
});
