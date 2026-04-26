# Garagem C-137

Blog pessoal do Kaue Gomes — Jekyll + GitHub Pages.
Dungeon digital de tecnologia, cultura pop, games, construção e ferramentas.

## Estrutura

- `_config.yml` — identidade do site, paginação, mapa de categorias.
- `_layouts/` — `default`, `page`, `post`, `category` (listas paginadas por categoria) e `kit` (layout app sem sidebar).
- `_includes/menu.html` — sidebar + navegação + seletor de tema.
- `_posts/` — posts do blog (use `categories: [slug]` com um dos slugs do mapa).
- `assets/css/main.css` — estilos globais do blog.
- `assets/css/theme/` — variáveis CSS dos três temas (`light`, `dark`, `sephia`).
- `assets/css/kit/kit.css` — estilos exclusivos do Kit MacGyver.
- `assets/js/main.js` — tema, menu mobile, enhancement de blocos de código.

## Categorias (slugs válidos)

- `holodeck` — jogos, walkthroughs, emuladores
- `crafting-table` — projetos físicos, marcenaria, eletrônica
- `the-office` — profissional, Ads, analytics
- `cabo-interdimensional` — RSS curado (em breve)

## Kit MacGyver

- `/kit/` — lista de ferramentas
- `/kit/whatsapp-button/` — gerador funcional de botão do WhatsApp
- `/kit/hex-picker/`, `/kit/currency/` — placeholders (em construção)

## Rodar localmente

```bash
bundle install
bundle exec jekyll serve
```
