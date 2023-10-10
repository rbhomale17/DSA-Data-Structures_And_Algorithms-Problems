// Given a string s containing just the character
// s'('')','f','','[' and 'I', determine if the input string is valid.
// An input string is valid if:
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.
// 3. Every close bracket has a corresponding open bracket of the same type.

function valid_par(n, str) {
    // console.log(n,str)
    let stack = [];
    for (let i = 0; i < n; i++) {
        let char = str[i];
        if (char == '[' || char == '{' || char == '(') stack.push(char);
        else {
            if (stack.length == 0) return 0;
            temp = stack.pop();
            if (temp == '{' && (char == ']' || char == ')')) return 0;
            if (temp == '[' && (char == '}' || char == ')')) return 0;
            if (temp == '(' && (char == ']' || char == '}')) return 0;
        }
    }
    return (stack.length == 0) ? 1 : 0;
}

function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let t = +input[0];
    let line = 1;
    for (let i = 0; i < t; i++) {
        let [n, str] = input[line++].trim().split(' ');
        console.log(valid_par(+n, str))
    }
}

runProgram(`3
4 {}[]
4 [}{]
2 []`);

/* Output :- 
1
0
1
*/