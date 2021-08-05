export const smoothCollapse = id => {
    let element = document.querySelector(`#${id}`);
    element.style.height = element.scrollHeight + 'px';

    element.classList.toggle('open');
    element.style.height = element.classList.contains('open') ? element.scrollHeight + 'px': 0;
}

export const openCollapse = id => {
    let element = document.querySelector(`#${id}`);
    element.style.height = element.scrollHeight + 'px';
    element.classList.add('open');
}

export const closeCollapse = id => {
    let element = document.querySelector(`#${id}`);
    if (element.classList.contains('open')) {
        element.style.height = 0;
        element.classList.remove('open');
    }
}

export const smoothRotate = id => {
    let element = document.querySelector(`#${id}`);
    element.classList.toggle('active');
}

export const closeRotate = id => {
    let element = document.querySelector(`#${id}`);
    if (element.classList.contains('active')) {
        element.classList.remove('active');
    }
    
}   