export const leadType = {
  name: 'lead',
  title: 'Lead (Enquiry)',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'comments',
      title: 'Comments/Requirements',
      type: 'text',
      readOnly: true,
    },
    {
      name: 'source',
      title: 'Lead Source',
      type: 'string',
      readOnly: true,
    },
    {
      name: 'property',
      title: 'Related Property',
      type: 'reference',
      to: [{ type: 'property' }],
      readOnly: true,
    },
    {
      name: 'status',
      title: 'Lead Status',
      type: 'string',
      options: {
        list: ['New', 'Contacted', 'Qualified', 'Closed', 'Not Interested'],
      },
      initialValue: 'New',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'source',
      media: 'property.images.0',
    },
  },
}
