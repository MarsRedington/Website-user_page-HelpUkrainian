import { AppDispatch } from "..";
import { userSlice } from "./userReducer";

let MockDataUser = {
    firstName: "Mariia",
    lastName: "Nakonechna",
    photo:
      "https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=pDRbcAdAzUMJ6c1BL3y-jfnJ9uvlDHTFSkJ6_LpZSzU=",
    position: "Administrator",
    email: "admin.hu@gmail.com",
    phone: "+1234567",
}

export const fetchUser = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userFetching())
 
        dispatch(userSlice.actions.userFetchingSuccess(MockDataUser))

    } catch(error) {
        dispatch(userSlice.actions.userFetchingError("Error"))
    }
}

