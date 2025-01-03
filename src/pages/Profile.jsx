import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../features/authentication/authActions';
import ProfileSettings from '../features/authentication/ProfileSettings';
import styled from 'styled-components';
import ButtonIcon from '../ui/ButtonIcon';
import { MdLogout, MdSettings } from 'react-icons/md';
import { useState } from 'react';
import Modal from '../ui/Modal';

const ProfileWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vh;
    min-width: 20rem;
    max-width: 30rem;
    padding: 2rem;
    border: solid 1px var(--color-grey-100);
    border-radius: 10px;
    box-shadow: var(--shadow-lg);
`;

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
`;

const ProfileOperations = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StyledButtons = styled.div`
    display: flex;
    justify-content: end;
    gap: 1rem;
`;

const StyledAvatar = styled.img`
    height: 8rem;
    border-radius: 50%;
`;

function Profile() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => setIsModalOpen((prev) => !prev);

    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    const handleLogout = () => {
        dispatch(logoutAction());
    };

    return (
        <ProfileWrapper>
            <ProfileContainer>
                <StyledHeader>
                    <StyledAvatar
                        src={user.user_metadata.avatar || 'default-user.jpg'}
                    />
                    <ProfileOperations>
                        <p>{user.user_metadata.fullName}</p>
                        <p>{user.user_metadata.position}</p>
                        <StyledButtons>
                            <ButtonIcon onClick={handleLogout}>
                                <MdLogout />
                            </ButtonIcon>
                            <ButtonIcon onClick={toggleModal}>
                                <MdSettings />
                            </ButtonIcon>
                        </StyledButtons>
                    </ProfileOperations>
                </StyledHeader>
                <Modal isOpen={isModalOpen} onClose={toggleModal}>
                    <ProfileSettings />
                </Modal>
            </ProfileContainer>
        </ProfileWrapper>
    );
}

export default Profile;
