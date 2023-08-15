"use client"

import {useRef} from "react";
import {Canvas, extend, useFrame, useThree} from "@react-three/fiber";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

extend({OrbitControls});

function Box() {
    const boxRef = useRef();
    const controlsRef = useRef();
    const {camera, gl} = useThree();

    useFrame(() => {
        if (boxRef.current) {
            boxRef.current.rotation.x += 0.005;
            boxRef.current.rotation.y += 0.003;
        }
        controlsRef.current.update();
    });

    return (
        <>
            <mesh ref={boxRef}>
                <boxGeometry args={[2, 2, 2]}/>
                <meshStandardMaterial color={'black'}/>
            </mesh>
            <orbitControls ref={controlsRef} args={[camera, gl.domElement]}/>
        </>
    );
}

export default function Cube() {
    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box/>
        </Canvas>
    )
}
