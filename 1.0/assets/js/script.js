const list = document.querySelectorAll('.list')

function activeLink(){
    list.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active')
}

list.forEach((item) =>
item.addEventListener('mouseover', activeLink))

function pActiveLink(){
    list.forEach((item) => {
        item.classList.remove('active')
        if(item.classList.contains('i')){
            const liste = document.querySelector('.i')
            liste.classList.add('active')
            
        }
    })
}

list.forEach((item) =>
item.addEventListener('mouseout', pActiveLink))

