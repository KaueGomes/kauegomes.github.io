# Garagem C-137

Portal independente de jogos feito com Jekyll e publicado no GitHub Pages.
O site usa uma identidade visual escura única.

## Conteúdo

- `/kit/` — ferramentas para jogos.
- `/kit/pokedex/` — Pokédex Multilíngue.
- `/guias/` — guias de mecânicas, builds e estratégias.
- `/detonados/` — detonados e walkthroughs.
- `/artigos/` — análises e conversas sobre jogos.

## Publicações

Crie os textos em `_posts/` usando uma das categorias abaixo:

- `guias`
- `detonados`
- `artigos`

Use `model_new_post.md` como ponto de partida.

## Atualizar a Pokédex

Os índices de nomes são gerados pela PokéAPI. Para atualizá-los:

```bash
node scripts/sync-pokedex.mjs
```

A página usa esses índices para a busca multilíngue e consulta a PokéAPI diretamente para carregar imagens e movimentos por nível.

## Rodar localmente

```bash
bundle install
bundle exec jekyll serve
```
