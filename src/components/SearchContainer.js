import Wrapper from "../assets/wrappers/SearchContainer";
import { useDispatch, useSelector } from "react-redux";
import { FormRow, FormRowSelect } from ".";
import { handleChange, clearFilters } from "../features/allJobs/allJobSlice";

const SearchContainer = () => {
    const { isLoading, search, searchStatus, searchType, sort, sortOptions } =
        useSelector((store) => store.allJobs);

    const { jobTypeOptions, statusOptions } = useSelector((store) => store.job);

    const dispatch = useDispatch();

    const handleSearch = (e) => {
        if (isLoading) return;
        dispatch(handleChange({ name: e.target.name, value: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(clearFilters());
    };

    return (
        <Wrapper>
            <form action="" className="form">
                <h4>search form</h4>
                <FormRow
                    type="text"
                    name="search"
                    value={search}
                    handleChange={handleSearch}
                />
                <FormRowSelect
                    labelText="status"
                    name="searchStatus"
                    value={searchStatus}
                    handleChange={handleSearch}
                    list={["all", ...statusOptions]}
                />

                <FormRowSelect
                    labelText="status"
                    name="searchType"
                    value={searchType}
                    handleChange={handleSearch}
                    list={["all", ...jobTypeOptions]}
                />
                <FormRowSelect
                    name="sort"
                    value={sort}
                    handleChange={handleSearch}
                    list={sortOptions}
                />
                <button
                    className="btn btn-block btn-danger"
                    disabled={isLoading}
                >
                    clear filters
                </button>
            </form>
        </Wrapper>
    );
};

export default SearchContainer;
