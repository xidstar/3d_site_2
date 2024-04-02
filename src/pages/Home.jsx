import React, { useRef, useEffect, useState, Suspense } from "react";
import state from "../components/state"
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, useGLTF, useProgress } from '@react-three/drei';
import { Section } from '../components/Section';
import { a, useTransition } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

function Model({ url, scale }) {
  const gltf = useGLTF(url, true)
  return (<primitive object={gltf.scene} scale={scale} position={[0, -20, 0]} />)
}

const Lights = () => {
  return (
    <>
      {/* Ambient Light illuminates lights for all objects */}
      <ambientLight intensity={0.6} />
      {/* Diretion light */}
      <directionalLight position={[1, 1, 5]} intensity={1} />
      <directionalLight
        castShadow
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      {/* Spotlight Large overhead light */}
      {/* <spotLight intensity={1} position={[100, 0, 0]} castShadow /> */}
    </>
  );
};

const HTMLContent = ({
  domContent,
  children,
  bgColor,
  modelPath,
  modelScale,
  position,
  pageLink,
}) => {
  const ref = useRef();
  
  useFrame(() => (ref.current.rotation.y += 0.01));
  const [refItem, inView] = useInView({
    threshold: 0,
  });

  useEffect(() => {
    inView && (document.body.style.background = bgColor);
  }, [inView]);

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, position, 0]}>
        <mesh ref={ref} position={[0, 0, 0]}>
          <Model url={modelPath} scale={modelScale}/>
        </mesh>
        <Html fullscreen portal={domContent}>
          <div ref={refItem} className='container'>
            <h1 className='title'>{children}</h1>
            <a href={pageLink} 
              className="bg-white text-slate-900 px-3 py-2 rounded-md flex w-32 
              justify-center items-center hover:bg-red-400 transition-all font-bold mt-5"
            >
              View Page
            </a>
          </div>
        </Html>
      </group>
    </Section>
  );
};

const Loader = () => {
  const { active, progress } = useProgress();
  const transition = useTransition(active, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0 },
    update: { progress },
  });
  return transition(
    ({ progress, opacity }, active) =>
      active && (
        <a.div className='loading' style={{ opacity }}>
          <div className='loading-bar-container'>
            <a.div className='loading-bar' style={{ width: progress }}></a.div>
          </div>
        </a.div>
      )
  );
}


const Home = () => {
  const [events, setEvents] = useState();
  const domContent = useRef();
  const scrollArea = useRef();
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);



  return (
    <>
      {/* <AnimatedText text="Home of the Government&apos;s Premier IT Contracts" /> */}

      <Canvas
        // concurrent
        // colorManagement
        camera={{ position: [0, 0, 120], fov: 70 }}
      >
        <Lights />

        <Suspense fallback={null}>
          <HTMLContent
            domContent={domContent}
            bgColor='#f15946'
            modelPath='/laptop.glb'
            modelScale={18}
            position={250}
            pageLink='/training'
          >
            <span>Training & Events</span>
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            bgColor='#571ec1'
            modelPath='/store.glb'
            modelScale={18}
            position={0}
            pageLink='/storefront'
          >
            <span>Storefront &</span>
            <span>Aquisition Tools</span>
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            bgColor='#636567'
            modelPath='/folder.glb'
            modelScale={200}
            position={-250}
            pageLink='/contract-holders'
          >
            <span>Contract Holders &</span>
            <span>Industry Providers</span>
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            bgColor='#026512'
            modelPath='/duck.glb'
            modelScale={0.2}
            position={-500}
            pageLink='/about-sewp'
          >
            <span>About SEWP</span>
          </HTMLContent>
          <HTMLContent
            domContent={domContent}
            bgColor='#5d0265'
            modelPath='/judge_gavel.glb'
            modelScale={40}
            position={-750}
            pageLink='/procurement'
          >
            <span>Procurement Policy</span>
            <span>& Regulation</span>
          </HTMLContent>
        
        </Suspense>
      </Canvas>

      <Loader />

      <div
        className='scrollArea'
        ref={scrollArea}
        onScroll={onScroll}
        {...events}>
        <div style={{ position: "sticky", top: 0 }} ref={domContent} />
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
      
    </>
  )
}

export default Home;