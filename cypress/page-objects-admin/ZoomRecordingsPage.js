/// <reference types="cypress"/>
export class ZoomRecordingsPage {

    select_Zoom_Recordings_Option(){
        cy.get('.menu-open > .treeview-menu > :nth-child(2) > a').click()
    }

}