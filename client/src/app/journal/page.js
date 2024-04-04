import styles from "./page.module.css";
import RightBtn from "../components/JournalRightBtn/btn";
import LeftBtn from "../components/JournalLeftBtn/btn";
import Navbar from "../components/Navbar/navbar";

function JournalGreeting() {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  switch (month) {
    case 1:
      month = "January";
      break;
    case 2:
      month = "February";
      break;
    case 3:
      month = "March";
      break;
    case 4:
      month = "April";
      break;
    case 5:
      month = "May";
      break;
    case 6:
      month = "June";
      break;
    case 7:
      month = "July";
      break;
    case 8:
      month = "August";
      break;
    case 8:
      month = "September";
      break;
    case 10:
      month = "October";
      break;
    case 11:
      month = "November";
      break;
    case 12:
      month = "December";
  }

  return (
    <>
      <style js="true" global="true">
        {`
      body {
          background: linear-gradient(12.8deg, #C5EFCB -29.07%, #5B7F77 94.75%);
       }
        `}
      </style>
      {/* <div style={{ width: "fit-content" }}>
        <Navbar />
      </div> */}
      <h1 className={styles.title}>Journal</h1>
      <div className={styles.bookContainer}>
        <LeftBtn />
        <img className={styles.book} src="book.svg"></img>
        <div className={styles.textBoxContainer}>
          <textarea
            className={styles.textbox}
            placeholder="Spill your guts here"
            autoFocus="autoFocus"
            rows="17"
            cols="35"
          ></textarea>
          <style>
            {`::placeholder{
                    color: var(--darkGreen);
                }
                :focus{
                  outline: none;
                }`}
          </style>
        </div>
        <div className={styles.promptContainer}>
          <h3 className={styles.date}>
            {month} {date} , {year}
          </h3>
          <h2 className={styles.prompt}>Prompt goes here</h2>
        </div>
        <RightBtn />
      </div>
    </>
  );
}

export default JournalGreeting;
