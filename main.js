// List View
function renderListItem(item) {
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
  $image.setAttribute('src', item.imageList)
  $image.setAttribute('data-set', item.id)
  $learnMore.setAttribute('href', item.link)
  $learnMore.setAttribute('data-set', item.id)

  $itemName.textContent = item.name
  $itemDescription.textContent = item.descriptionList
  $learnMore.textContent = item.learnMore
  $button.textContent = item.button

  return $col
}

// iterate through and add ITEM LIST to DOM
var $listItems = document.querySelector('#items')

itemsList.forEach(function (item) {
  var $listItem = renderListItem(item)
  $listItems.appendChild($listItem)
})

//
// // Detailed View
function renderDetail(item) {
  var $col = document.createElement('div')
  var $card = document.createElement('div')
  var $image = document.createElement('img')
  var $cardBlock = document.createElement('div')
  var $itemName = document.createElement('h3')
  var $itemDescription = document.createElement('p')
  var $itemCost = document.createElement('p')
  var $button = document.createElement('a')
  var $cancelButton = document.createElement('a')

  $col.appendChild($card)
  $card.appendChild($image)
  $card.appendChild($cardBlock)
  $cardBlock.appendChild($itemName)
  $cardBlock.appendChild($itemDescription)
  $cardBlock.appendChild($itemCost)
  $cardBlock.appendChild($button)
  $cardBlock.appendChild($cancelButton)

  $col.classList.add('col-sm-12', 'columns', 'details')
  $card.classList.add('card')
  $image.classList.add('card-img-top', 'img-fluid')
  $cardBlock.classList.add('card-block')
  $itemName.classList.add('card-title')
  $itemDescription.classList.add('card-text')
  $itemCost.classList.add('card-text')
  $itemCost.setAttribute('style', "font-weight: bold")
  $button.classList.add('btn', 'btn-primary', 'btn-margin')
  $cancelButton.classList.add('btn', 'btn-margin', 'btn-secondary')
  $button.setAttribute('href', item.addToCart)
  $cancelButton.setAttribute('data-set', 'back')
  $image.setAttribute('src', item.imageDetail)

  $itemName.textContent = item.name
  $itemDescription.textContent = item.descriptionDetail
  $itemCost.textContent = item.cost
  $button.textContent = item.button
  $cancelButton.textContent = item.cancelButton

  return $col
}
//
// // iterate and add ITEM DETAILS to DOM



//
// itemsDetail.forEach(function (item) {
//   var $item = renderDetail(item)
//   $itemsDetail.appendChild($item)
// })

// function hideDetails(function (){
//
// }

document.body.addEventListener('click', function(event) {
  var id = event.target.getAttribute('data-set')

  itemsList.forEach( function (item) {
    if (id === item.id.toString()) {
    console.log(id)
    var $itemsDetail = document.querySelector('#details')
    $listItems.classList.add('hidden')
    $itemsDetail.classList.remove('hidden')
    var $renderDetail = renderDetail(item)
    $itemsDetail.appendChild($renderDetail)
  }
})
})

document.body.addEventListener('click', function(event) {
  if (event.target.getAttribute('data-set') === 'back')  {
    $listItems.classList.remove('hidden')
    var $itemsDetail = document.querySelector('#details')
    $itemsDetail.classList.add('hidden')
    var $itemsDetailList = document.querySelector('.details')
    $itemsDetail.removeChild($itemsDetailList)
  }
})
//
// function swapView($views, container) {
//   console.log('test')
// }
