import BarChartComponent from "./BarChart";
import AreaChartComponent from "./AreaChart";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { useSelector } from "react-redux";
import { useState } from "react";

const ChartsContainer = () => {
    const [barChart, setBarChart] = useState(true);
    const { monthlyApplications: data } = useSelector((store) => store.allJobs);

    return (
        <Wrapper>
            <h4>Monthly Application</h4>
            <button type="button" onClick={() => setBarChart(!barChart)}>
                {barChart ? "AreaChart" : "BarChart"}
            </button>
            {barChart ? (
                <BarChartComponent data={data} />
            ) : (
                <AreaChartComponent data={data} />
            )}
        </Wrapper>
    );
};

export default ChartsContainer;
