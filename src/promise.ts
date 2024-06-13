let janjiyuk = new Promise((resolve,reject)=> {
    let success = false;
    if(success){
        resolve("berhasil bang")
    } else{
        reject(new Error("batal bang"))
    }
});

janjiyuk.then((result)=> {
            console.log(result)
    })
.catch((error) => {
            console.log(error)
})