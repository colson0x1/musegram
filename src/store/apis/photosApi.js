import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const photosApi = createApi({
  reducerPath: 'photos',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3005',
  }),
  endpoints: (builder) => {
    return {
      fetchPhotos: builder.query({
        // provides tags will be called with result, error, and arg
        // arg is whatever we provided in the query hook
        providesTags: (result, error, album) => {
          const tags = result.map((photo) => {
            return { type: 'Photo', id: photo.id };
          });
          tags.push({ type: 'AlbumPhoto', id: album.id });
          return tags;
        },
        query: (album) => {
          return {
            url: '/photos',
            params: {
              albumId: album.id,
            },
            method: 'GET',
          };
        },
      }),
      addPhoto: builder.mutation({
        invalidatesTags: (result, error, album) => {
          return [{ type: 'AlbumPhoto', id: album.id }];
        },
        query: (album) => {
          return {
            method: 'POST',
            url: '/photos',
            body: {
              albumId: album.id,
              url: faker.image.urlLoremFlickr({
                category: 'abstract',
                width: 150,
                height: 150,
                https: true,
              }),
            },
          };
        },
      }),
      removePhoto: builder.mutation({
        invalidatesTags: (result, error, photo) => {
          return [{ type: 'Photo', id: photo.id }];
        },
        query: (photo) => {
          return {
            method: 'DELETE',
            url: `/photos/${photo.id}`,
          };
        },
      }),
    };
  },
});

export const {
  useFetchPhotosQuery,
  useAddPhotoMutation,
  useRemovePhotoMutation,
} = photosApi;
export { photosApi };
