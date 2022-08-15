import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import Wrapper from "../assets/wrappers/Job";
import { FaBriefcase, FaLocationArrow } from "react-icons/fa";
import JobInfo from "./JobInfo";
import { setEditJob, deleteJob } from "../features/job/jobSlice";

const Job = ({
    _id,
    position,
    company,
    jobLocation,
    jobType,
    createdAt,
    status
}) => {
    const dispatch = useDispatch();
    const date = moment(createdAt).format("MMM do, YYYY");

    return (
        <Wrapper>
            <header>
                <div className="main-icon">{company.charAt(0)}</div>
                <div className="info">
                    <h5>{position}</h5>
                    <p>{company}</p>
                </div>
            </header>
            <div className="content">
                <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
                <JobInfo icon={<FaLocationArrow />} text={date} />
                <JobInfo icon={<FaBriefcase />} text={jobType} />
                <div className={`status ${status}`}>{status}</div>
                <footer>
                    <div className="actions">
                        <Link
                            to="/add-job"
                            className="btn edit-btn"
                            onClick={() =>
                                dispatch(
                                    setEditJob({
                                        editJobId: _id,
                                        position,
                                        company,
                                        jobLocation,
                                        jobType,
                                        createdAt,
                                        status
                                    })
                                )
                            }
                        >
                            Edit
                        </Link>
                        <button
                            type="button"
                            className="btn delete-btn"
                            onClick={() => dispatch(deleteJob(_id))}
                        >
                            delete
                        </button>
                    </div>
                </footer>
            </div>
        </Wrapper>
    );
};

export default Job;
