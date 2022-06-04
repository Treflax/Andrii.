// let counter = 0;
// setInterval(() => {
//     const percentageNumber = document.querySelector('.A');
//     const percentageNumber = document.querySelector('.R');
//     const percentageNumber = document.querySelector('.U');
//     const percentageNumberValue = Number(percentageNumber.getAttribute('data-value'));
//     if (counter !== percentageNumberValue) {
//         counter++;
//         percentageNumber.innerHTML = `${counter}%`;
//     }
// }, 90);

// let number = document.getElementById("number");
// let counter = 0;
// setInterval(() => {
//     if(counter == 65){
//         clearInterval();
//     }else{
//         counter += 1;
//         number.innerHTML = counter + "%"
//     }
// }, 25);

const percentageNumber = document.querySelectorAll('.number');
for (const item of percentageNumber) {
  let counter = 0;
setInterval(() => {
    const percentageNumberValue = Number(item.getAttribute('data-value'));
    if (counter !== percentageNumberValue) {
        counter++;
        item.innerHTML = `${counter}%`;
    }
}, 70);
}