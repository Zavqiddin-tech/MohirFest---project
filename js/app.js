const navBtn = document.querySelectorAll('.nav-btn')
const signUpBlock = document.querySelector('.sign-up__block')
const signInBlock = document.querySelector('.sign-in__block')
const signUp = document.querySelector('.sign__up')
const signIn = document.querySelector('.sign__in')
const removeBtn = document.querySelectorAll('.bx-x')
const kirishBtn = document.querySelector('.kirish-btn')
const kirishBtn2 = document.querySelector('.kirish-btn-2')
const searchSection = document.querySelector('.search-section')
const searchX = document.querySelector('.search-x')
const navbarSearch = document.querySelectorAll('.navbar-search')


navBtn.forEach(e => {
    e.onclick = ()=> {
        signUp.style.display = 'block'
        signUpBlock.style.display = 'block'
        setTimeout(()=> {
            signUp.style.opacity = '1'
            signUpBlock.style.opacity = '1'
        }, 400)
    }
})

// navBtn.onclick = ()=> {
//     signUp.style.display = 'block'
//     signUpBlock.style.display = 'block'
//     setTimeout(()=> {
//         signUp.style.opacity = '1'
//         signUpBlock.style.opacity = '1'
//     }, 400)
// }

kirishBtn.onclick = ()=> {
    signUp.style.display = 'none'
    signUpBlock.style.display = 'none'
    signIn.style.display = 'block'
    signInBlock.style.display = 'block'
}

kirishBtn2.onclick = ()=> {
    signInBlock.style.display = 'none'
}

removeBtn.forEach(e => {
    e.addEventListener('click', function() {
        signUpBlock.style.display = 'none'
        signInBlock.style.display = 'none'
    })
});

searchX.onclick = ()=> {
    searchSection.style.display = 'none'
}

navbarSearch.forEach(e => {
    e.onclick = ()=> {
        searchSection.style.display = 'flex'
    }
})
