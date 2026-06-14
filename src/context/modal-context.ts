import { createContext } from 'react';

export interface ModalContextType {
    isFollowModalOpen: boolean;
    openFollowModal: () => void;
    closeFollowModal: () => void;
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);
