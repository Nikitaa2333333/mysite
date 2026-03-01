import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Кастомный компонент "Упрощенный Гоночный Болид" (пока без внешней модели, чтобы сразу заработало)
function CarModel() {
    const meshRef = useRef<THREE.Group>(null);

    // Автоматическое вращение
    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.005;
        }
    });

    return (
        <group ref={meshRef}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                {/* Корпус болида */}
                <mesh position={[0, 0, 0]} castShadow>
                    <boxGeometry args={[4, 0.5, 1.5]} />
                    <meshStandardMaterial color="#F27D26" roughness={0.1} metalness={0.8} />
                </mesh>

                {/* Спойлер */}
                <mesh position={[-1.8, 0.6, 0]} castShadow>
                    <boxGeometry args={[0.1, 0.8, 1.8]} />
                    <meshStandardMaterial color="#222" />
                </mesh>

                {/* Колеса */}
                {[[-1.2, -0.2, 0.8], [1.2, -0.2, 0.8], [-1.2, -0.2, -0.8], [1.2, -0.2, -0.8]].map((pos, i) => (
                    <mesh key={i} position={pos as [number, number, number]} rotation={[Math.PI / 2, 0, 0]} castShadow>
                        <cylinderGeometry args={[0.4, 0.4, 0.3, 32]} />
                        <meshStandardMaterial color="#111" roughness={0.5} />
                    </mesh>
                ))}

                {/* Кокпит */}
                <mesh position={[0, 0.4, 0]}>
                    <boxGeometry args={[1, 0.4, 0.8]} />
                    <MeshDistortMaterial color="#333" speed={1} distort={0.2} />
                </mesh>
            </Float>
        </group>
    );
}

export default function RacingCar() {
    return (
        <div className="w-full h-[400px] md:h-[600px] relative mt-10 cursor-grab active:cursor-grabbing">
            <Canvas shadows>
                <Suspense fallback={null}>
                    <PerspectiveCamera makeDefault position={[8, 3, 8]} fov={40} />

                    {/* Свет */}
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
                    <pointLight position={[-10, -10, -10]} intensity={0.5} />

                    <CarModel />

                    {/* Окружение для блеска металла */}
                    <Environment preset="night" />

                    {/* Пол (отражение) */}
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.6, 0]} receiveShadow>
                        <planeGeometry args={[20, 20]} />
                        <meshStandardMaterial color="#050505" opacity={0.5} transparent roughness={0.1} metalness={0.5} />
                    </mesh>

                    <OrbitControls
                        enableZoom={false}
                        minPolarAngle={Math.PI / 4}
                        maxPolarAngle={Math.PI / 1.8}
                        autoRotate={false}
                    />
                </Suspense>
            </Canvas>

            {/* Подпись (заменяем скучный текст на стильный) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-white/20 font-black pointer-events-none">
                Drag to rotate · 3D Vision Control
            </div>
        </div>
    );
}
