import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "../compontents/Modal";
import Image from "next/image";

var setSubject: string = "";

const Projects = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = (subject: string) => {
    setSubject = subject;
    setModalOpen(true);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="layout-content">
        <motion.button
          className="layout_item"
          onClick={() => (modalOpen ? close() : open("cpp"))}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
        >
          <div className="layout-item-image">
            <Image
              src={"./images/cpp.svg"}
              fill={true}
              style={{ objectFit: "contain" }}
              alt="cpp-project"
            />
          </div>
        </motion.button>

        <motion.button
          className="layout_item"
          onClick={() => (modalOpen ? close() : open("csharp"))}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
        >
          <div className="layout-item-image">
            <Image
              src={"./images/csharp.svg"}
              fill={true}
              style={{ objectFit: "contain" }}
              alt="cpp-project"
            />
          </div>
        </motion.button>

        <motion.button
          className="layout_item"
          onClick={() => (modalOpen ? close() : open("typescript"))}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
        >
          <div className="layout-item-image">
            <Image
              src={"./images/typescript.svg"}
              fill={true}
              style={{ objectFit: "contain" }}
              alt="cpp-project"
            />
          </div>
        </motion.button>

        <motion.button
          className="layout_item"
          onClick={() => (modalOpen ? close() : open("python"))}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
        >
          <div className="layout-item-image">
            <Image
              src={"./images/python.svg"}
              fill={true}
              style={{ objectFit: "contain" }}
              alt="cpp-project"
            />
          </div>
        </motion.button>

        <motion.button
          className="layout_item"
          onClick={() => (modalOpen ? close() : open("java"))}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
        >
          <div className="layout-item-image">
            <Image
              src={"./images/java.svg"}
              fill={true}
              style={{ objectFit: "contain" }}
              alt="cpp-project"
            />
          </div>
        </motion.button>

        <motion.button
          className="layout_item"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1 }}
        >
          <div className="layout-item-image">
            <Image
              src={"./images/placeholder.svg"}
              fill={true}
              style={{ objectFit: "contain" }}
              alt="cpp-project"
            />
          </div>
        </motion.button>

        <AnimatePresence
          initial={false}
          mode="wait"
          onExitComplete={() => null}
        >
          {modalOpen && <Modal text={setSubject} handleClose={close} />}
        </AnimatePresence>
      </div>
    </main>
  );
};

export default Projects;
