// tringangle function

function CalculateTringleAria(){
    // get base value
const baseFeild =document.getElementById('triangle-base');
const baseValue =baseFeild.value;
const base =parseFloat(baseValue);
// console.log(base);


// get height value
const heightFeild =document.getElementById('triangle-height');
const heightValue =heightFeild.value;
const height =parseFloat(heightValue);
// console.log(height);

if(isNaN(baseFeild)|| isNaN(heightFeild)){
    alert('please enter a number');
    return;
}

const area =0.5*base*height;
console.log(area);

// show triangle area

const areaSpan =document.getElementById('triangle-area');
areaSpan.innerText=area;

}

//reactangle function
// get width value
function CalculatReactngleAria(){
    const widthField =document.getElementById('reactangle-width');
    const widthValue =widthField.value;
    const width =parseFloat(widthValue);
    //lenth value getting
    const lenthFEild=document.getElementById('reactangle-length');
    const lenthValue=lenthFEild.value;
    const lenth =parseFloat(lenthValue);

    if(isNaN(widthField)|| isNaN(lenthFEild)){
        alert('please enter a number');
        return;
    }
    // calculate aria 
    const rarea=width*lenth;
    console.log(rarea);
    // show in aria
    const rareaspaN=document.getElementById('reactangle-area')
    rareaspaN.innerText=rarea
}
//  // pallllllocdsfedhfvc
//  function CalculatReactngleAria(){
//     const awidthField =document.getElementById('Preactangle-width');
//     const awidthValue =awidthField.value;
//     const awidth =parseFloat(awidthValue);
//     //lenth value getting
//     const alenthFEild=document.getElementById('Preactangle-length');
//     const alenthValue=alenthFEild.value;
//     const alenth =parseFloat(alenthValue);
//     // calculate aria 
//     const ararea=awidth*alenth;
//     console.log(ararea);
//     // show in aria
//     const arareaspaN=document.getElementById('Preactangle-area')
//     arareaspaN.innerText=ararea
// }
// work with with function--------------------------
function CalculatparallelogramAriay(){
    const base =getInputValue('Preactangle-width');
    // console.log(base)
    const width=getInputValue('Preactangle-length');
    // console.log(width);
    if(isNaN(base)|| isNaN(width)){
        alert('please enter a number');
        return;
    }

    const area=base*width;
    setElemetInnerText('Preactangle-area',area);
}
///// re useable function---------------------------

function getInputValue(fieldId){
    const inputField=document.getElementById(fieldId);
    const inputValueText=inputField.value;
    const value=parseFloat(inputValueText);
    return value;
}
// reuseble set

function setElemetInnerText(elementId,area){
    const element=document.getElementById(elementId);
    element.innerText=area;
}
// ellipse calculate     
function CalculatellipseAriay(){
    const firstRadius=getInputValue('ellipse-width');
    const secundRadius=getInputValue('ellipse-length');

    if(isNaN(firstRadius)|| isNaN(secundRadius)){
        alert('please enter a number');
        return;
    }

    const area=firstRadius*secundRadius*3.1416;
    const  ellipse_area=area.toFixed(2);

    setElemetInnerText('ellipse-area',ellipse_area);

   
}
////// Rhombhose------------------------------------------------------
function CalculaterhombusArea(){
    const distanse1=getInputValue('rhombus-width');
    const distanse2=getInputValue('rhombus-length');

    if(isNaN(distanse1)|| isNaN(distanse2)){
        alert('please enter a number');
        return;
    }
    const area=distanse1*distanse2*0.5
    setElemetInnerText('rhombus-area',area);

    
}
////pentagone --------------------------------------
function CalculatepentagonArea(){
    const distanse1=getInputValue('pentagon-width');
    const distanse2=getInputValue('pentagon-length');

    if(isNaN(distanse1)|| isNaN(distanse2)){
        alert('please enter a number');
        return;
    }
    const area=distanse1*distanse2*0.5
    setElemetInnerText('pentagon-area',area);


    
}
