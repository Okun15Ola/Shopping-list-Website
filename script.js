// // function createNewItem (item) {
// //     const li = document.createElement('li');

// //     li.appendChild(document.createTextNode(item));

// //     const button = createButton('remove-item btn-link text-red');

// //     const icon = createIcon('fa-solid fa-xmark');

    
// //     li.appendChild(button);

// //     document.querySelector('.items').appendChild(li);
// // }

// // function createButton (classes) {
// //     const button = document.createElement('button')
// //     button.className = 'classes';

// //     const icon = createIcon('fa-solid fa-xmark');
    
// //     button.appendChild(icon);

// //     return button;
// // }

// // function createIcon (classes) {
// //     const icon = document.createElement('icon');
// //     icon.className = 'classes';
// //     return icon;
// // }
// // createNewItem('Eggs');
// // createNewItem('Cheese');
// // createNewItem('Mango');
// // createNewItem('Cassava');


// // function replaceFirstItem () {
// //     const firstItem =document.querySelector('li:first-child');

// //     const li = document.createElement('li');
// //     li.textContent = 'replaced First';

// //     firstItem.replaceWith(li);
// // }

// // function replaceSecondItem () {
// //     const secondItem = document.querySelector('li:nth-child(2)');

// //     secondItem.outerHTML = '<li>Replaced Second</li>';
// // }

// // function loopThrowAll() {
// //     const allLi = document.querySelectorAll('li');

// //     allLi.forEach((item, index) => {
        
// //         if (index === 1) {
// //             item.outerHTML= '<li>Replace Me</li>';
// //         }else{
// //             item.outerHTML= '<li>Replace All</li>';
// //         }

         
// //     });
// // }


// // function replaceNaChild() {
// //     const header = document.querySelector('header');
// //     const h1 = document.querySelector('header h1');

// //     const h2 = document.createElement('h2');
// //     h2.id= 'main-id';
// //     h2.textContent = 'Shopping List';
// //     header.replaceChild(h2, h1);
// // }

// // replaceFirstItem();
// // replaceSecondItem();
// // loopThrowAll();
// // replaceNaChild();


// // function removeFirstItem () {
// //     const ul = document.querySelector('ul');
// //     const li = document.querySelector('li:nth-child(2)');

// //     ul.removeChild(li);
// // }

// // function removeItem(itemNumber) {
     
// // }
// // removeFirstItem();




// // function onClear() {
// //     alert('Clear');
// // }

// // // Javascript Event Listener
// // const clearBtn = documenction () {
// // //     alert('Clear');
// // // }
// // // addEventListner

// // // clearBtn.addEventListener('click', () =>  alert('Clear all'));

// // clearBtn.addEventListener('click', onClear );

// // // setTimeout(() => clearBtn.removeEventListener('click', onClear), 100000);

// // setTimeout(() => clearBtn, 5000);
// // nt.querySelector('#clear');

// // // clearBtn.onclick = fu


// // const clearBtn = document.querySelector('#clear');

// // function onClear () {
// //     const itemList = document.querySelector('ul');

// //     // itemList.innerHTML = '';
// //     // const items = document.querySelectorAll('li');
// //     // items.forEach((item) => item.remove());

// //     while (itemList.firstChild) {
// //         itemList.removeChild(itemList.firstChild);
// //     }
// // }


// // clearBtn.addEventListener('click', onClear);

// // const logo = document.querySelector('img');

// // const onClick = () => console.log('Click Event');

// // const onDoubleClick = () => {
// //     if(document.body.style.backgroundColor !== 'purple'){
// //         document.body.style.backgroundColor = 'purple';
// //         document.body.style.colr = 'white';
// //     }else{
// //         document.body.style.backgroundColor = 'white';
// //         document.body.style.color = 'black';
// //     }
// // };
// // const onRightClick = () => console.log('Right click event');
// // const onMouseDown = () => console.log('mouse down event');
// // const onMouseUp = () => console.log('mouse up event');
// // const onMouseWheel = () => console.log('mouse wheel event');
// // const onMouseOver = () => console.log('mouse over event');
// // const onMouseOut = () => console.log('mouse out event');
// // const onDrag = () => console.log('drag event');
// // const onDragEnd = () => console.log('drag end event');

// // // Event Listners
// // logo.addEventListener('click', onClick);
// // logo.addEventListener('dblclick', onDoubleClick);
// // logo.addEventListener('contextmenu', onRightClick);
// // logo.addEventListener('mousedown', onMouseDown);
// // logo.addEventListener('mouseup', onMouseUp);
// // logo.addEventListener('wheel', onMouseWheel);
// // logo.addEventListener('mouseover', onMouseOver);
// // logo.addEventListener('mouseout', onMouseOut);
// // logo.addEventListener('dragstart', onDragStart);
// // logo.addEventListener('drag', onDrag);
// // logo.addEventListener('dragend', onDragEnd);

// // const addItem = document.querySelector('button');

// // const onClick = () => console.log('Click event');
// // const onDoubleClick = () => console.log('On Double Click event');
// // const onRightClick = () => console.log('On Right Click event');
// // const onMouseDown = () => console.log('On Mouse down event');
// // const onMouseUp = () => console.log('On Mouse up event');
// // const onDragStart = () => console.log('On Drag Start event');


// // addItem.addEventListener('click', onClick);
// // addItem.addEventListener('dblclick', onDoubleClick);
// // addItem.addEventListener('contextmenu', onRightClick);
// // addItem.addEventListener('mousedown', onMouseDown);
// // addItem.addEventListener('mouseup', onMouseUp);
// // addItem.addEventListener('dragstart', onDragStart);

// // const logo = document.querySelector('img');

// // function eventFunction (e) {
//     // console.log(e.target);
//     // console.log(e.currentTarget);
//     // console.log(e.type);
//     // console.log(e.timeStamp);
//     // console.log(e.clientX);
//     // console.log(e.clientY);
//     // console.log(e.offsetX);
//     // console.log(e.offsetY);
//     // console.log(e.pageX);
//     // console.log(e.pageY);
//     // console.(e.screenX);
//     // console.log(e.screenY);


// // function onDrag (e) {
// //     document.querySelector('h1').textContent = ` X ${e.clientX} Y ${e.clientY}`
// // }

// // const eventFunction = (e) => console.log(e); 

// // logo.addEventListener('click', eventFunction);
// // logo.addEventListener('drag', onDrag);

// // document.querySelector('a').addEventListener('click', function (e) {
// //     e.preventDefault();

// //     console.log('Link was clicked');
// // });

// // document.body.addEventListener('click', function (e) {
// //     console.log(e.target);
// //     console.log(e.currentTarget);
// // });

// // const itemInput = document.getElementById('item-input');

// // const onKeyPress = (e) => {
// //     console.log('keypress');
// // }
// // const onKeyUp = (e) => {
// //     console.log('keyup');
// // }
// // const onKeyDown = (e) => {
// //     // if (e.key === 'Enter') {
// //     //     alert('You pressed enter');
// //     // }

// //     if (e.keyCode === 13) {
// //         alert('You pressed Enter');
// //     }

// //     if (e.repeat) {
// //         console.log('You are holding down 1' + e.key);
// //     }

// //     console.log('Shift:' + e.shiftKey);
// //     console.log('Control:' + e.ctr);
// //     console.log('Alt:' + e.alt);

// //     if (e.shiftKey && e.key === 'K') {
// //         console.log('You hit shift + K');
// //     }
// // }

// // // itemInput.addEventListener('keypress', onKeyPress);
// // // itemInput.addEventListener('keyup', onKeyUp);
// // itemInput.addEventListener('keydown', onKeyDown);

 
// // const form = document.getElementById('item-form');

// // function onSubmit(e) {
// //     e.preventDefault();
    
// //     const item = getElementById('item-input').value;
// //     const priority = getElementById('priority-input').value;

// //     if (item === '' || priority === '0') {
// //         alert('Please fill in all fields');
// //         return;
// //     }

// //     console.log(item, priority);
// // }

// // form.addEventListener('submit', onSubmit);


// // const button = document.querySelector('form button');
// // const div = document.querySelector('form div:nth-child(2)');
// // const form = document.querySelector('form');


// // button.addEventListener('click', (e) => {
// //     alert('Button was clicked');
// //     e.stopPropagation();
// // });

// // div.addEventListener('click', () => {
// //     alert('Div was clicked');
// // })

// // form.addEventListener('click', () => {
// //     alert('Form was clicked');
// // })

// // document.body.addEventListener('click', () => {
// //     alert('Body was clicked');
// // })


// const listItems = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // listItems.forEach((item) => {
// //     item.addEventListener('click', (e) => {
// // //         e.target.remove();
// // //     })
// // // });

// list.addEventListener('click', (e) => {
//     if (e.target.tagName === 'LI') {
//         e.target.remove();
//     }
// })
// list.addEventListener('mouseover', (e) => {
//     if (e.target.tagName === 'LI') {
//         e.target.style.color = 'red';
//     }
// })



const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
const itemFilter = document.getElementById('filter');
const formBtn = itemForm.querySelector('button');
let isEditMode = false;

function displayItems() {
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach(item => addItemToDOM(item));
    checkUI();
}


function onAddItemSubmit(e) {
    e.preventDefault();
    // Validate input
    const newItem = itemInput.value;

    if (newItem === ' ') {
        alert('Please add an item');
        return;
    }

    // Check for edit mode

    if (isEditMode) {
        const itemToEdit = itemList.querySelector('.edit-mode');

        removeItemFromStorage(itemToEdit.textContent);
        itemToEdit.classList.remove('edit-mode');
        itemToEdit.remove();
        isEditMode = false;
    }else{
        if (checkIfItemExists(newItem)) {
            alert('That item already exists!');
            return;
        }
    }
   
    // Create item DOM element
    addItemToDOM(newItem);

    addItemToStorage(newItem);
    checkUI();

    itemInput.value = ' ';
}

function addItemToDOM(item) {
     // Create list item
     const li = document.createElement('li');
     li.appendChild(document.createTextNode(item));
 
     const button = createButton('remove-item btn-link text-red');
     li.appendChild(button);
 
     // Add li to the DOM
     itemList.appendChild(li);
}



function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;

}

function addItemToStorage(item) {
    const itemsFromStorage = getItemsFromStorage();

  
    // Add new item to array
    itemsFromStorage.push(item);

    // Convert to JSON string and set to local storage

    localStorage.setItem('items', JSON.stringify(itemsFromStorage))

}

function getItemsFromStorage () {
    let itemsFromStorage;

    if (localStorage.getItem('items') === null) {
        itemsFromStorage = [];
    }else{
        itemsFromStorage =  JSON.parse(localStorage.getItem('items'));
    }

    return itemsFromStorage;
}

function onClickItem(e) {
    if(e.target.parentElement.classList.contains('remove-item')){
        removeItem(e.target.parentElement.parentElement);
    }else{
        setItemToEdit(e.target);
    }
}

function checkIfItemExists(item) {
    const itemsFromStorage = getItemsFromStorage();
    return itemsFromStorage.includes(item);
}
function setItemToEdit(item) {
    isEditMode = true;

    itemList.querySelectorAll('li').forEach((i) => i.classList.remove('edit-mode'));
    item.classList.add('edit-mode');
    formBtn.innerHTML = '<i class = "fa-solid fa-pen"></i>Update Item';
    formBtn.style.backgroundColor = '#228B22';
    itemInput.value = item.textContent;

}

function removeItem (item) {
    if (confirm('Are you sure?')) {
        // Remove item from DOM
        item.remove();

        // Remove item from storage
        removeItemFromStorage(item.textContent);
        checkUI();
    }
}

function removeItemFromStorage(item) {
    let itemsFromStorage = getItemsFromStorage();

    // Filter out item to be removed
    itemsFromStorage = itemsFromStorage.filter((i) => i !== item);

    // Re-set to localstorage
    localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}

function clearItems () {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
    // Clear from localStorage
    localStorage.removeItem('items');

    checkUI();
}

function filterItems(e) {
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();

    items.forEach(item => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if(itemName.indexOf(text) != -1) {
            item.style.display = 'flex';
        }else{
            item.style.display = 'none';
        }

        console.log(itemName);
    });

    console.log(text);
}
function checkUI() {
    itemInput.value = '';
    const items = itemList.querySelectorAll('li');
    
    if (items.length === 0) {
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    }else{
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }

    formBtn.innerHTML = '<i class = "fa-solid fa-plus"></i> Add Item';
    formBtn.style.backgroundColor = '#333';

    isEditMode = false;
}

// Initialize app
function init() {
    // Event Listeners
    itemForm.addEventListener('submit', onAddItemSubmit);
    itemList.addEventListener('click', onClickItem);
    clearBtn.addEventListener('click', clearItems);
    itemFilter.addEventListener('input', filterItems);
    document.addEventListener('DOMContentLoaded', displayItems);
    
    checkUI();
}

init();

































