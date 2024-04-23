const getToken = () =>{
    // const saveAccessToken = window.localStorage.getItem('access_token');
    // if(saveAccessToken){
    //     return saveAccessToken;
    // }else{

        const url = new URLSearchParams(window.location.hash.substring(1))
        const token = url.get("access_token")
        // window.localStorage.setItem('access_token',token);
        return token
    // }
}
const getUserInfo = async () => {
    // test access_token 
    const access_token = getToken();
    const respone = await fetch(
        `https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`
    );
    const data = await respone.json();
    renderInfo(data)
    console.log(data);
}
getUserInfo()
const renderInfo = (data) => {
    const avatar1 = document.getElementById('avatar_1');
    const avatar2 = document.getElementById('avatar_2');
    const avatar3 = document.getElementById('avatar_3');
    const name1 = document.getElementById('name_1');
    const name_login = document.getElementById('name_login');
    const email1 = document.getElementById('email_1');
    const email_login = document.getElementById('email_login');
    const status = document.getElementById('status_tb_nav');
    const status2 = document.getElementById('status');
    if(data.email_verified === true){
        status.innerHTML = "Đã Đăng Nhập!"
        status2.innerHTML = "Đã Đăng Nhập!"
    }else{
        status.innerText = "Đăng nhập thất bại!"
        status2.innerText = "Đăng nhập thất bại!"
    }
    avatar1.src = data.picture;
    avatar2.src = data.picture;
    avatar3.src = data.picture;
    name1.innerText = data.name;
    email1.innerText = data.email;
    name_login.innerText = data.name;
    email_login.innerText = data.email;
}