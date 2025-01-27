import { NextApiRequest, NextApiResponse } from "next";
import { parsePlugins } from "./helpers";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const plugins = parsePlugins("./plugins");

    res.status(200).json({ plugins });
  } catch (error) {
    console.error("Error fetching files:", error);
    res.status(500).json({ error: "Failed to fetch files" });
  }
}
