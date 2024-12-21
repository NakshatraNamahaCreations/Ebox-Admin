import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { postData } from "../../../api-services/apiHelper";
import { apiUrl } from "../../../api-services/apiContents";

function AddFaq() {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState("");

  const addFAQ = async () => {
    if (!answer || !question) {
      alert("Answer's and Question's should not empty");
    } else {
      try {
        const data = {
          answer: answer,
          question: question,
        };
        const res = await postData(apiUrl.ADD_FAQ, data);
        if (res) {
          alert("Added");
          console.log("res", res);
          window.location.assign("/faq-list");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div
      className="mt-3 p-4"
      style={{ backgroundColor: "white", borderRadius: "8px" }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        Question <span style={{ color: "red" }}>*</span>{" "}
        <input
          className="input-0-1-134 input-d21-0-1-1124 undefined ms-3"
          type="text"
          style={{ borderRadius: "7px", width: "45%" }}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <div className="mt-3" style={{ display: "flex", alignItems: "center" }}>
        Answer <span style={{ color: "red" }}>*</span>{" "}
        <textarea
          className="input-0-1-134 input-d21-0-1-1124 undefined ms-4"
          type="text"
          style={{ borderRadius: "7px", width: "45%" }}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
      <div className="mt-3" style={{ display: "flex", alignItems: "center" }}>
        <Button variant="primary" onClick={addFAQ}>
          Save
        </Button>
      </div>
    </div>
  );
}

export default AddFaq;
