import About from "../pages/about";
import Posts from "../pages/Posts";
import PostPage from "../pages/PostPage";
import Login from "../pages/Login"

export const privateRoutes = [
    {path: '/about', component: About, exact: true},
    {path: '/posts', component: Posts, exact: true},
    {path: '/posts/:id', component: PostPage, exact: true},
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true}
]