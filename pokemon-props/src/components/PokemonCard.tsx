import type { Pokemon } from '../types';
import '../App.css'; // Ensure styles are available

interface Props {
    pokemon: Pokemon;
}

export default function PokemonCard({ pokemon }: Props) {
    // Format ID to always be 3 digits (e.g., 025 instead of 25)
    const formattedId = pokemon.id.toString().padStart(3, '0');

    return (
        <div className="pokemon-card">
            <div className="pokemon-image-container">
                <img
                    className="pokemon-image"
                    src={pokemon.imageUrl}
                    alt={pokemon.name}
                />
            </div>

            <div className="pokemon-id">#{formattedId}</div>
            <h2 className="pokemon-name">{pokemon.name}</h2>

            <div className="pokemon-stats">
                <div className="stat">
                    <span className="stat-label">Height</span>
                    <span className="stat-value">{pokemon.height / 10}m</span>
                </div>
                <div className="stat">
                    <span className="stat-label">Weight</span>
                    <span className="stat-value">{pokemon.weight / 10}kg</span>
                </div>
            </div>
        </div>
    );
}
