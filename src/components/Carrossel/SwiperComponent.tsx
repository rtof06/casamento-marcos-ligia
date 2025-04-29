'use client'
import dynamic from 'next/dynamic';

const SwiperComponent = dynamic(() => import('./Carrossel'), {
   ssr: false,
 });
 
 export default SwiperComponent;