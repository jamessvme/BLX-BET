import Image from "next/image"

export default function Footer() {

  return (
    <footer className="w-full bg-[#0E0D12] py-5">
      <div className="footer-logo w-full flex justify-center">
        <Image 
          src="/footer_logo.png"
          width={291}
          height={91}
          alt="footer-logo"
        />
      </div>
      <p className="w-4/5 text-center font-['Rubik_Mono_One'] mx-auto text-white text-xs mt-5 font-normal">Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,</p>
      <p className="w-4/5 text-center mx-auto text-white text-xs mt-5 font-normal">Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur </p>
    </footer>
  )
}