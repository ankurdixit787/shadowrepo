function shadowizard(value){
let img = document.querySelectorAll('.shadowizard');
if (value.shadow == 'hard') 
    value.shadow = '0px'
else
 value.shadow = '15px'
  console.log('ankur working ')
}

module.exports.shadowizard = shadowizard;