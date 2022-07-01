import React from "react";
import Dashboard1Profile1 from "./Dashboard1Profile1";
import Dashboard1Profile1UpdateProfile from "./Dashboard1Profile1UpdateProfile";


function Dashboard1Profile() {

    return (
        <div className="col Dashboard1Profile">
            <h4>&#8883;  Dashboard</h4>
            <div className="informasi-dashboard">
                <p>Welcome to <span>Dashboard Crossfire Legacy!</span><br />Kamu Bisa Mengganti Informasi Akun Mu Di Sini.</p>

            </div>

            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="true">Profile</button>
                </li>
                <li className="nav-item">
                    <button className="nav-link" id="password-tab" data-bs-toggle="tab" data-bs-target="#password-tab-pane" type="button" role="tab" aria-controls="password-tab-pane" aria-selected="false">Change Password</button>
                </li>
            </ul>

            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0"><Dashboard1Profile1 /></div>
                <div className="tab-pane fade" id="password-tab-pane" role="tabpanel" aria-labelledby="password-tab" tabindex="0"><Dashboard1Profile1UpdateProfile /></div>
            </div>

        </div>
    )
}

export default Dashboard1Profile