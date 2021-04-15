import { ISinglePhoto } from "../entities/photos";
export const GET_PHOTOS = "GET_PHOTOS";

export interface IPhotoTypes {
  GET_PHOTOS: {
    photosList: ISinglePhoto;
  };
}
