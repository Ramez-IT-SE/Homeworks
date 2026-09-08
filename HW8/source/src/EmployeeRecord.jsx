function EmployeeRecord(props) {
  return (
    <div>
      <span style={{ color: "red", fontWeight: "bold" }}>
        Salary:
      </span>{" "}
      {props.salary}

      {" - "}

      <span style={{ color: "red", fontWeight: "bold" }}>
        Position:
      </span>{" "}
      {props.position}

      {" - "}

      <span style={{ color: "red", fontWeight: "bold" }}>
        Company:
      </span>{" "}
      {props.company}
    </div>
  );
}

export default EmployeeRecord;