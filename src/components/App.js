import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
    return (
        <div className="container-fuild">
            <ToastContainer autoClose={3000} hideProgressBar />
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/courses" element={<CoursesPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/course/:slug" element={<ManageCoursePage/>}/>
                <Route path="/course" element={<ManageCoursePage/>}/>
                <Route path="/*"element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export default App;