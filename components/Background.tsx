"use client";
import * as THREE from "three";
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, useGLTF } from "@react-three/drei";
import {
    EffectComposer,
    DepthOfField,
    Noise,
    Vignette,
} from "@react-three/postprocessing";

const Box = ({ z, dark }) => {
    const ref = useRef();
    // const { nodes, materials } = useGLTF(
    //     "/3d/salmon-transformed.glb"
    // );
    const { nodes, materials } = useGLTF("/3d/pawn-transformed.glb");

    const { viewport, camera } = useThree();
    const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -10]);
    const [data] = useState({
        x: THREE.MathUtils.randFloatSpread(2),
        y: THREE.MathUtils.randFloatSpread(height),
        rX: Math.random() * Math.PI,
        rY: Math.random() * Math.PI,
        rZ: Math.random() * Math.PI,
    });
    useFrame((state) => {
        ref.current.rotation.set(
            (data.rX += 0.001),
            (data.rY += 0.007),
            (data.rZ += 0.0005)
        );
        ref.current.position.set(data.x * width, (data.y += 0.05), z);
        if (data.y > height) {
            data.y = -height;
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
        <mesh
            ref={ref}
            geometry={nodes.Pawn_White_0.geometry}
            material={materials.White}
            position={[3.919, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={3.5}
            material-color={dark ? "#efefef" : "#2B2926"}
        />
    );
};

export default function Background({ count = 50, depth = 60, dark }) {
    return (
        <div className="w-full h-[115vh] absolute -z-10 top-0">
            <Canvas
                gl={{ alpha: false }}
                camera={{ near: 0.01, far: 110, fov: 70 }}
            >
                {dark ? (
                    <color attach="background" args={["#252422"]} />
                ) : (
                    <color attach="background" args={["#FFFCF2"]} />
                )}

                {/* <ambientLight intensity={0.2} /> */}
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={2}
                />
                <Suspense fallback={null}>
                    {/* <Salmon scale={0.03} /> */}
                    <Environment preset="sunset" />
                    {Array.from({ length: count }).map((_, i) => (
                        <Box
                            key={i}
                            z={-Math.floor(i / 2)}
                            dark={dark}
                            // z={-(i / count) * depth - 20}
                            // z={-i}
                        />
                    ))}
                    <EffectComposer>
                        <DepthOfField
                            target={[0, 0, depth / 2]}
                            // focusDistance={5}
                            focalLength={0.5}
                            bokehScale={11}
                            height={700}
                        />
                        {/* <Bloom
                            luminanceThreshold={0}
                            luminanceSmoothing={0.9}
                            height={300}
                        />*/}
                        <Noise opacity={0.01} />
                        <Vignette eskil={false} offset={0.1} darkness={0.5} />
                    </EffectComposer>
                </Suspense>
            </Canvas>
        </div>
    );
}
