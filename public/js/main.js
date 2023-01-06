const deleteBtn = document.querySelectorAll('.del');
const paymentItem = document.querySelectorAll('span.not');

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deletePayment)
});

async function deletePayment(){
    const paymentId = this.parentNode.dataset.id;
    try {
        const response = await fetch('balance/deletePayment', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'paymentIdFromJSFile': paymentId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    } catch(err) {
        console.log(err)
    }
}