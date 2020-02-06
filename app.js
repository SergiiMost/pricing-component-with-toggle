(function(){
  const checkBox = document.querySelector('#check')
  const setPrice = () => {
    const monthPrices = [19.99, 24.99, 39.99]
    const yearPrices = [199.99, 249.99, 399.99]
    const priceContainers = document.querySelectorAll('.card__price')
    const currentPrices = checkBox.checked ? monthPrices : yearPrices
    priceContainers.forEach((container, index) => {
      container.innerHTML = currentPrices[index]
    })
  }
  setPrice()
  checkBox.addEventListener('click', setPrice)
})()




