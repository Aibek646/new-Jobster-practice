import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profile, SharedLayout, AllJobs, AddJob } from "./pages/dashboard";
import { Landing, Error, Register, ProtectedRoute } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route path="profile" element={<Profile />} />
                    <Route path="all-jobs" element={<AllJobs />} />
                    <Route path="add-job" element={<AddJob />} />
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
