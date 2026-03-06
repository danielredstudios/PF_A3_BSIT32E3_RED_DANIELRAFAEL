import PokemonCard from './components/PokemonCard';
import type { Pokemon } from './types';
import './App.css'; // Import the new styles

interface AppProps {
  pokemonData: Pokemon;
}

export default function App({ pokemonData }: AppProps) {
  return (
    <div className="app-container">
      <h1 className="app-title">Pokédex Explorer</h1>
      <PokemonCard pokemon={pokemonData} />
    </div>
  );
}
