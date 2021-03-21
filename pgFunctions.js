module.exports = {
  login: {
    usp_login: 'Select * from "usp_login"($1)',
  },
  org: {
    usp_organizationsList: 'SELECT * FROM "usp_organizationsList"($1)',
    usp_addOrganization: 'SELECT * FROM "usp_addOrganization"($1, $2, $3)',
    usp_deleteOrganization: 'SELECT * FROM "usp_deleteOrganization"($1)',
    usp_editOrganization: 'SELECT * FROM "usp_editOrganization"($1, $2, $3, $4)',
  },
  communities: {
    usp_communitiesList: 'SELECT * FROM "usp_communitiesList"($1)',
    usp_communitiesList_eng: 'SELECT * FROM "usp_communitiesList_eng"()',
    usp_programListForFilter_eng: 'SELECT * FROM "usp_programListForFilter_eng"($1)',
    usp_programListForFilter_arm: 'SELECT * FROM "usp_programListForFilter_arm"($1)',
    usp_filter_arm: 'SELECT * FROM "usp_filter_arm"($1, $2, $3)',  
    usp_filter_eng: 'SELECT * FROM "usp_filter_eng"($1, $2, $3, $4)', 
    usp_statusList: 'SELECT * FROM "usp_statusList"($1)',
  },
  supports: {
    usp_supportsList: 'SELECT * FROM "usp_supportsList"($1)',    
    usp_supportTypeList: 'SELECT * FROM "usp_supportTypeList"()',
    usp_supportsListOnly: 'SELECT * FROM "usp_supportsListOnly"($1, $2)',
    usp_editSupport: 'SELECT * FROM "usp_editSupport"($1, $2, $3, $4, $5)',
    usp_deleteSupport: 'SELECT * FROM "usp_deleteSupport"($1)',
    usp_addSupport: 'SELECT * FROM "usp_addSupport"($1, $2, $3)'
  },
  programs: {
    usp_getProgramsForAdmin: 'SELECT * FROM "usp_getProgramsForAdmin"()',
    usp_addProgram: 'SELECT * FROM "usp_addProgram"($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16)',
    usp_programList: 'SELECT * FROM "usp_programList"($1, $2, $3, $4, $5)',
    usp_editProgram: 'SELECT * FROM "usp_editProgram"($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)',
    usp_deleteProgram: 'SELECT * FROM "usp_deleteProgram"($1)',
  },
  categories: {
    usp_categoriesList: 'SELECT * FROM "usp_categoriesList"()',
    usp_addCategory: 'SELECT * FROM "usp_addCategory"($1, $2)',
    usp_deleteCategory: 'SELECT * FROM "usp_deleteCategory"($1)',
    usp_editCategory: 'SELECT * FROM "usp_editCategory"($1, $2, $3)',
  },
  settings: {
    usp_userInfoList: 'SELECT * FROM "usp_userInfoList"()',
    usp_addUser: 'SELECT * FROM "usp_addUser"($1, $2, $3)',
    usp_changePassword: 'SELECT * FROM "usp_changePassword"($1, $2)',
    usp_deleteUser: 'SELECT * FROM "usp_deleteUser"($1)',
    usp_editUserInfo: 'SELECT * FROM "usp_editUserInfo"($1, $2, $3)',
    // usp_activateUser: 'SELECT * FROM "usp_activateUser"($1)',
    usp_addPassword: 'SELECT * FROM "usp_addPassword"($1, $2)',
    usp_makeActive: 'SELECT * FROM "usp_userInfoList"($1)',
  },
}