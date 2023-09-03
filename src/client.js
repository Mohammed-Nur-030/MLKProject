
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client=createClient({
   
    projectId:'rqrh1tf2',
    dataset:'production',
    apiVersion:'2023-08-01',
    useCdn:true,
    token:process.env.REACT_APP_SANITY_TOKEN
});




const builder=imageUrlBuilder(client);

export const urlFor=(source)=>builder.image(source);