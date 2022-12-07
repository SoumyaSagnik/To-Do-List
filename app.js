const search = document.querySelector('.search input');
const addButton = document.querySelector('.search button');
const listContainer = document.querySelector('.lists');
var deleteButton;


search.addEventListener('keyup', (e) => {
    if (search.value === '')
        return;
    if (e.keyCode === 13)
    addButton.click();
});

addButton.addEventListener('click', () => {
    const task = document.querySelector('.search input').value;
    if (task === '')
        return;
    listContainer.innerHTML += `
    <div class="item">
        <h4>${task}</h4>
        <button>
            <i class='fa fa-trash' style='color: red'></i>
        </button>
    </div>
    `;
    deleteButton = document.querySelectorAll('.lists button');
    deleteButton.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.remove();
        });
    })
});