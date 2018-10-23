module.exports = {
  head: {
    title: 'Docbook site',
  },
  logo: 'https://docbook.netlify.com/img/logo.svg',
  navigation: [
    ['Core Docs', {
      link: 'https://docbook.netlify.com',
      newTab: true
    }]
  ],
  themeColor: '#287BE1',
  plugins: {
    callout: 'https://docbook.netlify.com/plugins/callout.js',
    youtube: 'https://docbook.netlify.com/plugins/youtube.js',
    icons: 'https://docbook.netlify.com/plugins/icons.js'
  },
  sidebar: [],
  footer: []
}