//INIZIO APP VUE
var app = new Vue ({
	el: '#root',
	data: {
		add: '',								//per input di aggiunta elemento
		editTodo: '',							//per input di modifica elemento
		todo: [
			{
				id: 1,							//proprietà per rendere univoco l'oggetto per le chiamate
				titolo: "Nutrire i gatti",
				status: false,					//true: completato
				flag: false						//true: in modifica
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
	computed: {									//computed per visualizzare i completati in fondo
		todoComputed: function () {
			let done = this.todo.filter((done) => done.status === true);
			let undone = this.todo.filter((undone) => undone.status === false);
			return [...undone,...done];
		}
	},
	methods: {
		aggiunta: function () {								//metodo aggiunta in array todo
			let tempObj = {									//oggetto temporaneo da inserire
				id: getNewIdTodo(),							//invoca funzione che genera id successivo all'ultimo
				titolo: this.add,
				status: false,
				flag: false
			}
			this.todo.push(tempObj);						//push in array
			this.add = '';									//flush dell'input di inserimento
			console.log(this.todo);
		},
		completato: function (index) {						//metodo per todo completata
			console.log(index);
			this.todo.forEach(function (item) {			//cerco l'oggetto in base all'id
				if (item.id === index) {
					item.status = true;						//imposta lo stato su completato
				}
			})
			console.log(this.todo);
		},
		modifica: function (index) {						//metodo per modifica del titolo del todo (BONUS)
			this.todo.forEach(function (item) {			//cerco id passato dall'html
				if (item.id === index){
					if (item.flag === false){
						item.flag = true;					//toggle del flag per visualizzare o nascondere input di
					} else {								// ... modifica
						item.flag = false;
					}
				}
			})
		},
		edit: function (index) {							//metodo per keyup inserimento modifica
			this.$refs.inputEdit.focus();
			let tempTxt = this.editTodo;					//salvo valore di input
			this.editTodo = ''
			this.todo.forEach(function (item) {			//cerco id da modificare
				if (item.id === index){
					if (tempTxt !== ''){
						item.titolo = tempTxt;				//modifico il titolo
						item.flag = false;					//nascondo input (fine modifica)
					}
				}
			})
		},
		elimina: function (index) {										//metodo eliminazione todo
			let rmvTemp = this.todo.findIndex( i => i.id === index);    //cerco la posizione indice dell'id ricevuto
			this.todo.splice(rmvTemp,1);						//cancello 1 elemento a partire dall'indice trovato
		}
	}
});
//funzione che cerca id più alto e restituisce id successivo da poter usare per nuovo oggetto
function getNewIdTodo() {
	if(this.todo){
		let maxId = app.todo[0].id;
		app.todo.forEach((item) => {
			if (item.id > maxId){
				maxId = item.id;
			}
		})
	} else {
		maxId = 0;
	}

	return maxId + 1;
}
