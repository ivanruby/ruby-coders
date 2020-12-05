// detect current language by extracting pattern from url
selected_language = document.location.pathname.split('/')[3]

// search results only in the current language
var search = docsearch({
  appId: '8MYOH7SNMW',
  apiKey: '1b7ed12c8fb2bbf86875d1464be8fc0a',
  indexName: 'dev_RUBYCODERS',
  inputSelector: '#search_input_react',
  debug: true
});