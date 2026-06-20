import React from "react";

function EmployeeCard() {
  return (
    <div style={styles.outerCard}>
      <div style={styles.innerCard}>
        <h2 style={styles.heading}>Employee Profile Card</h2>

        <p><strong>Employee ID:</strong> EMP101</p>
        <p><strong>Employee Name:</strong> Rahul Sharma</p>
        <p><strong>Department:</strong> IT Department</p>
        <p><strong>Designation:</strong> Software Developer</p>
        <p><strong>Salary:</strong> ₹55,000</p>
      </div>
    </div>
  );
}

const styles = {
  outerCard: {
    width: "500px",
    padding: "20px",
    background: "linear-gradient(to right, #4facfe, #00f2fe)",
    borderRadius: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "50px auto",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
  },

  innerCard: {
    width: "90%",
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  },

  heading: {
    textAlign: "center",
    color: "#5fa8ff",
    marginBottom: "20px"
  }
};

export default EmployeeCard;