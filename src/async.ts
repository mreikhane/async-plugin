// const a = 1
// const b = 2

// console.log(a)
// setTimeout(() => {
//     console.log(b)
// },3000)

const fetchapi = async() : Promise<void> => {
    try {
        const response = await fetch(
            "https://expressdaffa-1-r3040328.deta.app/siswa"
        )
        const data: [] = await response.json();
        console.log(data)
    } catch (error) {
        console.error(error)
    }
}



fetchapi();