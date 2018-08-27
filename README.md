# Eat Da Burger

This is a "Burger" eating Application that utilizes Nodes.js/Express/MySQL/Handlebars/Materialize

# Description

Users will find a text enter toward the bottom of the page where they can type in the name of any burger they want. Once the user clicks Add Burger, this data is loaded to a MySQL database using JawsDB add-on for Heroku. The information will then be populated on the screen as a line item which will show their database id, name and a button that says devour me. Once the user clicks Devour Me! the database will update the devoured column for the line item from false to true. This will cause the item to shift onscreen from the Burgers section to the Burgers devoured seciotn and they will no longer have their button attached to them.

# Installation 

You also have the option to run this application locally:

    Clone the repository 
    Install dependencies
    Update connection.js file: Update User & Password
    Start your database server
    Run the application

Access the application by going to your web browser and pasting the following link: 

    http:// http://localhost:8080/