//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES
const messagesNotification = document.querySelector
('messages-notification');
const messages = document.querySelector('.messages');

//REMOVE ACTIVE CLASS FROM ALL MENU ITEMS

const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active')
    })
}

menuItems.forEach(item =>{
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display ='none';
        } else{
            document.querySelector('.notification-popup').style.display ='block';
            document.querySelector('#notifications . notification-count').style.display ='none';
        }
    })
})

//==========================MESSAGES==============================
