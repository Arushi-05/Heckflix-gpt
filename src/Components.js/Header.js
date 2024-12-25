import React from "react";
//zimport Nat from "./nattu.jpg"

const Header = () => {
  return (
    <div className="absolute px-5 py-5 bg-gradient-to-b from-black z-10">
      <img
        className=" w-64 "
        //src={Nat}
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Heckflix"
      />
    </div>
  );
};

export default Header;