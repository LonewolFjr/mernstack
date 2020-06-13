import React from 'react';
import $ from 'jquery';

window.jQuery = $;
window.$ = $;
global.jQuery = $;

const DashboardDefault = React.lazy(() => import('./Demo/Dashboard/Default'));
const Coach = React.lazy(() => import('./Demo/Dashboard/Coach'));
const Branch = React.lazy(() => import('./Demo/Dashboard/Branch'));
const Batch = React.lazy(() => import('./Demo/Dashboard/Batch'));
const Enquiry = React.lazy(() => import('./Demo/Dashboard/Enquiry'));
const Admission = React.lazy(() => import('./Demo/Dashboard/Admission'));
const TimeTable = React.lazy(() => import('./Demo/Dashboard/TimeTable'));
const ParentDash = React.lazy(() => import('./Demo/Dashboard/ParentDash'));
const CoachDash = React.lazy(() => import('./Demo/Dashboard/CoachDash'));
const FeeCollection = React.lazy(() => import('./Demo/Dashboard/FeeCollection'));
const UIBasicButton = React.lazy(() => import('./Demo/UIElements/Basic/Button'));
const UIBasicBadges = React.lazy(() => import('./Demo/UIElements/Basic/Badges'));
const UIBasicBreadcrumbPagination = React.lazy(() => import('./Demo/UIElements/Basic/BreadcrumbPagination'));

const UIBasicCollapse = React.lazy(() => import('./Demo/UIElements/Basic/Collapse'));
const UIBasicTabsPills = React.lazy(() => import('./Demo/UIElements/Basic/TabsPills'));
const UIBasicBasicTypography = React.lazy(() => import('./Demo/UIElements/Basic/Typography'));

const FormsElements = React.lazy(() => import('./Demo/Forms/FormsElements'));

const BootstrapTable = React.lazy(() => import('./Demo/Tables/BootstrapTable'));

const Nvd3Chart = React.lazy(() => import('./Demo/Charts/Nvd3Chart/index'));

const GoogleMap = React.lazy(() => import('./Demo/Maps/GoogleMap/index'));

const OtherSamplePage = React.lazy(() => import('./Demo/Other/SamplePage'));
const OtherDocs = React.lazy(() => import('./Demo/Other/Docs'));

const routes = [
    { path: '/dashboard/coach', exact: true, name: 'Default', component: Coach },
    { path: '/dashboard/branch', exact: true, name: 'Default', component: Branch },
    { path: '/dashboard/batch', exact: true, name: 'Default', component: Batch },
    { path: '/dashboard/enquiry', exact: true, name: 'Default', component: Enquiry },
    { path: '/dashboard/admission', exact: true, name: 'Default', component: Admission },
    { path: '/dashboard/feecollection', exact: true, name: 'Default', component: FeeCollection },
    { path: '/dashboard/timetable', exact: true, name: 'Default', component: TimeTable },
    { path: '/dashboard/parentdash', exact: true, name: 'Default', component: ParentDash },
    { path: '/dashboard/coachdash', exact: true, name: 'Default', component: CoachDash },
    
    
    
    
    { path: '/dashboard/default', exact: true, name: 'Default', component: DashboardDefault },
    { path: '/basic/button', exact: true, name: 'Basic Button', component: UIBasicButton },
    { path: '/basic/badges', exact: true, name: 'Basic Badges', component: UIBasicBadges },
    { path: '/basic/breadcrumb-paging', exact: true, name: 'Basic Breadcrumb Pagination', component: UIBasicBreadcrumbPagination },
    { path: '/basic/collapse', exact: true, name: 'Basic Collapse', component: UIBasicCollapse },
    { path: '/basic/tabs-pills', exact: true, name: 'Basic Tabs & Pills', component: UIBasicTabsPills },
    { path: '/basic/typography', exact: true, name: 'Basic Typography', component: UIBasicBasicTypography },
    { path: '/forms/form-basic', exact: true, name: 'Forms Elements', component: FormsElements },
    { path: '/tables/bootstrap', exact: true, name: 'Bootstrap Table', component: BootstrapTable },
    { path: '/charts/nvd3', exact: true, name: 'Nvd3 Chart', component: Nvd3Chart },
    { path: '/maps/google-map', exact: true, name: 'Google Map', component: GoogleMap },
    { path: '/sample-page', exact: true, name: 'Sample Page', component: OtherSamplePage },
    { path: '/docs', exact: true, name: 'Documentation', component: OtherDocs },
];

export default routes;