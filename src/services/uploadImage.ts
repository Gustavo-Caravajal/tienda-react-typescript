import { supabase } from "../supabase-client";

export const uploadImage = async (file: File): Promise<string> => {
  const filePath = `public/${file.name}-${Date.now()}`
  
  const { error } = await supabase.storage
    .from("products-images")
    .upload(filePath, file);

  if( error ){
    throw new Error(`Error uploading file: ${error.message}`)
  }

  const { data } = await supabase.storage
    .from("products-images")
    .getPublicUrl(filePath);

  return data.publicUrl;
}