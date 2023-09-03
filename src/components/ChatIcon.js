import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function ChatIcon() {
  const rotationVariants = {
    initial: {
      rotate: 0, // Initial rotation angle
    },
    animate: {
      rotate: [10, -10], // Rotate the chat icon from 5 degrees to -5 degrees
      transition: {
        duration: 1, // Duration of each half-rotation in seconds
        repeat: Infinity, // Causes the animation to repeat indefinitely
        ease: "linear", // Linear easing for a continuous loop
        repeatType: "reverse", // Reverses the animation on each repeat
      },
    },
  };

  return (
    <section className="bot fixed right-1 bottom-3 mr-4 z-30">
      <motion.div
        className="chat-icon" // Add your CSS classes here
        variants={rotationVariants}
        initial="initial"
        animate="animate"
      >
       

       <NavLink to="https://wa.me/919353627039?text=My!%20Query%20[%20Your%20Enquiry%20]">
        <div className="container whatsapp-icon  w-12 h-12 "></div>
        </NavLink>
      </motion.div>
    </section>
  );
}

export default ChatIcon;
