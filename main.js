var app = new Vue ({
	el: '#root',
	data: {
		add: '',
		todo: [
			{
				id: 1,
				titolo: "Nutrire i gatti",
				status: false
			},
			{
				id: 2,
				titolo: "Lavare i piatti",
				status: false
			},
			{
				id: 3,
				titolo: "Pagare ENEL",
				status: false
			},
			{
				id: 4,
				titolo: "Mandare mail",
				status: false
			},
			{
				id: 5,
				titolo: "Corso Boolean",
				status: false
			},
			{
				id: 6,
				titolo: "Fare la spesa",
				status: false
			},
			{
				id: 7,
				titolo: "Chiamare Giulia",
				status: false
			},
			{
				id: 8,
				titolo: "Ritirare Raccomandata",
				status: false
			}
		]
	},
	component: {

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
