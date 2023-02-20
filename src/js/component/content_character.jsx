import React, {Component, useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";



export const ContentCharacter = () => {

    const {store, actions} = useContext(Context);
    const tab = <>&nbsp;&nbsp;&nbsp;&nbsp;</>;
              
    
        return(
            <div className="row">
                <h1 className="">Characters</h1>
                
                {store.ListCharacter.map((item, id) =>
                 <div key={id} className="card m-3  border-light" style={{width: "18rem"}}>
                   <img src={"https://starwars-visualguide.com/assets/img/characters/"+ (id+1) +".jpg"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                              <h5 className="card-title">{item.name}</h5>
                              <p className="card-text">Gender: { item.gender}</p>
                              <p className="card-text">Hair color: { item.hair_color}</p>
                              <p className="card-text">Eye color: { item.eye_color}</p>
                              <Link className="btn btn-outline-light bg-danger" to={"/detail_characters/"+ (id+1) } >Learn More</Link>{tab}{tab}{tab}{tab}
                              {/* <Link className= {store.classNameFavoritos} to="/" onClick={()=> actions.getListaFavoritos(item)}></Link> */}
                              <Link className={store.ClassNameFavorite } to="/" onClick={() => actions.getListFavorites(item)}><i className="far fa-heart"></i></Link>
                        </div>
                 </div>)}
            </div>) }
  
  