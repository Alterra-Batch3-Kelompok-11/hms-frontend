import Cookies from "js-cookie";

export const Auth = {
	isAuthorization() {
		const token = Cookies.get("token")

		if (token) {
			return { token };
		} 
		return {token: ''};
	},
	signOut(navigate) {
		Cookies.remove("token");
		navigate("/");
	},
	storeUserInfoToCookie(data, navigate) {
		Cookies.set("token", data, { expires: 2 });
		navigate("/Admin");
	},
};