module.exports = {
  login: {
    usp_login: 'Select * from "usp_login"($1)',
  },
  org: {
    usp_organizationsList: 'SELECT * FROM "usp_organizationsList"()',
    usp_addOrganization: 'SELECT * FROM "usp_addOrganization"($1, $2, $3)',
    usp_deleteOrganization: 'SELECT * FROM "usp_deleteOrganization"($1)',
    usp_editOrganization: 'SELECT * FROM "usp_editOrganization"($1, $2, $3, $4)',
  },
  communities: {
    usp_communitiesList: 'SELECT * FROM "usp_communitiesList"()',
  },
  supports: {
    usp_supportsList: 'SELECT * FROM "usp_supportsList"()',
  },
  programs: {
    usp_addProgram: 'SELECT * FROM "usp_addProgram"($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17)',
    usp_editProgram: 'SELECT * FROM "usp_editProgram"($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23, $24)',
  },
  categories: {
    usp_categoriesList: 'SELECT * FROM "usp_categoriesList"()',
    usp_addCategory: 'SELECT * FROM "usp_addCategory"($1, $2)',
    usp_deleteCategory: 'SELECT * FROM "usp_deleteCategory"($1)',
    usp_editCategory: 'SELECT * FROM "usp_editCategory"($1, $2, $3)',
  }
}