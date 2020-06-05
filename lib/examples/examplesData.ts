export type ExamplesDataItem = {
  sidebarLabel: string;
  title: string;
  github: string;
  ogImage: string;
  description?: string;
  mainContentStart?: string;
  demoUrl?: string;
  introContentEnd?: string;
  showDemo?: boolean;
};

export const introductionData = {
  title: 'Next.js Examples',
  description: 'Learn from our official and community Next.js examples'
};

export const categoriesData: {
  [key: string]: {
    title: string;
    description: string;
    ogImage: string;
  };
} = {
  'blog-headless-cms': {
    title: 'Blog & Headless CMS',
    description: 'Build content-oriented websites (blogs, marketing pages, etc.) with Next.js',
    ogImage: ''
  }
};

const examplesData: {
  [key: string]: ExamplesDataItem | undefined;
} = {
  'blog-headless-cms/blog-starter': {
    sidebarLabel: 'Markdown Blog',
    title: 'Build a Next.js Blog using Markdown',
    github: 'blog-starter',
    introContentEnd: '## Demo',
    mainContentStart: '# Notes',
    demoUrl: 'https://next-blog-starter.now.sh/',
    description: `This example showcases Next.js's Static Generation feature using markdown files as the data source.`,
    ogImage:
      'https://og-image.now.sh/Next.js%20Blog%20Starter%20Example.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg'
  },
  'blog-headless-cms/wordpress': {
    sidebarLabel: 'Wordpress',
    title: 'Build a Next.js Blog with Wordpress',
    github: 'cms-wordpress',
    introContentEnd: '## Demo',
    mainContentStart: '## Configuration',
    demoUrl: 'https://next-blog-wordpress.now.sh/',
    description:
      'This example showcases Next.js’s Static Generation feature using Wordpress as the data source.',
    ogImage:
      'https://og-image.now.sh/Next.js%20Blog%20Example%20with%20**WordPress**.png?theme=light&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=data%3Aimage%2Fsvg%2Bxml%2C%253C%253Fxml+version%3D%271.0%27+encoding%3D%27UTF-8%27%253F%253E%253Csvg+preserveAspectRatio%3D%27xMidYMid%27+version%3D%271.1%27+viewBox%3D%270+0+256+255%27+xmlns%3D%27http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%27%253E%253Cg+fill%3D%27%2523464342%27%253E%253Cpath+d%3D%27m18.124+127.5c0+43.295+25.161+80.711+61.646+98.441l-52.176-142.96c-6.0691+13.603-9.4699+28.657-9.4699+44.515zm183.22-5.5196c0-13.518-4.8557-22.88-9.0204-30.166-5.5446-9.01-10.742-16.64-10.742-25.65+0-10.055+7.6259-19.414+18.367-19.414+0.48494+0+0.94491+0.060358+1.4174+0.087415-19.46-17.828-45.387-28.714-73.863-28.714-38.213+0-71.832+19.606-91.39+49.302+2.5662+0.077008+4.9847+0.13112+7.039+0.13112+11.441+0+29.151-1.3882+29.151-1.3882+5.8963-0.34758+6.5915+8.3127+0.7014+9.01+0+0-5.9255+0.69724-12.519+1.0427l39.832+118.48+23.937-71.79-17.042-46.692c-5.8901-0.3455-11.47-1.0427-11.47-1.0427-5.8942-0.3455-5.2033-9.3575+0.69099-9.01+0+0+18.064+1.3882+28.811+1.3882+11.439+0+29.151-1.3882+29.151-1.3882+5.9005-0.34758+6.5936+8.3127+0.7014+9.01+0+0-5.938+0.69724-12.519+1.0427l39.528+117.58+10.91-36.458c4.7287-15.129+8.3273-25.995+8.3273-35.359zm-71.921+15.087l-32.818+95.363c9.7988+2.8805+20.162+4.4561+30.899+4.4561+12.738+0+24.953-2.202+36.323-6.2002-0.29346-0.46829-0.55987-0.96572-0.77841-1.5069l-33.625-92.112zm94.058-62.046c0.47037+3.4841+0.73678+7.2242+0.73678+11.247+0+11.1-2.073+23.577-8.3169+39.178l-33.411+96.599c32.518-18.963+54.391-54.193+54.391-94.545+0.002081-19.017-4.8557-36.899-13.399-52.48zm-95.977-75.023c-70.304+0-127.5+57.196-127.5+127.5+0+70.313+57.2+127.51+127.5+127.51+70.302+0+127.51-57.194+127.51-127.51-0.002082-70.304-57.209-127.5-127.51-127.5zm0+249.16c-67.08+0-121.66-54.578-121.66-121.66+0-67.08+54.576-121.65+121.66-121.65+67.078+0+121.65+54.574+121.65+121.65+0+67.084-54.574+121.66-121.65+121.66z%27%2F%253E%253C%2Fg%253E%253C%2Fsvg%253E'
  },
  'blog-headless-cms/agility-cms': {
    sidebarLabel: 'Agility CMS',
    title: 'Build a Next.js Blog with Agility CMS',
    github: 'cms-agilitycms',
    introContentEnd: '## Demo',
    mainContentStart: '## Configuration',
    // TODO: Preview Mode URL is different - see README
    demoUrl: 'https://next-blog-agilitycms.now.sh/',
    description:
      'This example showcases Next.js’s Static Generation feature using Agility CMS as the data source.',
    ogImage:
      'https://og-image.now.sh/Next.js%20Blog%20Example%20with%20**Agility%20CMS**.png?theme=light&md=1&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fcdn.agilitycms.com%2Fcontent-manager%2Fimages%2Flogos%2F3d69eddf6f00b8824feb126d9ac2bed3ec6e85c0.png&widths=undefined&widths=350&heights=200&heights=auto'
  },
  'blog-headless-cms/contentful': {
    sidebarLabel: 'Contentful',
    title: 'Build a Next.js Blog with Contentful',
    github: 'cms-contentful',
    introContentEnd: '## Demo',
    mainContentStart: '## Configuration',
    demoUrl: 'https://next-blog-contentful.now.sh/',
    description:
      'This example showcases Next.js’s Static Generation feature using Contentful as the data source.',
    ogImage:
      'https://og-image.now.sh/Next.js%20Blog%20Example%20with%20**Contentful**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyOSIgaGVpZ2h0PSIzMiI%2BCiAgPHBhdGggZmlsbD0iI0ZGRDg1RiIgZD0iTTkuNyAyMi4zQzggMjAuNyA3IDE4LjUgNyAxNnMxLTQuNyAyLjYtNi4zYzEuNC0xLjQgMS40LTMuNiAwLTVzLTMuNi0xLjQtNSAwQzEuOCA3LjYgMCAxMS42IDAgMTZzMS44IDguNCA0LjcgMTEuM2MxLjQgMS40IDMuNiAxLjQgNSAwIDEuMy0xLjQgMS4zLTMuNiAwLTV6Ij48L3BhdGg%2BCiAgPHBhdGggZmlsbD0iIzNCQjRFNyIgZD0iTTkuNyA5LjdDMTEuMyA4IDEzLjUgNyAxNiA3czQuNyAxIDYuMyAyLjZjMS40IDEuNCAzLjYgMS40IDUgMHMxLjQtMy42IDAtNUMyNC40IDEuOCAyMC40IDAgMTYgMFM3LjYgMS44IDQuNyA0LjdjLTEuNCAxLjQtMS40IDMuNiAwIDUgMS40IDEuMyAzLjYgMS4zIDUgMHoiPjwvcGF0aD4KICA8cGF0aCBmaWxsPSIjRUQ1QzY4IiBkPSJNMjIuMyAyMi4zQzIwLjcgMjQgMTguNSAyNSAxNiAyNXMtNC43LTEtNi4zLTIuNmMtMS40LTEuNC0zLjYtMS40LTUgMHMtMS40IDMuNiAwIDVDNy42IDMwLjIgMTEuNiAzMiAxNiAzMnM4LjQtMS44IDExLjMtNC43YzEuNC0xLjQgMS40LTMuNiAwLTUtMS40LTEuMy0zLjYtMS4zLTUgMHoiPjwvcGF0aD4KICA8Y2lyY2xlIGN4PSI3LjIiIGN5PSI3LjIiIHI9IjMuNSIgZmlsbD0iIzMwOEJDNSI%2BPC9jaXJjbGU%2BCiAgPGNpcmNsZSBjeD0iNy4yIiBjeT0iMjQuOCIgcj0iMy41IiBmaWxsPSIjRDU0NjVGIj48L2NpcmNsZT4KPC9zdmc%2B'
  },
  'blog-headless-cms/cosmic': {
    sidebarLabel: 'Cosmic',
    title: 'Build a Next.js Blog with Cosmic',
    github: 'cms-cosmic',
    introContentEnd: '## Demo',
    mainContentStart: '## Configuration',
    demoUrl: 'https://next-blog-cosmic.now.sh/',
    description:
      'This example showcases Next.js’s Static Generation feature using Cosmic as the data source.',
    ogImage:
      'https://og-image.now.sh/Next.js%20Example%20Blog%20with%20**Cosmic**.png?theme=light&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fweb-assets.cosmicjs.com%2Fimages%2Flogo.svg'
  },
  'blog-headless-cms/datocms': {
    sidebarLabel: 'DatoCMS',
    title: 'Build a Next.js Blog with DatoCMS',
    github: 'cms-datocms',
    introContentEnd: '## Demo',
    mainContentStart: '## Configuration',
    demoUrl: 'https://next-blog-datocms.now.sh/',
    description: `This example showcases Next.js's Static Generation feature using DatoCMS as the data source.`,
    ogImage:
      'https://og-image.now.sh/Next.js%20Blog%20Example%20with%20**DatoCMS**.png?theme=light&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMjYxLjI3NCA4MC41NjIiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iYSIgeTE9IjQwLjQ0IiB4Mj0iNzguNjg3IiB5Mj0iNDAuNDQiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZjU5M2QiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZjc3NTEiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48dGl0bGU%2BZnVsbF9zbWFsbGVyPC90aXRsZT48cGF0aCBkPSJNMzkuMzQ0Ljg0NEgwVjgwLjAzN0gzOS4zNDRjMTkuNjc3LDAsMzkuMzQzLTE3LjcyOSwzOS4zNDMtMzkuNTkxUzU5LjAyMS44NDQsMzkuMzQ0Ljg0NFptMCw1Ny41ODlhMTcuOTkzLDE3Ljk5MywwLDEsMSwxOC0xNy45ODdBMTcuOTg2LDE3Ljk4NiwwLDAsMSwzOS4zNDQsNTguNDMzWiIgZmlsbD0idXJsKCNhKSIvPjxwYXRoIGQ9Ik0xMTkuMDU0Ljg1OGMxMS44NDIsMCwxNy45MTYsNy4xNzksMTcuOTE2LDE3LjA1OHY4LjgzNWMwLDkuODc4LTYuMDc0LDE3LjA1Ny0xNy45MTYsMTcuMDU3SDEwMC4yNzlWLjg1OFptNy4zNjMsMTdjMC01LjQ2LTIuODg0LTguMzQ0LTkuMjY1LTguMzQ0aC02LjM4MVYzNS4xNTZoNi4zODFjNi4zODEsMCw5LjI2NS0yLjg4NCw5LjI2NS04LjM0NFptNDMuMjQxLDE3Ljk3N0gxNTQuMTM1bC0yLjM5Myw3Ljk3N0gxNDEuMTg5TDE1Ni41MjcuODU4aDEwLjhsMTUuMzM5LDQyLjk1SDE3Mi4xMTJabS0xMi45NDYtOC40NjdoMTAuMzY5bC01LjE1NC0xNi45OTVaTTIxNi4wMzMuODU4djguOWgtMTEuNlY0My44MDhIMTkzLjg4M1Y5Ljc1NWgtMTEuNlYuODU4Wm0yNS41NDUsNDMuODA5Yy0xMy4wMDcsMC0xOS42OTUtOC4zNDUtMTkuNjk1LTE5LjU3M1YxOS41NzJDMjIxLjg4Myw4LjM0NCwyMjguNTcxLDAsMjQxLjU3OCwwczE5LjcsOC4zNDQsMTkuNywxOS41NzJ2NS41MjJDMjYxLjI3NCwzNi4zMjIsMjU0LjU4Niw0NC42NjcsMjQxLjU3OCw0NC42NjdabTAtMzUuODk0Yy02LjEzNSwwLTkuMTQyLDQuMTEyLTkuMTQyLDEwLjI0N3Y2LjYyNmMwLDYuMTM2LDMuMDA3LDEwLjI0Nyw5LjE0MiwxMC4yNDdzOS4xNDItNC4xMTEsOS4xNDItMTAuMjQ3VjE5LjAyQzI1MC43MiwxMi44ODUsMjQ3LjcxNCw4Ljc3MywyNDEuNTc4LDguNzczWk0xMDkuNjksNzUuMjQ0YTQuODEzLDQuODEzLDAsMCwwLDUuMi00Ljg2OGg1Ljk1NGMtLjA3NSw1LjU0Mi00LjE1NiwxMC4xODYtMTEuMDg0LDEwLjE4Ni04LjA4OCwwLTExLjk4Mi01LjA5My0xMS45ODItMTEuOTA4VjY1LjIwOWMwLTYuODE1LDMuODk0LTExLjkwNywxMS45ODItMTEuOTA3LDYuOTI4LDAsMTEuMDA5LDQuNjQyLDExLjA4NCwxMC4xODRoLTUuOTU0YTQuODEzLDQuODEzLDAsMCwwLTUuMi00Ljg2OGMtMy44OTUsMC01LjQ2OCwyLjU4NC01LjQ2OCw2LjI5MXY0LjA0NEMxMDQuMjIyLDcyLjY2LDEwNS44LDc1LjI0NCwxMDkuNjksNzUuMjQ0Wm0zNy4wNTUtMjEuNDE5aDUuOTE3VjgwLjAzN2gtNi4xNzhWNjYuMTgzbC00LjEyLDguMDEyaC01LjA5MmwtNC4wODEtOC4wMTJWODAuMDM3aC02LjE3OVY1My44MjVoNS45MTZsNi44OSwxNC4yNjdaTTE2OS41MSw4MC41NjJjLTYuMjkxLDAtMTAuNTIyLTMtMTAuNTIyLTguMjc2di0uNzEyaDYuMTc4VjcyLjFjMCwyLjIwOSwxLjQyMywzLjU1Nyw0LjM4MSwzLjU1NywyLjY1OSwwLDQuNDE5LTEuMDg2LDQuNDE5LTMuMTA4YTIuMTUxLDIuMTUxLDAsMCwwLTEuOC0yLjMyMWwtNi41NTMtMS42NDhjLTQuMDgyLTEuMDExLTYuMTc5LTIuODA4LTYuMTc5LTcuMDc3LDAtNS4yMDUsMy43MDctOC4yLDkuOTIzLTguMiw1Ljg3OSwwLDkuNjI0LDMuMTgyLDkuNjI0LDcuOTc1di42MzdIMTczLjAzdi0uNDQ5YzAtMS43NjEtLjk3NC0zLjIyMS0zLjY3LTMuMjIxLTIuMjQ3LDAtMy42NjkuNzg2LTMuNjY5LDIuNjU4YTEuOTk0LDEuOTk0LDAsMCwwLDEuNjg1LDIuMTM1bDYuOTY0LDEuODcyYzQuMTk0LDEuMTIzLDUuODc5LDMuNDQ1LDUuODc5LDcuMDc3QzE4MC4yMTksNzcuMjI5LDE3NS41NzYsODAuNTYyLDE2OS41MSw4MC41NjJaIiBmaWxsPSIjZmY3NzUxIi8%2BPC9zdmc%2B&widths=undefined&widths=350&heights=200&heights=auto'
  },
  'blog-headless-cms/prismic': {
    sidebarLabel: 'Prismic',
    title: 'Build a Next.js Blog with Prismic',
    github: 'cms-prismic',
    introContentEnd: '## Demo',
    mainContentStart: '## Configuration',
    demoUrl: 'https://next-blog-prismic.now.sh/',
    description: `This example showcases Next.js's Static Generation feature using Prismic as the data source.`,
    ogImage:
      'https://og-image.now.sh/Next.js%20Blog%20Example%20with%20**Prismic**.png?theme=light&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fi.imgur.com%2FGVmKYul.png&widths=undefined&widths=auto&heights=undefined&heights=100'
  },
  'blog-headless-cms/sanity': {
    sidebarLabel: 'Sanity',
    title: 'Build a Next.js Blog with Sanity',
    github: 'cms-sanity',
    introContentEnd: '## Demo',
    mainContentStart: '## Configuration',
    demoUrl: 'https://next-blog-sanity.now.sh/',
    description: `This example showcases Next.js's Static Generation feature using Sanity as the data source.`,
    ogImage:
      'https://og-image.now.sh/Next.js%20Blog%20Example%20with%20**Sanity**.png?theme=light&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB2aWV3Qm94PSIwIDAgMTA1IDIyIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMWVtIj48dGl0bGU%2BU2FuaXR5PC90aXRsZT48cGF0aCBvcGFjaXR5PSIwLjciIGQ9Ik03OC4xNzkzIDcuOTkyNjFWMjEuMDAyOEg3My45MDMxVjEwLjIxMzhMNzguMTc5MyA3Ljk5MjYxWiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg%2BPHBhdGggb3BhY2l0eT0iMC43IiBkPSJNMjAuOTUxMSAyMS4zM0wzMC45NDQgMTYuMTA1MUwyOS43MTIxIDEyLjkxNDFMMjMuMTMzMiAxNS45ODIxTDIwLjk1MTEgMjEuMzNaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48cGF0aCBvcGFjaXR5PSIwLjUiIGQ9Ik03My45MDMxIDEwLjIwMjdMODQuNzQ0MyA0LjY1NDc3TDgyLjkxMjYgMS41NTcxTDczLjkwMzEgNS45NTk5N1YxMC4yMDI3WiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg%2BPHBhdGggb3BhY2l0eT0iMC43IiBkPSJNNDMuMzcwNSA2Ljk2MjMzVjIxLjAwMjhIMzkuMjkyN1YxLjAwNzE0TDQzLjM3MDUgNi45NjIzM1oiIGZpbGw9ImN1cnJlbnRDb2xvciI%2BPC9wYXRoPjxwYXRoIG9wYWNpdHk9IjAuNSIgZD0iTTI3LjEyOTkgNi4xODYxN0wyMC45NTExIDIxLjMzTDE3Ljc3MzEgMTguNTk0M0wyNS4xMzUzIDEuMDA3MTRMMjcuMTI5OSA2LjE4NjE3WiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg%2BPHBhdGggZD0iTTI1LjEzNTMgMS4wMDcxNEgyOS4zNDc3TDM3LjEzODYgMjEuMDAyOEgzMi44MjY5TDI1LjEzNTMgMS4wMDcxNFoiIGZpbGw9ImN1cnJlbnRDb2xvciI%2BPC9wYXRoPjxwYXRoIGQ9Ik00NC4wMDEyIDEuMDA3MTRMNTIuOTgyNCAxNC42NjgyVjIxLjAwMjhMMzkuMjkyNyAxLjAwNzE0SDQ0LjAwMTJaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48cGF0aCBkPSJNNjQuOTE4MyAxLjAwNzE0SDYwLjY3MzlWMjEuMDA2M0g2NC45MTgzVjEuMDA3MTRaIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48cGF0aCBkPSJNNzMuOTAzMSA0LjY1NDc0SDY3LjM3VjEuMDA3MTRIODIuNTg2N0w4NC43NDQzIDQuNjU0NzRINzguMTc5M0g3My45MDMxWiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg%2BPHBhdGggb3BhY2l0eT0iMC41IiBkPSJNOTcuMjc1NCAxMy40MTUzVjIxLjAwMjhIOTMuMDYyOVYxMy40MTUzIiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48cGF0aCBkPSJNOTMuMDYyOSAxMy40MTUyTDEwMC4xOTEgMS4wMDcxNEgxMDQuNjY2TDk3LjI3NTQgMTMuNDE1Mkg5My4wNjI5WiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg%2BPHBhdGggb3BhY2l0eT0iMC43IiBkPSJNOTMuMDYzIDEzLjQxNTJMODUuNzM2MyAxLjAwNzE0SDkwLjM0NTZMOTUuMzA5MiA5LjUxMDA4TDkzLjA2MyAxMy40MTUyWiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg%2BPHBhdGggZD0iTTEuOTYxMjYgMy4zMTQ3OUMxLjk2MTI2IDYuMDk5MjEgMy43MTE0NSA3Ljc1NTk1IDcuMjE1MzYgOC42Mjk1NkwxMC45MjgzIDkuNDc1MzNDMTQuMjQ0NCAxMC4yMjM2IDE2LjI2MzkgMTIuMDgyMiAxNi4yNjM5IDE1LjExMDNDMTYuMjg5NyAxNi40Mjk1IDE1Ljg1MzEgMTcuNzE3MyAxNS4wMjc0IDE4Ljc1NzlDMTUuMDI3NCAxNS43MzY4IDEzLjQzNjcgMTQuMTA0NCA5LjU5OTcyIDEzLjEyMjlMNS45NTQwOSAxMi4zMDg1QzMuMDM0NzUgMTEuNjU0MSAwLjc4MTQ3OCAxMC4xMjYyIDAuNzgxNDc4IDYuODM3MDlDMC43NjYxMjMgNS41NjY5MyAxLjE4MTE2IDQuMzI3ODEgMS45NjEyNiAzLjMxNDc5IiBmaWxsPSJjdXJyZW50Q29sb3IiPjwvcGF0aD48cGF0aCBvcGFjaXR5PSIwLjciIGQ9Ik01Mi45ODI0IDEzLjY0MTVWMS4wMDcxNEg1Ny4wNjAyVjIxLjAwMjhINTIuOTgyNFYxMy42NDE1WiIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg%2BPHBhdGggb3BhY2l0eT0iMC43IiBkPSJNMTIuNzQ1OCAxNC4zNjg5QzE0LjMyOTQgMTUuMzY0MyAxNS4wMjM4IDE2Ljc1NjUgMTUuMDIzOCAxOC43NTQ0QzEzLjcxMyAyMC40MDQxIDExLjQxMDEgMjEuMzMgOC43MDMzMyAyMS4zM0M0LjE0NzE4IDIxLjMzIDAuOTU4NTc3IDE5LjEyNjggMC4yNSAxNS4yOTgySDQuNjI1NDdDNS4xODg3OCAxNy4wNTU5IDYuNjgwMzQgMTcuODcwMyA4LjY3MTQ0IDE3Ljg3MDNDMTEuMTAxOSAxNy44NzAzIDEyLjcxNzQgMTYuNTk2NCAxMi43NDkzIDE0LjM2MTkiIGZpbGw9ImN1cnJlbnRDb2xvciI%2BPC9wYXRoPjxwYXRoIG9wYWNpdHk9IjAuNyIgZD0iTTQuMjM1NjcgNy40NDI2N0MzLjUxMjUgNy4wMjA0NSAyLjkxOTIgNi40MTM3NSAyLjUxODczIDUuNjg2OTdDMi4xMTgyNyA0Ljk2MDE5IDEuOTI1NTggNC4xNDA0NSAxLjk2MTEzIDMuMzE0NzZDMy4yMjU5NCAxLjY3ODkxIDUuNDI2MDggMC42Nzk5OTMgOC4xMDgwNCAwLjY3OTk5M0MxMi43NDkyIDAuNjc5OTkzIDE1LjQzNDcgMy4wODg1MiAxNi4wOTcyIDYuNDc4NTZIMTEuODg4M0MxMS40MjQyIDUuMTQyMDMgMTAuMjYyMSA0LjEwMTM2IDguMTQzNDcgNC4xMDEzNkM1Ljg3OTU3IDQuMTAxMzYgNC4zMzQ4NyA1LjM5NjExIDQuMjQ2MjkgNy40NDI2NyIgZmlsbD0iY3VycmVudENvbG9yIj48L3BhdGg%2BPC9zdmc%2B&widths=undefined&widths=auto&heights=250&heights=150'
  },
  'blog-headless-cms/strapi': {
    sidebarLabel: 'Strapi',
    title: 'Build a Next.js Blog with Strapi',
    github: 'cms-strapi',
    introContentEnd: '## Demo',
    mainContentStart: '## Configuration',
    demoUrl: 'https://next-blog-strapi.now.sh/',
    description:
      'This example showcases Next.js’s Static Generation feature using Strapi as the data source.',
    ogImage:
      'https://og-image.now.sh/Next.js%20Blog%20Example%20with%20**Strapi**.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Fv1590740734%2Fnextjs%2Fexamples%2Fstrapi-logo.svg'
  },
  'blog-headless-cms/takeshape': {
    sidebarLabel: 'TakeShape',
    title: 'Build a Next.js Blog with TakeShape',
    github: 'cms-takeshape',
    introContentEnd: '## Demo',
    mainContentStart: '## Configuration',
    demoUrl: 'https://next-blog-takeshape.now.sh/',
    description: `This example showcases Next.js's Static Generation feature using TakeShape as the data source.`,
    ogImage:
      'https://og-image.now.sh/Next.js%20Blog%20Example%20with%20**TakeShape**.png?theme=light&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg&images=https%3A%2F%2Fwww.takeshape.io%2Fandroid-icon-192x192.png&heights=200&heights=200'
  }
};

export default examplesData;
