import { error } from "console";

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export const getData = async (value: string) => {
  try {
    const response = await fetch(url+value);
    const data = await response.json();
    return data.length > 0
    ? { data: data[0], info: "found" }
    : { data: data, info: "not_found" }
    // return data[0]
  } catch (error: any) {
    return (error.message)
  }
}