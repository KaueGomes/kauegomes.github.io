---
layout: post
title:  "Como tagear o whatsapp via JavaScript"
date:   2025-09-17 17:00:00 -0300
categories: [Tagueamento, Rastreio, Redes Sociais]
image: /assets/public/whatsapp_javascript/logo_whatsapp.png
tags: [whatsapp, javascript, métrica, redes sociais] 
---
O WhatsApp é um dos principais canais de contato em sites atualmente. Mas de nada adianta colocar o botão de “Fale conosco” sem medir os resultados. Neste guia, vou mostrar como você pode **tagear o WhatsApp** e acompanhar quantos visitantes realmente clicaram para iniciar uma conversa.

## 1. Por que rastrear o WhatsApp?

Se você tem um site ou landing page, provavelmente já adicionou um botão para o WhatsApp. Mas sem rastreamento, você não sabe:

- Quantas pessoas clicaram no botão.
- Quais campanhas geraram mais contatos.
- Como otimizar suas páginas para aumentar conversões.

## 2. Criando um link para o WhatsApp

Existem diversas urls que são utilizadas para fazer os links do whataspp funcionarem, as mais comuns são wa.me, web.whatsapp e api.whatsapp,  como no exemplo:

{% highlight HTML %}
<a href="https://wa.me/5511999999999" target="_blank">
  Fale conosco no WhatsApp
</a>
{% endhighlight %}

Essas tags normalmente são inseridas no sistema por um plugin ou um desenvolvedor, mas não é via de regra, elas podem vir com formatos distintos como um encurtador do bit.ly ou outras plataformas. A forma mais adequada de termos certeza é abrindo o "dev tool", a ferramenta que se utiliza em navegadores para inspecionar o código que foi colocado.

{% highlight JavaScript %}
document.querySelectorAll()
{% endhighlight %}
