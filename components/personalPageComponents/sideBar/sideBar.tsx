import React, { useEffect } from "react";
import Logo from "../../logo/logo";
import SidebarMenu from "../sidebarMenu/sidebarMenu";
import SidebarStatistic from "../sidebarStatistic/sidebarStatistic";
import "./sideBar.css";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { fetchUser } from "../../../store/reducers/actionUserCreator";

function SideBar() {

  const dispatch = useAppDispatch();
  const { user, isLoading, error } = useAppSelector(
    (state) => state.userReducer
  );

  const statistic = {
    cclub: 12,
    workShop: 3,
    skipped: 2,
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return (
    <main className="sideBar">
      <Logo path="/assets/flag/Flag.png" />
      <div className="ownerInfo">
        <div className="ownerPhoto">
          <img src={user.photo} alt={user.firstName} />
        </div>
        <p className="ownerName">
          {user.firstName} {user.lastName}
        </p>
        <p className="ownerPosition">{user.position}</p>
      </div>
      <SidebarMenu />
      <SidebarStatistic statistic={statistic} />
    </main>
  );
}

export default SideBar;
