// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (Math.random() > 0.5) {
//             resolve("Suceess");
//         } else {
//             reject("Failure");
//         }
//     }, 100);
// })

// console.log(promise);
// promise
// .then((resolveData)=>{
//     console.log(resolveData);
// })
// .catch((rejectData)=>{
//     console.log(rejectData);
// })

// chaining of promise

// let promise = new Promise((resolve, _reject) => {
//     setTimeout(() => {
//         resolve("Success1");
//     }, 1000);
// })
// promise
//     .then((resolveData) => {
//         console.log(resolveData);
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve("Success2");
//             }, 1000);
            
//         });
//     })
//     .then((resolveData) => {
//         console.log(resolveData);
//         return new Promise((resolve, _reject) => {
//                 setTimeout(() => {
//                     resolve("Success3");
//                 }, 1000);
//             })
//     })
//     .then((resolveData) => {
//         console.log(resolveData);
//     })
    
//     .catch((err) => {
//         console.error(err);
//     })
//     .finally(() => {
//         console.log("Finally");
//     });
        
function fetchData(url:string):Promise<any>{
    return new Promise((resolve, reject)=>{
        fetch(url)
        .then(response => {
            if (!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data=>{
            resolve(data);
        })
        .catch(err=>{
            reject(err);
        })
    });
}
// fetchData("https://jsonplaceholder.typicode.com/posts").then(data=>{
//     console.log(data);
// })
// .catch(err=>{
//     console.error(err);
// })
// async function getApi(url: string) {
//     try {
//         const response = await fetch(url);
//         if (!response.ok){
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         // console.log(data);
//         return data;
//     } catch (error) {
//         console.error(error);
//     }
// }
// const arrData = getApi("https://jsonplaceholder.typicode.com/posts");
// arrData.then((data1: { title: string; }[]) => {
//     data1.forEach(data1 => {
//         console.log(data1.title);
//     });
// });

const promise1 = Promise.resolve(1);
const promise2 = Promise.reject("gg");
const promise3 = Promise.resolve(3);
const promise4 = Promise.reject("error")
const promise5 = new Promise((resolve, _) => {
    setTimeout(resolve, 1000, "Done after 1 second")
})

Promise.allSettled([promise1, promise2, promise3, promise4, promise5])
    .then((resolveData) => {
        console.log(resolveData);
        resolveData.forEach(element => {
            if(element.status === "fulfilled"){
                console.log(element.value);
            }
            else{
                console.log(element.reason);
            }
        });
    })
    .catch(err=>{
        console.error(err);
    })
    .finally(()=>{
        console.log("Finally");
    })