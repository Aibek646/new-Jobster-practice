// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Wrapper from "../assets/wrappers/JobsContainer";
// import Loading from "./Loading";

// const JobsContainer = () => {
//     const {
//         jobs,
//         isLoading,
//         page,
//         totalJobs,
//         numOfPages,
//         search,
//         searhStatus,
//         searchType,
//         sort
//     } = useSelector((store) => store.allJobs);
//     const dispatch = useDispatch();

//     // if (isLoading) {
//     //     return <Loading />;
//     // }
//     // if (jobs.length === 0) {
//     //     return (
//     //         <Wrapper>
//     //             <h2>No jobs to display...</h2>
//     //         </Wrapper>
//     //     );
//     // }

//     return (
//         <Wrapper>
//             {/* <h5>
//                 {totalJobs} job{jobs.length > 1 && "s"} found
//             </h5>
//             <div className="jobs">
//                 {jobs.map((job) => {
//                     return <Job key={job._id} {...job} />;
//                 })}
//             </div>
//             {numOfPages > 1 && <PageBtnContainer />}
//             <h5>hello world</h5> */}
//             <h5>Hello World</h5>
//         </Wrapper>
//     );
// };

// export default JobsContainer;

import React from "react";

const JobsContainer = () => {
    return <div>JobsContainer</div>;
};

export default JobsContainer;
