import './scss/main.scss'
//step 宣告
const formParts = form.querySelectorAll('.part')
const stepControl = document.getElementById('step-control')
const steps = stepControl.querySelectorAll('.step')
// btn 宣告
const btnControl = document.getElementById('btn-control')
const backBtn = btnControl.querySelector('.control__panel--back')
const nextBtn = btnControl.querySelector('.control__panel--next')
let step = 0

// 購物籃按鈕宣告
const dataPanel = document.querySelector('.shopping-cart__panel--item')

// 購買商品數量增減
dataPanel.addEventListener('click', (e)=>{
  const plusB = e.target.matches('.cart-item-button2')
  const minusB = e.target.matches('.cart-item-button1')
  if ( plusB || minusB){
    const quantity = e.target.parentElement.children[1]
    let quantityText = Number(quantity.innerText)
    if ( plusB ){
      quantityText += 1
    } else{
      quantityText -= 1
      if (quantityText < 0) quantityText = 0
    }
    quantity.innerHTML = quantityText
  }
  // 發現點擊icon無效 所以新增icon點擊效果
  const plusIcon = e.target.matches('.fa-plus')
  const minusIcon = e.target.matches('.fa-minus')
  if (plusIcon || minusIcon ){
    const amountBox = e.target.parentElement.parentElement.children[1]
    let amount = Number(amountBox.innerText)
    if (plusIcon) {
    amount += 1
  }
    else {
    amount -= 1
      if (amount < 0) amount = 0
   }
    amountBox.innerHTML = amount
}
// 商品金額
  const priceBox1 = document.querySelector('.price1')
  const priceBox2 = document.querySelector('.price2')
  const totalPriceBox = document.querySelector('.total-fee-amount')
  const btn1 = e.target.matches('.btn1')
  const btn2 = e.target.matches('.btn2')
  const btn3 = e.target.matches('.btn3')
  const btn4 = e.target.matches('.btn4')

  const icon1 = e.target.matches('.icon1')
  const icon2 = e.target.matches('.icon2')
  const icon3 = e.target.matches('.icon3')
  const icon4 = e.target.matches('.icon4')
  let price1 = Number(priceBox1.innerText)
  let price2 = Number(priceBox2.innerText)
  let totalPrice = Number(totalPriceBox.innerText)
  if( btn1 || btn2 || icon1 || icon2){
    if(btn1 || icon1){
      price1 -= 3999
    }else if( btn2 || icon2){
      price1 += 3999
    }
    if(price1 < 0 ) price1 = 0
    priceBox1.innerHTML = price1
    totalPriceBox.innerHTML = price1 + price2
  }

  if (btn3 || icon3 || btn4 || icon4) {
    if (btn3 || icon3) {
      price2 -= 1299
      totalPrice -= 1299
    } else if( btn4 || icon4){
      price2 += 1299
      totalPrice += 1299
    }
    if (price2 < 0) price2 = 0
    if (totalPrice < 0) totalPrice = 0
    priceBox2.innerHTML = price2
    totalPriceBox.innerHTML = price1 + price2
  }
  
})

//切換步驟頁面
function handleBtnControlClicked(e) {
  e.preventDefault()
  const nowStep = steps[step]
  if (e.target.matches('.control__panel--next') && e.target.innerHTML === '下一步' ) {
    const nextStep = steps[step + 1]
    nowStep.classList.remove('active')
    nowStep.classList.add('checked')
    nextStep.classList.add('active')
    formParts[step].classList.toggle('d-none')
    formParts[step + 1].classList.toggle('d-none')
    step += 1
  } else if (e.target.matches('.control__panel--back')) {
    const prevStep = steps[step - 1]
    nowStep.classList.remove('active')
    prevStep.classList.remove('checked')
    prevStep.classList.add('active')
    formParts[step].classList.toggle('d-none')
    formParts[step - 1].classList.toggle('d-none')
    step -= 1
  }
  setBtnDisabled()
}

function setBtnDisabled() {
  if (step === 0) {
    backBtn.classList.add('v-hidden')
    nextBtn.classList.add('button-style2')
  } else {
    backBtn.classList.remove('v-hidden')
  }
  if(step >= 1){
    nextBtn.classList.remove('button-style2')
    nextBtn.classList.add('button-style1')
  }
  if (step === 2) {
    nextBtn.innerHTML = '確認下單'
  } else {
    nextBtn.innerHTML = '下一步'
  }
}

// radio style
const freightBox = document.querySelector('.freight')
const step2 = document.getElementById('step2')
const shipway1 = document.querySelector('.shipway1') 
const shipway2 = document.querySelector('.shipway2')
step2.addEventListener('click',(e) => {
  let freight = freightBox.innerText
  if(e.target.matches('.radio1')){
    shipway1.classList.remove('ship-active2')
    shipway1.classList.add('ship-active')
    shipway2.classList.remove('ship-active')
    shipway2.classList.add('ship-active2')
    freightBox.innerHTML = '免費'
  } else if (e.target.matches('.radio2')){
    shipway2.classList.remove('ship-active2')
    shipway2.classList.add('ship-active')
    shipway1.classList.remove('ship-active')
    shipway1.classList.add('ship-active2')
    freightBox.innerHTML = '$500'
  }
})

btnControl.addEventListener('click', handleBtnControlClicked)
