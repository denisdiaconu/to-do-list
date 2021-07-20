function stringLength(string) {
  if (string.length > 1 && string.length < 10) {
    return true;
  } else {
    return false;
  }
  return string.length;
}

function reverseString(string) {
  return string.split('').reverse().join('');
}

class Calculator {
  divide(num1, num2) {
    return num1 / num2;
  }

  subtract(num1, num2) {
    return num1 - num2;
  }

  add(num1, num2) {
    return num1 + num2;
  }

  multiply(num1, num2) {
    return num1 * num2;
  }
}
const calculator = new Calculator();

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

test('between 1 and 10', () => {
  const length = stringLength('world');
  expect(length).toBe(true);
});

test('between 1 and 10', () => {
  const length = stringLength('worldiswithme');
  expect(length).toBe(false);
});

test('return reverse string', () => {
  const reverse = reverseString('denis');
  expect(reverse).toBe('sined');
});

describe('Calculator', () => {
  const divide1 = calculator.divide(4, 2);
  const divide2 = calculator.divide(8, 2);
  const divide3 = calculator.divide(12, 4);
  const subtract1 = calculator.subtract(4, 2);
  const subtract2 = calculator.subtract(42, 2);
  const subtract3 = calculator.subtract(44, 34);
  const add1 = calculator.add(44, 32);
  const add2 = calculator.add(3, 32);
  const add3 = calculator.add(4, 32);
  const multiply1 = calculator.multiply(4, 3);
  const multiply2 = calculator.multiply(3, 3);
  const multiply3 = calculator.multiply(4, 5);

  test('divide numbers', () => {
    expect(divide1).toBe(2);
    expect(divide2).toBe(4);
    expect(divide3).toBe(3);
  });
  test('subtract numbers', () => {
    expect(subtract1).toBe(2);
    expect(subtract2).toBe(40);
    expect(subtract3).toBe(10);
  });
  test('add numbers', () => {
    expect(add1).toBe(76);
    expect(add2).toBe(35);
    expect(add3).toBe(36);
  });
  test('multiply numbers', () => {
    expect(multiply1).toBe(12);
    expect(multiply2).toBe(9);
    expect(multiply3).toBe(20);
  });
});

test('return capitalize first letter', () => {
  const word = capitalize('denis');
  expect(word).toBe('Denis')
})