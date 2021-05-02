
/* elementos do formulário*/
const $btnForm = document.querySelector('#btnform');
const $errorFormNome =document.querySelector('#errorFormNome');
const $errorFormCpf =document.querySelector('#errorFormCpf');
const $errorFriend = document.querySelector('#errorFriend');
const $errorGenero = document.querySelector('#errorFormGenero');
const $inputName = document.querySelector('#input1');
const $inputCpf = document.querySelector('#input3');
const $inputFriend = document.querySelector('#input4');
const $btnShare = document.querySelector('#btnShare');
const $masculino = document.querySelector('#masculino');
const $feminino = document.querySelector('#feminino');

/* variáveis globais e listiners */
$btnForm.addEventListener('click', validarForm);
$inputName.addEventListener('keyup', validarInputName);
$inputCpf.addEventListener('keyup', validarInputCpf);
$inputFriend.addEventListener('keyup', validarInputFriend);

/*chamando a api dos produtos */
fetch("https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1")
    .then(data => data.json())
    .then((products) => createList (products))

const createList = (data) => {
    const list = `
    <div class="productsImg">
        <img src="${data.products[0].image}" alt="imgProducts">
    </div>
    <div class="productsInfo">
        <p>${data.products[0].name}</p>
        <span>De: ${data.products[0].oldPrice}</span>
        <h3>Por: R$${data.products[0].price}</h3>
        <span>ou ${data.products[0].installments.count} de R$${data.products[0].installments.value}</span>
    </div>`
    const product = document.querySelector("#productApi")
    product.innerHTML = list 
    console.log(data)
}

/* validar campo nome do formulário */
function validarInputName(){
    const inputName = $inputName.value;
    if (inputName === ''){
        $errorFormNome.style.display = 'block';
        $inputName.style.border = '1px solid red';
        $inputName.style.borderRadius = '1px';
        $inputName.style.marginBottom = '0px';
        return false;
    } else{
        $errorFormNome.style.display = 'none';
        $inputName.style.borderRadius = '1px';
        $inputName.style.border = '1px solid #979797';
        $inputName.style.marginBottom = '34px';
        return true;
    }

}


/* validar campo cpf do formulário */
function validarInputCpf(){
    const inputCpf = $inputCpf.value;
    if (inputCpf === ''){
        $errorFormCpf.style.display = 'block';
        $inputCpf.style.border = '1px solid red';
        $inputName.style.borderRadius = '1px';
        $inputCpf.style.marginBottom = '0px';
        return false;
    } else{
        $errorFormCpf.style.display = 'none';
        $inputCpf.style.border = '1px solid #979797';
        $inputName.style.borderRadius = '1px';
        $inputCpf.style.marginBottom = '34px';
        return true;
    }
}


/* validar formulário de cadastro */
function validarForm(){
    validarInputName()
    validarInputCpf()

    if(validarInputName() == ""){
        return false
    } 
    if(validarInputCpf() == ""){
        return false
    }if(!$masculino.checked && !$feminino.checked){
        $errorGenero.style.display = 'block'

    }if($masculino.checked){
        $errorGenero.style.display = 'none'
        !$feminino.value.checked	
    }
    else if($feminino.checked){
        $errorGenero.style.display = 'none'
        !$masculino.value.checked	
    }
}


/* validar nome do amigo do formulário */
function validarInputFriend(){
    const inputFriend = $inputFriend.value;
    if (inputFriend === ''){
        $errorFriend.style.display = 'block';
        $errorFriend.style.textAlign = 'left';
        $inputFriend.style.border = '1px solid red';
        $inputName.style.borderRadius = '1px';
        $inputFriend.style.marginBottom = '0px';

        return false;
    } else{
        $errorFriend.style.display = 'none';
        $inputFriend.style.border = '1px solid #979797';
        $inputName.style.borderRadius = '1px';
        $inputFriend.style.marginBottom = '34px';
        return true;
    }
}

/* validar formulário de compatilhamento */

function validarFormShare(){
    validarInputFriend()
    if(validarInputFriend() == ""){
        return false
    } 
}