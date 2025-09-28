import React from "react";
import PersonalPageHeader from "../personalPageHeader/personalPageHeader";
import MultiSelectInput from "../multiSelectInput/multiSelectInput";
import "./profileComponent.css";

const user = {
  firstName: "Mariia",
  lastName: "Nakonechna",
  photo:
    "https://media.istockphoto.com/id/1154370446/photo/funny-raccoon-in-green-sunglasses-showing-a-rock-gesture-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=pDRbcAdAzUMJ6c1BL3y-jfnJ9uvlDHTFSkJ6_LpZSzU=",
  position: "Administrator",
  email: "admin.hu@gmail.com",
  phone: "+1234567",
  interstEvents: ["workshop", "intermediateSC"],
};

function ProfileComponent() {

  return (
    <main className="profileComponent">
      <PersonalPageHeader />
      <section className="personalInformation">
        <h1>Personal information</h1>
        <p>Edit your photo and personal details</p>
        <div className="editPhotoWrap">
          <div className="editPhoto">
            <img src={user.photo} alt={user.firstName}></img>
          </div>
          <div className="editPhotoActions">
            <button>Update</button>
            <button>Delete</button>
          </div>
        </div>
        <form className="personalEditInfo">
          <div className="personalNames">
            <div>
              <label htmlFor="userFirsName" className="label">
                First Name
              </label>
              <input
                type="text"
                id="userFirsName"
                name="userFirsName"
                placeholder={user.firstName}
                className="userFirsName"
              />
            </div>
            <div>
              <label htmlFor="userLastName" className="label">
                Last Name
              </label>
              <input
                type="text"
                id="userLastName"
                name="userLastName"
                placeholder={user.lastName}
                className="userLastName"
              />
            </div>
          </div>
          <label htmlFor="userEmail" className="label">
            Email
          </label>
          <input
            type="email"
            id="userEmail"
            name="userEmail"
            placeholder={user.email}
            className="userEmail"
          />
          <label htmlFor="userPhone" className="label">
            Phone
          </label>
          <input
            type="phone"
            id="userPhone"
            name="userPhone"
            placeholder={user.phone}
            className="userPhone"
          />
          <label className="label">Interesting events</label>
          <MultiSelectInput />
          <label htmlFor="changePassword" className="label">
            Change your password
          </label>
          <input
            type="password"
            id="changePassword"
            name="changePassword"
            className="changePassword"
          />
          <label htmlFor="confirmPassword" className="label">
            Confirm password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="confirmPassword"
          />
          <div className="personalButtons">
            <button>Save</button>
            <button>Cancel</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default ProfileComponent;
