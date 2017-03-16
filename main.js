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
  $button.setAttribute('href', item.addToCart)
  $image.setAttribute('src', item.image)
  $learnMore.setAttribute('href', item.link, 'data-set', item.id)

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

/* Detailed View
<div class="col-sm-12">
  <div class="card">
    <img class="card-img-top img-fluid" src="images/Moleskin-detail.jpg" alt="Card image cap">
    <div class="card-block">
      <h3 class="card-title">Moleskine Notebook</h3>
      <p class="card-text">It all started with a notebook. Distinguishing marks: a hard cover with rounded corners and an elastic closure. On the first page an "in case of loss" notice with space to jot down a reward for the finder. Attached to the back cover an expandable pocket for loose papers and notes.</p>
      <a href="#" class="btn btn-primary">Add to Cart</a>
    </div>
  </div>
</div>
<div class="col-sm-12">
  <div class="card">
    <img class="card-img-top img-fluid" src="images/01 Header.jpg" alt="Card image cap">
    <div class="card-block">
      <h3 class="card-title">Poppin Notebook</h3>
      <p class="card-text">Think of our Medium Soft Cover Notebook as your trusty right(or left!)-hand-man. Always there when you need it, this purse-or-briefcase pal lives to hold meeting notes or keep a lid on secret plans. With a handy back pocket and totally luxe cover, it's the best-looking and hardest-working assistant money can buy.</p>
      <a href="#" class="btn btn-primary">Add to Cart</a>
    </div>
  </div>
</div>
<div class="col-sm-12">
  <div class="card">
    <img class="card-img-top img-fluid" src="images/ks_squire_photos-wnotebooks_02_2048x2048.jpg" alt="Card image cap">
    <div class="card-block">
      <h3 class="card-title">Baron Fig Notebook</h3>
      <p class="card-text">Designed to be used and abused, it's the perfect counterpart to the Confidant. The name honors the very community whose feedback inspired its creation. Vanguard—adventurer and leader. The tool for pioneers of the mind.</p>
      <a href="#" class="btn btn-primary">Add to Cart</a>
    </div>
  </div>
</div>
*/

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

var $itemsDetail = document.querySelector('#details')

itemsDetail.forEach(function (item) {
  var $item = renderDetails(item)
  $itemsDetail.appendChild($item)
})

document.body.addEventListener('click', function(event) {
  var id = event.target.getAttribute('data-id')
  items.forEach( function() {
    if (items.id === id) {
      console.log('yes')
    }

  }
)
