import { useState } from "react";

function ModalContainer({ defaultIsOpen = false, children }) {
  const [isOpen, setIsOpen ] = useState(defaultIsOpen)

  const handleToggle = () => setIsOpen(!isOpen)

  return (
    children({
      isOpen,
      handleToggle
    })
  )
}

export default ModalContainer