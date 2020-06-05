Next.js is great for building **content-oriented websites** such as blogs or marketing/sales websites. You can use [headless CMS](#use-headless-cms) to manage the content and fetch data from it.

## Store Content as Code

When building content-oriented websites using Next.js, you need to decide _where you store the content_.

A simple method is to store content directly within your Next.js repository as react components or markdown files. This is great if everyone who edits the content is comfortable editing the code. Personal blogs/websites and open source project documentation are good use cases for this.

If you’re interested in this approach, you can check out [our Next.js tutorial](/learn/basics/create-nextjs-app) which explains how to create a simple blog. For a more polished example, check out our [Markdown blog example](/examples/blog-headless-cms/blog-starter).

## Store Content in a Content Management System (CMS)

For larger teams, you might want to store your content externally in a **content management system (CMS)** and use its API to fetch data from it. This decouples your app’s code and content, allowing editors to manage the content without touching the code. You can use Next.js’s [static generation feature](/docs/basic-features/data-fetching) to pre-render pages statically with the data from your CMS.

One of the most popular CMS platforms is **[Wordpress](https://wordpress.org/)**. You can use Wordpress in a **“headless”** way — that is, you can manage the content using its admin dashboard, but you can use your Next.js app as its frontend. This can be done by querying data from your Wordpress instance via API. Take a look at [our Wordpress example](/examples/blog-headless-cms/wordpress) to learn more.

### Headless CMS

Alternatively, you might want to consider using a **Headless CMS** platform. Put simply, a headless CMS is a content management system that doesn’t come with a frontend. Instead, it comes with a set of APIs to query its data. You can then build the frontend yourself (e.g. using Next.js) by fetching the data from this API. Here are some of the advantages of using headless CMS:

- **Customizable**: You can define your own content models and heavily customize them. Headless CMS platforms can adapt to your product’s needs.
- **Better Developer Experience**: Headless CMS platforms are API-first products, they tend to offer high quality developer experience (DX).
- **Multiple Frontends**: You can easily query the stored content from different frontends you may have (e.g. your web app and a native mobile app).

We have example starter code for popular headless CMS platforms — [you can check them out below](#related). Before going through them, we recommend you to read our documentation on [data fetching](/docs/basic-features/data-fetching) and [preview mode](/docs/advanced-features/preview-mode).
