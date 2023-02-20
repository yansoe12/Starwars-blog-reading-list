import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

// console.log("Hello Planets")
export const DetailPlanets = props =>{
    const { store , actions } = useContext(Context);
	const params = useParams();
    // console.log(params)

    useEffect(()=>{
		actions.getDetailplanets(params.id);
        window.scrollTo(0 ,0)
    },[]);

    return (
        <div className="jumbotron">
			<div className="card mb-3" style={{ maxWidth: "80%"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                           {/* {store.ListPlanets.map((item, id) =>
                            <div key={id} className="card m-3  border-light" style={{ width: "18rem" }}>
                                  { params === 0 ? <img src={"https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png"} className="card-img-top" /> : <img src={"https://starwars-visualguide.com/assets/img/planets/" + (params + 1) + ".jpg"} className="card-img-top" />}                    
                            </div> )} */}
                        </div>


                                <div className="col-md-8">
                                        <div className="card-body">
                                            <h2 className="card-title ">{store.DetailPlanets?.name}</h2>
                                            <p className="card-text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus lobortis mi ut tempor. Curabitur ultrices dapibus nisl. Sed dictum tempor ligula, eget varius enim dignissim eu. Maecenas ut sapien sagittis odio elementum eleifend convallis sollicitudin erat. Praesent finibus ligula turpis, ac placerat enim euismod ut. Maecenas laoreet dolor leo, ut ultricies ex ultricies vel.</p>
                                            <p className="card-text "><small className="text-muted">Last updated 3 secs ago</small></p>
                                            {/* console.log(store.DetaiCharacters.name) */}
                                            <h5>Name : {store.DetailPlanets?.name}</h5>
                                            <h5>Population:{store.DetailPlanets?.population}</h5>
                                            <h5>Gravity : {store.DetailPlanets?.gravity}</h5>

                                        </div>
                                </div>			  
			        </div>
		    </div>
        </div>
    );
 };

DetailPlanets.propTypes = {
    match: PropTypes.object
 };
