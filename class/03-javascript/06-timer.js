const getToken = () => {
    const token = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
    document.getElementById("token").innerText = token 


    let count = 10
    setInterval(() => {
        if(count >= 0){    
            const minutes = Math.floor(count / 60)
            const seconds = count % 60
            count = count - 1
            console.log(count)
            document.getElementById("token").innerText = token
            
            
            if(count === 0){
                document.getElementById("kkk").setAttribute("disabled","True")

            }
        }
    }, 1000)


}

// 이거 아님!

