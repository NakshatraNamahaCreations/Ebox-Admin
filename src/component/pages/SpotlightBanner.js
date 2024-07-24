import React from "react";
import DataTable from "react-data-table-component";
import { FaEye } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";
import { MdDelete } from "react-icons/md";
import { bannerData } from "../../global-data/booking";

function SpotlightBanner() {
  const columns = [
    {
      name: "Sl.No",
      selector: (row, index) => index + 1,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row) => (
        <>
          <div
            style={{
              padding: "5px",
              //   color: "black",
              //   fontWeight: "700",
              //   paddingBottom: "6px",
              //   cursor: "pointer",
            }}
            // onClick={() => handleOpeningCanvas(row)}
          >
            <img src={row.bannerImage} alt="" style={{ width: "45px" }} />
          </div>
        </>
      ),
      sortable: true,
    },
    {
      name: "Type",
      selector: (row) => row.bannerType,
      sortable: true,
    },

    {
      name: "Action",
      selector: (row) => (
        <>
          <div
            style={{
              display: "flex",
            }}
            // onClick={() => navigateToDetailedPage(row)}
          >
            {/* <div style={{ cursor: "pointer" }} title="View">
              <FaEye size={16} color="#00ade7" />
            </div>
            <div>
              <RxSlash size={16} />
            </div> */}
            <div style={{ cursor: "pointer" }} title="Delete">
              <MdDelete size={16} color="#E91E63" />
            </div>
          </div>
        </>
      ),
      // sortable: true,
    },
  ];

  return (
    <div className="row mt-2">
      <div className="col-md-6">
        <div
          style={{
            backgroundColor: "white",
            borderTop: "3px solid #ea5362",
            // rgb(95 95 95)
            borderRadius: "5px",
          }}
        >
          <div className="p-2">
            <h3 style={styles.itemsHead}>Add Spotlight Banner</h3>
            <div
              style={{
                borderBottom: "1px solid #f4f4f4",
              }}
            ></div>
            <div>
              <h6 className="mt-3" style={styles.header}>
                Type :
              </h6>

              <select style={styles.selector}>
                <option value="">Default</option>
                <option value="Home">Home</option>
                {/* <option value="">Defult</option> */}
              </select>
            </div>
            <div className="mb-3">
              <h6 className="mt-3" style={styles.header}>
                Banner Image : ( Recommended Size : 1024 x 512 pixels )
              </h6>
              <input type="file" />
            </div>
            <div
              style={{
                borderBottom: "1px solid #f4f4f4",
              }}
            ></div>
            <div className="mt-3 mb-2">
              <button style={styles.buttonForEveything}> Upload</button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div
          style={{
            backgroundColor: "white",
            borderTop: "3px solid #ea5362",
            borderRadius: "5px",
          }}
        >
          <div className="p-2">
            <h3 style={styles.itemsHead}>Banner List</h3>
            <div
              style={{
                borderBottom: "1px solid #f4f4f4",
              }}
            ></div>
            <div>
              <DataTable
                columns={columns}
                data={bannerData}
                //   defaultSortFieldId={1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const styles = {
  itemsHead: {
    color: "#333",
    fontWeight: "500",
    fontSize: "17px",
  },
  header: {
    color: "#333",
    fontSize: "14px",
  },
  selector: {
    color: "#555",
    width: "100%",
    padding: "6px 12px",
    border: "1px solid #ccc",
  },
  buttonForEveything: {
    backgroundColor: "#ea5362",
    border: "#ea5362",
    color: "white",
    borderRadius: "3px",
    fontSize: "14px",
    padding: "5px 10px",
  },
};
export default SpotlightBanner;
