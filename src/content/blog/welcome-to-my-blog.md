---
title: 'Welcome to my blog'
description: 'A first post to get things started — what this blog is about, how to add new posts, and what to expect going forward.'
pubDate: '2026-08-02'
updatedDate: '2026-08-02'
tags: ['meta', 'getting-started']
draft: false
featured: true
---

Welcome to my personal blog. This is a placeholder post to demonstrate how the
blog system works, and it doubles as a reference for writing future posts.

## Why this blog exists

I spend most of my time building machine learning pipelines, benchmarking
human activity recognition models, and exploring new tools. This blog is a
place to share:

- **Research notes** on human activity recognition and semantic representations.
- **Engineering write-ups** about building modular ML frameworks and pipelines.
- **Tool reviews** on the libraries and workflows I rely on day to day.
- **Tutorials** that I wish existed when I was getting started.

## How to add a new post

Every post lives in `src/content/blog/` as a Markdown (`.md`) or MDX (`.mdx`)
file. Each file needs a small frontmatter block at the top:

```md
---
title: 'My new post'
description: 'A short, punchy summary shown on the blog index.'
pubDate: 'Aug 2, 2026'
tags: ['machine-learning', 'notes']
draft: false
---

Write your content here.
```

### Frontmatter reference

| Field         | Type     | Required | Description                                        |
| ------------- | -------- | -------- | -------------------------------------------------- |
| `title`       | string   | yes      | Post title                                         |
| `description` | string   | yes      | One-liner used on the index and in meta tags       |
| `pubDate`     | date     | yes      | Publication date                                   |
| `updatedDate` | date     | no       | Last-updated date, shown if different from pubDate |
| `tags`        | string[] | no       | List of tags rendered on cards and posts           |
| `draft`       | boolean  | no       | Hide the post from listings (`false` by default)   |
| `heroImage`   | string   | no       | Optional hero image path                           |

Draft posts stay in the repository but are excluded from the listing pages,
the individual post pages, and the RSS feed until you set `draft: false`.

## What you'll find here

I'm planning posts on building standardized ML frameworks (FlowAR), lessons
from benchmarking across multiple sensor datasets, and practical notes on
LLM-based agentic workflows. If something piques your interest, reach out via
email or GitHub.

Thanks for reading!
