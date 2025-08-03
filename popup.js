chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, tabs => {
  const url = tabs[0].url;
  const button = document.querySelector('#search')
  const account = url.slice(14)

  document.querySelector('#account').textContent = account
  
  button.addEventListener('click', () => {
    const since = document.querySelector('#since').value
    const until = document.querySelector('#until').value
    const query = `from:${account} since:${since} until:${until}`
    if (since && until) {
      window.open(`https://x.com/search?q=${encodeURIComponent(query)}`, '_blank')
    } else {
      alert('検索キーワードを入力してください。')
    }
  })
});
