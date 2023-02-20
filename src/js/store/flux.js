const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			ListCharacter:[],
			ListPlanets:[],
			DetailCharacters:{},
			DetailPlanets:{},
			listFavorite:[],
			ClassNameFavorite :"btn btn-outline-danger"
			// ClassNameFavorite :" "
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			changeClassName: async ()=>{
				const store =getStore();
				if( store.ClassNameFavorite == "btn btn-outline-danger"){
					setStore({
						ClassNameFavorite : "btn btn-danger"
					})
				}
				// else{
				// 	setStore({
				// 		ClassNameFavorite :"btn btn-outline-danger"
				// 	})
				// }

			},

		getListFavorites: async (favorite)=>{
			const store =getStore()
			if(store.listFavorite.includes(favorite)){
				getActions().DeleteFavorite(favorite)
			}else{
				setStore({
					listFavorite: [...store.listFavorite , favorite]
				})
			}
		},

		//Deleteing favorite lists

		DeleteFavorite: async (favorite)=>{
			let store = getStore()
			setStore({
				listFavorite: store.listFavorite.filter((item)=> item !== favorite)
			})
		},
		getListCharacter: async ()=>{
			try{
				const response = await fetch("https://swapi.dev/api/people/")
                 const data = await response.json();
				 let  listPerson = data.results;

				 setStore({
					ListCharacter : listPerson 
				 })


			}catch(err){
				console.log(err)
			}
		},

		getPlanets:async ()=>{
			try{
				const response = await fetch("https://swapi.dev/api/planets/")
				const data =  await response.json();
				let listPlanets1 = data.results;
                 
				setStore({
					ListPlanets : listPlanets1
				})

				// console.log(ListPlanets)
			}catch(err){
				console.log(err)
			}
		},
		getDetailCharacter: async (id) => {

			try {
				const response = await fetch("https://swapi.dev/api/people/" + id)
				const data = await response.json();
				// console.log(data);
				// let propiedades = data.results;
				// console.log(propiedades);
				setStore({
					DetailCharacters : data
				})
			}catch (err) {
				console.log(err);
			}

		},
		getDetailplanets :async (id) =>{
			try{
				const response = await fetch("https://swapi.dev/api/planets/" + id)
				const data =  await response.json();
				
                 
				setStore({
					DetailPlanets : data 
				})
			}catch(err){
				console.log(err)
			}
		  }
        }
	};
};

export default getState;
