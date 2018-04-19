new Vue({
  el: '#app',
  data: {
    value: 0
  },
  methods: {
    showInfo: function(event) {
      this.value = event.target.value
    },
    alertMe: function() {
      alert('Alert!');
    }
  }
});
