const getToken = () => {
    const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("token").innerText = token 


    let count = 10
    setInterval(() => {
        if(count >= 0){    
            const minutes = Math.floor(count / 60)
            const seconds = count % 60
            console.log(minutes + ":" + seconds)
            count = count - 1
            document.getElementById("setInterval").innerText = token
        }
    }, 1000)


}



