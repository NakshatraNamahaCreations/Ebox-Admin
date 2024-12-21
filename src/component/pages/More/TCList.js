import { CKEditor } from "@ckeditor/ckeditor5-react";
import React, { useEffect, useState } from "react";
import "ckeditor5/ckeditor5.css";
// import "ckeditor5-premium-features/ckeditor5-premium-features.css";
import {
  Bold,
  ClassicEditor,
  Essentials,
  Italic,
  Mention,
  Paragraph,
  Undo,
} from "ckeditor5";
import { apiUrl } from "../../../api-services/apiContents";
import axios from "axios";

function TCList() {
  const [content, Content] = useState({});
  const [editorContent, setEditorContent] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get(`${apiUrl.BASEURL}${apiUrl.GET_ALL_TNC}`);
      if (res.status === 200) {
        Content(res.data);
        setEditorContent(res.data.termsContent || "");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  function stripHtml(html) {
    return html.replace(/<[^>]*>/g, "");
  }
  const plainTextContent = stripHtml(editorContent);
  console.log(plainTextContent);

  const saveTnC = async () => {
    try {
      const res = await axios.put(`${apiUrl.BASEURL}${apiUrl.SAVE_TNC}`, {
        termsContent: editorContent,
      });
      if (res.status === 200) {
        console.log("log res", res.data.data.termsContent);
        setEditorContent(res.data.data.termsContent);
        alert("Terms and Conditions saved successfully");
        fetchData();
      }
    } catch (error) {
      console.log("Error saving terms:", error);
      alert("Failed to save Terms & Conditions");
    }
  };

  console.log("content", content);

  return (
    <div className="mt-3" style={{ backgroundColor: "white", padding: "20px" }}>
      {" "}
      <div>
        <b>
          {" "}
          Terms & Conditions Content <span style={{ color: "red" }}>*</span>
        </b>
      </div>
      <br />
      <CKEditor
        editor={ClassicEditor}
        data={editorContent}
        config={{
          toolbar: {
            items: ["undo", "redo", "|", "bold", "italic"],
          },
          plugins: [Bold, Essentials, Italic, Mention, Paragraph, Undo],
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setEditorContent(data);
        }}
      />
      <div className="mt-3" style={{ display: "flex", alignItems: "center" }}>
        <button onClick={saveTnC} className="btn btn-primary">
          Save
        </button>
      </div>
    </div>
  );
}

export default TCList;
