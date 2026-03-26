import { createContext, useContext, useState, type ReactNode } from 'react';

interface ModalContextType {
    isFollowModalOpen: boolean;
    openFollowModal: () => void;
    closeFollowModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

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

export function useModal() {
    const context = useContext(ModalContext);
    if (context === undefined) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}
