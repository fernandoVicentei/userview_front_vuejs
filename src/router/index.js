import Vue from 'vue'
import VueRouter from 'vue-router'

//Adding layouts router.
const BlankLayout = () => import("@/layouts/BlankLayout")
const Layout1 = () => import("@/layouts/backend/Layout-1")
const Layout2 = () => import("@/layouts/backend/Layout-2")
const Layout3 = () => import("@/layouts/backend/Layout-3")



//Adding page content router.
const Dashbord1 = () => import('@/views/backend/Dashboards/Dashbord1')
const Dashbord2 = () => import('@/views/backend/Dashboards/Dashbord2')
const Dashbord3 = () => import('@/views/backend/Dashboards/Dashbord3')

/* //widget pages
const WidgetSimple = () => import('@/views/backend/Widgets/WidgetSimple')
const WidgetChart = () => import('@/views/backend/Widgets/WidgetChart')

//ui elements
const UiAlerts = () => import('@/views/backend/Ui/UiAlerts')
const UiAvatars = () => import('@/views/backend/Ui/UiAvatars')
const UiBadges = () => import('@/views/backend/Ui/UiBadges')
const UiBoxShadows = () => import('@/views/backend/Ui/UiBoxShadows')
const UiBreadcrumbs = () => import('@/views/backend/Ui/UiBreadcrumbs')
const UiButtonGroups = () => import('@/views/backend/Ui/UiButtonGroups')
const UiButtons = () => import('@/views/backend/Ui/UiButtons')
const UiCards = () => import('@/views/backend/Ui/UiCards')
const UiCarousels = () => import('@/views/backend/Ui/UiCarousels')
const UiColors = () => import('@/views/backend/Ui/UiColors')
const UiEmbed = () => import('@/views/backend/Ui/UiEmbed')
const UiGrids = () => import('@/views/backend/Ui/UiGrids')
const UiHelperClasses = () => import('@/views/backend/Ui/UiHelperClasses')
const UiImages = () => import('@/views/backend/Ui/UiImages')
const UiListGroups = () => import('@/views/backend/Ui/UiListGroups')
const UiMediaObjects = () => import('@/views/backend/Ui/UiMediaObjects')
const UiModals = () => import('@/views/backend/Ui/UiModals')
const UiNotifications = () => import('@/views/backend/Ui/UiNotifications')
const UiPaginations = () => import('@/views/backend/Ui/UiPaginations')
const UiPopOvers = () => import('@/views/backend/Ui/UiPopOvers')
const UiProgressBars = () => import('@/views/backend/Ui/UiProgressBars')
const UiTabs = () => import('@/views/backend/Ui/UiTabs')
const UiTooltips = () => import('@/views/backend/Ui/UiTooltips')
const UiTypography = () => import('@/views/backend/Ui/UiTypography')

//Form elements
const Checkbox = () => import('@/views/backend/Forms/Form Controls/Checkbox')
const Elements = () => import('@/views/backend/Forms/Form Controls/Elements')
const Inputs = () => import('@/views/backend/Forms/Form Controls/Inputs')
const Radio = () => import('@/views/backend/Forms/Form Controls/Radio')
const Switch = () => import('@/views/backend/Forms/Form Controls/Switch')
const TextArea = () => import('@/views/backend/Forms/Form Controls/TextArea')
const Validations = () => import('@/views/backend/Forms/Form Controls/Validations')
const Datepicker = () => import('@/views/backend/Forms/Form widget/Datepicker')
const Fileupload = () => import('@/views/backend/Forms/Form widget/Fileupload')
const FormQuill = () => import('@/views/backend/Forms/Form widget/FormQuill')
const SelectComponents = () => import('@/views/backend/Forms/Form widget/SelectComponents')
const Simple = () => import('@/views/backend/Forms/Form Wizard/Simple')
const Validate = () => import('@/views/backend/Forms/Form Wizard/Validate')
const Vertical = () => import('@/views/backend/Forms/Form Wizard/Vertical')

//table elements
const BasicTable = () => import('@/views/backend/Table/BasicTable')
const DataTable = () => import('@/views/backend/Table/DataTable')
const EditTable = () => import('@/views/backend/Table/EditTable') */

/* //icon elements
const Dripicons = () => import('@/views/backend/Icons/Dripicons')
const FontAwsome = () => import('@/views/backend/Icons/FontAwsome')
const LineAwsome = () => import('@/views/backend/Icons/LineAwsome')
const Remixicons = () => import('@/views/backend/Icons/Remixicons')

//gallery elements
const GalleryGrid = () => import('@/views/backend/Gallery/GalleryGrid')
const GalleryGridDesc = () => import('@/views/backend/Gallery/GalleryGridDesc')
const GalleryHover = () => import('@/views/backend/Gallery/GalleryHover')
const GalleryMasonry = () => import('@/views/backend/Gallery/GalleryMasonry')
const GalleryMasonryDesc = () => import('@/views/backend/Gallery/GalleryMasonryDesc')

//Blog elements
const BlogDetail = () => import('@/views/backend/Blog/BlogDetail')
const BlogGrid = () => import('@/views/backend/Blog/BlogGrid')
const BlogList = () => import('@/views/backend/Blog/BlogList')
const BlogSimple = () => import('@/views/backend/Blog/BlogSimple')

//chart elements
const AmChart = () => import('@/views/backend/Chart/AmChart')
const ApexChart = () => import('@/views/backend/Chart/ApexChart')
const HighChart = () => import('@/views/backend/Chart/HighChart')
const MorrisChart = () => import('@/views/backend/Chart/MorrisChart')

//map elements
const GoogleMap = () => import('@/views/backend/Map/GoogleMap')
const VectorMap = () => import('@/views/backend/Map/VectorMap') */

//auth elements
const SignIn = () => import('@/views/backend/Auth/SignIn')
const SignUp = () => import('@/views/backend/Auth/SignUp')
const RecoverPassword = () => import('@/views/backend/Auth/RecoverPassword')
const LockScreen = () => import('@/views/backend/Auth/LockScreen')
const ConfirmMail = () => import('@/views/backend/Auth/ConfirmMail')

//pages elements
const ContactDetails = () => import('@/views/backend/Pages/Contact/ContactDetails')
const ContactList = () => import('@/views/backend/Pages/Contact/ContactList')
const Pricing1 = () => import('@/views/backend/Pages/Pricing/Pricing1')
const Pricing2 = () => import('@/views/backend/Pages/Pricing/Pricing2')
const Pricing3 = () => import('@/views/backend/Pages/Pricing/Pricing3')
const Pricing4 = () => import('@/views/backend/Pages/Pricing/Pricing4')
const Timeline1 = () => import('@/views/backend/Pages/Timeline/Timeline1')
const Timeline2 = () => import('@/views/backend/Pages/Timeline/Timeline2')
const Timeline3 = () => import('@/views/backend/Pages/Timeline/Timeline3')
const Timeline4 = () => import('@/views/backend/Pages/Timeline/Timeline4')
const Error404 = () => import('@/views/backend/Pages/Error/Error404')
const Error500 = () => import('@/views/backend/Pages/Error/Error500')
const BlankPage = () => import('@/views/backend/Pages/BlankPage')
const CommingSoon = () => import('@/views/backend/Pages/CommingSoon')
const FAQ = () => import('@/views/backend/Pages/FAQ')
const Invoice = () => import('@/views/backend/Pages/Invoice')
const Maintainance = () => import('@/views/backend/Pages/Maintainance')
const Subsribers = () => import('@/views/backend/Pages/Subsribers')

/* //app element
const EmailComposes = () =>import('@/views/backend/App/Mail/EmailComposes')
const EmailListing = () =>import('@/views/backend/App/Mail/EmailListing')
const UserAccountSetting = () =>import('@/views/backend/App/User Management/UserAccountSetting')
const UserAdd = () =>import('@/views/backend/App/User Management/UserAdd')
const UserList = () =>import('@/views/backend/App/User Management/UserList')
const UserProfile = () =>import('@/views/backend/App/User Management/UserProfile')
const userPrivacySettings = () =>import('@/views/backend/App/User Management/UserPrivacySetting')
const UserProfileEdit = () =>import('@/views/backend/App/User Management/UserProfileEdit')
const Chat = () =>import('@/views/backend/App/Chat')
const Todo = () =>import('@/views/backend/App/Todo')
const Accountsetting =() => import('@/views/backend/App/Extraap/AccountSettings')
const privacypolicy = () => import('@/views/backend/App/Extraap/PrivacyPolicy')
const PrivacySettings = () =>import('@/views/backend/App/Extraap/PrivacySettings')
const TermsOfUse = () =>import('@/views/backend/App/Extraap/TermsOfUse') */

//Views
const Metricas = () =>import('@/views/frontend/metricas')
const Editar = () =>import('@/views/frontend/editar')


Vue.use(VueRouter)

const childRoute = () => [
  {
    path: 'detalle',
    name: 'layout.dashboard1',
    /*   meta: {  name: 'Dashboard1' }, */
    meta: {
      requiresAuth: true,
    },
    component: Dashbord1
  },
  {
    path: '/MisDatos',
    name: 'misdatos',
    meta: { name: 'misdatos' },
    component: Metricas
  },
  {
    path: '/Editar',
    name: 'editar',
    meta: { name: 'editar' },
    component: Editar
  },


]
const authchildRoute = () => [
  {
    path: '',
    name: 'auth.login',
    meta: { name: 'SignIn' },
    component: SignIn,
  },
  {
    path: 'sign-up',
    name: 'auth.register',
    meta: { name: 'SignUp' },
    component: SignUp
  },
  {
    path: 'recover-password',
    name: 'auth.recover-password',
    meta: { name: 'Recover Password' },
    component: RecoverPassword
  },
  {
    path: 'lock-screen',
    name: 'auth.lock-screen',
    meta: { name: 'Lock Screen' },
    component: LockScreen
  },
  {
    path: 'confirm-mail',
    name: 'auth.confirm-mail',
    meta: { name: 'Confirm Mail' },
    component: ConfirmMail
  },

]
const pageschildRoute = () => [
  {
    path: 'error-404',
    name: 'error.404',
    meta: { name: 'Error 404' },
    component: Error404
  },
  {
    path: 'error-500',
    name: 'error.500',
    meta: { name: 'Error 500' },
    component: Error500
  },
  {
    path: 'pages-maintainance',
    name: 'pages.maintenance',
    meta: { name: 'Maintaiance' },
    component: Maintainance
  },
  {
    path: 'pages-commingsoon',
    name: 'pages.commingsoon',
    meta: { name: 'Comming Soon' },
    component: CommingSoon
  }
]
const extrapageschildRoute = () => [
  {
    path: 'contact-detail',
    name: 'contact.detail',
    meta: { name: 'Contact Detail' },
    component: ContactDetails
  },
  {
    path: 'contact-list',
    name: 'contact.list',
    meta: { name: 'Contact List' },
    component: ContactList
  },
  {
    path: 'timeline-1',
    name: 'time.line',
    meta: { name: 'TimeLine-1' },
    component: Timeline1
  },
  {
    path: 'timeline-2',
    name: 'time.line1',
    meta: { name: 'TimeLine-2' },
    component: Timeline2
  },
  {
    path: 'timeline-3',
    name: 'time.line2',
    meta: { name: 'TimeLine-3' },
    component: Timeline3
  },
  {
    path: 'timeline-4',
    name: 'time.line3',
    meta: { name: 'TimeLine-4' },
    component: Timeline4
  },
  {
    path: 'pricing-1',
    name: 'price.pay',
    meta: { name: 'Pricing-1' },
    component: Pricing1
  },
  {
    path: 'pricing-2',
    name: 'price.pay1',
    meta: { name: 'Pricing-2' },
    component: Pricing2
  },
  {
    path: 'pricing-3',
    name: 'price.pay2',
    meta: { name: 'Pricing-3' },
    component: Pricing3
  },
  {
    path: 'pricing-4',
    name: 'price.pay3',
    meta: { name: 'Pricing-4' },
    component: Pricing4
  },
  {
    path: 'pages-invoice',
    name: 'pages.invoices',
    meta: { name: 'Pages Invoice' },
    component: Invoice
  },
  {
    path: 'pages-subscriber',
    name: 'pages.subscribers',
    meta: { name: 'Pages Subscribers' },
    component: Subsribers
  },
  {
    path: 'pages-faq',
    name: 'pages.faq',
    meta: { name: 'Pages FAQ' },
    component: FAQ
  },
  {
    path: 'pages-blank-page',
    name: 'pages.blank-page',
    meta: { name: 'Pages Blank Page ' },
    component: BlankPage
  },
]

const routes = [
  {
    path: '/',
    name: 'login',
    component: SignIn,
    children: authchildRoute()
  },
  {
    path: '*',
    component: Error404,
  },
  {
    path: '/MisDatos',
    name: 'misdatos',
    component: Layout1,
    children: childRoute(),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/Editar',
    name: 'editar',
    component: Layout1,     
    children: childRoute(),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Layout1,
    children: childRoute(),
  },
  {
    path: '',
    name: 'layout-2',
    component: Layout2,
    children: [
      {
        path: '/dashboard-2',
        name: 'layout.dashboard2',
        meta: { name: 'Dashbord2' },
        component: Dashbord2
      },
    ]
  },
  {
    path: '',
    name: 'layout-3',
    component: Layout3,
    children: [
      {
        path: '/dashboard-3',
        name: 'layout.dashboard3',
        meta: { name: 'Dashbord3' },
        component: Dashbord3
      },
    ]
  },
  {
    path: '/auth',
    name: 'auth',
    component: BlankLayout,
    children: authchildRoute()
  },
  {
    path: '/pages',
    name: 'pages',
    component: BlankLayout,
    children: pageschildRoute()
  },
  {
    path: '/extra-pages',
    name: 'extra-pages',
    component: Layout1,
    children: extrapageschildRoute()
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.VUE_APP_BASE_URL,
  routes
})

export default router
