// Your code here
function saturdayFun(avtivity = "roller-skate") {
    return `This Saturday, I want to ${avtivity}!`;
  };
  saturdayFun("bathe my dog");


function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}
mondayWork("work from home");

function wrapAdjective(name="*a hard worker*") {
    const part1 = "You are"
      return function() {
            return `${part1} ${name}!`;
   }
  }
wrapAdjective("||a dedicated programmer||")();