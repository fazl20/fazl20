
const el = document.getElementById('input-count');
const count = (type) => {

    if (type === 'dec') {
        el.value =  parseInt(el.value) == 0 ?  parseInt(el.value) :  parseInt(el.value) - 1
    } else if (type === 'res') {
        el.value = 0;
    }    
    else {
        el.value =  parseInt(el.value) + 1;
    }
}
