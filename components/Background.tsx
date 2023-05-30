"use client";
import { motion } from "framer-motion";
import * as THREE from "three";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
// import {
//     EffectComposer,
//     DepthOfField,
//     Noise,
//     Vignette,
// } from "@react-three/postprocessing";

import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
useGLTF.preload("/3d/keycap-transformed.glb");

type GLTFResult = GLTF & {
    nodes: any;
    materials: any;
};

const Box = ({ z, dark }) => {
    const ref = useRef<any>();
    // const { nodes, materials } = useGLTF(
    //     "/3d/salmon-transformed.glb"
    // );
    // const { nodes, materials } = useGLTF("/3d/pawn-transformed.glb");
    const { nodes, materials } = useGLTF(
        "/3d/keycap-transformed.glb"
    ) as GLTFResult;

    const { viewport, camera } = useThree();
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -10]);
    const [data] = useState({
        x: THREE.MathUtils.randFloatSpread(2),
        y: THREE.MathUtils.randFloatSpread(50),
        rX: Math.random() * Math.PI,
        rY: Math.random() * Math.PI,
        rZ: Math.random() * Math.PI,
        deltaY: Math.random() / 30,
    });
    useFrame((state) => {
        ref.current.rotation.set(
            (data.rX += 0.001),
            (data.rY += 0.007),
            (data.rZ += 0.0005)
        );
        ref.current.position.set(
            data.x * width,
            (data.y += 0.05 + data.deltaY),
            z
        );
        if (data.y > height * 2) {
            data.y = -height * 2;
        }
        // console.log(height / 1.5);
        // ref.current.rotation.x += 0.01;
        // ref.current.position.x = Math.sin(state.clock.getElapsedTime() * 3) * 4;
        // ref.current.position.y = Math.sin(state.clock.getElapsedTime() * 3);
        // ref.current.position.z = -5;
    });
    return (
        // <mesh
        //     ref={ref}
        //     geometry={nodes.Salmon.geometry}
        //     material={materials.skin}
        //     rotation={[1.377, -0.107, 0.496]}
        //     material-emissive="#ED6C31"
        //     scale={0.08}
        // />
        // <mesh
        //     ref={ref as any}
        //     geometry={nodes.Pawn_White_0.geometry}
        //     material={materials.White}
        //     position={[3.919, 0, 0]}
        //     rotation={[-Math.PI / 2, 0, 0]}
        //     scale={3.5}
        //     material-color={dark ? "#F07C42" : "#403D3A"}
        // />
        <mesh
            ref={ref as any}
            geometry={nodes.Object_2.geometry}
            material={materials.initialShadingGroup}
            // rotation={[-2.195, 0, 0]}
            scale={2}
            // material-color={dark ? "#F07C42" : "#403D3A"}
            material-color={"#F07C42"}
        />
    );
};

export default function Background({ count = 100, depth = 60, dark }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="w-full h-[115vh] fixed -z-10 top-0 blur-sm"
        >
            <Canvas
                gl={{ alpha: false }}
                camera={{ near: 0.01, far: 110, fov: 70 }}
            >
                {dark ? (
                    <color attach="background" args={["#252422"]} />
                ) : (
                    <color attach="background" args={["#FFFCF2"]} />
                )}

                <ambientLight intensity={0.4} />
                <spotLight
                    position={[10, -10, 10]}
                    // angle={0.15}
                    // penumbra={1}
                    intensity={0.8}
                />
                <Suspense fallback={null}>
                    {/* <Salmon scale={0.03} /> */}
                    {/* <Environment preset="sunset" /> */}
                    {Array.from({ length: count }).map((_, i) => (
                        <Box
                            key={i}
                            z={-Math.floor(i / 2)}
                            dark={dark}
                            // z={-(i / count) * depth}
                            // z={-i}
                        />
                    ))}
                    {/* <EffectComposer>
                        <DepthOfField
                            target={[0, 0, depth / 2]}
                            // focusDistance={5}
                            focalLength={0.5}
                            bokehScale={11}
                            height={700}
                        />
                        <Noise opacity={0.01} />
                        <Vignette eskil={false} offset={0.1} darkness={0.5} />
                    </EffectComposer> */}
                </Suspense>
            </Canvas>
        </motion.div>
    );
}
