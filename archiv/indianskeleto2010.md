---
layout: layouts/galerie.njk
odkaz: indianskeleto
title: Indianské leto
konani: 31.7-4.8.2010
perex: Leto plné zabavy v našem přímetském táboře
foto: akce 2.jpg
alt: Indianské leto
tags: ["archiv"]
---


{% for photo in collections.archiv | reverse %}

![photo](/images/galerie/{{ photo.url }}.jpg)

{% endfor %}