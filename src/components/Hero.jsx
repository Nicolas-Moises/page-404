import { RiGhostFill, RiReplyFill } from "react-icons/ri";
import ghost from "../assets/ghost-img.png";

import Button from "./Button";

export function Hero() {
  return (
    <div className="flex flex-col w-full md:w-2/3 mx-auto height pt-16 ">
      <div className="flex flex-col lg:flex-row ">
        <div className="flex flex-col gap-6 w-[100%] items-center mb-10 lg:justify-center lg:items-start">
          <h2 className="text-zinc-400 md:text-lg flex gap-2 items-center">
            Error 404
            <RiGhostFill size={24} />
          </h2>
          <h1 className="text-zinc-100 text-4xl md:text-5xl font-semibold">
            Page not found!
          </h1>
          <p className="text-zinc-400 text-sm text-center md:text-left mb-2">
            Não conseguimos localizar a página <br /> que você buscava!
          </p>

          <Button title="Voltar para o site" icon={<RiReplyFill />} />
        </div>

        <div className="w-[100%] flex justify-center lg:justify-start ">
          <img src={ghost} alt="" className="float w-[230px] md:w-[400px]" />
        </div>
      </div>
    </div>
  );
}
