import { useState, useEffect } from "react";

export default function ListePokemons() {
	const [offset, setOffset] = useState(20);
	const [pageId, setPageId] = useState(1);
	const [id, setId] = useState(1);
	const [pokemons, setPokemons] = useState([]);
	const [type, setType] = useState([]);
	const [url, setUrl] = useState({
		current: "https://pokeapi.co/api/v2/pokemon/",
		next: null,
		previous: null,
	});

	const next = () => {
		const newUrl = {
			current: url.next,
			previous: url.current,
			next: null,
		};
		setUrl(newUrl);
		setOffset(offset + 20);
		setPageId(pageId + 20);
	};

	const previous = () => {
		const newUrl = {
			current: url.previous,
			previous: null,
			next: url.current,
		};
		setUrl(newUrl);
		setOffset(offset - 20);
		setPageId(pageId - 20);
	};

	useEffect(() => {
		fetch(url.current)
			.then(res => res.json())
			.then(data => {
				setPokemons(data.results);
				setUrl({
					current: url.current,
					next: data.next,
					previous: data.previous,
				});
				fetch("https://pokeapi.co/api/v2/pokemon/" + id + "")
					.then(res => res.json())
					.then(data => {
						setType(
							data.types.map(type => type.type.name).join(", ")
						);
						setId(id + 1);
						console.log(data.types);
					})
					.catch(err => console.error(err));
				console.log(data);
				console.log(id);
			})
			.catch(err => console.error(err));
	}, [url.current]);

	return (
		<div>
			ListePokemons
			<ul>
				{pokemons.map((pokemon, i) => (
					<li key={i}>
						{pokemon.name}
						{pageId + i}
						{type}
						<img
							src={
								"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
								(pageId + i) +
								".png"
							}
							alt=""
						/>
						<button>Add</button>
					</li>
				))}
			</ul>
			{url.previous && <button onClick={previous}>Previous</button>}
			{url.next && <button onClick={next}>Next</button>}
		</div>
	);
}
