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
  const [password, setPassword] = useState("");
  const [dashboard, setDashboard] = useState(false);
  const [banner, setBanner] = useState(false);
  const [bookingManagement, setBookingManagement] = useState(false);
  const [vendorManagement, setVendorManagement] = useState(false);
  const [teamManagement, setTeamManagement] = useState(false);
  const [userManagement, setUserManagement] = useState(false);
  // const [freeMaterial, setFreeMaterial] = useState(false);
  // const [campaign, setCampaign] = useState(false);
  // const [course, setCourse] = useState(false);
  // const [selfService, setSelfService] = useState(false);

  const addTeamMember = async () => {
    if (!name || !phoneNumber) {
      alert("Name and Phone number should not empty");
    } else {
      try {
        const data = {
          member_name: name,
          mobile_number: phoneNumber,
          password: password,
          dashboard: dashboard,
          // banner: banner,
          booking_management: bookingManagement,
          vendor_management: vendorManagement,
          team_management: teamManagement,
          user_management: userManagement,
          // freeMaterial: freeMaterial,
          // campaign: campaign,
          // course: course,
          // selfService: selfService,
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
        <div className="label-0-1-733 col-md-4">
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
        <div className="label-0-1-733 col-md-4">
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
        <div className="label-0-1-733 col-md-4">
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
        <div className="toggleContainer-0-1-177 toggleBar-0-1-171 col-md-3">
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
        </div>

        {/* <div className="toggleContainer-0-1-177 toggleBar-0-1-171 col-md-3">
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
        </div> */}
        <div className="toggleContainer-0-1-177 toggleBar-0-1-171 col-md-3">
          <div className="textSubText-0-1-183">
            <div className="toggleHeading-0-1-178 undefined">
              <div className="permissionIconTextWrap-0-1-172">
                <div className="textWrapper-0-1-176">
                  <span>
                    <div>Booking Management</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="medium-0-1-180">
            <div className="ui fitted toggle checkbox undefined ">
              <input
                type="checkbox"
                checked={bookingManagement}
                onChange={() => setBookingManagement(!bookingManagement)}
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
                    <div>User Management</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="medium-0-1-180">
            <div className="ui fitted toggle checkbox undefined ">
              <input
                type="checkbox"
                checked={userManagement}
                onChange={() => setUserManagement(!userManagement)}
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
                    <div>Vendor Management</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="medium-0-1-180">
            <div className="ui fitted toggle checkbox undefined ">
              <input
                type="checkbox"
                checked={vendorManagement}
                onChange={() => setVendorManagement(!vendorManagement)}
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
                checked={teamManagement}
                onChange={() => setTeamManagement(!teamManagement)}
              />
            </div>
          </div>
        </div>
        {/* <div className="toggleContainer-0-1-177 toggleBar-0-1-171 col-md-3">
          <div className="textSubText-0-1-183">
            <div className="toggleHeading-0-1-178 undefined">
              <div className="permissionIconTextWrap-0-1-172">
                <div className="textWrapper-0-1-176">
                  <span>
                    <div>Free Study Material</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="medium-0-1-180">
            <div className="ui fitted toggle checkbox undefined ">
              <input
                type="checkbox"
                checked={freeMaterial}
                onChange={(e) => setFreeMaterial(!freeMaterial)}
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
                    <div>Campaign</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="medium-0-1-180">
            <div className="ui fitted toggle checkbox undefined ">
              <input
                type="checkbox"
                checked={campaign}
                onChange={(e) => setCampaign(!campaign)}
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
                    <div>Course</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="medium-0-1-180">
            <div className="ui fitted toggle checkbox undefined ">
              <input
                type="checkbox"
                checked={course}
                onChange={(e) => setCourse(!course)}
              />
            </div>
          </div>
        </div> */}
        {/* <div className="toggleContainer-0-1-177 toggleBar-0-1-171 col-md-3">
                <div className="textSubText-0-1-183">
                  <div className="toggleHeading-0-1-178 undefined">
                    <div className="permissionIconTextWrap-0-1-172">
                      <div className="permissionIconTextWrapIcon-0-1-173">
                        <PiPathDuotone />
                      </div>
                      <div className="textWrapper-0-1-176">
                        <span>
                          <div>Self Service</div>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="medium-0-1-180">
                  <div className="ui fitted toggle checkbox undefined ">
                    <input
                      type="checkbox"
                      checked={selfService}
                      onChange={(e) => setSelfService(!selfService)}
                    />
                  </div>
                </div>
              </div> */}
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
