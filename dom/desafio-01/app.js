new Vue({
  el: "#desafio",
  data: {
    nome: "Matheus",
    idade: "26",
    imagem: "https://files.cod3r.com.br/curso-vue/vue.jpg",
  },
  methods: {
    multiplyAge() {
      return this.idade * 3;
    },
    random() {
      return Math.random();
    },
  },
});
