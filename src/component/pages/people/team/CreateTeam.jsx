import React, { useState } from "react";
import "../../../../styles/teammember.css";
import { Button } from "react-bootstrap";
import { postData } from "../../../../api-services/apiHelper";
import { apiUrl } from "../../../../api-services/apiContents";
// import {
//   PiFlagBannerDuotone,
//   PiGlobeDuotone,
//   PiUserCircleDuotone,
//   PiBookOpenDuotone,
//   PiBookDuotone,
//   PiChatTeardropDotsDuotone,
//   PiSpeakerSimpleHighDuotone,
//   PiPathDuotone,
//   PiUsersThreeDuotone,
// } from "react-icons/pi";
// import { CiDiscount1 } from "react-icons/ci";
// import { postData } from "../../../Api-Service/apiHelper";
// import { apiUrl } from "../../../Api-Service/apiConstants";

function CreateTeam() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [dashboard, setDashboard] = useState(false);
  const [banner, setBanner] = useState(false);
  const [service, setService] = useState(false);
  const [subService, setSubService] = useState(false);
  const [requirements, setRequirements] = useState(false);
  const [userBooking, setUserBooking] = useState(false);
  const [vendorOrders, setVendorOrders] = useState(false);
  const [manageUser, setManageUser] = useState(false);
  const [manageVendor, setManageVendor] = useState(false);
  const [manageTeams, setManageTeams] = useState(false);

  const [manageSellProducts, setManageSellProducts] = useState(false);
  const [manageRentalProducts, setManageRentalProducts] = useState(false);

  const addTeamMember = async () => {
    if (!name || !phoneNumber) {
      alert("Name and Phone number should not empty");
    } else {
      try {
        const data = {
          member_name: name,
          mobile_number: phoneNumber,
          email_id: emailId,
          password: password,
          dashboard_management: dashboard,
          banner_management: banner,
          service_management: service,
          subservice_management: subService,
          requirement_management: requirements,
          userbooking_management: userBooking,
          vendororder_management: vendorOrders,
          manage_user: manageUser,
          manage_vendor: manageVendor,
          manage_teammemebrs: manageTeams,
          manage_sellproducts: manageSellProducts,
          manage_rentalproducts: manageRentalProducts,
        };
        const res = await postData(apiUrl.CREATE_TEAM, data);
        if (res) {
          alert("Added");
          console.log("res", res);
          window.location.assign("/team/team-list");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <div className="root-0-1-732 contentContainer-0-1-726 mt-2">
      <div className="leftSection-0-1-728 row">
        <div className="label-0-1-733 col-md-3">
          <div className="labelText-0-1-734">Name</div>
          <div className="inputContainer-0-1-133 undefined ">
            <input
              className="input-0-1-134 input-d21-0-1-1124 undefined"
              placeholder="Enter Name"
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="label-0-1-733 col-md-3">
          <div className="labelText-0-1-734">Phone number </div>
          <div className="inputContainer-0-1-133 undefined ">
            <input
              className="input-0-1-134 input-d22-0-1-1125 undefined"
              placeholder="Enter Phone Number"
              type="tel"
              maxLength={10}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="label-0-1-733 col-md-3">
          <div className="labelText-0-1-734">Email Id</div>
          <div className="inputContainer-0-1-133 undefined ">
            <input
              className="input-0-1-134 input-d23-0-1-1126 undefined"
              placeholder="Email"
              type="email"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>
        </div>
        <div className="label-0-1-733 col-md-3">
          <div className="labelText-0-1-734">Password</div>
          <div className="inputContainer-0-1-133 undefined ">
            <input
              className="input-0-1-134 input-d23-0-1-1126 undefined"
              placeholder="Password"
              type="text"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="labelText-0-1-734">Permissions</div>
      <div className="label-0-1-733 mt-2 row">
        {/* <div className="toggleContainer-0-1-177 toggleBar-0-1-171 col-md-3">
          <div className="textSubText-0-1-183">
            <div className="toggleHeading-0-1-178 undefined">
              <div className="permissionIconTextWrap-0-1-172">
                <div className="textWrapper-0-1-176">
                  <span>
                    <div>Dashboard</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="medium-0-1-180">
            <div className="ui fitted toggle checkbox undefined">
              <input
                type="checkbox"
                checked={dashboard}
                onChange={() => setDashboard(!dashboard)}
              />
            </div>
          </div>
        </div> */}

        <div className="toggleContainer-0-1-177 toggleBar-0-1-171 col-md-3">
          <div className="textSubText-0-1-183">
            <div className="toggleHeading-0-1-178 undefined">
              <div className="permissionIconTextWrap-0-1-172">
                <div className="textWrapper-0-1-176">
                  <span>
                    <div>Banner</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="medium-0-1-180">
            <div className="ui fitted toggle checkbox undefined ">
              <input
                type="checkbox"
                checked={banner}
                onChange={() => setBanner(!banner)}
              />
            </div>
          </div>
        </div>
        <div className="toggleContainer-0-1-177 toggleBar-0-1-171 col-md-3">
          <div className="textSubText-0-1-183">
            <div className="toggleHeading-0-1-178 undefined">
              <div className="permissionIconTextWrap-0-1-172">
                <div className="textWrapper-0-1-176">
                  <span>
                    <div>Service</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="medium-0-1-180">
            <div className="ui fitted toggle checkbox undefined ">
              <input
                type="checkbox"
                checked={service}
                onChange={() => setService(!service)}
              />
            </div>
          </div>
        </div>
        <div className="toggleContainer-0-1-177 toggleBar-0-1-171 col-md-3">
          <div className="textSubText-0-1-183">
            <div className="toggleHeading-0-1-178 undefined">
              <div className="permissionIconTextWrap-0-1-172">
                <div className="textWrapper-0-1-176">
                  <span>
                    <div>Sub Service</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="medium-0-1-180">
            <div className="ui fitted toggle checkbox undefined ">
              <input
                type="checkbox"
                checked={subService}
                onChange={() => setSubService(!subService)}
              />
            </div>
          </div>
        </div>
        <div className="toggleContainer-0-1-177 toggleBar-0-1-171 col-md-3">
          <div className="textSubText-0-1-183">
            <div className="toggleHeading-0-1-178 undefined">
              <div className="permissionIconTextWrap-0-1-172">
                <div className="textWrapper-0-1-176">
                  <span>
                    <div>Requirements</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="medium-0-1-180">
            <div className="ui fitted toggle checkbox undefined ">
              <input
                type="checkbox"
                checked={requirements}
                onChange={() => setRequirements(!requirements)}
              />
            </div>
          </div>
        </div>
        <div className="toggleContainer-0-1-177 toggleBar-0-1-171 col-md-3">
          <div className="textSubText-0-1-183">
            <div className="toggleHeading-0-1-178 undefined">
              <div className="permissionIconTextWrap-0-1-172">
                <div className="textWrapper-0-1-176">
                  <span>
                    <div>User Bookings</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="medium-0-1-180">
            <div className="ui fitted toggle checkbox undefined ">
              <input
                type="checkbox"
                checked={userBooking}
                onChange={() => setUserBooking(!userBooking)}
              />
            </div>
          </div>
        </div>
        <div className="toggleContainer-0-1-177 toggleBar-0-1-171 col-md-3">
          <div className="textSubText-0-1-183">
            <div className="toggleHeading-0-1-178 undefined">
              <div className="permissionIconTextWrap-0-1-172">
                <div className="textWrapper-0-1-176">
                  <span>
                    <div>Vendor Orders</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="medium-0-1-180">
            <div className="ui fitted toggle checkbox undefined ">
              <input
                type="checkbox"
                checked={vendorOrders}
                onChange={() => setVendorOrders(!vendorOrders)}
              />
            </div>
          </div>
        </div>
        <div className="toggleContainer-0-1-177 toggleBar-0-1-171 col-md-3">
          <div className="textSubText-0-1-183">
            <div className="toggleHeading-0-1-178 undefined">
              <div className="permissionIconTextWrap-0-1-172">
                <div className="textWrapper-0-1-176">
                  <span>
                    <div>Manage User's</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="medium-0-1-180">
            <div className="ui fitted toggle checkbox undefined ">
              <input
                type="checkbox"
                checked={manageUser}
                onChange={() => setManageUser(!manageUser)}
              />
            </div>
          </div>
        </div>
        <div className="toggleContainer-0-1-177 toggleBar-0-1-171 col-md-3">
          <div className="textSubText-0-1-183">
            <div className="toggleHeading-0-1-178 undefined">
              <div className="permissionIconTextWrap-0-1-172">
                <div className="textWrapper-0-1-176">
                  <span>
                    <div>Manage Vendor's</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="medium-0-1-180">
            <div className="ui fitted toggle checkbox undefined ">
              <input
                type="checkbox"
                checked={manageVendor}
                onChange={() => setManageVendor(!manageVendor)}
              />
            </div>
          </div>
        </div>

        <div className="toggleContainer-0-1-177 toggleBar-0-1-171 col-md-3">
          <div className="textSubText-0-1-183">
            <div className="toggleHeading-0-1-178 undefined">
              <div className="permissionIconTextWrap-0-1-172">
                <div className="textWrapper-0-1-176">
                  <span>
                    <div>Team Management</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="medium-0-1-180">
            <div className="ui fitted toggle checkbox undefined ">
              <input
                type="checkbox"
                checked={manageTeams}
                onChange={() => setManageTeams(!manageTeams)}
              />
            </div>
          </div>
        </div>
        <div className="toggleContainer-0-1-177 toggleBar-0-1-171 col-md-3">
          <div className="textSubText-0-1-183">
            <div className="toggleHeading-0-1-178 undefined">
              <div className="permissionIconTextWrap-0-1-172">
                <div className="textWrapper-0-1-176">
                  <span>
                    <div>Management rental Products</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="medium-0-1-180">
            <div className="ui fitted toggle checkbox undefined ">
              <input
                type="checkbox"
                checked={manageSellProducts}
                onChange={() => setManageSellProducts(!manageSellProducts)}
              />
            </div>
          </div>
        </div>
        <div className="toggleContainer-0-1-177 toggleBar-0-1-171 col-md-3">
          <div className="textSubText-0-1-183">
            <div className="toggleHeading-0-1-178 undefined">
              <div className="permissionIconTextWrap-0-1-172">
                <div className="textWrapper-0-1-176">
                  <span>
                    <div>Management Sell Products</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="medium-0-1-180">
            <div className="ui fitted toggle checkbox undefined ">
              <input
                type="checkbox"
                checked={manageRentalProducts}
                onChange={() => setManageRentalProducts(!manageRentalProducts)}
              />
            </div>
          </div>
        </div>
      </div>

      <br />
      <div className="footerNavContainer-0-1-444 footerNavContainer-d0-0-1-457">
        <Button
          className="px-5 py-2"
          variant="outline-info"
          onClick={() => window.location.assign("/team/team-list")}
        >
          <i className="fa-solid fa-arrow-left-long"></i> &nbsp; Back
        </Button>{" "}
        <Button className="ms-2 px-5" variant="info" onClick={addTeamMember}>
          Save & Proceed &nbsp; <i className="fa-solid fa-arrow-right-long"></i>
        </Button>
      </div>
    </div>
  );
}

export default CreateTeam;
