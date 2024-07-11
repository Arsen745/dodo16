const dataPizza = [
    {
        pizzaName: "Креветки со сладким чили",
        descriptipn: "Креветки  , ананасы , соус сладкий чили, перец сладкий , моцарелла, соус альфредо",
        image: "https://media.dodostatic.net/image/r:292x292/11EF33DC750FF17794FB1ACA35F22A6E.avif",
        price: 545,
    },
    {
        pizzaName: "Баварская",
        descriptipn: "Охотничьи колбаски, маринованные огурчики, красный лук, томаты, горчичный соус, моцарелла, томатный соус",
        image: "https://media.dodostatic.net/image/r:292x292/11EF346408A39615BD3478135F9F6673.avif",
        price: 495,
    },
    {
        pizzaName: "Чикен бомбони",
        descriptipn: "Соус альфредо, моцарелла, лук красный , перец , смесь сыров чеддер и пармезан , куриные кусочки, соус сладкий чили",
        image: "https://media.dodostatic.net/image/r:292x292/11EF3DB2188200718EDEB6D5EC3E3ECD.avif",
        price: 495,
    },
    {
        pizzaName: "Сырная",
        descriptipn: "Моцарелла, смесь сыров чеддер и пармезан, соус альфредо",
        image: "https://media.dodostatic.net/image/r:292x292/11EE7D600BC7B9F1B6888AF021E5C198.avif",
        price: 295,
    }
]
const cart = []

// DOM
const list = document.querySelector('.list')



// modal dom
const imgEl = document.querySelector('.img img')
const pName = document.querySelector('.name')
const pDesc = document.querySelector('.desc')
const pPrice = document.querySelector('.price')
const addTocartbtn = document.querySelector('.cart')
const cartCount = document.querySelector('.cart2 span')
const cartCount2 = document.querySelector('.cart2')
const cartModal = document.querySelector('.cart-modal')
const closeModal = document.querySelector('.icon-cart')
const listModal = document.querySelector('.cart-list')


let index = 0

for (const pizza of dataPizza) {
    index++
    list.innerHTML += `
    <div class="card">
         <img src="${pizza.image}" alt="" />
         <h5>${pizza.pizzaName}</h5>
         <p>${pizza.descriptipn}</p>
         
         <div>
            <p>от ${pizza.price}</p>
            <button onclick="openModal(${index})">Выбрать</button>
         </div>
    </div>
    `
}

const card =  document.querySelector('.card')
const modal = document.querySelector('.modal')
const btnClose = document.querySelector('.icon')
const btnTema = document.querySelector('.btnTema')




btnClose.addEventListener('click', function(){
     modal.style.display = 'none'


})

function openModal(idx) {
    const i = idx - 1;
    modal.style.display = 'flex'
    imgEl.src = dataPizza[i].image
    pName.innerText = dataPizza[i].pizzaName
    pDesc.innerText = dataPizza[i].descriptipn
    pPrice.innerText = dataPizza[i].price

}

addTocartbtn.addEventListener('click', () => {
    const pizza = dataPizza[index - 1]
    console.log(pizza);
    cart.push(pizza)
    cartCount.innerText = `| ${cart.length}`
    for (const pizza1 of cart) {
        index++
        listModal.innerHTML += `
        <div class="card">
             <h5>${pizza1.pizzaName}</h5>
             <p>${pizza1.descriptipn}</p>
        </div>
        `
    }
})

cartCount2.addEventListener('click', () => {
    cartModal.style.display = 'block';

} )
closeModal.addEventListener('click', () => {
    cartModal.style.display = 'none'
} )
listModal.addEventListener('click', () => {
    cartModal.style.display = 'none'
} )
