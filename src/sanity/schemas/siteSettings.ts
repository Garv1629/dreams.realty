export const siteSettingsType = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'text',
    },
    {
      name: 'phoneNumbers',
      title: 'Phone Numbers',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'email',
      title: 'Contact Email',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Physical Address',
      type: 'text',
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        { name: 'facebook', type: 'url' },
        { name: 'twitter', type: 'url' },
        { name: 'instagram', type: 'url' },
        { name: 'linkedin', type: 'url' },
        { name: 'youtube', type: 'url' },
      ]
    }
  ],
}
