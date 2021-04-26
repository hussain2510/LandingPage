import React from 'react';
import './DashboardDetails.css';
import student from './student.png';
function DashboardDetails(){
    return(<>
        <section className="dashboard-details">
            <div className="dashboard-details-title">
            One System, One Dashboard
            </div>
            <div className="dashboard-details-subdetails">
            Yogshem has only system which seamlessly connects students, parents, teachers and schools. You can access everything on any device, across any system.
            </div>
            
                <div className="dashboard-details-benifits-student">
                    <img src={student} class="dashboard-details-student-pic"></img>
                </div>
                <div class="dashboard-student-subdetails">
                    <span class="dashboard-student-title">
                        student partner
                    </span>
                </div>
                    <div className="dashboard-student-features">
                        
                    </div>
                <div className="dashboard-details-benifits-teacher">
                    
                </div>
                <div className="dashboard-details-benifits-school">
                    
                </div>
        </section>
    </>);
}
export default DashboardDetails;