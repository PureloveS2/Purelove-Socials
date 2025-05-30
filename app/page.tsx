import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaTelegram } from "react-icons/fa";
import { SiRoblox } from "react-icons/si";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-dvh">
      <div className="bg-zinc-950 w-[95%] max-w-[500px] flex flex-col items-center p-4 rounded-2xl gap-4">
        
      <div className="flex w-full items-center gap-2">
          
          <hr className="text-zinc-500 w-full"/>

          <p>Sobre</p>
          
          <hr className="text-zinc-500 w-full"/>
          
        </div>

        <figure className="text-center flex flex-col items-center gap-4">
          <Image
            src={"/profile-picture/lain.jpg"}
            width={720}
            height={720}
            alt="Profile picture"

            className="rounded-full w-[40%] border-2 border-white"
          />
          
          <figcaption className="w-[95%]">
            <p className="font-bold text-xl mb-1 text-purple-500">Purelove</p>
            <p>Desenvolvedor <Link href={"https://www.alura.com.br/artigos/full-stack"} target="_blank" className="bg-purple-500/40 hover:bg-purple-500/60 active:bg-purple-500/80 rounded transition">full-stack</Link>, apaixonado em criar código e atualmente aprendendo a fazer jogos no Roblox</p>
          </figcaption>
        </figure>
        
        <div className="flex w-full items-center gap-2">
          
          <hr className="text-zinc-500 w-full"/>

          <p>Sociais</p>
          
          <hr className="text-zinc-500 w-full"/>
          
        </div>

        <ul className="w-full flex flex-col gap-3">
          <li>
            <Link href={"https://t.me/PureloveS2"} target="_blank" className="flex items-center bg-blue-500 hover:bg-blue-400 active:bg-blue-300 rounded-full p-2 transition">
              <FaTelegram className="absolute w-8 h-8" />
              <p className="text-center w-full text-xl font-bold">Telegram</p>
            </Link>
          </li>

          <li>
            <Link href={"https://www.roblox.com/pt/users/7671700222/profile"} target="_blank" className="flex items-center bg-blue-700 hover:bg-blue-600 active:bg-blue-500 rounded-full p-2 transition">
              <SiRoblox className="absolute w-8 h-8" />
              <p className="text-center w-full text-xl font-bold">Roblox</p>
            </Link>
          </li>

          <li>
            <Link href={"https://github.com/PureloveS2"} target="_blank" className="flex items-center bg-gray-900 hover:bg-gray-800 active:bg-gray-700 rounded-full p-2 transition">
              <FaGithub className="absolute w-8 h-8" />
              <p className="text-center w-full text-xl font-bold">Github</p>
            </Link>
          </li>
        </ul>

        <hr className="text-zinc-500 w-full"/>
        
        <div>
          <small className="text-zinc-300">© 2025 • Purelove :)</small>
        </div>

      </div>
    </main>
  );
}
