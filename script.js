// create variable to catch target
const inputNumberOne = document.querySelector('.input-number-1');
const inputNumberTwo = document.querySelector('.input-number-2');
const btnOperator = document.querySelectorAll('.btn-operator');
const blockOperator = document.querySelector('.block-operator');
const displayResult = document.querySelector('.display-result');
const resetContent = document.querySelector('.reset-content');

function countValue() {
    // handle event inputNumberOne
    inputNumberOne.addEventListener('click', () => {
        inputNumberOne.select();
    });

    // handle event inputNumberTwo
    inputNumberTwo.addEventListener('click', () => {
        inputNumberTwo.select();
    });

    // create event for btnOperator
    btnOperator.forEach(operator => {
        // handle event btnOperator
        operator.addEventListener('click', () => {
            // change string data type on inputNumberOne to integer
            const inputOne = inputNumberOne.value;
            const columnInputOne = parseFloat(inputOne);

            // change string data type on inputNumberTwo to integer
            const inputTwo = inputNumberTwo.value;
            const columnInputTwo = parseFloat(inputTwo);

            // display this on displayResult
            if (inputOne == '' || inputTwo == '') {
                if (inputOne != '' || inputTwo != '') {
                    displayResult.textContent = 'Lengkapi semua kotak untuk mulai penghitungan!';
                } else {
                    displayResult.textContent = 'Silakan "Masukkan Angka" yang ingin dihitung!';
                };
            } else {
                if (operator.textContent === '+') {
                    const results = columnInputOne + columnInputTwo;
                    displayResult.textContent = results;
                    blockOperator.textContent = '+';
                    blockOperator.style.display = 'flex';
                } else if (operator.textContent === '-') {
                    const results = columnInputOne - columnInputTwo;
                    displayResult.textContent = results;
                    blockOperator.textContent = '-';
                    blockOperator.style.display = 'flex';
                } else if (operator.textContent === 'x') {
                    const results = columnInputOne * columnInputTwo;
                    displayResult.textContent = results;
                    blockOperator.textContent = 'x';
                    blockOperator.style.display = 'flex';
                } else {
                    const results = columnInputOne / columnInputTwo;
                    displayResult.textContent = results;
                    blockOperator.textContent = '/';
                    blockOperator.style.display = 'flex';
                };
            };
        });
    });
};
countValue();

// create event for resetContent
resetContent.addEventListener('click', () => {
    inputNumberOne.focus();
    inputNumberOne.value = '';
    inputNumberTwo.value = '';
    blockOperator.style.display = 'none';
    displayResult.textContent = 'Nilai yang kamu hitung akan tampil disini.';
});