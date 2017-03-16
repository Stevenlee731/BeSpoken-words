/*
<div class="row">
  <div class="col-sm-4 columns">
    <div class="card">
      <img class="card-img-top img-fluid" src="images/10057683GLargeSoftRuledNotebook_600.jpg" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Moleskine</h4>
        <p class="card-text">A blending of tones, fabric and texture, this notebook is where touch and colors meet.</p>
        <p class="card-text">Learn More</p>
        <a href="#" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4 columns">
    <div class="card">
      <img class="card-img-top img-fluid" src="images/10067179gMetallicNotebook_600.jpg" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Pippin</h4>
        <p class="card-text">Think of our Pippin Medium Soft Cover Notebook as your trusty right (or left!) - hand-man.</p>
        <p class="card-text">Learn More</p>
        <a href="#" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  </div>
  <div class="col-sm-4 columns">
    <div class="card">
      <img class="card-img-top img-fluid" src="images/10067053ArtisanJournalCalhoun_600.jpg" alt="Card image cap">
      <div class="card-block">
        <h4 class="card-title">Calhoun</h4>
        <p class="card-text">Russel &amp; Hazel, updates the classic coptic journal with a contemporary cover.</p>
        <p class="card-text">Learn More</p>
        <a href="#" class="btn btn-primary">Add to Cart</a>
      </div>
    </div>
  </div>
</div>
*/

// navigation

var navItems = [
  {}
]

var items = [
  {
    id: 1,
    name: 'Moleskine',
    description: 'A blending of tones, fabric and texture, this notebook is where touch and colors meet.',
    learnMore: 'Learn More',
    button: 'Add to Cart',
    image: 'images/10057683GLargeSoftRuledNotebook_600.jpg'
  },
  {
    id: 2,
    name: 'Poppin',
    description: 'Think of our Pippin Medium Soft Cover Notebook as your trusty right (or left!) - hand-man.',
    learnMore: 'Learn More',
    button: 'Add to Cart',
    image: 'images/10067053ArtisanJournalCalhoun_600.jpg'
  },
  {
    id: 3,
    name: 'Calhoun',
    description: 'Russel & Hazel, updates the classic coptic journal with a contemporary cover.',
    button: 'Add to Cart',
    learnMore: 'Learn More',
    link: 'https://google.com',
    image: 'images/10067179gMetallicNotebook_600.jpg'
  }
]


// Main Page
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
  $image.setAttribute('src', item.image)
  $learnMore.setAttribute('href', item.link)

  $itemName.textContent = item.name
  $itemDescription.textContent = item.description
  $learnMore.textContent = item.learnMore
  $button.textContent = item.button

  return $col
}

var $items = document.querySelector('#items')

items.forEach(function (item) {
  var $item = renderItem(item)
  $items.appendChild($item)
})

// Detailed View

/*
document.body.addEventListener('click', function(event) {
  var id = event.target.getAttribute('data-id')
  var currentItem
  items.forEach(function(item) {
    if (item.id === id) {
      currentItem = item
    }
  })

  var $detailedItem = detailedItem(currentItem)
  var $views = document.querySelector('.container')
  var $details = document.querySelector('#details')
  swap($views, $details)
})

 swap(viewsContainer, view) {
  // Hide the old active view.
  var $active = viewsContainer.querySelector('.active')
  $active.classList.remove('active')
  $active.classList.add('hidden')

  // Show the new view.
  view.classList.remove('hidden')
  view.classList.add('active')
}
*/