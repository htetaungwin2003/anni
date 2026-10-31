import './style.css'

const openGift = document.querySelector('#openGift')
const welcome = document.querySelector('#welcome')
const hero = document.querySelector('#hero')


openGift.addEventListener('click', () => {
welcome.classList.add('opacity-0')


  hero.classList.remove('invisible')

  
  requestAnimationFrame(() => {
    hero.classList.remove('opacity-0')
  })

  
  setTimeout(() => {
    welcome.classList.add('invisible')
  }, 1000)
})


const memoryImages = document.querySelectorAll('.memory-img')
const lightbox = document.querySelector('#lightbox')
const lightboxImage = document.querySelector('#lightboxImage')
const closeLightbox = document.querySelector('#closeLightbox')

memoryImages.forEach((img) => {
  img.addEventListener('click', () => {
    lightboxImage.src = img.src
    lightbox.classList.remove('hidden')
    lightbox.classList.add('flex')
  })
})


closeLightbox.addEventListener('click', () => {
  lightbox.classList.add('hidden')
  lightbox.classList.remove('flex')
})


lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add('hidden')
    lightbox.classList.remove('flex')
  }
})


document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    lightbox.classList.add('hidden')
    lightbox.classList.remove('flex')
  }
})




const openLetter = document.querySelector('#openLetter')
const letter = document.querySelector('#letter')

openLetter.addEventListener('click', () => {

  letter.classList.toggle('opacity-0')
  letter.classList.toggle('-translate-y-6')

  if (letter.classList.contains('opacity-0')) {
    openLetter.textContent = 'Open My Letter ♥'
  } else {
    openLetter.textContent = 'Close My Letter ♥'
  }

})
