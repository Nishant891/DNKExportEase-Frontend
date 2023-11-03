"use client";
import {Avatar} from "@radix-ui/themes";

export default function AvatarComponent() {
  return (
<div className="group flex justify-center h-full">
    <div className="relative inline-block mt-2">
        <Avatar fallback="A"/>
        <div className="hidden group-hover:block absolute -right-10 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl border border-black">
            <a href="#" className="flex items-center p-3 -mt-2 text-sm text-black transition-colors duration-200 transform dark:text-gray-300 ">
                <img className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=face&w=500&q=200" alt="jane avatar"/>
                <div className="mx-1">
                    <h1 className="text-sm font-semibold text-black">Jane Doe</h1>
                    <p className="text-sm text-black">janedoe@exampl.com</p>
                </div>
            </a>

            <hr className="border-black  "/>
            
            <a href="#" className="block px-4 py-3 text-sm text-black capitalize transition-colors duration-200 transform  ">
               Profile
            </a>
            
            <a href="#" className="block px-4 py-3 text-sm text-black capitalize transition-colors duration-200 transform  ">
                Deals
            </a>

            <a href="#" className="block px-4 py-3 text-sm text-black capitalize transition-colors duration-200 transform  ">
                Language
            </a>

            <hr className="border-gray-200 dark:border-gray-700 "/>
            
            <a href="#" className="block px-4 py-3 text-sm text-black capitalize transition-colors duration-200 transform  ">
                Settings
            </a>

            <a href="#" className="block px-4 py-3 text-sm text-black capitalize transition-colors duration-200 transform  ">
                Learn
            </a>

            <hr className="border-gray-200 dark:border-gray-700 "/>
            
            <a href="#" className="block px-4 py-3 text-sm text-black capitalize transition-colors duration-200 transform  ">
                Help
            </a>
            <a href="#" className="block px-4 py-3 text-sm text-black capitalize transition-colors duration-200 transform  ">
                Sign Out
            </a>
        </div>
    </div>
</div>
  );
}
