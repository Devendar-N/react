import{
    Instagram,
    Twitter,
    LinkedIn,
    Emma,
    Tom,
    Will
} from "@images/index"

import "../styles/Employee.css"

export const Employee = ({
    EmployeeImage,
    EmployeePosition,
    EmployeeName,
    Twitter,
    Instagram,
    LinkedIn
}) => {
  return (
    <div className="employee">
      <div className="employee-image">
        <img src={EmployeeImage} alt={EmployeeName} />
      </div>

      <div className="employee-discription">
        <div className="employee-details">
          <div className="employee-name">{EmployeeName}</div>
          <div className="position">{EmployeePosition}</div>

          <div className="social-apps">
            <img src={Twitter} alt="Twitter" />
            <img src={Instagram} alt="Instagram" />
            <img src={LinkedIn} alt="LinkedIn" />
          </div>
        </div>
      </div>
    </div>
  );
};


export const EmployeeContainer = () => {
  return (
    <div className='employee-container'>
        <Employee EmployeeImage={Tom} EmployeePosition= "Founder & Chairman" EmployeeName= "Tom Cruise" Twitter={Twitter} Instagram={Instagram} LinkedIn={LinkedIn}/>
        <Employee EmployeeImage={Emma} EmployeePosition= "Managing Director" EmployeeName= "Emma Watson" Twitter={Twitter} Instagram={Instagram} LinkedIn={LinkedIn}/>
        <Employee EmployeeImage={Will} EmployeePosition= "Product Designer" EmployeeName= "Will Smith" Twitter={Twitter} Instagram={Instagram} LinkedIn={LinkedIn}/>

    </div>
  )
}
