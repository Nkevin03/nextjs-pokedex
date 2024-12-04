import pokemonList from '@/app/pokemon.json';
import Pokedex from '@/app/components/Pokedex';

console.log(pokemonList);

export default function Home() {
  return (
      <Pokedex pokemonList={pokemonList} />
  );
}
