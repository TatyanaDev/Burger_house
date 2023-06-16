const inputs = document.querySelectorAll('.order-form-input > input')
const prices = document.querySelectorAll('.products-item-price')
const buttons = document.querySelectorAll('.product-button')
const orderAction = document.querySelector('#order-action')
const mainButton = document.querySelector('.main-button')
const links = document.querySelectorAll('.menu-item > a')
const products = document.querySelector('.products')
const currency = document.querySelector('.currency')
const order = document.querySelector('.order')

mainButton.addEventListener('click', () =>
  products.scrollIntoView({ behavior: 'smooth' })
)

for (let i = 0; i < links.length; i++) {
  const link = document.querySelector(`#${links[i].getAttribute('data-link')}`)

  links[i].addEventListener('click', () =>
    link.scrollIntoView({ behavior: 'smooth' })
  )
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () =>
    order.scrollIntoView({ behavior: 'smooth' })
  )
}

orderAction.addEventListener('click', () => {
  let hasError = false

  inputs.forEach(input => {
    if (!input.value) {
      input.parentElement.style.background = 'red'
      hasError = true
    } else {
      input.parentElement.style.background = ''
    }
  })

  if (!hasError) {
    inputs.forEach(input => (input.value = ''))
    alert('Спасибо за заказ! Мы скоро свяжемся с вами!')
  }
})

currency.addEventListener('click', event => {
  const currentCurrency = event.target.innerText
  let newCurrency = '$'
  let coefficient = 1

  if (currentCurrency === '$') {
    newCurrency = '₴'
    coefficient = 36.9
  } else if (currentCurrency === '₴') {
    newCurrency = 'zł'
    coefficient = 4.08
  }

  event.target.innerText = newCurrency

  for (let i = 0; i < prices.length; i++) {
    prices[i].innerText = `${(
      parseInt(prices[i].getAttribute('data-base-price')) * coefficient
    ).toFixed(2)} ${newCurrency}`
  }
})
