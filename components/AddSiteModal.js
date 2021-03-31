import { useRef } from "react"
import { useForm } from "react-hook-form";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    Button
} from "@chakra-ui/react"

import { createSite } from "@/lib/db"


const AddSiteModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef()

    const { register, handleSubmit } = useForm();
    const onCreateSite = data => createSite(data)


    return (
        <>
            <Button maxW="200px" fontWeight="medium" onClick={onOpen}>
                Add Your First Site
            </Button>

            <Modal
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
                    <ModalHeader fontWeight="bold">Add Site</ModalHeader>
                    <ModalCloseButton />

                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input ref={initialRef} placeholder="My site" name="site" ref={register({ required: true })} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Link</FormLabel>
                            <Input placeholder="https://example.com" name="url" ref={register({ required: true })} />
                        </FormControl>
                    </ModalBody>

                    <ModalFooter>
                        <Button onClick={onClose} mr={3}>Cancel</Button>
                        <Button backgroundColor="#99FFFE" fontWeight="medium" type="submit">
                            Create
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AddSiteModal;