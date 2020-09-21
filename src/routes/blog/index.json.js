import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
  return {
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    printDate: post.printDate,
    creationDate: post.creationDate,
    updatedDate: post.updatedDate,
  };
}));

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });

  res.end(contents);
}
