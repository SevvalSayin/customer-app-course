import { useState } from "react";
import styles from "./CustomerForm.module.css";
/* import styled from "styled-components"; */

/* const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 10px;
  margin-bottom: 20px;

  & input{
    position: relative;
    cursor: text;
    font-size: 14px;
    line-height: 20px;
    padding: 0 16px;
    height: 48px;
    background-color: #fff;
    border: 1px solid #d6d6e7;
    border-radius: 3px;
    color: rgb(35, 38, 59);
    box-shadow: inset 0 1px 4px 0 rgb(119 122 175 / 30%);
    overflow: hidden;
    transition: all 100ms ease-in-out;
    flex: 1;
  }
`;
 */

const CustomerForm = ({ addNewCustomer }) => {
  const [customerName, setCustomerName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCustomer = {
      id: Math.random(),
      customerName,
    };
    addNewCustomer(newCustomer);
    setCustomerName("");
  };

  return (
    <form className={styles.customerForm} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.customerİnput}
        placeholder="Add a new customer"
        onChange={(e) => setCustomerName(e.target.value)}
        value={customerName}
      />
      <button>
        <i className="bi bi-plus-lg"></i>
      </button>
    </form>
  );
};

export default CustomerForm;
