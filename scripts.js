
const toDoListApp = {
    data() {
        return {
            toDo: [],
            newToDo: { done: false }

        }
    },
    methods: {
        addToDo: function () {
            if (this.newToDo.text) {
                this.toDo.push(this.newToDo);
                this.newToDo = { dono: false };
                localStorage.setItem("todos", JSON.stringify(this.toDo));
            } else {
                alert("Enter a text");
            };
        },
        storeTodos() {
            localStorage.setItem("todos", JSON.stringify(this.toDo));
        }
    },
    created() {
        this.toDo = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.toDo;
    },
    updated() {
        localStorage.setItem("todos", JSON.stringify(this.toDo));
    }
}


Vue.createApp(toDoListApp).mount('#app');