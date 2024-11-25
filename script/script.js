const nabidka = ["CPU", "GPU", "RAM"];

function vypis(array, output){
    for(let i =0; i<array.length; i++){
        document.getElementById(output).innerHTML += i+1 + ". " + array[i] + "<br>";
    }
}

function Add(){
    const input = document.getElementById("add-component");
    const content = document.getElementById("content");
    const user_cart = document.getElementById("user-cart")

    if((input.value<=nabidka.length) && (input.value> 0) && (!isNaN(input.value))){
        kosik.push(nabidka[input.value -1])
    }
    if(input == 1){
        kosik.push(nabidka[0]);
    }

    else if(input.value == 2){
        kosik.push(nabidka[1]);
    }

    else if(input.value == 3){
        kosik.push(nabidka[2]);
    }

    else{
        alert("Chyba")
    }
    vypis(kosik, "user-cart");
}

vypis(nabidka, "content")