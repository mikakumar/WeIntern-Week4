
export const RegisterBack = async(fullname, email, password) => {
    try{
        const response = await fetch('http://localhost:3000/back/api/signup', {
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