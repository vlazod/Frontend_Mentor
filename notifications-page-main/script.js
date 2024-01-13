let notifications = Array.from(document.querySelectorAll(".unread .toggle"));
let notification = Array.from(document.querySelectorAll(".not"));
let toggle = document.querySelectorAll(".toggle");
let notifications_number =  document.querySelector(".notifications_number");
let mark_all = document.querySelector(".info__header--markall a");


let number = notifications.length;
notifications_number.textContent = number;

function manageNotification(array){

}

mark_all.addEventListener('click', (e)=>{
   e.preventDefault();
   notification.forEach(n => {

        if(n.classList.contains('unread')){
            n.classList.remove('unread');
            toggle.forEach(t => {
                t.classList.remove('toggle');
                t.classList.add('toggle__read');
                
                notifications.shift()
                // number = 
                notifications_number.textContent = notifications.length;
                
            })
            // t.classList.remove('toggle');
            // t.classList.add('toggle__read');
            mark_all.textContent = 'Mark all as unread';

        } else {

             n.classList.add('unread');
             toggle.forEach(t => {
                t.classList.add('toggle');
                t.classList.remove('toggle__read');
            });

            mark_all.textContent = 'Mark all as read';
            notifications.push(notifications.unshift())
            notifications_number.textContent = notifications.length;
        }
});
           
   
})

toggle.forEach(t => {
    t.addEventListener('click', (e)=>{
        e.stopPropagation();
        let target = e.target.parentElement.parentElement.parentElement.parentElement
        console.log(target);
        if(target.classList.contains('unread')){
            target.classList.remove('unread');
            t.classList.remove('toggle');
            t.classList.add('toggle__read');
            notifications.shift()
            number = notifications.length;
            notifications_number.textContent = number

        } else {
            target.classList.add('unread');
            t.classList.add('toggle');
            t.classList.remove('toggle__read');
            notifications.push(notifications.unshift())
            number = notifications.length;
            notifications_number.textContent = number
        }
        
        
    })
});