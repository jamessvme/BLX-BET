import Image from "next/image"

export default function() {

  return (
    <header className="p-3 flex justify-between items-center">
      <div className="logo">
        <Image 
          src="/logo.png"
          width={255}
          height={64}
          alt="logo"
        />
      </div>
      <ul className="grid grid-cols-3 w-1/2">
        <li>
          <Image
            src="/home.png"
            width={81}
            height={18}
            alt="home"
          />
        </li>
        <li>
          <Image
            src="/starts.png"
            width={126}
            height={25}
            alt="coinflip"
          />
        </li>
        <li>
          <Image
            src="/about.png"
            width={181}
            height={21}
            alt="about us"
          />
        </li>
      </ul>
      <div className="flex justify-between ">
        <button className="text-white bg-[#2FA1F3] p-3 tracking-[0.3em] rounded-md">LOGIN</button>
      </div>
    </header>
  )
}