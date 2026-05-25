import {defineField, defineType} from 'sanity'

export const mediaAssetType = defineType({
  name: 'mediaAsset',
  title: 'Media Library',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'For example: Homepage hero image or Converter screenshot',
    }),
    defineField({
      name: 'image',
      title: 'Image Upload',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'file',
      title: 'Video or File Upload',
      type: 'file',
      description: 'Use this for videos, PDFs, or other non-image files.',
    }),
    defineField({
      name: 'usage',
      title: 'Where This Is Used',
      type: 'string',
      description: 'For example: Home page, Converter page, Client logo row',
    }),
    defineField({
      name: 'altText',
      title: 'Image Description',
      type: 'string',
      description: 'Describe the image for accessibility.',
    }),
    defineField({
      name: 'notes',
      title: 'Notes',
      type: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'usage',
      media: 'image',
    },
  },
})