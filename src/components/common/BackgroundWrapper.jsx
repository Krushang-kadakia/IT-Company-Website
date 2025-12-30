import { motion } from "framer-motion";

export default function BackgroundWrapper({ children }) {
    return (
        <div className="relative min-h-screen overflow-hidden bg-gray-50 dark:bg-brand-dark transition-colors duration-300">
            {/* Background Blobs Layer */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                {/* Blob 1: Primary Color */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                    className="absolute top-0 left-[-10%] w-[50vw] h-[50vw] bg-brand-primary/20 rounded-full blur-3xl opacity-30 mix-blend-multiply dark:mix-blend-screen"
                />

                {/* Blob 2: Secondary Color */}
                <motion.div
                    animate={{
                        x: [0, -70, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                    className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] bg-purple-500/20 rounded-full blur-3xl opacity-30 mix-blend-multiply dark:mix-blend-screen"
                />

                {/* Blob 3: Accent Color */}
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-indigo-500/20 rounded-full blur-3xl opacity-30 mix-blend-multiply dark:mix-blend-screen"
                />

                {/* Subtle Noise Texture */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                />
            </div>

            {/* Content Layer */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}
