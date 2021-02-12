function ankurshadowizard(value){
let img = document.querySelectorAll('.ankurshadowizard');
if (value.shadow == 'hard') 
    value.shadow = '0px'
else
 value.shadow = '15px'
  console.log('ankur working ')
}

module.exports.ankurshadowizard = ankurshadowizard;