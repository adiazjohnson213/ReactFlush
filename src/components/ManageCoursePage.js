import React from "react";
import { useParams } from "react-router-dom";

const ManageCoursePage = prop => {
    const params = useParams();
    return (
        <>
            <h2>Manage Course</h2>
            {params.slug}
        </>
    );
};

export default ManageCoursePage;