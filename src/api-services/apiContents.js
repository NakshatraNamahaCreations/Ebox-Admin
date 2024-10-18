const apiUrl = {
  // BASEURL: "http://192.168.1.103:9000/api",
  IMAGEURL: "http://54.153.132.86:9000/",
  BASEURL: "http://54.153.132.86:9000/",
  // IMAGEURL: "http://localhost:9000/",
  // LOCALURL: "https://eventbox.nakshatranamahacreations.in/api",

  //PRODUCT
  ADD_PRODUCT: "/product/addproduct",
  GET_PRODUCT_BY_VENDOR: "/product/getvendorproduct/",

  // VENDOR
  GET_ALL_VENDOR: "/vendor/getallvendor",

  // TEAM
  CREATE_TEAM: "/team/create-team",
  GET_ALL_TEAM: "/team/get-all-member",
  BLOCK_USER: "/team/block-user",
  UNBLOCK_USER: "/team/unblock-user",
  GET_USER: "/team/get-user",
  UPDATE_USER: "/team/update-user",

  // ORDER
  GET_ALL_ORDER: "/order/get-all-order",

  // SERVICE
  ADD_SERVICE: "/service/add-service",
  ADD_SERVICE_VIA_EXCEL: "/service/add-service-via-excel",
  GET_ALL_SERVICE: "/service/get-all-service",
  DELETE_SERVICE: "/service/delete-service",
  ADD_REQUIREMENTS: "/service/add-requirements",

  // SUB-SERVICE
  ADD_SUB_SERVICE: "/sub-service/add-sub-service",
  GET_ALL_SUB_SERVICE: "/sub-service/get-all-sub-service",
  DELETE_SUB_SERVICE: "/sub-service/delete-sub-service",
};
export { apiUrl };
