var items = [
  {
    name: 'Moleskine',
    description: 'A blending of tones, fabric and texture, this notebook collection is where touch and colors meet. The Jacquard woven fabric cover comes in a sophisticated, new and naturally inspired color palette with bookmark ribbons and elastic closures in striking complimentary colors. Engage your senses as you weave your own story on the blank pages.'
  },
  {
    name: 'Poppin',
    description: 'Think of our Medium Soft Cover Notebook as your trusty right(or left!)-hand-man. Always there when you need it, this purse-or-briefcase pal lives to hold meeting notes or keep a lid on secret plans. With a handy back pocket and totally luxe cover, it\'s the best-looking and hardest-working assistant money can buy.'
  },
  {
    name: 'Calhoun',
    description: 'Russel & Hazel updates the classic coptic journal with a contemporary cover - Dry-Erase features and reinforced corners for a versatile notebook.'
  }
]

items.forEach(function(item) {
  var $row = document.createElement('div')
  var $col = document.createElement('div')
  var $item = document.createElement('div')
  var $itemName = document.createElement('div')
  var $itemDescription = document.createElement('div')
  var $image = document.createElement('img')

  $row.appendChild($col)
  $col.appendChild($item)
  $item.appendChild($itemName)
  $item.appendChild($itemDescription)
  $item.appendChild($image)

  $row.classList.add('row')
  $col.classList.add('col-xs-12')
  $item.classList.add('panel')
  $item.classList.add('panel-default')
  $itemName.classList.add('panel-body')
  $itemDescription.classList.add('panel-body')
  $image.setAttribute('src', 'images/10057683GLargeSoftRuledNotebook_600.jpg')

  $itemName.textContent = item.name
  $itemDescription.textContent = item.description

  var $items = document.querySelector('#items')
  $items.appendChild($row)
})
