const apiUrl = {
  // IMAGEURL: "http://3.95.141.179:9000/",
  // BASEURL: "http://3.95.141.179:9000/api",

  IMAGEURL: "http://localhost:9000/",
  BASEURL: "http://localhost:9000/api",

  // LOCALURL: "https://eventbox.nakshatranamahacreations.in/api",

  //PRODUCT
  ADD_PRODUCT: "/product/addproduct",
  ALL_PRODUCT: "/product/getallproduct",
  GET_RENTAL_PRODUCTS: "/product/get-rental-product-for-admin",
  GET_SELLING_PRODUCTS: "/product/get-all-sell-product-for-admin",
  GET_PRODUCT_BY_VENDOR: "/product/getvendorproduct/",
  PRODUCT_APPROVE: "/product/product-approved/",
  PRODUCT_DISAPPROVE: "/product/product-disapproved/",

  // VENDOR
  // GET_ALL_VENDOR: "/vendor/getallvendor",
  GET_ALL_VENDOR: "/vendor/get-all-vendors-for-admin",
  VENDOR_APPROVE: "/vendor/vendor-approve/",
  GET_VENDOR_PROFILE: "/vendor/getprofile/",
  VENDOR_DISAPPROVE: "/vendor/vendor-disapprove/",
  ADD_COMMISSION: "/vendor/add-commissions/",

  // USER
  GET_PARTICULAR_USER: "/user/get-user-profile/",
  GET_USERS_LIST: "/user/get-all-user",

  // TEAM
  CREATE_TEAM: "/team/create-team",
  TEAM_USER_LOGIN: "/team/team-user-login",
  GET_ALL_TEAM: "/team/get-all-member",
  BLOCK_USER: "/team/block-user",
  UNBLOCK_USER: "/team/unblock-user",
  GET_TEAM: "/team/get-user",
  UPDATE_USER: "/team/update-user",
  DELETE_TEAM_USER: "/team/delete-team-user/",

  // ORDER
  GET_ALL_ORDER: "/user-order/getallorder",

  // SERVICE
  ADD_SERVICE: "/service/add-service",
  ADD_SERVICE_VIA_EXCEL: "/service/add-service-via-excel",
  GET_ALL_SERVICE: "/service/get-all-service",
  DELETE_SERVICE: "/service/delete-service",
  ADD_REQUIREMENTS: "/service/add-requirements",
  UPDATE_SERVICE_STATUS: "/service/update-status/",

  // SUB-SERVICE
  ADD_SUB_SERVICE: "/sub-service/add-sub-service",
  GET_ALL_SUB_SERVICE: "/sub-service/get-all-sub-service",
  DELETE_SUB_SERVICE: "/sub-service/delete-sub-service",

  //STATE
  ADD_STATE: "/state/add-state",
  GET_STATE: "/state/get-all-states",
  GET_ACTIVE_STATE: "/state/get-active-states",
  GET_STATE_BY_ID: "/state/get-states-by-id/",
  DELETE_STATE: "/state/delete-state/",
  // EDIT_STATE: "/state/edit-state/",
  ACTIVE_STATUS: "/state/active-status/",
  INACTIVE_STATUS: "/state/inactive-status/",

  //CITY
  ADD_CITY: "/city/add-city",
  GET_CITY: "/city/get-all-cities",
  GET_ACTIVE_CITIES: "/city/get-active-cities",
  GET_CITY_BY_ID: "/city/get-city-by-id/",
  DELETE_CITY: "/city/delete-city/",
  // EDIT_CITY: "/city/edit-city/",
  CITY_ACTIVE_STATUS: "/city/city-active-status/",
  CITY_INACTIVE_STATUS: "/city/city-inactive-status/",

  //ADDRESS
  ADD_ADDRESS: "/address/add-address",
  GET_ADDRESS: "/address/get-all-addresses",
  GET_ACTIVE_ADDRESSESS: "/address/get-active-addresses",
  GET_ADDRESS_BY_ID: "/address/get-address-by-id/",
  DELETE_ADDRESS: "/address/delete-address/",
  // EDIT_CITY: "/address/edit-address/",
  ADDRESS_ACTIVE_STATUS: "/address/address-active-status/",
  ADDRESS_INACTIVE_STATUS: "/address/address-inactive-status/",

  // BANNER
  ADD_BANNERS: "/banners/createbanner",
  GET_ALL_BANNERS: "/banners/get-all-banners",
  DELETE_BANNER: "/banners/deletebanner/",

  // FAQ AND T&C
  ADD_FAQ: "/faq/add-faq",
  GET_ALL_FAQ: "/faq/get-all-faq",
  UPDATE_FAQ: "/faq/update-faq/",
  DELETE_FAQ: "/faq/delete-faq/",
  SAVE_TNC: "/tnc/save-tnc",
  GET_ALL_TNC: "/tnc/get-all-tnc",
  // DELETE_TNC: "/tnc/delete-tnc/",

  //YOUTUBE LINK
  ADD_YOUTUBE_LINK: "/youtube/add-youtube-link",
  GET_YOUTUBE_LINK: "/youtube/get-all-youtube-links",
  GET_ACTIVE_YOUTUBE_LINKS: "/youtube/get-active-youtube-links",
  GET_YOUTUBE_LINK_BY_ID: "/youtube/get-youtube-link-by-id/",
  DELETE_YOUTUBE_LINK: "/youtube/delete-youtube-link/",
  // EDIT_CITY: "/youtube/edit-youtube-link/",
  YOUTUBE_LINK_ACTIVE_STATUS: "/youtube/youtube-link-active-status/",
  YOUTUBE_LINK_INACTIVE_STATUS: "/youtube/youtube-link-inactive-status/",

  // TICKET
  GET_All_TICKET: "/ticket/get-all-tickets",
  CHANGE_TICKET_STATUS: "/ticket/change-status/",

  // PAYOUTS
  ADD_PAYOUTS: "/payouts/add-payout",
  CONFIRM_PAYOUT: "/payouts/confirm-payout-processed/",
  GET_PAYOUTS_BY_ID: "/payouts/get-payouts-by-id/",
  GET_ALL_PAYOUTS: "/payouts/get-all-payouts",
};
export { apiUrl };
