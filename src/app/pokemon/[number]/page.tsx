import { IPokemon, IPokemonSpecied } from "@/app/interfaces/pokemon";
import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }: { params: { number: string } }) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.number}`);
  const pokemonData: IPokemon = await res.json();

  const redSpecied = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${params.number}/`
  );
  const pokemonSpecied: IPokemonSpecied = await redSpecied.json();

  console.log(pokemonSpecied.flavor_text_entries);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex p-4 items-center">
        <div className="flex flex-col items-center ">
          <Image
            src={pokemonData.sprites.front_default!}
            alt={pokemonData.name}
            width={150}
            height={150}
          />
          <p>N. {pokemonData.id.toString().padStart(3, "0")}</p>
        </div>
        <div className="flex flex-col justify-center ">
          <h1 className=" uppercase font-bold">{pokemonData.name}</h1>
          <p>HT: {pokemonData.height}</p>
          <p>WT: {pokemonData.weight}</p>
          <p>BE: {pokemonData.base_experience}</p>
          <h2>Abilities</h2>
          <ul>
            {pokemonData.abilities.map((ability) => (
              <li key={ability.ability.name}>{ability.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <hr className="w-full border-black bordet-4" />

      <p className="p-4 text-lg">
        {
          pokemonSpecied.flavor_text_entries.find(
            (entry) => entry.language.name === "it"
          )?.flavor_text
        }
      </p>

      <Link href="/">Back</Link>
    </div>
  );
}
