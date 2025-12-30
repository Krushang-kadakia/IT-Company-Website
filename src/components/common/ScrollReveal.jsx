import { motion } from "framer-motion";

export default function ScrollReveal({ children, width = "fit-content", delay = 0 }) {
    return (
        <div style={{ position: "relative", width, overflow: "hidden" }}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
}
