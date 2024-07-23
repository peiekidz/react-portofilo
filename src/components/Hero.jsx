import { HERO_CONTENT } from "../constants"
import ProfilePic from "../assets/pei_profile_picture.jpg"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x: -100, opacity: 0 },
    hiddenImage: {x: 100, opacity: 0 },
    visible:{
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    }
})    

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col item-center lg:items-start">
                        <motion.h1 
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-12 text-6xl font-thin tracking-tight lg:mt-16"
                            >
                            Fery Febriawan
                        </motion.h1>
                        <motion.span 
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-200 via-slate-500 to-purple-200 bg-clip-text text-3xl tracking-tight text-transparent"
                            >
                            Frontend Developer
                        </motion.span>
                        <motion.p 
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter"
                            >
                            {HERO_CONTENT}
                        </motion.p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-10">
                    <motion.div
                        variants={container(1.5)}
                        initial="hiddenImage"
                        animate="visible"
                        className="flex justify-center"
                        >
                        <img 
                            style={{borderRadius: "50%", width: "60%"}} 
                            className="brightness-75 border" 
                            src={ProfilePic}
                            alt="Fery Febriawan"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    ) 
}

export default Hero