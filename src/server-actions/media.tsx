"use server";

import { supabaseClient } from "@utility/supabase-client";

export async function uploadMedia(fileObj: File) {
const fileName = fileObj.name;


  const { data, error } = await supabaseClient.storage
    .from("media")
    .upload(`diag-pub/${fileName}`, fileObj);
  if (error) {
    throw error;
  }
  return data;
}
