import { createStandaloneToast } from "@chakra-ui/react";

const createToast = (
  title,
  description,
  status = "success",
  duration = 9000,
  isClosable = true,
  position = "bottom"
) => {
  createStandaloneToast({
    position: position,
    title: title,
    description: description,
    status: status,
    duration: duration,
    isClosable: isClosable,
  });
};

export default createToast;
