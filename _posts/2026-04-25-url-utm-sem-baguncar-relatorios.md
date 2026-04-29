---
layout: post
title: "Como criar uma URL com UTM sem baguncar seus relatorios"
date: 2026-04-25 09:00:00 -0300
categories: [the-office]
tags: [utm, analytics, ga4, campanhas, marketing]
description: Entenda os parametros UTM essenciais e veja um padrao simples para organizar campanhas sem sujar o GA4.
---

UTM e etiqueta de campanha. Quando voce coloca do jeito certo, o GA4 entende de onde veio o trafego. Quando coloca de qualquer jeito, seus relatorios viram uma gaveta baguncada.

Os tres parametros principais sao:

| Parametro | Para que serve | Exemplo |
| --- | --- | --- |
| utm_source | origem | instagram |
| utm_medium | meio | social |
| utm_campaign | campanha | lancamento_kit |

Uma URL ficaria assim:

{% highlight text %}
https://kauegomes.github.io/kit/?utm_source=instagram&utm_medium=social&utm_campaign=lancamento_kit
{% endhighlight %}

## Padrao recomendado

Use sempre minusculas, sem acentos e sem espacos.

Bom:

{% highlight text %}
utm_source=instagram
utm_medium=social
utm_campaign=botao_whatsapp
{% endhighlight %}

Ruim:

{% highlight text %}
utm_source=Instagram
utm_medium=Post Organico
utm_campaign=Botao WhatsApp!!!
{% endhighlight %}

## Nomes por canal

| Canal | Source | Medium |
| --- | --- | --- |
| Instagram organico | instagram | social |
| Email | newsletter | email |
| Google Ads | google | cpc |
| WhatsApp manual | whatsapp | referral |
| LinkedIn | linkedin | social |

## Checklist antes de divulgar

- A URL abre corretamente?
- Nao existe espaco nos parametros?
- A campanha tem nome compreensivel?
- O mesmo padrao sera usado no proximo link?
- A URL foi testada em tempo real no GA4?

UTM boa nao precisa ser sofisticada. Precisa ser consistente.
