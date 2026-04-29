---
layout: post
title: "Como criar uma pagina simples de links sem depender de Linktree"
date: 2026-04-28 09:00:00 -0300
categories: [the-office]
image: /assets/public/posts/bio-links.svg
tags: [site, links, bio, html, conversao]
description: Uma pagina propria de links pode ser mais rapida, mensuravel e flexivel do que depender de uma ferramenta externa.
---

Pagina de links e util para Instagram, TikTok, assinatura de email e cartao digital. A diferenca e que, no seu proprio site, voce controla layout, metricas e destino.

Uma estrutura simples:

{% highlight html %}
<main class="links-page">
  <h1>Kaue Gomes</h1>
  <p>Ferramentas, guias e experimentos de tecnologia.</p>

  <a href="/kit/">Kit MacGyver</a>
  <a href="/the-office/">Guias de marketing e analytics</a>
  <a href="https://wa.me/5511999999999">Falar no WhatsApp</a>
</main>
{% endhighlight %}

## O que colocar

Priorize poucos links:

- ferramenta principal;
- post mais util;
- contato;
- portfolio ou servico;
- newsletter, se existir.

Se tudo e prioridade, nada e prioridade.

## Vantagens de ter no seu site

- Voce mede cliques com GA4.
- Pode instalar GTM.
- Pode melhorar SEO.
- Nao depende de outra plataforma.
- Pode manter sua identidade visual.

## Eventos uteis

No GTM, voce pode medir:

| Evento | Quando dispara |
| --- | --- |
| bio_link_click | clique em qualquer link da pagina |
| whatsapp_click | clique no contato |
| tool_click | clique em uma ferramenta |

## Dica de produto

Coloque o link mais importante no topo e repita o contato no final. A pagina deve funcionar como recepcao: curta, clara e com caminho obvio.
