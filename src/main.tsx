import {createRoot} from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import LandingPage from "./pages/LandingPage/LandingPage.tsx";
import App from "./App.tsx";
import ExhibitsPage from "./pages/ExhibitsPage/ExhibitsPage.tsx";
import ExhibitDetailPage from "./pages/ExhibitDetailPage/ExhibitDetailPage.tsx";
import Article from "./components/Article/Article.tsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.tsx";
import {articlesData} from "./data/articles.data.ts";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App/>}>
            <Route index element={<LandingPage/>}/>
            <Route path="/exhibits" element={<ExhibitsPage/>}/>
            <Route path="/exhibits/:exhibitId" element={<ExhibitDetailPage/>}/>
            <Route path="/programs" element={<Article articles={articlesData.programs}/>}/>
            <Route path="/podcast" element={<Article articles={articlesData.podcast}/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Route>
    ),
    { basename: import.meta.env.BASE_URL }
)

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)
