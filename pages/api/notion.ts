import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from "@notionhq/client";
import type { Properties } from "../../types";
import { MONTHS } from "../../constants";

const { NOTION_API_KEY, NOTION_DATABASE_ID } = process.env;

const notion = new Client({
  auth: NOTION_API_KEY,
});

declare const process: {
  env: {
    NOTION_API_KEY: string;
    NOTION_DATABASE_ID: string;
  };
};

type Data = {
  message: string;
  results: Properties | null;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "GET") {
    return res.status(405).json({
      message: `${req.method} requests are not allowed`,
      results: null,
    });
  }

  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
    });

    const unsortedResults = response.results.map((result: any) => ({
      month: result.properties.month.title[0].plain_text,
      value: result.properties.value.number,
    }));

    const results = unsortedResults.sort((a, b) => {
      return MONTHS.indexOf(a.month) - MONTHS.indexOf(b.month);
    });

    res.status(200).json({ message: "Success", results });
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: error.message, results: null });
  }
}
