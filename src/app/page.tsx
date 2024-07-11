import Switch from "@/components/Switch";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#FFF6F0] h-screen w-screen  overflow-hidden p-4">
      {/* nav bar top  */}
      <div className="flex items-center justify-between">
        <div>
          <Image
            src={"/assets/logo.png"}
            alt="logo"
            height={500}
            width={500}
            className="w-28 h-10 "
          />
        </div>
        <div>
          <div className="w-14 h-14 rounded-full flex justify-center items-center ">
            <Image
              src={"/assets/avatar.png"}
              alt="uaer"
              height={500}
              width={500}
              className="w-14 h-14 "
            />
          </div>
        </div>
      </div>
      {/* container  */}
      <div className="mt-24 flex flex-col gap-3">
        {/* container header  */}
        <div className="flex justify-between items-center">
          {/* left side */}
          <h1 className="text-5xl font-medium text-[#0D0500]">
            <span className="text-[#9C9C9C]">Let’s</span> Create Your Campaign
          </h1>
          {/* right side */}
          <div className="flex justify-center items-center gap-4">
            {/* total screen */}
            <div className=" flex items-center justify-between gap-4 px-2 py-2 text-sm font-medium rounded-md  border-[2px] border-[#D6D6D6]">
              <p>Total Screens</p>
              <span className="bg-black h-9 w-9 rounded-full text-white flex justify-center text-xs items-center ">
                <p>324</p>
              </span>
            </div>

            {/* Available Screens */}
            <div className=" flex items-center justify-between gap-4 px-2 py-2 text-sm font-medium rounded-md  border-[2px] border-[#D6D6D6]">
              <p>Available Screens </p>
              <span className="bg-[#77FF47] h-9 w-9 rounded-full text-black flex justify-center text-xs items-center ">
                <p>321</p>
              </span>
            </div>

            {/* total screen */}
            <div className=" flex items-center justify-between gap-4 px-2 py-2 text-sm font-medium rounded-md  border-[2px] border-[#D6D6D6]">
              <p>Inactive Campaigns</p>
              <span className="bg-[#FF4747] h-9 w-9 rounded-full text-black flex justify-center text-xs items-center ">
                <p>03</p>
              </span>
            </div>
          </div>
        </div>

        {/* container body  */}
        <div className=" h-[calc(100vh-255px)] overflow-auto  grid grid-cols-12 gap-3">
          {/* left side */}
          <div className=" col-span-3 flex flex-col gap-3">
            <div className="rounded-[10px] min-h-[120px] bg-white">
              {/* top */}
            </div>
            <div className="rounded-[10px] min-h-[200px]  p-3 flex flex-col gap-2 bg-white">
              {/* action button 1 */}
              <div className="flex items-center  justify-between gap-3 py-4 px-3 rounded-[5px] bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] relative">
                {/* Add an overlay div for the blur effect */}
                <div className="absolute inset-0 backdrop-filter backdrop-blur-sm rounded-[5px] bg-black bg-opacity-60 border border-white border-opacity-20 shadow-lg"></div>

                {/* Content */}
                <div className="relative z-10 text-white text-sm font-bold flex items-center justify-between w-full">
                  {/* switch button  */}
                  <div className="flex items-center gap-3">
                    <Switch color="#21AAFF" />

                    <span>Surge Attention</span>
                  </div>
                  {/* <span className=" rounded-full border flex justify-center items-center h-5 w-5 text-xs">
                    ❔
                  </span> */}
                </div>
              </div>
              {/* action button 2 */}
              <div className="flex items-center justify-between gap-3 py-4 px-3 rounded-[5px] bg-[#FFF6F0] text-black">
                {/* Content */}
                <div className="relative z-10  text-sm font-bold flex items-center justify-between w-full">
                  {/* switch button  */}
                  <div className="flex items-center gap-3">
                    <Switch color="#FF4747" />
                    <span>Surge Attention</span>
                  </div>
                  {/* <span className=" rounded-full border flex justify-center items-center h-5 w-5 text-xs">
                    ❔
                  </span> */}
                </div>
              </div>

              {/* action button 3 */}
              <div className="flex items-center justify-between gap-3 py-4 px-3 rounded-[5px] bg-[#FFF6F0] text-black">
                {/* Content */}
                <div className="relative z-10  text-sm font-bold flex items-center justify-between w-full">
                  {/* switch button  */}
                  <div className="flex items-center gap-3">
                    <Switch color="#9C9C9C" />
                    <span>Surge Attention</span>
                  </div>
                  <span className=" rounded-full border border-gray-400 flex justify-center items-center h-5 w-5 text-xs">
                    ❔
                  </span>
                </div>
              </div>
            </div>
            <div className="rounded-[10px] min-h-[320px] bg-white">
              {/* bottom */}
            </div>
          </div>
          {/* center calendar */}
          <div className="bg-blue-400 col-span-6  rounded-[10px]">calendar</div>
          {/* right side */}
          <div className="bg-green-300 col-span-3">
            right
            <Switch color="#FF7621" />
          </div>
        </div>
      </div>
    </div>
  );
}
