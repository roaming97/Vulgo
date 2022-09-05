---
title: 'How to use Vulgo'
author: 'roaming97'
date_created: 2022/10/07
date_modified: 2022/11/07
---

## Writing posts

Writing posts in Vulgo is straightforward.

All posts have a title, an author, and a date.
This metadata must be specified at the top of the file using the following syntax:

```
---
title: 'My Post'
author: 'Vulgo'
date_created: 2022/10/07
date_modified: 2022/10/07
---
```

The `date_modified` field is optional. Make sure your dates follow the format `YYYY/MM/DD` and has no quotation marks.
You will notice you didn't write your metadata correctly if you see a field appear as _undefined_. You can add or remove fields for your metadata by modifying the `Post` type located in `app.d.ts`.

Once you've written the metadata for the post, you can now start writing the content of the post using [Markdown](https://www.markdownguide.org/cheat-sheet/).

Thanks to mdsvex you can also use Svelte components within your posts!

You may check out the `example.svx` file in the `/src/routes/posts` directory to see what a post looks like.

## Adding a new post

Adding posts is as simple as adding .svx files to the `posts` directory and writing plain markdown in them.
.svx files are automatically converted to svelte routes thanks to [mdsvex](https://mdsvex.pngwn.io/)

## Styling posts

When rendering your blog, a css file is imported from the `styles` directory to style the posts.

This file is `app.css`, you can modify it to style your blog however you want using CSS.

## Changing blog layout

The file that does this is (conveniently) named `__layout.svelte`. Feel free to modify it to your liking.

A more in-depth explanation of how layouts work in SvelteKit can be found [here](https://kit.svelte.dev/docs/layouts).
