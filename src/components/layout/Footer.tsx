import { helpList, InfoList } from "@/constants"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="container bg-background w-full h-[320px] border-t border-black dark:border-white mt-10 mx-auto">
      <div className="grid md:flex mx-auto px-28 justify-between border-b border-black dark:border-white py-16 gap-4">
        <section className="flex flex-col md:max-w-[480px] gap-2">
          <h1 className="font-bold leading-normal">ACERCA DE AKIRA STORE</h1>
          <p>Creamos ropa con amor inspirada en un estilo clásico y romántico que busca resaltar y complementar la confianza, feminidad y delicadeza de las mujeres. Nos esforzamos siempre para aportar comodidad, calidad y un sello único en la vida de cada mujer que nos elige.</p>
        </section>

        <div className="flex gap-x-4">
          <div className="flex flex-col">
            <h1 className="font-bold leading-normal">Ayuda</h1>
            {helpList.map((item)=>(
              <Link
              href={`/${item}`}
              >{item}</Link>
            ))}
          </div>

          <div className="flex flex-col">
            <h1 className="font-bold leading-normal">Información</h1>
            {InfoList.map((item)=>(
              <Link
              href={`/${item}`}
              >{item}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-x-4 py-4 px-4">
        <p className="text-sm font-light">Copyright © Akira Store | Tel:+54 9 11 5110-6369 - Email: akira@store.com.ar</p>
        <p className="text-sm font-light">Design by JosephFloDev</p>
      </div>
    </footer>
  )
}

export default Footer