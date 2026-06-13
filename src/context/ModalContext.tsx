import { useState, type ReactNode } from 'react';
import { ModalContext } from './modal-context';

export function ModalProvider({ children }: { children: ReactNode }) {
    const [isFollowModalOpen, setIsFollowModalOpen] = useState(false);

    const openFollowModal = () => setIsFollowModalOpen(true);
    const closeFollowModal = () => setIsFollowModalOpen(false);

    return (
        <ModalContext.Provider value={{ isFollowModalOpen, openFollowModal, closeFollowModal }}>
            {children}
        </ModalContext.Provider>
    );
}
