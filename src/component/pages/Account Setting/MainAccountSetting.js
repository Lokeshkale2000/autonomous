import React from 'react';
import { Routes, Route } from 'react-router-dom';

import GeneralAccountSettings from './General Account/General';
import Subscription from './Subscription/Subscription';
import CommunicationPreferences from './Communication/Communication';
import PrivacySettings from './Privacy Setting/Privacy';
//import Slidenavbar from './Sildenavbar/Slidenavbar';



const MainAccountSetting = () => {
  return (
    <div className="main-account-setting">
    
 
      <div className="content">
        <Routes>
          <Route path="/account-settings/general" element={<GeneralAccountSettings />} />
          <Route path="/account-settings/subscription" element={<Subscription />} />
          <Route path="/account-settings/communication" element={<CommunicationPreferences />} />
          <Route path="/account-settings/privacy" element={<PrivacySettings />} />
         
        </Routes>
      </div>
    </div>
  );
};

export default MainAccountSetting;
