let str = 'level';
let palin_str = '';

for (let i = str.length - 1; i >= 0; i--) {
    palin_str += str[i];
}

if (str == palin_str) {
    console.log(str, 'is palindrom');
} else {
    console.log(str, 'is not palindrome');
}
