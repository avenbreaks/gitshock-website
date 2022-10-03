import UAuth from '@uauth/js'

const uauth = new UAuth(
    {
        clientID: "b52dcf69-89cf-48fc-a093-2b0f5d7ea8fe",
        redirectUri: "http://127.0.0.1:5001",
        scope: "openid wallet"
    })

window.login = async () => {
    try {
        const authorization = await uauth.loginWithPopup()
        const domainName = authorization.idTokenPayload.sub;
        const walletAddress = authorization.idTokenPayload.wallet_address;
        console.log('Logged In');
        console.log(authorization);
        console.log("domainName:", domainName);
        console.log("ETH Wallet Address:", walletAddress);
    } catch (error) {
        console.error(error)
    }
}


window.logout = async () => {
    await uauth.logout()
    console.log('Logged Out');
}