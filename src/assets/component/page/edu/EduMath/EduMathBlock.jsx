import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three';

function EduMathBlock(){

    const [active, setActive] = useState(true);

    const boxRef = useRef();
    const groupRef = useRef();

    return(
        <>
            <OrbitControls />
            <ambientLight />
            <directionalLight position={[2, 2, 2]} />
        <group ref={groupRef}>
            <mesh
                ref={boxRef}
            >
                <boxGeometry />
                <meshStandardMaterial color="lightblue" />
            </mesh>
        </group> 
        </>
    )
}

export default EduMathBlock;