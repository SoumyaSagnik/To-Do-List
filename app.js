const search = document.querySelector('.search input');
const addButton = document.querySelector('.search button');
const listContainer = document.querySelector('.lists');
const landingMess = document.querySelector('.landing-message');
var deleteButton;
var taskItem;
var tc;


search.addEventListener('keyup', (e) => {
    if (search.value === '')
        return;
    if (e.keyCode === 13)
        addButton.click();
});

addButton.addEventListener('click', () => {
    landingMess.remove();
    var task = search.value;
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
    search.value = '';
    deleteButton = document.querySelectorAll('.lists button');
    deleteButton.forEach(button => {
        button.addEventListener('click', () => {
            gsap.to(button.parentNode, { duration: .01, boxShadow: 'none' });
            gsap.to(button.parentNode, { duration: 1, opacity: 0, ease: 'power' });
            gsap.to(button.parentNode, { duration: 1, y: '500%', ease: 'power' });
            gsap.to(button.parentNode, { duration: .3, rotation: 10, ease: 'power' });
            setTimeout(function () {
                button.parentElement.remove();
            }, 700);
        });
    })
    taskItem = document.querySelectorAll('.container .lists .item h4');
    taskItem.forEach((btn) => {
        btn.addEventListener('click', () => {
            btn.style.textDecoration = "line-through";
            btn.style.textDecorationColor = "green";
            btn.style.opacity = ".7";
        })
    })
});
