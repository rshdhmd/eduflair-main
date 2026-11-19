import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { RouteSeo } from './seo/useSeo';
import { AuthProvider } from './lib/auth';

import Home                  from './pages/Home';
import AusbildungPage        from './pages/AusbildungPage';
import StudyAbroadPage       from './pages/StudyAbroadPage';
import {
  StudyInUKPage,
  StudyInGermanyPage,
  StudyInIrelandPage,
  StudyInCanadaPage,
  StudyInFrancePage,
  StudyInAustriaPage,
  OtherDestinationsPage,
} from './pages/CmsDestinationPages';
import {
  ApplicationProcessPage,
  IELTSCoachingPage,
  GermanLanguagePage,
  OETPage,
  NursingCanadaPage,
  NursingAustraliaPage,
  NursingGermanyPage,
  OtherNursingPage,
} from './pages/CmsServicePages';
import MeetFoundersPage      from './pages/MeetFoundersCmsPage';
import LanguageAcademyPage   from './pages/LanguageAcademyPage';
import PlacementPage         from './pages/PlacementPage';
import OurStoryPage          from './pages/OurStoryPage';
import ContactPage           from './pages/ContactPage';
import PrivacyPage           from './pages/PrivacyPage';
import BlogPage              from './pages/BlogPage';
import BlogPostPage          from './pages/BlogPostPage';
import DynamicCmsPage        from './pages/DynamicCmsPage';

import AdminLogin            from './pages/admin/AdminLogin';
import AdminLayout           from './pages/admin/AdminLayout';
import AdminDashboard        from './pages/admin/AdminDashboard';
import AdminBlogs            from './pages/admin/AdminBlogs';
import AdminBlogEdit         from './pages/admin/AdminBlogEdit';
import AdminPages            from './pages/admin/AdminPages';
import AdminMedia            from './pages/admin/AdminMedia';
import AdminUsers            from './pages/admin/AdminUsers';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <RouteSeo />
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

          {/* Blog */}
          <Route path="/blog"                      element={<BlogPage />} />
          <Route path="/blog/:slug"                element={<BlogPostPage />} />
          <Route path="/p/:slug"                   element={<DynamicCmsPage />} />

          {/* Utility */}
          <Route path="/contact"                   element={<ContactPage />} />
          <Route path="/privacy"                   element={<PrivacyPage />} />

          {/* Admin CMS */}
          <Route path="/admin/login"               element={<AdminLogin />} />
          <Route path="/admin"                     element={<AdminLayout />}>
            <Route index                           element={<AdminDashboard />} />
            <Route path="blogs"                    element={<AdminBlogs />} />
            <Route path="blogs/new"                element={<AdminBlogEdit />} />
            <Route path="blogs/:id"                element={<AdminBlogEdit />} />
            <Route path="pages"                    element={<AdminPages />} />
            <Route path="media"                    element={<AdminMedia />} />
            <Route path="users"                    element={<AdminUsers />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
