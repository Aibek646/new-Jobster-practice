import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { StatsContainer } from "../../components";

const Stats = () => {
    const { isLoading, monthlyApplications } = useSelector(
        (store) => store.allJobs
    );
    const dispatch = useDispatch();
    return (
        <>
            <StatsContainer />
        </>
    );
};

export default Stats;
