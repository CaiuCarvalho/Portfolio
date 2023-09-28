"use client";
import Head from "next/head";
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiOutlineMail,
  AiFillLinkedin,
  AiFillGithub,
  AiFillCaretUp
} from 'react-icons/ai';
import { useState } from 'react'
import Image from "next/image";
import deved from '../public/dev-ed-wave.png';
import design from '../public/design.png';
import code from '../public/code.png';
import consulting from '../public/consulting.png';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';

const copyToClipboard = (text: string) => {
  if (!navigator.clipboard) {
    return;
  }

  return navigator.clipboard.writeText(text).catch(() => {
    console.error('Navigator clipboard: Could not copy text');
  });
};

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const handleCopyEmail = () => {
    const email = 'caiu.lfc@gmail.com';
    //@ts-ignore
    copyToClipboard(email)
      .then(() => {
        alert('Endereço de e-mail copiado para a área de transferência!');
      })
      .catch(() => {
        alert('Não foi possível copiar o endereço de e-mail.');
      });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generate by create next App" />
        <link rel="icon" href="/favicon.ico " />
      </Head>

      <main className=" bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="text-xl font-burtons" id="topo">developedbyCaio</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
              {/* className="flex fixed" */}
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl dark:text-teal-400">Caio Carvalho</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Developer | Student</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-200">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, facere!</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="#" onClick={handleCopyEmail}>
              <AiOutlineMail />              
            </a>
            <a href="https://linkedin.com/in/caiolucarvalho" target="blank">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/CaiuCarvalho" target="blank">
              <AiFillGithub />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image alt="" src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>

        <section>
          <div className="">
            <h3 className="text-3xl py-1 dark:text-white">Services I Offer</h3>
            <p className="text-md py-2 leading-8 text-gray-80 dark:text-gray-200">
              Lorem ipsum, dolor sit amet <span className="text-teal-500">consectetur</span> Lorem ipsum dolor sit amet consectetur adipisicing elit..
            </p>
            <p className="text-md py-2 leading-8 text-gray-80 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl mt-10 dark:bg-white">
              <Image alt="Imagem dos Designs" src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">My Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet?
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Lorem</p>
              <p className="text-gray-800 py-1">Lorem</p>
              <p className="text-gray-800 py-1">Lorem</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl mt-10 dark:bg-white">
              <Image alt="Imagem dos designs"  src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">My Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet?
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Lorem</p>
              <p className="text-gray-800 py-1">Lorem</p>
              <p className="text-gray-800 py-1">Lorem</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl mt-10 dark:bg-white">
              <Image alt="Imagem dos designs" src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2">My Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet?
              </p>
              <h4 className="py-4 text-teal-600">Design tools I use</h4>
              <p className="text-gray-800 py-1">Lorem</p>
              <p className="text-gray-800 py-1">Lorem</p>
              <p className="text-gray-800 py-1">Lorem</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-10 dark:text-white">Portfolio</h3>
            <p className="text-md leading-8 text-gray-80 dark:text-gray-200">
              Lorem ipsum, dolor sit amet <span className="text-teal-500">consectetur</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo!.
            </p>
            <p className="text-md leading-8 text-gray-80 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1"> {/* Aqui Vai O Site que vou fazer da Consec */}
              <Image alt="Imagem Portifolios" src={web1} className="rounded-lg object-cover" width={"100"} height={"100"} layout="responsive" />
            </div>
            <div className="basis-1/3 flex-1">
              <Image alt="Imagem Portifolios" src={web2} className="rounded-lg object-cover" width={"100"} height={"100"} layout="responsive" />
            </div>
          </div>
        </section>
        <div className="text-5xl flex justify-end gap-16 py-3 text-teal-700 dark:text-teal-400">
          <a href="#">
          <AiFillCaretUp />
          </a>
        </div>
      </main>
    </div>
  );
}
