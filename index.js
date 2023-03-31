// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  const mondayWork = function(activity = 'go to the office') {
    const todo = activity ? `This Monday, I will ${activity}.` : `This Monday, I will go to the office.`;
    return todo;
  }
  
  function wrapAdjective(flair = '*') {
    return function(value= 'special') {
      return `You are ${flair}${value}${flair}!`;
    }
  }
  const encouragingPromptFunction = wrapAdjective("!!!")
  wrapAdjective("%")("a dedicated programmer");
  
