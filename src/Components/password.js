export default function generatePassword(parentVal) {
  let leftkeys = "qwertasdfgzxcvb";
  let rightkeys = "poiuylkjmn";
  let numberleftkeys = "12345";
  let numberrightkeys = "67890";
  let specialkeys = "!@#$%^&*_-+,.";
  let specialbrackets = "{}[]()";
  let keyboard = "";
  let numberkeys = "";
  let password = "";
  let alphakeyboard = "";

  const idFullKeyboardType = document.getElementById("fullKeyboardType");
  const idLeftKeyboardType = document.getElementById("leftKeyboardType");
  const idUpperKeys = document.getElementById("incUpperKeys");
  const idNumberKeys = document.getElementById("incNumberKeys");
  const idSpecialKeys = document.getElementById("incSpecialKeys");
  const idSpecialBrackets = document.getElementById("excSpecialBrackets");
  const idStartingAnyCharacter = document.getElementById("startingAnyCharacter");
  const idStartingLetter = document.getElementById("startingLetter");
  const idEndingAnyCharacter = document.getElementById("endingAnyCharacter");
  const idEndingLetter = document.getElementById("endingLetter");
  const passwordLength = parentVal;

  if (idFullKeyboardType.checked) {
	keyboard = leftkeys + rightkeys;
	numberkeys = numberleftkeys + numberrightkeys;
  }
  else if (idLeftKeyboardType.checked) {
	keyboard = leftkeys;
	numberkeys = numberleftkeys;
  }
  else {
	keyboard = rightkeys;
	numberkeys = numberrightkeys;
  }
  if (idUpperKeys.checked) {
	keyboard = keyboard + keyboard.toUpperCase();
  }
  alphakeyboard = keyboard;

  if (idNumberKeys.checked) {
	keyboard = keyboard + numberkeys;
  }
  if (idSpecialKeys.checked) {
	if (idSpecialBrackets.checked) keyboard = keyboard + specialkeys;
	if (!idSpecialBrackets.checked) {
	  keyboard = keyboard + specialbrackets;
	}
  }

  for (let index = 0; index < passwordLength; index++) {
	password = password + keyboard[Math.ceil(Math.random() * (keyboard.length - 1))];
  }

  if(!idStartingAnyCharacter.checked) {
	if(idStartingLetter.checked)
	  password = alphakeyboard[Math.ceil(Math.random() * (alphakeyboard.length - 1))] + password;
	else
	  password = numberkeys[Math.ceil(Math.random() * (numberkeys.length - 1))] + password;
  }

  if(password.length > passwordLength)
	password = password.substring(0, password.length - 1);

  if(!idEndingAnyCharacter.checked) {
	if(idEndingLetter.checked)
	  password = password.substring(0, password.length - 1) + alphakeyboard[Math.ceil(Math.random() * (alphakeyboard.length - 1))];
	else
	  password = password.substring(0, password.length - 1) + numberkeys[Math.ceil(Math.random() * (numberkeys.length - 1))];
  }

  console.log(password);
  return password;
}
