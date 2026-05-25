import {defineField, defineType} from 'sanity'

export const clientLogoType = defineType({
  name: 'clientLogo',
  title: 'Client Logo',
  type: 'document',
  fields: [
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'altText',
      title: 'Image Description',
      type: 'string',
      description: 'For example: Acme Company logo',
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      description: 'Use 1 for first, 2 for second, and so on.',
    }),
  ],
  preview: {
    select: {
      title: 'companyName',
      media: 'logo',
    },
  },
})