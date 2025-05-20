
const date = new Date();

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const months = ['January','February','March','April','May','June','July','August','September','October','November','December']

let checkbox = document.querySelector('input')

let add = document.querySelector('.add')

let dateSec = document.querySelector('.part1')

const month = months[date.getMonth()] ;

const day = days[date.getDay()];
dateSec.innerText = `${day}, ${date.getDate()} ${month} ${date.getFullYear()}`

function shortId() {
  return 'id'+Math.random().toString(36).slice(2, 9);
}

let createTask = document.querySelector('form')

createTask.addEventListener('submit', function (e) {
    e.preventDefault()
    // console.log('create new task')

    let inp = document.querySelector('form input')
    taskGenerator(inp.value)
    inp.value = ''

})

function taskGenerator(rawTask) {

    if (rawTask.length > 0) {
        // console.log(rawTask)
        let task = document.createElement('div')
        // task.id = shortId();
        task.innerHTML = `<label>${rawTask}</label>
                            <i class="fa-regular fa-trash-can " id="${shortId()}"></i>` 
        task.classList.add('item') 

        document.querySelector('.list').appendChild(task)
        
    }  

}

document.querySelector('.list').addEventListener('click',function(e){
    // console.log(e.target.id)

    let itemm = document.querySelector(`#${e.target.id}`)
    // console.log(itemm)

    let delItem = itemm.closest('.item');
    // console.log(itemm.closest('.item'))
    if(delItem){
        document.querySelector('.list').removeChild(delItem)
    }
    
})


// let checkboxinp = document.querySelector('#taskcheck')


// checkboxinp.addEventListener('change',function(e){
//     console.log(e.target.checked)
// })