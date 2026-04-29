---
layout: post
title: "Como comprimir imagens antes de publicar no site"
date: 2026-04-27 09:00:00 -0300
categories: [the-office]
image: /assets/public/posts/image-compression.svg
tags: [performance, imagens, seo, webp, landing-page]
description: Imagens pesadas deixam paginas lentas. Veja um checklist pratico para reduzir peso sem destruir a qualidade.
---

Imagem pesada e uma das formas mais faceis de deixar um site lento. A pagina ate pode estar bonita, mas se demora para abrir no celular, muita gente sai antes de ver.

## Tamanho importa

Nao faz sentido subir uma imagem de 4000 pixels de largura se ela aparece em um card de 600 pixels.

Regra pratica:

| Uso | Largura sugerida |
| --- | --- |
| Capa de post | 1200px a 1600px |
| Card | 600px a 900px |
| Icone | 128px a 512px |
| Screenshot no conteudo | 1200px a 1600px |

## Formato

Use:

- WebP para imagens gerais.
- PNG quando precisa de transparencia ou texto muito nitido.
- JPG para fotos, se WebP nao for uma opcao.
- SVG para icones vetoriais simples.

## Checklist de compressao

Antes de publicar:

- Redimensione a imagem.
- Exporte em WebP quando possivel.
- Remova metadados desnecessarios.
- Teste se o texto dentro da imagem continua legivel.
- Evite colocar screenshots gigantes sem necessidade.

## Nome do arquivo

Use nomes descritivos:

{% highlight text %}
botao-whatsapp-exemplo.webp
debugview-ga4-evento.webp
checklist-landing-page.webp
{% endhighlight %}

Evite:

{% highlight text %}
IMG_9382.png
Captura de tela 2026-04-27.png
{% endhighlight %}

Imagem boa para web tem tres qualidades: comunica, carrega rapido e nao atrapalha o layout.
