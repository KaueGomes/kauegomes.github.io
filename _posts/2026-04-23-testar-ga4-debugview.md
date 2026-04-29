---
layout: post
title: "Como testar se o GA4 esta registrando eventos"
date: 2026-04-23 09:00:00 -0300
categories: [the-office]
image: /assets/public/posts/ga4-debugview.svg
tags: [ga4, analytics, debugview, google-tag-manager, metrica]
description: Veja formas simples de conferir se seus eventos estao chegando ao GA4 antes de confiar nos relatorios.
---

Instalar o GA4 e nao testar os eventos e como colocar camera em uma loja sem ligar o monitor. Parece que esta tudo certo, ate voce precisar do dado.

Existem tres formas simples de verificar se os eventos estao chegando.

## 1. Modo Preview do Google Tag Manager

No GTM, clique em **Preview**, informe a URL do site e navegue normalmente.

Quando voce clicar em um botao ou enviar um formulario, confira:

- se o acionador disparou;
- se a tag GA4 foi executada;
- se os parametros estao preenchidos;
- se nao existe erro de consentimento ou configuracao.

O Preview e o melhor lugar para descobrir erro antes de publicar.

## 2. DebugView do GA4

No GA4, acesse **Admin > DebugView**. Os eventos de teste podem aparecer em tempo quase real.

Procure eventos como:

{% highlight text %}
page_view
whatsapp_click
form_submit
generate_lead
{% endhighlight %}

Se o evento aparece no Preview do GTM, mas nao aparece no DebugView, verifique o ID da propriedade GA4 e a tag de configuracao.

## 3. Relatorio em tempo real

Depois de publicar, abra o relatorio em tempo real do GA4 e faca uma acao no site.

Ele e menos detalhado que o DebugView, mas ajuda a responder rapido: "tem algum sinal chegando?".

## Erros comuns

- GTM instalado duas vezes.
- ID de medicao errado.
- Evento disparando no clique errado.
- Botao de WhatsApp abrindo em outro elemento.
- Bloqueador de anuncios interferindo no teste.

Teste sempre em uma janela anonima e, se possivel, em outro navegador. Dado bom comeca antes do relatorio: com evento bem testado.
