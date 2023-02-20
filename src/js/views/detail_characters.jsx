import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";



// console.log("Welcome Hello World")
 export const DetailCharacter = props =>{
    const { store , actions } = useContext(Context);
	const params = useParams();
    // console.log(params)

    useEffect(()=>{
		actions.getDetailCharacter(params.id);
        window.scrollTo(0 ,0)
    },[]);

	//time updating 
	const d = new Date();
    let seconds = d.getSeconds();

    return (
        <div className="jumbotron">
			{/* card */}
			<div className="card mb-3" style={{ maxWidth: "80%"}}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={"https://starwars-visualguide.com/assets/img/characters/" + (params.id) + ".jpg"} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h2 className="card-title ">{store.DetailCharacters?.name}</h2>
							<p className="card-text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus lobortis mi ut tempor. Curabitur ultrices dapibus nisl. Sed dictum tempor ligula, eget varius enim dignissim eu. Maecenas ut sapien sagittis odio elementum eleifend convallis sollicitudin erat. Praesent finibus ligula turpis, ac placerat enim euismod ut. Maecenas laoreet dolor leo, ut ultricies ex ultricies vel.</p>
							<p className="card-text "><small className="text-muted">Last updated {seconds} secs  ago</small></p>
							Date.getSeconds()
							{/* Date.getSeconds() */}
							{/* console.log(store.DetaiCharacters.name) */}
                            <h5>Name : {store.DetailCharacters.name}</h5>
                            <h5>Birth Year :{store.DetailCharacters.birth_year}</h5>
                            <h5>Gender : {store.DetailCharacters.gender}</h5>

						</div>
					</div>
				</div>				  
			</div>
		</div>
    )
 }

 DetailCharacter.propTypes = {
    match: PropTypes.object
 };

//  export default DetaiCharacters ;