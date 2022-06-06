const ddItemHead = document.querySelectorAll('.dd-item-head');


ddItemHead.forEach((head, index) => {
    head.addEventListener('click', () => {
        let icon = head.querySelector('.dd-item-icon').firstElementChild;
        if(icon.className == "dd-down"){
            head.nextElementSibling.classList.add('show-para');
            icon.className = "dd-up";
        } else if(icon.className == "dd-up"){
            head.nextElementSibling.classList.remove('show-para');
            icon.className = "dd-down";
        }
    });
});
