export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['card']},
      layout: {width: 'medium'}
    },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d96a7d0b2952d8200cbc027',
                  title: 'Sanity Studio',
                  name: 'c490-hartman-studio',
                  apiId: '830b6bdd-008e-473e-bd60-2834bd82ddf6'
                },
                {
                  buildHookId: '5d96a7d0e1bd7d5541fbad75',
                  title: 'Landing pages Website',
                  name: 'c490-hartman',
                  apiId: '90d4e927-978b-4ff7-86c1-6e966148c02b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gibsonjoshua55/c490-hartman',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://c490-hartman.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
  ]
}
