import { useState, useEffect } from "react";

export default function ListePokemons() {
	const [index, setIndex] = useState(0);
	const [offset, setOffset] = useState(20);
	const [image, setImage] = useState("");
	const [pokemons, setPokemons] = useState([]);
	const [url, setUrl] = useState({
		current: "https://pokeapi.co/api/v2/pokemon",
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
		// console.log(offset);
	};

	const previous = () => {
		const newUrl = {
			current: url.previous,
			previous: null,
			next: url.current,
		};
		setUrl(newUrl);
		setOffset(offset - 20);
		// console.log(offset);
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
				console.log(data);
			})
			.catch(err => console.error(err));
		// eslint-disable-next-line
	}, [url.current]);

	useEffect(i => {
		while (i <= offset) {
			fetch("https://pokeapi.co/api/v2/pokemon/")
				.then(res => res.json())
				.then(data => {
					setImage(data.sprites.front_default);
				})
				.catch(err => console.log(err));
			i++;
		}
		console.log(offset);
	});

	return (
		<div>
			ListePokemons
			<ul>
				{pokemons.map((pokemon, i) => (
					<li key={i}>
						{pokemon.name}
						{"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
							i +
							".png"}
					</li>
				))}
			</ul>
			{url.previous && <button onClick={previous}>Previous</button>}
			{url.next && <button onClick={next}>Next</button>}
			<img src={image} alt="" />
		</div>
	);
}
