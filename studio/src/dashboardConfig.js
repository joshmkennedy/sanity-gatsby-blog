export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5e8b3edbf0c9a56cfea039a2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-cwubrg4u',
                  apiId: '38939e09-02f9-48f7-9d13-4d3dafb0cfe6'
                },
                {
                  buildHookId: '5e8b3edba579bb35ebc429a6',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-ya2oka1o',
                  apiId: '58b917ba-8408-4060-a90c-308efa576992'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joshatoutthink/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-ya2oka1o.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
