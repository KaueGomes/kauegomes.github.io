---
layout: post
title: "5 erros comuns em botoes de WhatsApp em sites"
date: 2026-04-24 09:00:00 -0300
categories: [the-office]
image: /assets/public/posts/whatsapp-errors.svg
tags: [whatsapp, ux, conversao, landing-page]
description: Pequenos erros em botoes de WhatsApp podem derrubar contatos. Veja o que revisar em poucos minutos.
---

O botao de WhatsApp parece simples, mas vive acumulando pequenos erros que custam contato. Aqui vao cinco problemas faceis de encontrar.

## 1. Numero em formato errado

O link precisa usar DDI e DDD, sem simbolos:

{% highlight text %}
https://wa.me/5511999999999
{% endhighlight %}

Evite:

{% highlight text %}
https://wa.me/(11) 99999-9999
{% endhighlight %}

## 2. Mensagem generica demais

Quando a conversa comeca so com "Oi", a equipe perde contexto.

Melhor:

{% highlight text %}
Ola, vim pelo site e quero um orcamento.
{% endhighlight %}

## 3. Botao escondido no mobile

Se o usuario precisa rolar muito para achar o contato, voce esta pedindo paciencia. Em mobile, o CTA precisa aparecer cedo e ser facil de tocar.

## 4. Falta de tracking

Sem evento no GA4 ou GTM, voce nao sabe se a campanha gerou conversa.

O evento minimo:

{% highlight text %}
whatsapp_click
{% endhighlight %}

Parametros recomendados:

- URL do link
- texto do botao
- pagina de origem

## 5. CTA fraco

"WhatsApp" e claro, mas nem sempre vende. Teste textos mais orientados a acao:

- Pedir orcamento
- Tirar duvida
- Agendar conversa
- Falar com consultor

O botao de WhatsApp e uma micro landing page. Ele precisa prometer uma proxima etapa clara, nao apenas abrir um aplicativo.
