import React from 'react';
import { Routes, Route } from 'react-router-dom';

import GeneralAccountSettings from './General Account/General';
import Subscription from './Subscription/Subscription';
import CommunicationPreferences from './Communication/Communication';
import PrivacySettings from './Privacy Setting/Privacy';
//import Slidenavbar from './Sildenavbar/Slidenavbar';
import ContactForm from '../../coverletter/ContactForm';
import RecipientForm from '../../coverletter/RecipientForm';
import Subject from '../../coverletter/Subject';
import Letterbody from '../../coverletter/Letterbody';
import Opening from '../../coverletter/Opening'
import Conclusion from '../../coverletter/Conclusion';




const MainAccountSetting = () => {
  return (
    <div className="main-account-setting">
    
 
      <div className="content">
        <Routes>
          <Route path="/account-settings/general" element={<GeneralAccountSettings />} />
          <Route path="/account-settings/subscription" element={<Subscription />} />
          <Route path="/account-settings/communication" element={<CommunicationPreferences />} />
          <Route path="/account-settings/privacy" element={<PrivacySettings />} />
          <Route path="/cover-letter" element={<ContactForm />} />
          <Route path="/recipient-form" element={<RecipientForm />} />
          <Route path="/subject" element={<Subject />} />
          <Route path="/letterbody-page" element={<Letterbody/>} />
          <Route path="/opening-page" element={<Opening/>} />
          <Route path="/closing-page" element={<Conclusion/>} />
        </Routes>
      </div>
    </div>
  );
};

export default MainAccountSetting;
