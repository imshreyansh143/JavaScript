// let originalPrice=[345,674,645,274]
// let discountPrice=[]
// for(value of originalPrice){
//     discountPrice.push(value*0.9)//10% discount
// }
// console.log(originalPrice)
// console.log(discountPrice)

let students=[
    {
        name:"Shreyansh",
        marks:88,
    },
    {
        name:"Abhinav",
        marks:35,
    },
    {
        name:"Manshi",
        marks:75,
    },
    {
        name:"Mona",
    
        marks:56,
    },
    {
        name:"Bhaskar",
        marks:54,
    }
]

const studentnames=students.map((student)=>{
    return student.name
}
)
const studentmarks=students.map((student)=>{
    return student.marks
}
)
console.log(studentnames)
console.log(studentmarks)


let boostedMarks=students.map((student)=>{
    return{...student,marks : student.marks}
})
console.log(boostedMarks)