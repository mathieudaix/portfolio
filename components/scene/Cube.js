import * as THREE from 'three'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { RigidBody, CuboidCollider } from '@react-three/rapier'
import { RoundedBox } from '@react-three/drei'

function randFloatSpread(range) {
    return range * (0.5 - Math.random())
}

const Cube = ({ vec = new THREE.Vector3(), scale, r = randFloatSpread }) => {
    const ref = useRef()

    useFrame((_state, delta) => {
        delta = Math.min(0.1, delta)

        if (ref.current) {
            ref.current.applyImpulse(
                vec
                    .copy(ref.current.translation())
                    .normalize()
                    .multiply({ x: -10 * delta, y: -10 * delta, z: -10 * delta })
            )

            ref.current.applyImpulse(
                vec
                    .copy(ref.current.rotation())
                    .normalize()
                    .multiply({ x: -7 * delta, y: -7 * delta, z: -7 * delta })
            )
        }
    })

    return (
        <RigidBody
            ref={ref}
            linearDamping={0.75}
            angularDamping={0.15}
            friction={0.2}
            position={[r(20), r(20) + 20, r(20) - 5]}
            colliders={false}
            dispose={null}
        >
            <CuboidCollider args={[scale - 0.5, scale - 0.5, scale - 0.5]} />
            <RoundedBox args={[scale, scale, scale]} castShadow receiveShadow radius={0.08} smoothness={2}>
                <meshPhongMaterial color="#080808" roughness={0} clearcoatRoughness={0} />
            </RoundedBox>
        </RigidBody>
    )
}

export default Cube