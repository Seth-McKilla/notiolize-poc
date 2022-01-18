# Welcome to Notiolize! 🙋‍♂️
### Dead simple data visualization for Notion.
*Check out the live demo here 👉 https://notiolize.notion.site/Data-Viz-a5bec6ca709142199c92503b3dcce173!*

![Notiolize](https://user-images.githubusercontent.com/63591760/149818667-b34765cd-f8a7-4bf0-b8d8-866771104a01.gif)

### This repo serves as a minimal template to create your own custom data visualizations within Notion by utilizing the Notion API, NextJS, Vercel, and ReCharts. To get up and running, simply follow these steps...

### 1. Create an app using this repo as the template:
```bash
npx create-next-app@latest -e https://github.com/Seth-McKilla/notiolize
```
>Note: The above command automatically downloads and installs the dependencies so no "npm install" or "yarn add" required!

### 2. [Create a Notion integration](https://developers.notion.com/docs/getting-started) to obtain an API key to access the Notion API.
>Note: Also make sure to grab the ID of the database you wish to create the visualization for.

### 3. Create a .env.local file within the root directory with the following environment variables:
```bash
NOTION_API_KEY=<YOUR API KEY>
NOTION_DATABASE_ID=<YOUR DATABASE ID>
```

### 4. Start the local development environment and customize to your liking:
```bash
npm run dev
```
>Note: The Notion data is fetched within the [api folder](./pages/api/notion.ts) and rendered through the [BarChart component](./components/BarChart/index.tsx).

### 5. Deploy your app to Vercel:
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSeth-McKilla%2Fnotiolize&env=NOTION_API_KEY,NOTION_DATABASE_ID)

### 6. Simply embed your live Vercel app link within Notion (see GIF above).

That's all folks! If you've found value in this repo, please considering leaving a ⭐!

## Resources
To learn more about the packages used in this project, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [React Typescript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup/) - helpful tips for using Typescript with React.
- [Notion Javascript SDK](https://github.com/makenotion/notion-sdk-js) - GitHub repo including documentation for using the Notion API JavaScript SDK.
- [Getting Started with Recharts](https://recharts.org/en-US/guide) - get up and running with using the Recharts data visualization library.
