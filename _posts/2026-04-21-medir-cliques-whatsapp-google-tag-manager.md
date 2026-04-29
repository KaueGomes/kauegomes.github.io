---
layout: post
title: "Como medir cliques no WhatsApp com Google Tag Manager"
date: 2026-04-21 09:00:00 -0300
categories: [the-office]
tags: [whatsapp, google-tag-manager, ga4, metrica, conversao]
description: Um passo a passo curto para transformar cliques em links de WhatsApp em eventos mensuraveis no GTM e GA4.
---

Se o WhatsApp e um canal importante do seu site, clique no botao de WhatsApp precisa virar evento. Sem isso, voce olha campanhas, paginas e visitas, mas nao sabe o que realmente gerou conversa.

A forma mais comum e criar um acionador no Google Tag Manager para links que contenham `wa.me`, `api.whatsapp.com` ou `web.whatsapp.com`.

## 1. Ative variaveis de clique

No GTM, va em **Variaveis** e ative:

- Click URL
- Click Text
- Click Classes
- Click ID

Essas variaveis ajudam a identificar onde o usuario clicou.

## 2. Crie o acionador

Crie um acionador de clique em links com a condicao:

| Variavel | Condicao | Valor |
| --- | --- | --- |
| Click URL | contem | whatsapp |

Se seu site usa `wa.me`, tambem vale criar outra condicao:

| Variavel | Condicao | Valor |
| --- | --- | --- |
| Click URL | contem | wa.me |

## 3. Crie o evento GA4

Na tag GA4, use um nome de evento simples:

{% highlight text %}
whatsapp_click
{% endhighlight %}

Parametros uteis:

| Parametro | Valor |
| --- | --- |
| link_url | {{Click URL}} |
| link_text | {{Click Text}} |
| page_location | {{Page URL}} |

## 4. Teste antes de publicar

Use o modo Preview do Tag Manager. Clique no botao de WhatsApp e veja se o evento aparece. Se aparecer, publique a versao.

Depois, no GA4, marque `whatsapp_click` como evento importante se ele representar um lead.

Esse e um dos rastreamentos mais valiosos para sites pequenos: ele conecta visita com oportunidade real de venda.
