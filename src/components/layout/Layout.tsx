import KakaoMap from "components/KakaoMap";
import { useState } from "react";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import SideModal from "components/modal/SideModal";
import Nickname from "components/Nickname";
import { useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const modalHandler = () => {
    setIsOpen((prev) => !prev);
  };

  const navigationHandler = () => {
    navigate("/addPlace");
  };

  return (
    <div>
      <div>
        {isOpen ? (
          <div className="absolute z-40 w-1/5 h-screen flex justify-between bg-white">
            <SideModal />
            <button className="pr-4" onClick={() => modalHandler()}>
              <LeftOutlined />
            </button>
          </div>
        ) : (
          <button
            className="absolute z-40 w-10 inset-y-0 left-0 bg-white"
            onClick={() => modalHandler()}
          >
            <RightOutlined />
          </button>
        )}
        <>
          <div className="absolute z-40 top-4 right-4">
            <Nickname />
          </div>
          <button
            className="absolute z-40 bottom-4 right-4 bg-white text-center size-12 text-3xl rounded-full"
            onClick={navigationHandler}
          >
            +
          </button>
        </>
      </div>
      <KakaoMap />
    </div>
  );
};

export default Layout;
