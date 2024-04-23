const getToken = () =>{
    const saveAccessToken = window.localStorage.getItem('access_token');
    if(saveAccessToken){
        return saveAccessToken;
    }else{

        const url = new URLSearchParams(window.location.hash.substring(1))
        const token = url.get("access_token")
        window.localStorage.setItem('access_token',token);
        return token
    }
}
const getUserInfo = async () => {
    // test access_token 
    // 'ya29.a0Ad52N3-lkl2oIT22Cnjs2Al9qDZ-hm_FyizoXyqdRWDGYBeTWSuYIkIB3Xq5rdcMmKLQx6869VLcc5fRa7Pu0P_2XdgPp31L5BNysvK5bcfE4vsTEDRAjiSG9qP2B69irHv4PVG7aCz6O4yPztH7P0ih7TJrgDaqWxgaCgYKAc0SARESFQHGX2MikzB_4vTr5-Ag_jL8Pm6vEQ0170&token_type=Bearer&expires_in=3599&scope=email%20profile%20https://www.googleapis.com/auth/userinfo.email%20openid%20https://www.googleapis.com/auth/userinfo.profile&authuser=0&prompt=none'
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