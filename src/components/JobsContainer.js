import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/JobsContainer";
import { getAllJobs } from "../features/allJobs/allJobSlice";
import Loading from "./Loading";
import Job from "../components/Job";

const JobsContainer = () => {
    const {
        jobs,
        isLoading,
        page,
        totalJobs,
        numOfPages,
        search,
        searchStatus,
        searchType,
        sort
    } = useSelector((store) => store.allJobs);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllJobs());
    }, [page, search, searchStatus, searchType, sort]);

    if (isLoading) {
        return <Loading />;
    }
    if (jobs.length === 0) {
        return (
            <Wrapper>
                <h2>No jobs to display...</h2>
            </Wrapper>
        );
    }

    if (isLoading) {
        return <Loading />;
    }

    return (
        <Wrapper>
            <h5>
                {totalJobs} job{jobs.length > 1 && "s"} found
            </h5>
            <div className="job">
                {jobs.map((job) => {
                    return <Job key={job._id} {...job} />;
                })}
            </div>
        </Wrapper>
    );
};

export default JobsContainer;
