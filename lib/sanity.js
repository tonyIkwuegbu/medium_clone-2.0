import {
  createClient,
  createCurrentUserHook
} from "next-sanity";
import createImageUrlBuilder from '@sanity/image-url'
import { config } from "./config";


export const urlFor = (source) => createImageUrlBuilder(config).image(source);

export const imageBuilder = source =>
  createImageUrlBuilder(config).image(source);

//export const useCurrentUser = createCurrentUserHook(config)
export const sanityClient = createClient(config);



