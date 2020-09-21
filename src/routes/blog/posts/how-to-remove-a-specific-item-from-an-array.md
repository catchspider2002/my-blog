---
title: How to remove a specific item from an array? (JAVASCRIPT)
date: "2019-06-11T08:38:00.000Z"
updatedDate: "2020-06-11T08:38:00.000Z"
---

    Since there is only a single return line, you can further simplify this as

 <!-- more -->

```html
<pre data-language="javascript" class="language-javascript"><code class="language-javascript" dir="ltr">const removeArrayValue = (array, value) =&gt;
array.filter((item) =&gt; item !== value);</code></pre>
```

More check

```html
   <pre data-language="css" class="language-css"><code class="language-css" dir="ltr">pre[data-language] {
     position: relative;
     padding: 1.5rem;
     background-color: #1a202c;
     margin: 10px 0;
   }
   pre[data-lang]::before {
     content: attr(data-lang);
     display: block;
     position: absolute;
     z-index: 3;
     top: 0.375rem;
     right: 0.5rem;
     color: #467790;
     text-transform: uppercase;
     font-size: 0.7rem;
     font-weight: 500;
     letter-spacing: 0.1em;
   }
```
