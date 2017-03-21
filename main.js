// Global Variables
var $viewList = ['#items', '#details', '#checkout']
var $listItems = document.querySelector('#items')
var $detailItems = document.querySelector('#details')
var $checkoutItems = document.querySelector('#checkout')
var $quantities = ['1','2','3','4','5']

// Cart Amount
var $cart = document.querySelector('#cart')
var $cartTotal = document.createElement('span')
$cartTotal.classList.add('badge', 'badge-info')
$cart.appendChild($cartTotal)
$cartTotal.textContent = shoppingCart.length

// Change Views
function changeView(viewList, activeView) {
  viewList.forEach(function (view) {
    var $view = document.querySelector(view)
    $view.classList.add('hidden')
  })
  var $activeView = document.querySelector(activeView)
  $activeView.classList.remove('hidden')
}

// Add to Cart
function addToCart(item) {
  shoppingCart.push(item);
  $cartTotal.textContent = shoppingCart.length
}

// Clear div
function clearDiv(parent, child) {
  var $parent = document.querySelector(parent)
  var $item = document.querySelector(child)
  $parent.removeChild($item)
}

// build quanity values
function buildQuantities(option) {
  for (var i = 0; i < option.length; i++) {
    var $option = document.createElement('option')
    $option.setAttribute('value', option[i])
  }
  return $option
}

// DOM List View
function renderListItem(item) {
  var $col = document.createElement('div')
  var $card = document.createElement('div')
  var $image = document.createElement('img')
  var $cardBlock = document.createElement('div')
  var $itemName = document.createElement('h4')
  var $itemDescription = document.createElement('p')
  var $learnMore = document.createElement('a')
  var $pWrapper = document.createElement('p')
  var $select = document.createElement('select')
  var $quantitySelect = buildQuantities($quantities)
  var $addToCartButton = document.createElement('a')

  $col.appendChild($card)
  $card.appendChild($image)
  $card.appendChild($cardBlock)
  $cardBlock.appendChild($itemName)
  $cardBlock.appendChild($itemDescription)
  $cardBlock.appendChild($pWrapper)
  $pWrapper.appendChild($learnMore)
  $cardBlock.appendChild($select)
  $select.appendChild($quantitySelect)
  $cardBlock.appendChild($addToCartButton)

  $col.classList.add('col-sm-4', 'columns')
  $card.classList.add('card')
  $image.classList.add('card-img-top', 'img-fluid')
  $cardBlock.classList.add('card-block')
  $itemName.classList.add('card-title')
  $itemDescription.classList.add('card-text')
  $learnMore.classList.add('card-text')
  $addToCartButton.classList.add('btn', 'btn-primary')
  $addToCartButton.setAttribute('href', "javaScript:void(0);")
  $addToCartButton.setAttribute('data-set', item.id)
  $image.setAttribute('src', item.imageList)
  $image.setAttribute('data-set', item.id)
  $learnMore.setAttribute('href', item.link)
  $learnMore.setAttribute('data-set', item.id)

  $itemName.textContent = item.name
  $itemDescription.textContent = item.descriptionList
  $learnMore.textContent = item.learnMore
  $addToCartButton.textContent = item.addToCartButton

  return $col
}

itemsList.forEach(function (item) {
  var $listItem = renderListItem(item)
  $listItems.appendChild($listItem)
})

// DOM Detailed View
function renderDetail(item) {
  var $col = document.createElement('div')
  var $card = document.createElement('div')
  var $image = document.createElement('img')
  var $cardBlock = document.createElement('div')
  var $itemName = document.createElement('h3')
  var $itemDescription = document.createElement('p')
  var $itemCost = document.createElement('p')
  var $addToCartButton = document.createElement('a')
  var $cancelButton = document.createElement('a')

  $col.appendChild($card)
  $card.appendChild($image)
  $card.appendChild($cardBlock)
  $cardBlock.appendChild($itemName)
  $cardBlock.appendChild($itemDescription)
  $cardBlock.appendChild($itemCost)
  $cardBlock.appendChild($addToCartButton)
  $cardBlock.appendChild($cancelButton)

  $col.classList.add('col-sm-12', 'columns', 'details')
  $card.classList.add('card')
  $image.classList.add('card-img-top', 'img-fluid')
  $cardBlock.classList.add('card-block')
  $itemName.classList.add('card-title')
  $itemDescription.classList.add('card-text')
  $itemCost.classList.add('card-text')
  $itemCost.setAttribute('style', "font-weight: bold")
  $addToCartButton.classList.add('btn', 'btn-primary', 'btn-margin')
  $addToCartButton.setAttribute('data-set', item.id)
  $cancelButton.classList.add('btn', 'btn-margin', 'btn-secondary')
  $addToCartButton.setAttribute('href', "javaScript:void(0);")
  $cancelButton.setAttribute('data-set', 'back')
  $image.setAttribute('src', item.imageDetail)

  $itemName.textContent = item.name
  $itemDescription.textContent = item.descriptionDetail
  $itemCost.textContent = item.cost
  $addToCartButton.textContent = item.addToCartButton
  $cancelButton.textContent = item.cancelButton

  return $col
}

// buttons
document.body.addEventListener('click', function(event) {
  var id = event.target.getAttribute('data-set')
  if (event.target.textContent === "Learn More") {
    itemsList.forEach( function (item) {
      if (id === item.id.toString()) {
        changeView($viewList, '#details')
        var $renderDetail = renderDetail(item)
        $detailItems.appendChild($renderDetail)
      }
    })
  } else if (event.target.getAttribute('data-set') === 'back') {
      changeView($viewList, '#items')
      clearDiv('#details', '.details')
  } else if (event.target.textContent === "Add to Cart") {
      itemsList.forEach( function (item) {
        if (id === item.id.toString()) {
         addToCart(item)
        }
      })
    }
})
