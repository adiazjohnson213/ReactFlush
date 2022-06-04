import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./CoursesPage";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageCoursePage from "./ManageCoursePage";

function App() {
    return (
        <div className="container-fuild">
            <Header/>
            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/courses" element={<CoursesPage/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/course/:slug" element={<ManageCoursePage/>}/>
                <Route path="/*"element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
}

export default App;