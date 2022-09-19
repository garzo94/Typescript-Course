import axios from 'axios'
type someType={
    name:string,
    cel:number
}
axios.get<someType[]>("https://jsonplaceholder.typicode.com/users/1")
.then(res=>{
    console.log("WOO!!")
    console.log(res.data)
}).catch((e)=>{
    console.log(e)
})

// if package doe snot have types I have to install with npm i --save-dev types@package