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
    gsap.to('.item:last-child', 1, { opacity: 1 });
    gsap.fromTo('.item:last-child', 1, { x: '-10rem' }, { x: 0, ease: 'power3' });
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

// -----------------------------------------------------------

const splitText = new SplitType(landingMess);
gsap.fromTo(landingMess.querySelectorAll('.char'), .5, { opacity: 0 }, { opacity: 1, stagger: { each: .3, from: "start" } });
gsap.fromTo(landingMess.querySelectorAll('.char'), .5, { y: "10rem" }, { y: 0, stagger: { each: .3, from: "start" }, ease: "elastic" });

setTimeout(function () {
    landingMess.querySelectorAll(".char").forEach((letter) => {
        letter.addEventListener("mouseover", () => {
            gsap.to(letter, 0.25, { y: "0.5rem", ease: "back" });
        });
    });

    landingMess.querySelectorAll(".char").forEach((letter) => {
        letter.addEventListener("mouseout", () => {
            gsap.to(letter, 0.25, { y: "0" });
        });
    });
}, 2500);
