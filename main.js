/*
 * CREATED BY: MOHMD ALI
 */

// network
const loadbalancer = require("./network/loadbalancer");
const servers = require("./network/servers");


console.log("----------------------------- App Starts --------------------------------------------");

loadbalancer.up();
servers.up();


