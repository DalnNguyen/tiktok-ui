import Home from '~/Pages/Home';
import Following from '~/Pages/Following';
import Friends from '~/Pages/Friends';
import Upload from '~/Pages/Upload';
import { HeaderOnly } from '~/components/Layout';
import Search from '~/Pages/Search';

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/friends', component: Friends },
    { path: '/Upload', component: Upload, layout: HeaderOnly },
    { path: '/Search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
