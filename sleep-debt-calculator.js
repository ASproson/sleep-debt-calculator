function getSleepHours (day) {
  let weekday = day.toLowerCase();
  switch (weekday) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 7;
      break;
    case 'friday':
      return 5;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 9;
      break;
    default:
      return 'Please enter a day of the week';
      break;
  }
}

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

function getIdealSleepHours () {
  let idealHours = 7.5 * 7;
  return idealHours;
}

function calculateSleepDebt () {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours > idealSleepHours) {
    return 'You got more sleep than needed!';
  }
  else if (actualSleepHours === idealSleepHours) {
    return 'You got the ideal amount of sleep!';
  }
  else {
    return 'You need more sleep!';
  }
}

console.log(calculateSleepDebt());
