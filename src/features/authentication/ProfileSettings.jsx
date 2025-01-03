import styled from 'styled-components';
import UpdateUserName from './UpdateUserName';
import UpdateUserAvatar from './UpdateUserAvatar';
import UpdateUserPosition from './UpdateUserPostion';

const StyledProfileSettings = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 0;

    @media (min-width: 768px) {
        padding: 0 2rem 2rem 2rem;
    }
`;

function ProfileSettings() {
    return (
        <StyledProfileSettings>
            <h2>Profile Settings</h2>
            <UpdateUserName />
            <UpdateUserPosition />
            <UpdateUserAvatar />
        </StyledProfileSettings>
    );
}

export default ProfileSettings;
