const btnAdd = document.getElementById('btn-addNota')
const btnRemove = document.getElementById('btn-removeNota')
const btnCalcNota = document.getElementById('btn-calcNota')



let qtdNota = 2;




function addInputNota(){
    let Inputs = document.getElementById('inputs');
    

    let newInput = document.createElement('input');
    let newLabel = document.createElement('label')
    
    qtdNota++
    let contentLabel = document.createTextNode("Nota "+qtdNota+":");

    newLabel.appendChild(contentLabel)




   
    newLabel.id='label'+qtdNota
    newLabel.className="label"

    newInput.id='nota'+qtdNota;
    

    
    //document.body.appendChild(newLabel)  

    Inputs.appendChild(newLabel)
    Inputs.appendChild(newInput)

}

function removeNota(){

    if(qtdNota == 2){
        alert('Minimo Duas notas para Calcular Media!')
        
    }else if(qtdNota > 2){
    let idInput = 'nota'+qtdNota
    let idLabel = 'label'+qtdNota

    let inputExcluido = document.getElementById(idInput)
    let LabelExcluido = document.getElementById(idLabel)
    inputExcluido.remove();
    LabelExcluido.remove();

    qtdNota--;
    }
}



function calcNota(){

    notaqtd=1
    
    let repeticoes = qtdNota
    let Media=0
    let notaTotal=0
    


    for(let i=0;i < repeticoes;i++){
        let idInput = 'nota'+notaqtd
        let nota = parseInt(document.getElementById(idInput).value);
        notaTotal= parseInt(notaTotal+nota);
        notaqtd++
        
    }

    Media = notaTotal/qtdNota
    console.log(Media)

    let dev = document.getElementById('status');
    let nota = document.getElementById('nota')
    let MediaString=""
    MediaString = Media.toString();



    nota.innerText=(MediaString)

    if(Media > 6){
        dev.className="statusVerde"
        dev.innerText=('Aprovado')
    }else{
        dev.className="statusVermelho"
        dev.innerText=('Reprovado')
    }

}







 btnAdd.addEventListener('click' , addInputNota)
 btnRemove.addEventListener('click' , removeNota)
 btnCalcNota.addEventListener('click', calcNota)