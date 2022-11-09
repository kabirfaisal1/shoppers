/// <reference types="cypress" />

//This function is call when a project is opend or re-opend 
/**
 * @type {Cypress.PluginConfig}
 */

// ..exporting for report
module.exports = (on,config)=>{
    require("cypress-mochawesome-reporter")(on)
};
