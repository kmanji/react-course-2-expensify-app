const add = (a,b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add 2 numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
    // if (result !== 7) {
    //     throw new Error(`You added 4 and 3, the result was ${result}.  Expected 7.`);
    // }
});

test('should greet Karim with Hello', () => {
    const result = generateGreeting('Karim');
    expect(result).toBe('Hello Karim!');
}); 

test('should greet no name as Anonymous', () => {
    const result = generateGreeting();
    expect(result).toBe('Hello Anonymous!');
});