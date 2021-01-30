/* Tipe and var definition */
type time = {

    hours: number;
    minutes: number;

}

const btn = document.querySelector("#btn-calcular") as HTMLButtonElement;
const msg = document.querySelector("#msg") as HTMLTitleElement;
const hr1 = document.querySelector("#hr1") as HTMLInputElement;
const min1 = document.querySelector("#min1") as HTMLInputElement;
const min2 = document.querySelector("#min2") as HTMLInputElement;
const hr2 = document.querySelector("#hr2") as HTMLInputElement;


const inputs =  [].slice.call(document.getElementsByTagName("input"));

/* Input validation events */
inputs.forEach((i: HTMLInputElement) =>{

    i.addEventListener("change",(e) =>{
        
        if(i.id == "hr1" || i.id == "hr2"){
            
            i.value = i.valueAsNumber > 23 ? "23" : i.value;
            i.value = i.valueAsNumber < 0 ? "0" : i.value;

        }else if(i.id == "min1" || i.id == "min2"){

            i.value = i.valueAsNumber > 59 ? "59" : i.value;
            i.value = i.valueAsNumber < 0 ? "0" : i.value;

        }

    });

});


/* Set the btn event */
btn.addEventListener("click",(e) =>{

    if(!hr1.value  || !hr2.value  ||  !min1.value || !min2.value) {
    
        msg.innerHTML = "Preencha todos os campos!!!";
        setTimeout(()=>{ msg.innerHTML = '' }, 2000);
        return;

    };

    const t1 = {  hours: hr1.valueAsNumber, minutes: min1.valueAsNumber }
    const t2 = {  hours: hr2.valueAsNumber, minutes: min2.valueAsNumber }


    const final = getTimeDiference(t1, t2);

    

    msg.innerHTML = `A deferença entre os horários é de: ${final.hours < 10 ? 0 : '' }${final.hours}:${final.minutes < 10 ? 0 : '' }${final.minutes}`;


} );


function getTimeDiference(t1: time, t2:time):time{


    let finalHours: number;
    let finalMinutes: number
    
    if(t1.hours > t2.hours){

        finalHours = ( t2.hours + 24) - t1.hours;

    }else{

        finalHours = t2.hours - t1.hours;
    }
     

    if(t1.minutes > t2.minutes){

        -- finalHours;
         finalMinutes = (t2.minutes + 60) - t1.minutes;

    }else{

        finalMinutes = t2.minutes - t1.minutes;

    }

  

    return {
           
            hours: finalHours,
            minutes: finalMinutes
        };

}