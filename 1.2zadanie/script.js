function Counter() {
    const btns = document.querySelectorAll('.counter__btn');
  
  
    btns.forEach(btn => {
      btn.addEventListener('click', function () {
        const direction = this.dataset.direction;
        const inp = this.parentElement.querySelector('.counter__value');
        const currentValue = +inp.value;
        const temp = document.getElementById('oddEven');
        let newValue;
  
        if (direction === 'plus') {
          newValue = currentValue + 1;
        } else {
          newValue = currentValue - 1 > 0 ? currentValue - 1 : 0;
        }
        if(newValue % 2 == 0){
            temp.innerHTML = 'Введено четное число'
        }
        else{
            temp.innerHTML = 'Введено нечетное число'
        }
        inp.value = newValue;
      })
    })
  
  }
  
function res(){
    document.getElementById('counter__value').value = 0;
    document.getElementById('oddEven').innerHTML = '';
}

  Counter();
  res();