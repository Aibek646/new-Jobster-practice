import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StatsContainer } from "../../components";
import { showStats } from "../../features/allJobs/allJobSlice";

const Stats = () => {
    const { isLoading, monthlyApplications } = useSelector(
        (store) => store.allJobs
    );

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showStats());
    }, []);

    return (
        <>
            <StatsContainer />
        </>
    );
};

export default Stats;
