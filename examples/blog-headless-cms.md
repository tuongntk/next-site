Next.js is great for building **content-oriented websites** such as blogs or marketing/sales websites.

### Store Content as Code

When building content-oriented websites using Next.js, you need to decide _where you store the content_.

The simpler choice is to store content directly within your Next.js repository **as code** using react components or markdown files. This is great if everyone who edits the content is comfortable editing the code. Personal blogs/websites and open source project documentation are good use cases for this.

If you’re interested in this approach, you can check out [our official tutorial](/learn/basics/create-nextjs-app) which explains how to create a simple blog. For more polished example, check out our [Markdown blog example](/examples/blog-headless-cms/blog-starter).

### Use Headless CMS

For larger projects such as company blogs and marketing websites, you might want to store content externally in a **content management system (CMS)** and fetch it using API. This decouples your app’s code and content, allowing editors to modify the content without touching the code.
