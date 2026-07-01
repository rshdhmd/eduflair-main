import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

import Home                  from './pages/Home';
import AusbildungPage        from './pages/AusbildungPage';
import StudyAbroadPage       from './pages/StudyAbroadPage';
import ApplicationProcessPage from './pages/ApplicationProcessPage';
import StudyInUKPage         from './pages/StudyInUKPage';
import StudyInGermanyPage    from './pages/StudyInGermanyPage';
import StudyInIrelandPage    from './pages/StudyInIrelandPage';
import StudyInCanadaPage     from './pages/StudyInCanadaPage';
import StudyInFrancePage     from './pages/StudyInFrancePage';
import StudyInAustriaPage    from './pages/StudyInAustriaPage';
import OtherDestinationsPage from './pages/OtherDestinationsPage';
import LanguageAcademyPage   from './pages/LanguageAcademyPage';
import IELTSCoachingPage     from './pages/IELTSCoachingPage';
import GermanLanguagePage    from './pages/GermanLanguagePage';
import OETPage               from './pages/OETPage';
import PlacementPage         from './pages/PlacementPage';
import NursingCanadaPage     from './pages/NursingCanadaPage';
import NursingAustraliaPage  from './pages/NursingAustraliaPage';
import NursingGermanyPage    from './pages/NursingGermanyPage';
import OtherNursingPage      from './pages/OtherNursingPage';
import OurStoryPage          from './pages/OurStoryPage';
import MeetFoundersPage      from './pages/MeetFoundersPage';
import ContactPage           from './pages/ContactPage';
import PrivacyPage           from './pages/PrivacyPage';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Home */}
        <Route path="/"                          element={<Home />} />

        {/* Ausbildung */}
        <Route path="/ausbildung-in-germany"     element={<AusbildungPage />} />

        {/* Study Abroad */}
        <Route path="/study-abroad"              element={<StudyAbroadPage />} />
        <Route path="/application-process"       element={<ApplicationProcessPage />} />
        <Route path="/study-in-uk"               element={<StudyInUKPage />} />
        <Route path="/study-in-germany"          element={<StudyInGermanyPage />} />
        <Route path="/study-in-ireland"          element={<StudyInIrelandPage />} />
        <Route path="/study-in-canada"           element={<StudyInCanadaPage />} />
        <Route path="/study-in-france"           element={<StudyInFrancePage />} />
        <Route path="/study-in-austria"          element={<StudyInAustriaPage />} />
        <Route path="/other-destinations"        element={<OtherDestinationsPage />} />

        {/* Language Academy */}
        <Route path="/language-academy"          element={<LanguageAcademyPage />} />
        <Route path="/ielts-coaching"            element={<IELTSCoachingPage />} />
        <Route path="/german-language"           element={<GermanLanguagePage />} />
        <Route path="/oet"                       element={<OETPage />} />

        {/* Placement */}
        <Route path="/placement"                 element={<PlacementPage />} />
        <Route path="/nursing-canada"            element={<NursingCanadaPage />} />
        <Route path="/nursing-australia"         element={<NursingAustraliaPage />} />
        <Route path="/nursing-germany"           element={<NursingGermanyPage />} />
        <Route path="/other-nursing-destinations" element={<OtherNursingPage />} />

        {/* About Us */}
        <Route path="/our-story"                 element={<OurStoryPage />} />
        <Route path="/meet-the-founders"         element={<MeetFoundersPage />} />

        {/* Utility */}
        <Route path="/contact"                   element={<ContactPage />} />
        <Route path="/privacy"                   element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
