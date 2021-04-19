import React, { useState, useRef } from 'react'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    IconButton,
    Button
} from "@chakra-ui/react"
import { DeleteIcon } from '@chakra-ui/icons'
import { deleteFeedback } from '@/lib/db'


const RemoveButton = ({ feedbackId }) => {
    const [isOpen, setIsOpen] = useState(false)
    const cancelRef = useRef()

    const onClose = () => setIsOpen(false)
    const onDelete = () => {
        console.log(feedbackId)
        deleteFeedback(feedbackId);
        onClose()
    }

    return (
        <>
            <IconButton aria-label="Delete feedback" icon={<DeleteIcon />} variant="ghost" onClick={() => setIsOpen(true)} />

            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}
            >
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize="lg" fontWeight="bold">
                            Delete Feedback
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme="red" onClick={onDelete} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    )
}

export default RemoveButton
