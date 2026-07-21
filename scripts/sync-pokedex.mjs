import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const GRAPHQL_URL = 'https://graphql.pokeapi.co/v1beta2';
const scriptDir = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(scriptDir, '..', 'kit', 'pokedex', 'data');

const speciesQuery = `
  query PokedexSpecies {
    pokemonspecies(limit: 2000, order_by: {id: asc}) {
      id
      name
      pokemonspeciesnames {
        name
        language { name official }
      }
    }
  }
`;

const movesQuery = `
  query PokedexMoves {
    move(limit: 2000, order_by: {id: asc}) {
      id
      name
      movenames {
        name
        language { name official }
      }
    }
  }
`;

async function queryPokeApi(query) {
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ query })
  });

  if (!response.ok) {
    throw new Error(`PokéAPI respondeu com ${response.status}.`);
  }

  const payload = await response.json();
  if (payload.errors) {
    throw new Error(payload.errors.map((error) => error.message).join('\n'));
  }
  return payload.data;
}

function localizedNames(entries) {
  return Object.fromEntries(
    entries
      .filter((entry) => entry.language.official)
      .map((entry) => [entry.language.name, entry.name])
  );
}

const [speciesData, movesData] = await Promise.all([
  queryPokeApi(speciesQuery),
  queryPokeApi(movesQuery)
]);

const generatedAt = new Date().toISOString();
const pokemon = speciesData.pokemonspecies.map((entry) => ({
  id: entry.id,
  slug: entry.name,
  names: localizedNames(entry.pokemonspeciesnames)
}));
const moves = movesData.move.map((entry) => ({
  id: entry.id,
  slug: entry.name,
  names: localizedNames(entry.movenames)
}));

await mkdir(outputDir, { recursive: true });
await Promise.all([
  writeFile(
    resolve(outputDir, 'pokemon-index.json'),
    JSON.stringify({ generated_at: generatedAt, source: GRAPHQL_URL, pokemon }),
    'utf8'
  ),
  writeFile(
    resolve(outputDir, 'move-index.json'),
    JSON.stringify({ generated_at: generatedAt, source: GRAPHQL_URL, moves }),
    'utf8'
  )
]);

console.log(`Pokédex sincronizada: ${pokemon.length} espécies e ${moves.length} movimentos.`);
