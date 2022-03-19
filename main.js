const calculate = document.querySelector('#calculate');

function imc(){
    const name = document.querySelector('#name').value;
    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#weight').value;
    const result = document.querySelector('#result');

    if(name !== '' && height !== '' && weight !== ''){

        const imcValue = (weight / (height * height)).toFixed(2);

        let classi = '';

        if(imcValue < 18.5){
            classi = 'abaixo do peso.';
        } else if(imcValue < 25){
            classi = 'com peso ideal. Parabéns!';
        } else if(imcValue < 30){
            classi = 'levemente acima do peso.';
        } else if(imcValue < 35){
            classi = 'com obesidade grau I.';
        } else if (imcValue < 40){
            classi = 'com obesidade grau II.';
        } else {
            classi = 'com obesidade grau III. Cuidado!';
        }

        result.textContent = `${name} seu IMC é ${imcValue} e você está ${classi} `

    }else {
        result.textContent = 'Preencha todos os campos!';
    }
}

calculate.addEventListener('click', imc);