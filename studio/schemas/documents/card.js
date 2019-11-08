export default {
  name: 'card',
  type: 'document',
  title: 'Cards',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Web Address',
      description: 'The unique address used for this card. Click Generate to create one based on the title',
      source: 'title',
      options: {
        source: 'title'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'cardType',
      title: 'Card Type',
      type: 'reference',
      to: [{type: 'card-type'}],
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      type: 'text',
      title: 'Card Description'
    },
    {
      name: 'background',
      type: 'text',
      title: 'Card Background'
    },
    {
      name: 'instructions',
      type: 'text',
      title: 'Greek Instructions'
    },
    {
      name: 'phrase',
      type: 'string',
      title: 'Greek Phrase'
    },

    {
      name: 'vocab',
      type: 'text',
      title: 'Recommended Vocabulary'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Card Image',
      description: 'Card\'s image',
      validation: Rule => Rule.required()
    },
  ]
};
