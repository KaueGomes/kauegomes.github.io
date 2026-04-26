---
layout: post
title: "Como tagear o WhatsApp via JavaScript"
date: 2025-09-17 17:00:00 -0300
categories: [the-office]
image: /assets/public/whatsapp_javascript/logo_whatsapp.png
tags: [whatsapp, javascript, métrica, redes sociais, google-ads]
description: Guia prático para medir cliques no botão de WhatsApp em sites e landing pages usando JavaScript e tagueamento.
---
O WhatsApp é um dos principais canais de contato em sites atualmente. Mas de nada adianta colocar o botão de "Fale conosco" sem medir os resultados. Neste guia, vou mostrar como você pode **tagear o WhatsApp** e acompanhar quantos visitantes realmente clicaram para iniciar uma conversa.

## 1. Por que rastrear o WhatsApp?

Se você tem um site ou landing page, provavelmente já adicionou um botão para o WhatsApp. Mas sem rastreamento, você não sabe:

- Quantas pessoas clicaram no botão.
- Quais campanhas geraram mais contatos.
- Como otimizar suas páginas para aumentar conversões.

## 2. Criando um link para o WhatsApp

Existem diversas urls que são utilizadas para fazer os links do WhatsApp funcionarem, as mais comuns são `wa.me`, `web.whatsapp` e `api.whatsapp`, como no exemplo:

{% highlight HTML %}
<a href="https://wa.me/5511999999999" target="_blank">
  Fale conosco no WhatsApp
</a>
{% endhighlight %}

Essas tags normalmente são inseridas no sistema por um plugin ou um desenvolvedor, mas não é via de regra — elas podem vir com formatos distintos como um encurtador do bit.ly ou outras plataformas. A forma mais adequada de termos certeza é abrindo o "dev tool", a ferramenta que se utiliza em navegadores para inspecionar o código que foi colocado.

{% highlight JavaScript %}
document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]');
{% endhighlight %}

## 3. Tagueando cliques manualmente

Com o seletor acima, você consegue identificar todos os links de WhatsApp da página. O próximo passo é adicionar um listener que dispara um evento personalizado sempre que alguém clica:

{% highlight JavaScript %}
document.querySelectorAll('a[href*="wa.me"], a[href*="whatsapp"]').forEach(function (link) {
  link.addEventListener('click', function () {
    dataLayer.push({ event: 'whatsapp_click', url: link.href });
  });
});
{% endhighlight %}

Com isso, o evento `whatsapp_click` pode ser capturado no Google Tag Manager e enviado para o Analytics — transformando cliques em conversões mensuráveis.
