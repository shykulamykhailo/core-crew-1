import styled from 'styled-components';
import ButtonIcon from './ButtonIcon';
import { MdClose } from 'react-icons/md';

const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(8px);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background: white;
    border-radius: 0.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 650px;
    z-index: 1000;
    overflow-y: auto;

    @media (min-width: 768px) {
        width: auto;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 0.6rem;
`;

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <ModalBackdrop onClick={onClose}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <ButtonContainer>
                    <ButtonIcon onClick={onClose}>
                        <MdClose />
                    </ButtonIcon>
                </ButtonContainer>
                {children}
            </ModalContent>
        </ModalBackdrop>
    );
};

export default Modal;
