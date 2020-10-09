let $emojis = document.getElementById('emojis')

let emojis = []

for (let i = 127948; i <= 127998; i++) {
  emojis.push(`<div><div class="emoji">&#${i}</div><div class="border">#${i}</div></div>`)
}

$emojis.innerHTML += emojis.join('')

