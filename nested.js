const college = {
    name:'vnc',
    class:['11','12'],
    events : ['science fair','bijoy dibos','21 Feb'],
    unique:{
        color:'blue',
        result: {
            gpa : 5,
            merit:'top'
        }
    }
}

console.log(college.name);
console.log(college.class);
console.log(college.unique.color);
console.log(college.unique.result.gpa);
college.unique.result.merit ='top top top most';
console.log(college.unique.result.merit);

console.log(college);
delete college.class;
console.log(college);