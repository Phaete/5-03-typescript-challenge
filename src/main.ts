const age:number = 34
for (let i = 0; i < age; i++) {
    console.log(i)
}

if (age >= 18) {
    console.log('Adult')
} else {
    console.log('Minor')
}

const score:number = 0

if (score !== 0) {
    console.log('Score is available')
}

if (score == 1) {
    console.log('Score is evaluated as truthy')
}

let username:string = ""

if (username) {
    console.log('Username is available')
}

if (username == false) {
    console.log()
}

const isAdmin:boolean = false
if (isAdmin == true) {
    console.log('isAdmin is evaluated as truthy')
}

if (isAdmin === false) {
    console.log('isAdmin is evaluated as false')
}