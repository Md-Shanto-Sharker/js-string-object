// তোমাকে একটি নাম দেওয়া হবে, সেটাকে উল্টিয়ে প্রিন্ট করতে হবে।

let name = "JavaScript";
let reverse = '';
for ( let n of name){
    reverse= n + reverse;
}
console.log(reverse);