import { MeshDiscardMaterial, Sphere } from "@react-three/drei"

const Shap = () => {
  return (
    <>
     <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDiscardMaterial
         color="#DB8B9B"
         attach="material"
         distort={0.5}
         speed={2}
        />
     </Sphere>
     <ambientLight intensity={2} />
     <directionalLight position={[1, 2, 3]}/>
    </>
  )
}

export default Shap