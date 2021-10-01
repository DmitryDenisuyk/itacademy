function getDice(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


  let firstPlayerKicks = 0;
  let secondPlayerKicks = 0;
  for(var i =0; i < 3; i++){
    firstPlayerKicks = firstPlayerKicks + kick('Fisrt', i + 1);       
    secondPlayerKicks = secondPlayerKicks + kick('Second', i + 1);
  }

  console.log('Summ of DICE of 1st player', firstPlayerKicks);
  console.log('Summ of DICE of 2nd player', secondPlayerKicks);

  if (firstPlayerKicks == secondPlayerKicks) {
    console.log('Draw');
  } if (firstPlayerKicks > secondPlayerKicks) {
    console.log('1st player win!');
  } if (secondPlayerKicks > firstPlayerKicks) {
    console.log('2nd player win!');
  }

  function kick(playErName, kickNumber){
    let st1 = getDice(1,6);
    console.log( playErName, 'player', kickNumber, 'DICE -', st1);
    return st1;
      
    
  }





