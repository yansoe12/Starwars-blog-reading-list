import React ,{ useEffect} from "react";
import "../../styles/home.css";

import {ContentCharacter} from "../component/content_character.jsx"
import {ContentPlanets} from "../component/content-planets.jsx"
export const Home = () => {
	useEffect(()=>{
		window.scrollTo(0 ,0)
	},[]);

	return (
		 <div>
			<div>
			<ContentCharacter/>
			</div>
			<div>
			<ContentPlanets/>
			</div>
			
		 </div>
	)
	}