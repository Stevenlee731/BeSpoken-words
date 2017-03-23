// Global Variables
var $viewList = ['#items', '#details', '#checkout']
var $listItems = document.querySelector('#items')
var $detailItems = document.querySelector('#details')
var $checkoutItems = document.querySelector('#checkout')
// var $carouselItems = document.querySelector('#carousel')
var $quantities = ['1','2','3','4','5']

// Cart Amount
var $cart = document.querySelector('#cart')
var $cartTotal = document.createElement('span')
$cartTotal.classList.add('badge', 'badge-info')
$cartTotal.id = 'badge-cart'
$cart.appendChild($cartTotal)
$cartTotal.textContent = shoppingCart.length

// Change Views
function changeView(viewList, activeView) {
  viewList.forEach(function (view) {
    var $view = document.querySelector(view)
    $view.classList.add('hidden')
  })
  // if (activeView === '#items') {
  //   $carouselItems.classList.remove('hidden')
  // }
  var $activeView = document.querySelector(activeView)
  $activeView.classList.remove('hidden')
}

// Add to Cart
function addToCart(item) {
  shoppingCart.push(item);
  $cartTotal.textContent = shoppingCart.length
}

// Find Item
function findItem(items, id) {
  items.forEach( function (item) {
    if (id === item.id.toString()) {
      console.log(item)
      return item
    }
  })
}

// Clear div
function clearDiv(parent, child) {
  var $parent = document.querySelector(parent)
  var $item = document.querySelector(child)
  $parent.removeChild($item)
}

// build quanity values
function buildQuantities(option) {
  var $select = document.createElement('select')
  for (var i = 0; i < option.length; i++) {
    var $option = document.createElement('option')
    $option.setAttribute('value', option[i])
    $option.textContent = option[i]
    $select.appendChild($option)
  }
  return $select
}

// build Checkout
//



// function renderCheckout(item) {
//   var $colTwelve = document.createElement('div')
//   var $card = document.createElement('div')
//   var $cardHeader = document.createElement('div')
//   var $cardTitle = document.createElement('h3')
//   var $rowHeader = document.createElement('div')
//   var $colSixOne = document.createElement('div')
//   var $colSixTwo = document.createElement('div')
//   var $checkOut = document.createElement('h3')
//   var $cartIcon = document.createElement('i')
//   var $continueButton = document.createElement('button')
//   var $shareIcon = document.createElement('i')
//   var $cardBlock = document.createElement('div')
//   var $rowBlock = document.createElement('div')
//   var $cardFooter = document.createElement('div')
//   var $rowFooter = document.createElement('div')
//   var $colNine = document.createElement('div')
//   var $total = document.createElement('h4')
//   var $colThree = document.createElement('div')
//   var $checkOutButton = document.createElement('button')
//   var $hr = document.createElement('hr')
//
//   $colTwelve.appendChild($card)
//   $card.appendChild($cardHeader)
//   $cardHeader.appendChild($cardTitle)
//   $cardTitle.appendChild($rowHeader)
//   $rowHeader.appendChild($colSixOne)
//   $rowHeader.appendChild($colSixTwo)
//   $colSixOne.appendChild($checkOut)
//   $checkOut.appendChild($cartIcon)
//   $colSixTwo.appendChild($continueButton)
//   $continueButton.appendChild($shareIcon)
//   $card.appendChild($cardBlock)
//   $cardBlock.appendChild($rowBlock)
//   // function populating items
//   $card.appendChild($cardFooter)
//   $cardFooter.appendChild($rowFooter)
//   $rowFooter.appendChild($colNine)
//   $colNine.appendChild($total)
//   $rowFooter.appendChild($colThree)
//   $colThree.appendChild($checkOutButton)
//
//   $colTwelve.classList.add('col-sm-12', 'columns')
//   $card.classList.add('card')
//   $cardHeader.classList.add('card-header')
//   $cardTitle.classList.add('card-title')
//   $rowHeader.classList.add('row')
//
//   $colSixOne.classList.add('col-sm-6', 'columns')
//   $cartIcon.classList.add('fa','fa-shopping-cart')
//   $cartIcon.setAttribute('aria-hidden', 'true')
//   $checkOut.textContent = '$cartIcon' + ' Checkout'
//
//   $colSixTwo.classList.add('col-sm-6', 'columns')
//   $continueButton.classList.add('btn', 'btn-primary', 'btn-sm', 'btn-block')
//   $continueButton.setAttribute('type', 'button')
//   $shareIcon.classList.add('fa', 'fa-share')
//   $shareIcon.setAttribute('aria-hidden', 'true')
//   $continueButton.textContent = $shareIcon + ' Continue Shopping'
//
//   $cardBlock.classList.add('card-block')
//
//   $cardFooter.classList.add('card-footer')
//   $rowFooter.classList.add('row')
//   $colNine.classList.add('col-sm-9')
//   $total.classList.add('text-right')
//   $total.textContent = 'Total' + ' ' //add function calculating total here
//   $colThree.classList.add('col-sm-3')
//   $checkOutButton.classList.add('btn', 'btn-success', 'btn-block')
//   $checkOutButton.setAttribute('type', 'button')
//   $checkOutButton.textContent = 'Checkout'
//
//   return $colTwelve
// }

// function renderCarousel(item) {
//   var $carousel = document.createElement('div')
//   var $carouselInner = document.createElement('div')
//   var $carouselItemOne = document.createElement('div')
//   var $carouselItemTwo = document.createElement('div')
//   var $carouselItemThree = document.createElement('div')
//   var $carouselPreview = document.createElement('a')
//   var $carouselNext = document.createElement('a')
//   var $imgOne = document.createElement('img')
//   var $imgTwo = document.createElement('img')
//   var $imgThree = document.createElement('img')
//   var $controlsPreview = document.createElement('span')
//   var $controlsSrOne = document.createElement('span')
//   var $controlsNext = document.createElement('span')
//   var $controlsSrTwo = document.createElement('span')
//
//   $carousel.appendChild($carouselInner)
//   $carouselInner.appendChild($carouselItemOne)
//   $carouselItemOne.appendChild($imgOne)
//   $carouselInner.appendChild($carouselItemTwo)
//   $carouselItemTwo.appendChild($imgTwo)
//   $carouselInner.appendChild($carouselItemThree)
//   $carouselItemThree.appendChild($imgThree)
//   $carousel.appendChild($carouselPreview)
//   $carouselPreview.appendChild($controlsPreview)
//   $carouselPreview.appendChild($controlsSrOne)
//   $carousel.appendChild($carouselNext)
//   $carouselNext.appendChild($controlsNext)
//   $carouselNext.appendChild($controlsSrTwo)
//
//   $carousel.classList.add('carousel', 'slide')
//   $carousel.setAttribute('data-ride','carousel')
//   $carousel.id = 'carouselExampleControls'
//   $carouselInner.classList.add('carousel-inner')
//   $carouselInner.setAttribute('role', 'listbox')
//
//   $carouselItemOne.classList.add('carousel-item', 'active')
//   $imgOne.classList.add('d-block', 'img-fluid')
//   $imgOne.setAttribute('src', 'images/Moleskin-detail.jpg')
//   $imgOne.setAttribute('alt', 'First slide')
//
//   $carouselItemTwo.classList.add('carousel-item')
//   $imgTwo.classList.add('d-block', 'img-fluid')
//   $imgTwo.setAttribute('src', 'images/poppin-detail.jpg')
//   $imgTwo.setAttribute('alt', 'Second slide')
//
//   $carouselItemThree.classList.add('carousel-item')
//   $imgThree.classList.add('d-block', 'img-fluid')
//   $imgThree.setAttribute('src', 'images/Monsieur-detail.jpg')
//   $imgThree.setAttribute('alt', 'Third slide')
//
//   $carouselPreview.classList.add('carousel-control-prev')
//   $carouselPreview.setAttribute('href', '#carouselExampleControls')
//   $carouselPreview.setAttribute('role', 'button')
//   $carouselPreview.setAttribute('data-slide', 'prev')
//   $controlsPreview.classList.add('carousel-control-prev-icon')
//   $controlsPreview.setAttribute('aria-hidden', 'true')
//   $controlsSrOne.classList.add('sr-only')
//   $controlsSrTwo.textContent = 'Previous'
//
//   $carouselNext.classList.add('carousel-control-next')
//   $carouselNext.setAttribute('href', '#carouselExampleControls')
//   $carouselNext.setAttribute('role', 'button')
//   $carouselNext.setAttribute('data-slide', 'next')
//   $controlsNext.classList.add('carousel-control-next-icon')
//   $controlsNext.setAttribute('aria-hidden', 'true')
//   $controlsSrTwo.classList.add('sr-only')
//   $controlsSrTwo.textContent = 'Next'
//
//   return $carousel
// }
//
// var $carouselRender = renderCarousel()
// $carouselItems.appendChild($carouselRender)


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
  var $quantitySelect = buildQuantities($quantities)
  var $addToCartButton = document.createElement('a')

  $col.appendChild($card)
  $card.appendChild($image)
  $card.appendChild($cardBlock)
  $cardBlock.appendChild($itemName)
  $cardBlock.appendChild($itemDescription)
  $cardBlock.appendChild($pWrapper)
  $pWrapper.appendChild($learnMore)
  $cardBlock.appendChild($quantitySelect)
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
  $quantitySelect.setAttribute('data-set', item.id)
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
  var $quantitySelect = buildQuantities($quantities)

  $col.appendChild($card)
  $card.appendChild($image)
  $card.appendChild($cardBlock)
  $cardBlock.appendChild($itemName)
  $cardBlock.appendChild($itemDescription)
  $cardBlock.appendChild($itemCost)
  $cardBlock.appendChild($quantitySelect)
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
  $quantitySelect.setAttribute('data-set', item.id)
  $cancelButton.setAttribute('data-set', 'back')
  $image.setAttribute('src', item.imageDetail)

  $itemName.textContent = item.namexw
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
        findItem(itemsList, id)
        var $renderDetail = renderDetail(item)

        changeView($viewList, '#details')
  } else if (event.target.getAttribute('data-set') === 'back') {
      changeView($viewList, '#items')
      clearDiv('#details', '.details')
  } else if (event.target.textContent === "Add to Cart") {
      findItem(itemsList, id)
      addToCart(items)
  } else if (event.target.id === 'shopping-cart') {
      changeView($viewList, '#checkout')
  } else if (event.target.id === 'logo-font') {
      changeView($viewList, '#items')
  }
})
