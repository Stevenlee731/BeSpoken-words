// List View
function renderItem(item) {
  var $col = document.createElement('div')
  var $card = document.createElement('div')
  var $image = document.createElement('img')
  var $cardBlock = document.createElement('div')
  var $itemName = document.createElement('h4')
  var $itemDescription = document.createElement('p')
  var $learnMore = document.createElement('a')
  var $pWrapper = document.createElement('p')
  var $button = document.createElement('a')

  $col.appendChild($card)
  $card.appendChild($image)
  $card.appendChild($cardBlock)
  $cardBlock.appendChild($itemName)
  $cardBlock.appendChild($itemDescription)
  $cardBlock.appendChild($pWrapper)
  $pWrapper.appendChild($learnMore)
  $cardBlock.appendChild($button)

  $col.classList.add('col-sm-4', 'columns')
  $card.classList.add('card')
  $image.classList.add('card-img-top', 'img-fluid')
  $cardBlock.classList.add('card-block')
  $itemName.classList.add('card-title')
  $itemDescription.classList.add('card-text')
  $learnMore.classList.add('card-text')
  $button.classList.add('btn', 'btn-primary')
  $button.setAttribute('href', item.addToCart)
  $image.setAttribute('src', item.image)
  $learnMore.setAttribute('href', item.link)
  $learnMore.setAttribute('data-set', item.id)

  $itemName.textContent = item.name
  $itemDescription.textContent = item.description
  $learnMore.textContent = item.learnMore
  $button.textContent = item.button

  return $col
}

// iterate through and add ITEM LIST to DOM
var $listItems = document.querySelector('#items')

items.forEach(function (item) {
  var $listItem = renderItem(item)
  $listItems.appendChild($listItem)
})


// Detailed View
function renderDetails(item) {
  var $col = document.createElement('div')
  var $card = document.createElement('div')
  var $image = document.createElement('img')
  var $cardBlock = document.createElement('div')
  var $itemName = document.createElement('h3')
  var $itemDescription = document.createElement('p')
  var $itemCost = document.createElement('p')
  var $button = document.createElement('a')

  $col.appendChild($card)
  $card.appendChild($image)
  $card.appendChild($cardBlock)
  $cardBlock.appendChild($itemName)
  $cardBlock.appendChild($itemDescription)
  $cardBlock.appendChild($itemCost)
  $cardBlock.appendChild($button)

  $col.classList.add('col-sm-12')
  $card.classList.add('card')
  $image.classList.add('card-img-top', 'img-fluid')
  $cardBlock.classList.add('card-block')
  $itemName.classList.add('card-title')
  $itemDescription.classList.add('card-text')
  $itemCost.classList.add('card-text')
  $button.classList.add('btn', 'btn-primary')
  $button.setAttribute('href', item.addToCart)
  $image.setAttribute('src', item.image)

  $itemName.textContent = item.name
  $itemDescription.textContent = item.description
  $itemCost.textContent = item.cost
  $button.textContent = item.button

  return $col
}

// iterate and add ITEM DETAILS to DOM
var $itemsDetail = document.querySelector('#details')

itemsDetail.forEach(function (item) {
  var $item = renderDetails(item)
  $itemsDetail.appendChild($item)
})


// document.body.addEventListener('click', function(event) {
//   var id = event.target.getAttribute('data-set')
//   if (itemsDetails.id === 'id') {
//     console.log('yes')
//     var $item = document.querySelector('#items')
//     $item.remove()
//   } else {
//     return console.log('no')
//   }
// })

document.body.addEventListener('click', function(event) {
  var id = event.target.getAttribute('data-set')
  console.log(id)
  items.forEach( function (item) {
    if (id === items.name) {
    console.log('yes')
  } else {
    console.log('no')
  }
})
})

function swapView($views, container) {
  console.log('test')
}
