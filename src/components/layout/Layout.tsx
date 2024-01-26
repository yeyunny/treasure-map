import KakaoMap from "components/KakaoMap";
import { useState } from "react";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import SideModal from "components/modal/SideModal";
import Nickname from "components/Nickname";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalHandler = () => {
    setIsOpen((prev) => !prev);
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

        <div className="absolute z-40 top-4 right-4">
          <Nickname />
        </div>
      </div>
      <KakaoMap />
    </div>
  );
};

export default Layout;
