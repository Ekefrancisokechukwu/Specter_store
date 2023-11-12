"use server";

import { customFetch } from "@/lib/utils";

export async function getData(url: string) {
  try {
    const res = await customFetch(url);
    return res.data.data;
  } catch (error) {
    console.log(error);
  }
}
