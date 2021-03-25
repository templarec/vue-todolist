var app = new Vue ({
	el: '#root',
	data: {
		add: '',
		editTodo: '',
		todo: [
			{
				id: 1,
				titolo: "Nutrire i gatti",
				status: false,
				flag: false
			},
			{
				id: 2,
				titolo: "Lavare i piatti",
				status: false,
				flag: false
			},
			{
				id: 3,
				titolo: "Pagare ENEL",
				status: false,
				flag: false
			},
			{
				id: 4,
				titolo: "Mandare mail",
				status: false,
				flag: false
			},
			{
				id: 5,
				titolo: "Corso Boolean",
				status: false,
				flag: false
			},
			{
				id: 6,
				titolo: "Fare la spesa",
				status: false,
				flag: false
			},
			{
				id: 7,
				titolo: "Chiamare Giulia",
				status: false,
				flag: false
			},
			{
				id: 8,
				titolo: "Ritirare Raccomandata",
				status: false,
				flag: false
			}
		]
	},
	computed: {
		todoComputed: function () {
			let done = this.todo.filter((done) => done.status === true);
			let undone = this.todo.filter((undone) => undone.status === false);
			return [...undone,...done];
		}
	},
	methods: {
		aggiunta: function () {
			let tempObj = {
				id: getNewIdTodo(),
				titolo: this.add,
				status: false
			}
			this.todo.push(tempObj);
			this.add = '';
			console.log(this.todo);
		},
		completato: function (index) {
			console.log(index);
			this.todo.forEach(function (item) {
				if (item.id === index) {
					item.status = true;
				}
			})
			console.log(this.todo);
		},
		modifica: function (index) {
			this.todo.forEach(function (item) {
				if (item.id === index){
					if (item.flag === false){
						item.flag = true;
					} else {
						item.flag = false;
					}
				}
			})
		},
		edit: function (index) {
			console.log(this.editTodo, index)
			let tempTxt = this.editTodo;
			this.editTodo = ''
			this.todo.forEach(function (item) {
				if (item.id === index){
					if (tempTxt != ''){
						item.titolo = tempTxt;
						item.flag = false;
					}
				}
			})
			console.log(this.todo);
		}
	}
});
function getNewIdTodo() {
	let maxId = app.todo[0].id;
	app.todo.forEach((item) => {
		if (item.id > maxId){
			maxId = item.id;
		}
	})
	return maxId + 1;
}
