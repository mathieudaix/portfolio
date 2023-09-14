import { Canvas } from '@react-three/fiber'
import { Physics } from '@react-three/rapier'
import { EffectComposer, N8AO, SSAO } from '@react-three/postprocessing'
import Pointer from './Pointer'
import Cube from './Cube'
import { Perf } from 'r3f-perf'

const cubes = [...Array(40)].map(() => ({ scale: [0.9, 1, 1.1][Math.floor(Math.random() * 3)] }))

export default function Scene() {
    return (
        <Canvas
            shadows
            gl={{ alpha: true, stencil: false, depth: false, antialias: true, powerPreference: 'high-performance' }}
            camera={{ position: [0, 0, 20], fov: 32.5, near: 1, far: 100 }}
        >
            <ambientLight intensity={1} />
            <spotLight position={[20, 20, 25]} penumbra={1} angle={0.2} color="white" castShadow shadow-mapSize={[64, 64]} />
            <directionalLight position={[0, 5, -4]} intensity={4} />
            <directionalLight position={[0, -15, -0]} intensity={2} color="#fff" />

            <Physics gravity={[0, 0, 0]}>
                <Pointer />

                {cubes.map((props, i) => (
                    <Cube key={i} {...props} />
                ))}
            </Physics>

            {/* <EffectComposer multisampling={0}>
                <N8AO color="#fff" aoRadius={2} intensity={1} />
                <SSAO />
            </EffectComposer> */}

            {/* <Perf /> */}
        </Canvas>
    )
}
