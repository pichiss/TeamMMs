import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import * as THREE from 'three';

function EduMathBlock(){

    const boxRef = useRef();
    const groupRef = useRef();

    return(
        <>
            <OrbitControls />
            <ambientLight intensity={0.2} />
            <directionalLight position={[0, 1, 0]} />
            <directionalLight position={[1, 2, 8]} />
            <group ref={groupRef}>
                <mesh
                    ref={boxRef}
                    scale={[2, 1, 1]}
                >
                    <boxGeometry args={[1, 1, 1]} />
                    <meshLambertMaterial
                        color="lightblue"
                        visible={true}
                        transparent={true}
                        opacity={0.5}
                        side={THREE.DoubleSide}
                    />
                </mesh>
            </group> 
        </>
    )
}

export default EduMathBlock;