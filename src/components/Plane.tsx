import React from 'react'

const Plane = () => {
  return (
    <mesh rotation-x ={Math.PI *-0.5} receiveShadow>
        <planeGeometry args={[200,200]}/> {/* args is 5X5 size */}
        <meshStandardMaterial color={"green"}/>
    </mesh>
  )
}

export default Plane
