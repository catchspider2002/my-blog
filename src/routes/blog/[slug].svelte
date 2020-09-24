<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].html
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  // import Bio from '../../components/Bio.svelte'
  import Hero from "../../components/Hero.svelte";
  export let post;
  let tags = post.tags.split(",");
  let lang = tags[0];
  console.log(post.keywords);
</script>

<style>
  h1 {
    margin-bottom: 0.7em;
  }

  p {
    color: #aaa;
    font-size: 0.8em;
  }

  .tag {
    background-color: red;
    padding: 0.25em 0.5em;
    margin-right: 1em;
    font-weight: 600;
    font-family: var(--alt-font);
  }
</style>

<svelte:head>
  <title>{post.title}</title>
  <link rel="canonical" href="https://blog.periodic-table.io/{post.slug}" />
  <meta name="description" content={post.excerpt} />
  <meta name="keywords" content={post.keywords} />

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="blog" />
  <meta property="og:url" content="https://blog.periodic-table.io/{post.slug}" />
  <meta property="og:title" content={post.title} />
  <meta property="og:description" content={post.excerpt} />
  <meta property="og:image" content="https://blog.periodic-table.io/social/{post.slug}.png" />

  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image" />
  <meta property="twitter:url" content="https://blog.periodic-table.io/{post.slug}" />
  <meta property="twitter:title" content={post.title} />
  <meta property="twitter:description" content={post.excerpt} />
  <meta property="twitter:image" content="https://blog.periodic-table.io/social/{post.slug}.png" />
</svelte:head>

<header>
  <Hero title={post.title} tag={lang} />
  <section class="container">
    <p><span >Created on {post.printDate}; Last updated on {post.updatedDate}</span> • <span>{post.printReadingTime}</span></p>
    <h1>{post.title}</h1>

    {#each tags as tag}<span class="tag">{tag}</span>{/each}
  </section>
</header>
<section class="container">
  <article class="content">
    {@html post.html}
  </article>
  <!-- <Bio /> -->
</section>
