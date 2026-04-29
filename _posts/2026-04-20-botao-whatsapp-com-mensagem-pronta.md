---
layout: post
title: "Como criar um botao de WhatsApp com mensagem pronta"
date: 2026-04-20 09:00:00 -0300
categories: [the-office]
tags: [whatsapp, landing-page, atendimento, conversao]
description: Aprenda a montar links de WhatsApp com mensagem pronta para reduzir atrito e aumentar contatos pelo site.
---

Um botao de WhatsApp bom nao e apenas um icone verde na tela. Ele precisa levar a pessoa para uma conversa com contexto, sem obrigar o visitante a pensar demais.

O formato mais simples usa `wa.me` com telefone em codigo internacional:

{% highlight html %}
<a href="https://wa.me/5511999999999" target="_blank" rel="noopener">
  Falar no WhatsApp
</a>
{% endhighlight %}

Para incluir uma mensagem pronta, adicione o parametro `text` com o texto codificado:

{% highlight html %}
<a href="https://wa.me/5511999999999?text=Ola%2C%20vim%20pelo%20site%20e%20quero%20um%20orcamento."
   target="_blank"
   rel="noopener">
  Pedir orcamento
</a>
{% endhighlight %}

Uma mensagem boa deve dizer de onde a pessoa veio e qual e a intencao inicial. Isso ajuda quem atende e reduz aquele primeiro contato vazio de "oi".

Exemplos praticos:

| Objetivo | Mensagem sugerida |
| --- | --- |
| Orcamento | Ola, vim pelo site e quero um orcamento. |
| Suporte | Ola, preciso de ajuda com um atendimento. |
| Produto | Ola, quero saber mais sobre este produto. |
| Agenda | Ola, quero verificar horarios disponiveis. |

Checklist rapido antes de publicar:

- Use telefone com DDI e DDD, sem espacos ou sinais.
- Teste o link no celular e no desktop.
- Evite mensagem longa demais.
- Use um CTA especifico, como "Pedir orcamento" ou "Agendar conversa".
- Se voce usa Google Tag Manager, marque esse clique como conversao.

O ganho e simples: quanto menos trabalho o visitante tiver para iniciar a conversa, maior a chance de ele chamar.
