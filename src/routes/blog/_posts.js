import all from './posts/*.md';

export default all
  .map((post) => ({ ...post, html: post.html.replace(/^\t{3}/gm, '') }))
  .sort((a, b) => new Date(b.printCreationDate) - new Date(a.printCreationDate));
