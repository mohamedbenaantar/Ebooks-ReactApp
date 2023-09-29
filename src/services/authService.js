export async function login(authDetails) {
    const requestOption = {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(authDetails)
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/login`, requestOption)

    const data = await response.json()
    // I have my accessToken login is success
    

    if(data.accessToken){
        sessionStorage.setItem("token", JSON.stringify(data.accessToken))
        sessionStorage.setItem("cid", JSON.stringify(data.user.id))
    }

    return data
}


export async function register(authDetails){
    // add to fetch URLS , methods, headers
    const response = await fetch(`${process.env.REACT_APP_HOST}/register`, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify(authDetails)
    });
    const data = await response.json();

    if(data.accessToken){
        sessionStorage.setItem("token", JSON.stringify(data.accessToken))
        sessionStorage.setItem("cid", JSON.stringify(data.user.id))
    }

    return data
}

export function logout(){
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("cid");
    
}