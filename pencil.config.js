module.exports = {
  head: {
    title: 'Pencil site',
  },
  logo: 'https://penciljs.netlify.com/img/logo.svg',
  navigation: [
    ['Drop down', [
      ['Intro page', '/'],
      ['Sub page', '/sub-directory']
    ]],
    ['Core Docs', {
      link: 'https://penciljs.netlify.com',
      newTab: true
    }]
  ],
  themeColor: '#287BE1',
  plugins: {
    callout: 'https://penciljs.netlify.com/plugins/callout.js',
    youtube: 'https://penciljs.netlify.com/plugins/youtube.js',
    icons: 'https://penciljs.netlify.com/plugins/icons.js'
  },
  sidebar: [
    ['Sub directory', {
      'Sub page': '/sub-directory'
    }]
  ],
  footer: []
}