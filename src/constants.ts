import { Chakra } from './types';

export const CHAKRAS: Chakra[] = [
    {
        id: 'crown',
        name: 'Crown Chakra',
        sanskritName: 'Sahasrara',
        meaning: 'Knowledge, Consciousness',
        affirmation: 'I UNDERSTAND',
        color: 'bg-violet-500',
        glowColor: 'shadow-[0_0_30px_rgba(139,92,246,0.6)]',
        position: 'top-[4.4%]',
        icon: 'solar:crown-star-bold-duotone',
        description: 'The center of spirituality, enlightenment, and dynamic thought.'
    },
    {
        id: 'thirdeye',
        name: 'Third Eye Chakra',
        sanskritName: 'Ajna',
        meaning: 'Intuition, Lucidity',
        affirmation: 'I SEE',
        color: 'bg-indigo-600',
        glowColor: 'shadow-[0_0_30px_rgba(79,70,229,0.6)]',
        position: 'top-[10.8%]',
        icon: 'solar:eye-bold-duotone',
        description: 'The seat of intuition and direct spiritual vision.'
    },
    {
        id: 'throat',
        name: 'Throat Chakra',
        sanskritName: 'Vishuddha',
        meaning: 'Communication, Creativity',
        affirmation: 'I TALK',
        color: 'bg-cyan-400',
        glowColor: 'shadow-[0_0_30px_rgba(34,211,238,0.6)]',
        position: 'top-[27.5%]',
        icon: 'solar:microphone-3-bold-duotone',
        description: 'Governs self-expression, speech, and truth.'
    },
    {
        id: 'heart',
        name: 'Heart Chakra',
        sanskritName: 'Anahata',
        meaning: 'Acceptance, Love',
        affirmation: 'I LOVE',
        color: 'bg-emerald-500',
        glowColor: 'shadow-[0_0_30px_rgba(16,185,129,0.6)]',
        position: 'top-[43%]',
        icon: 'solar:heart-bold-duotone',
        description: 'The bridge between the lower and higher chakras, representing love.'
    },
    {
        id: 'solar',
        name: 'Solar Plexus Chakra',
        sanskritName: 'Manipura',
        meaning: 'Strength, Personality',
        affirmation: 'I DO',
        color: 'bg-yellow-400',
        glowColor: 'shadow-[0_0_30px_rgba(250,204,21,0.6)]',
        position: 'top-[57%]',
        icon: 'solar:sun-2-bold-duotone',
        description: 'The source of personal power, will, and self-esteem.'
    },
    {
        id: 'sacral',
        name: 'Sacral Chakra',
        sanskritName: 'Svadhisthana',
        meaning: 'Sensuality, Pleasure',
        affirmation: 'I FEEL',
        color: 'bg-orange-500',
        glowColor: 'shadow-[0_0_30px_rgba(249,115,22,0.6)]',
        position: 'top-[67.8%]',
        icon: 'solar:waterdrops-bold-duotone',
        description: 'Associated with emotions, creativity, and flow.'
    },
    {
        id: 'root',
        name: 'Root Chakra',
        sanskritName: 'Muladhara',
        meaning: 'Energy, Stability',
        affirmation: 'I AM',
        color: 'bg-red-600',
        glowColor: 'shadow-[0_0_30px_rgba(220,38,38,0.6)]',
        position: 'top-[77.3%]',
        icon: 'solar:tree-bold-duotone',
        description: 'The foundation of physical energy and grounding.'
    }
];