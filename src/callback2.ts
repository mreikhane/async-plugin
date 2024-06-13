function p1():void{
    console.log("p1 done")
}

function p2(callback: () => void): void{
    setTimeout((function(){
        console.log("p2 done");
        callback();
    }),1000)
}

function p3(): void{
    console.log("p3 done")
}

p1()

p2(p3)

