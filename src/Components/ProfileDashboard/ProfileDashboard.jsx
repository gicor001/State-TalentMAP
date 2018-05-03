import React from 'react';
import PropTypes from 'prop-types';
import { USER_PROFILE, NOTIFICATION_RESULTS, ASSIGNMENT_OBJECT, BID_RESULTS } from '../../Constants/PropTypes';
import UserProfile from './UserProfile';
import ExternalUserStatus from './ExternalUserStatus';
import BidList from './BidList';
import PositionInformation from './PositionInformation';
import Notifications from './Notifications';
import Spinner from '../Spinner';
import StaticDevContent from '../StaticDevContent';
import ProfileSectionTitle from '../ProfileSectionTitle';
import { Row, Column } from '../Layout';
import MediaQueryWrapper from '../MediaQuery';

const ProfileDashboard = ({ userProfile, isLoading, 
  favoritePositions, favoritePositionsIsLoading }) => (
    <div className="usa-grid-full user-dashboard user-dashboard-main profile-content-inner-container">
      {
        (isLoading || assignmentIsLoading || notificationsIsLoading || bidListIsLoading) ?
          <Spinner type="homepage-position-results" size="big" />
          :
            <div className="usa-grid-full">
              <div className="hello-greeting">
                {
                  `Hello, ${userProfile.display_name}`
                }
              </div>
              <div className="usa-grid-full">
                <div
                  className={`usa-width-five-twelfths user-dashboard-section-container
                      user-dashboard-column-1`}
                >
                  <div className="usa-width-one-whole user-dashboard-section current-user-section">
                    <UserProfile userProfile={userProfile} />
                  </div>
                  <div
                    className={`usa-width-seven-twelfths user-dashboard-section-container
                    user-dashboard-column-2`}
                >
                  <div className="usa-width-one-whole user-dashboard-section favorites-section">
                    <SavedSearches />
                  </div>
                  <div
                    className={`usa-width-seven-twelfths user-dashboard-section-container
                        user-dashboard-column-2`}
          >
            <div className="usa-width-one-whole user-dashboard-section position-info-section">
              <PositionInformation assignment={assignment} />
            </div>
            <div className="usa-width-one-whole user-dashboard-section notifications-section">
              <Notifications notifications={notifications} />
            </div>
          </div>
          <div
            className={`usa-width-one-half user-dashboard-section-container
              user-dashboard-column-3`}
          >
            <div className="usa-width-one-whole user-dashboard-section bidlist-section">
              <BidList bids={bidList} />
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);

ProfileDashboard.propTypes = {
  userProfile: USER_PROFILE.isRequired,
  isLoading: PropTypes.bool.isRequired,
  assignment: ASSIGNMENT_OBJECT.isRequired,
  assignmentIsLoading: PropTypes.bool.isRequired,
  notifications: NOTIFICATION_RESULTS.isRequired,
  notificationsIsLoading: PropTypes.bool.isRequired,
  bidList: BID_RESULTS.isRequired,
  bidListIsLoading: PropTypes.bool.isRequired,
};

export default ProfileDashboard;
