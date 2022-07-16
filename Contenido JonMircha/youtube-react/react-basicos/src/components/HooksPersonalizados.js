import React from "react";
import { useFetch } from "../hooks/useFetch";

export default function HooksPersonalizados() {
	let url = "https://pokeapi.co/api/v2/pokemon/";
	// console.log(useFetch());

	let { data, isPending, error } = useFetch(url);
	return (
		<>
			<h2>Hooks Personalizados</h2>
			<h3>{JSON.stringify(data)}</h3>
			<h3>{JSON.stringify(isPending)}</h3>
			<h3>{JSON.stringify(error)}</h3>
		</>
	);
}
