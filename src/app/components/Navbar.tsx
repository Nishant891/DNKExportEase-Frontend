"use client";
import { BsFillCartFill } from "react-icons/bs";
import { BiLogIn } from "react-icons/bi";
import { GiArchiveRegister } from "react-icons/gi";
import { IoNotificationsSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";
import AvatarComponent from "./Avatar";
interface NavbarProps {
  loggedIn: boolean;
}

const Navbar : React.FC<NavbarProps> = ({loggedIn}) => {
  const router = useRouter();

  const NavbarItems = ({ item }: { item: string }) => {
    return <p className="cursor-pointer hover:text-[#0054C6]">{item}</p>;
  };

  return (
    <>
      <div className="bg-white w-11/12 h-14 z-40 fixed top-3 translate-x-12 ml-4 rounded-2xl flex flex-row justify-between border border-black">
        <div className="w-2/6 h-full flex flex-row justify-evenly items-center">
          {["Logo", "Marketplace", "FAQs", "Contact Us"].map(
            (item: string, index: number) => (
              <NavbarItems key={item + index} item={item} />
            )
          )}
        </div>
        <div className={`${loggedIn ? 'w-1/6' : 'w-2/6'} h-full flex flex-row justify-evenly items-center`}>
          {!loggedIn ? <div className="w-[40vh] h-[8vh] flex flex-row justify-evenly items-center">
            <button
              onClick={() => router.push("/signup")}
              className="flex flex-row justify-evenly items-center bg-yellow-400 w-[16vh] h-[7vh] active:opacity-80 text-black text-lg rounded-lg"
            >
              <GiArchiveRegister />
              Signup
            </button>
            <button
              onClick={() => router.push("/login")}
              className="flex flex-row justify-evenly items-center bg-green-600 w-[16vh] h-[7vh] active:opacity-80 text-black text-lg rounded-lg"
            >
              <BiLogIn />
              Login
            </button>
          </div> :<AvatarComponent />}
          <button className=" px-3 py-3  active:opacity-80 text-black text-lg rounded-lg">
            <IoNotificationsSharp />
          </button>
          <button className=" px-3 py-3 active:opacity-80 text-black text-lg rounded-lg">
            <BsFillCartFill />
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
