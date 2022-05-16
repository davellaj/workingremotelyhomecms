export default {
    name: 'mainImage',
    title: 'Main image',
    type: 'image',
    options: {
      hotspot: true,
    },
    fields: [
      {
        name: 'alternativeText',
        type: 'string',
        title: 'Alternative Text',
        options: {
          isHighlighted: true
        }
      },
      {
        name: 'attribution',
        type: 'markupTextWithLinks',
        title: 'Attribution',
        options: {
          isHighlighted: true
        }
      },
    ]
  }