function checkAge(age) {
    /*
    if (age > 18) {
      return true;
    } else {
      return confirm('Did parents allow you?');
    }
    */

    // return (age > 18) ? true : confirm('Did parents allow you?');

    return (age > 18) || confirm('Did parents allow you?');
  }

function smallerNumber(a, b) {
    return (a < b) ? a : b;
}
