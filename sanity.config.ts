import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schema } from './src/sanity/schema'
import { projectId, dataset } from './src/sanity/env'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  
  // Customizing the studio
  title: 'Dreams Realty Admin',

  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content Management')
          .items([
            S.listItem()
              .title('Site Settings')
              .child(S.document().schemaType('siteSettings').documentId('siteSettings')),
            S.divider(),
            S.documentTypeListItem('property').title('Properties'),
            S.documentTypeListItem('location').title('Locations'),
            S.documentTypeListItem('developer').title('Developers'),
            S.documentTypeListItem('propertyCategory').title('Property Types'),
            S.divider(),
            S.documentTypeListItem('blog').title('Blog Posts'),
            S.divider(),
            S.documentTypeListItem('lead').title('Leads & Enquiries'),
          ]),
    }),
    visionTool({ defaultApiVersion: '2024-01-01' }),
  ],

  schema,
})
