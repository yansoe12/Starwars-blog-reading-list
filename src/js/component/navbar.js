import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
	const params = useParams();
  // let history = useHistory();

  // const handleLogout = () => {
  //   let onLogged = actions.logout();

  //   if(!onLogged){
  //     history.push("/login");
  //   }
  // }

	return (
		<nav className="navbar sticky-top bg-light">
			<div className="container d-flex justify-content-between">
              <div className="col">
                      <Link className="navbar-brand" to="/">
                      <img src="https://androidspain.es/wp-content/uploads/2015/12/Star-wars..png" alt="" style={{width: "110px", height: "50px"}} />
                      
                      </Link>
              </div>
              <div className="btn-group">
                  <button className="btn btn-lg  btn-outline-light bg-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {/* <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> */}
                      Favorites {store.listFavorite.length}
                  </button>
                      <ul className="dropdown-menu"  aria-labelledby="dropdownMenuButton"  style={{maxWidth: "300px"}} >
                          {store.listFavorite.map((item, id) => 
                          <li className="dropdown-item text-left" style={{fontSize: "0.6rem!important", maxWidth: "100%!important"}} key={id}>{item.name}
                              <button type="button" className="btn btn-danger btn-sm float-end " onClick={() => actions.DeleteFavorite(item)}>
                                X
                              </button>
                          </li>)}
                      </ul>
              </div>
        </div>
      </nav>
	);
};
