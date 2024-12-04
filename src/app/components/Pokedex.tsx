import React from 'react'
import { IPokemonItem } from "@/app/interfaces/pokemon";
import Link from 'next/link';

interface props {
  pokemonList: IPokemonItem[];
}


function pokedex({ pokemonList }: props) {
  return (
    <div className="h-full w-full">
      <h1 className="mb-2 ">CONTENTS</h1>
      <ul className="overflow-y-auto h-full w-full pb-8">
        {pokemonList.map((pokemon) => (
          <Link className='border-b border-black block py-2 w-full' href={`/pokemon/${pokemon.number}`} key={pokemon.number}>
            <h4>{pokemon.number.toString().padStart(3, "0")}</h4>{" "}
            <span className="uppercase ml-4">{pokemon.name}</span>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default pokedex