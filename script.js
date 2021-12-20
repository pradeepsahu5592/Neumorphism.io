let sliders = document.querySelectorAll('input[ type="range"]');

sliders.forEach(function(slider){
    slider.addEventListener("input",generate);
})
function generate(){
    let size = sliders[0].value;
    let radius = sliders[1].value;
    let distance = sliders[2].value;
    let blur = sliders[3].value;
    var borderRadius = `${radius}%`;


    var inputColor = document.getElementById("color").value;

    let shape =document.getElementById("shape");

    shape.style.cssText =`border-radius: ${borderRadius};
        width : ${size}px;
        height : ${size}px;
        background-color : ${inputColor};
        box-shadow : ${distance}px ${distance}px ${blur}px #00000078, ${-distance}px ${-distance}px ${blur}px #FFFFFF26;        
        `
    let box = document.getElementById("box");
    box.style.cssText =`background : ${inputColor};`

    document.getElementById("codes").innerText=`border-radius: ${borderRadius};
    width : ${size}px; height : ${size}px;
    background-color : ${inputColor};
    box-shadow : ${distance}px ${distance}px ${blur}px #00000078, ${-distance}px ${-distance}px ${blur}px #FFFFFF26;        
    `
    
}

