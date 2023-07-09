import { createClient } from "next-sanity";

export const client = createClient({
  apiVersion: "2023-07-09",
  dataset: "production",
  token: process.env.SANITY_ACCESS_TOKEN,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: true,
});
