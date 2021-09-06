const list = document.querySelector('#todo-list')
const input = document.querySelector('#todo-input')

const addToDo = () => {
    const value = input.value
    if(value.trim() === ''){
        alert('Cannot submit empty to-do')
        return
    }
    const li = document.createElement('li')
    const p = document.createElement('p')
    const checkbox = document.createElement('input')
    li.appendChild(p)
    li.appendChild(checkbox)
    p.innerHTML = value
    checkbox.type = 'checkbox'
    checkbox.onchange = function(){
        if(this.checked){
            this.parentElement.style.textDecoration = 'line-through'
        } else {
            this.parentElement.style.textDecoration = 'none'
        }
    }
    p.onclick = function(){
        this.parentElement.remove()
    }
    list.appendChild(li)
}