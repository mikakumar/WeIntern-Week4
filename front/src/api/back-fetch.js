
export const RegisterBack = async(fullname, email, password) => {
    try{
        const response = await fetch('http://localhost:3000/back/api/register', {
            headers: {'Content-Type':'application/json'},
            method: 'POST',
            body: JSON.stringify({fullname, email, password}),  
        });
        if (response.status === 200){
            alert('Registration successful!')
        }
        else{
            alert('Registration failed!')
        }

    } catch(error){
        alert('Something went wrong!')
    }
    
}

export const SignInBack = async(email, password) =>{
    const response = await fetch('http://localhost:3000/back/api/signin', {
        headers: {'Content-Type':'application/json'},
        method: 'POST',
        body: JSON.stringify({email, password}),  
        credentials: 'include'
    });

    if(response.ok){
        alert('Signed in!')
    }
    else{
        alert('wrong credentials!')
    }

}

export const LogoutBack = () =>{
    const response = fetch('http://localhost:3000/back/logout', {
        method: 'POST',
        credentials: 'include'
    });
    if(response.success == true)
        alert('Logged Out!')
}

export const quickGoldFetch = async(symbol, currency) =>{
    try{
    const response =  await fetch('http://localhost:3000/back/api/fetch', {
        headers: {'Content-Type':'application/json'},
        method: 'POST',
        body: JSON.stringify({symbol, currency}),  
    })
    if (response.status === 200){
        alert('Registration successful!')
    }
    else{
        alert('Registration failed!')
    }
    } catch(error){
        alert('Something went wrong!')
    }
}
   

export const dateGoldFetch = async(symbol, currency, date) =>{
    try{
        const response =  await fetch('http://localhost:3000/back/api/fetch', {
            headers: {'Content-Type':'application/json'},
            method: 'POST',
            body: JSON.stringify({symbol, currency}),  
        })
        if (response.status === 200){
            alert('Registration successful!')
        }
        else{
            alert('Registration failed!')
        }
        } catch(error){
            alert('Something went wrong!')
        }
}   

export const quickGoldPull = async() =>{
    const timestamp = Date.now();
    try{
        const response =  await fetch('http://localhost:3000/back/api/fetch', {
            headers: {'Content-Type':'application/json'},
            method: 'GET',
            body: JSON.stringify({timestamp}),  
        })

    } catch(error){
            alert('Something went wrong!')
        }

}