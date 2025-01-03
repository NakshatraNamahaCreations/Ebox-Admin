import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { FaCheck } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { MdDelete, MdBlock } from "react-icons/md";
import Loader from "../../loader/Loader";
import axios from "axios";
import { apiUrl } from "../../../api-services/apiContents";
import { useNavigate } from "react-router-dom";

function FAQList() {
  const Navigate = useNavigate();
  const [faqList, setFaqList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFAQ = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`${apiUrl.BASEURL}${apiUrl.GET_ALL_FAQ}`);
      if (res.status === 200) {
        setFaqList(res.data.faq.reverse());
      }
    } catch (error) {
      console.error("Failed to fetch teams:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFAQ();
  }, []);

  const editFaq = (row) => {
    Navigate("/edit-faq", {
      state: {
        faq: row,
      },
    });
  };

  const deleteFaq = async (ele) => {
    try {
      const res = await axios.delete(
        `${apiUrl.BASEURL}${apiUrl.DELETE_FAQ}${ele._id}`
      );
      if (res.status === 200) {
        console.log("deletevres", res);
        alert(res.data.success || "FAQ Deleted");
        window.location.reload();
      }
    } catch (error) {
      console.error("Error:", error);
      alert(Error, "Something went wrong! Try again");
    }
  };

  const toggleServiceStatus = async (id, currentStatus) => {
    try {
      const res = await axios.put(
        `${apiUrl.BASEURL}${apiUrl.FAQ_STATUS}${id}`,
        {
          isActive: !currentStatus,
        }
      );
      if (res.status === 200) {
        fetchFAQ();
        alert(res.data.message || "Status updated!");
      }
    } catch (error) {
      console.error("Error updating service status:", error);
    }
  };

  const columns = [
    {
      name: "Sl.No",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "Question",
      selector: (row) => row.question,
      sortable: true,
    },
    {
      name: "Answer",
      selector: (row) => row.answer,
      sortable: true,
    },

    {
      name: "Invoice",
      selector: (row) => (
        <>
          <div style={{ display: "flex" }}>
            <div
              style={{
                backgroundColor: "#ffa534",
                padding: "7px 13px",
                cursor: "pointer",
              }}
              onClick={() => editFaq(row)}
              title="Edit"
            >
              <MdEdit size={16} color="white" />
            </div>
            {row.isActive ? (
              <div
                style={{
                  backgroundColor: "#35cd3a",
                  padding: "7px 13px",
                  cursor: "pointer",
                }}
                title="Active"
                onClick={() => toggleServiceStatus(row._id, row.isActive)}
              >
                <FaCheck size={16} color="white" />
              </div>
            ) : (
              <div
                title="Inactive"
                style={{
                  backgroundColor: "#2f4e9e",
                  padding: "7px 13px",
                  cursor: "pointer",
                }}
                onClick={() => toggleServiceStatus(row._id, row.isActive)}
              >
                <MdBlock size={16} color="white" />
              </div>
            )}
            <div
              style={{
                backgroundColor: "#E91E63",
                padding: "7px 13px",
                cursor: "pointer",
              }}
              onClick={() => deleteFaq(row)}
              title="Delete"
            >
              <MdDelete size={16} color="white" />
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      {isLoading && <Loader />}

      <div style={{ marginTop: "20px" }}>
        <DataTable
          columns={columns}
          data={faqList}
          pagination
          //   defaultSortFieldId={1}
        />
      </div>
    </>
  );
}

export default FAQList;
