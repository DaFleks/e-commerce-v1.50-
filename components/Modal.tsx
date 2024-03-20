"use client";

import { XIcon } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { Button } from "./ui/button";
import { MouseEventHandler } from "react";

interface ModalProps {
  open: boolean;
  handler: () => void;
  children?: React.ReactNode;
  title?: string;
}

const handleEventPropagation: MouseEventHandler<HTMLDivElement> = (e) => {
  e.stopPropagation();
};

const Modal = ({ open, handler, children, title = "This is a modal" }: ModalProps) => {
  return (
    <>
      {open && (
        <dialog className="fixed top-0 left-0 bg-black bg-opacity-50 h-full w-full z-50 flex items-center p-8" onClick={handler}>
          <div className="bg-white p-4 w-full xl:w-1/2 mx-auto rounded" onClick={handleEventPropagation}>
            <div className="flex items-center justify-between mb-4">
              <SectionHeader title={title} />
              <Button variant="ghost" className="p-2" onClick={handler}>
                <XIcon size={24} />
              </Button>
            </div>
            {children}
          </div>
        </dialog>
      )}
    </>
  );
};

export default Modal;
