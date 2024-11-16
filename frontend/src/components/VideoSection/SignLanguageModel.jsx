import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import modelPath from '../../3d-model/model.glb';

const SignLanguageModel = ({ gesture }) => {
    const { scene, animations } = useGLTF(modelPath);
    const modelRef = useRef();
    const mixer = useRef(null); // Initialize mixer as null to avoid auto-playing

    useEffect(() => {
        // Only initialize the mixer if animations exist
        if (animations && animations.length > 0) {
            mixer.current = new THREE.AnimationMixer(scene);
        }
    }, [animations, scene]);

    useEffect(() => {
        // Trigger animation only if a valid gesture is received
        if (gesture && mixer.current) {
            mixer.current.stopAllAction(); // Stop any ongoing actions

            const clip = animations.find((anim) => anim.name === gesture); // Find the animation matching the gesture
            if (clip) {
                console.log(`Playing animation for gesture: ${gesture}`); // Debug log for found gesture
                const action = mixer.current.clipAction(clip);
                action.reset().fadeIn(0.5).play(); // Reset and play the new animation
            } else {
                console.log(`No animation found for gesture: ${gesture}`); // Debug log for missing gesture
            }
        }
    }, [gesture, animations]);

    // Frame update for animation
    useFrame((_, delta) => {
        if (mixer.current) mixer.current.update(delta); // Update mixer if it exists
    });

    return <primitive ref={modelRef} object={scene} scale={1.5} />;
};

export default SignLanguageModel;
