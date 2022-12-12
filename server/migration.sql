DROP TABLE IF EXISTS boardMembers;
DROP TABLE IF EXISTS proposals;
DROP TABLE IF EXISTS projects;



CREATE TABLE boardMembers(
    id serial,
    firstname text,
    lastname text,
    phonenumber text,
    officehours text,
    boardposition text
     
);

CREATE TABLE proposals(
    id serial,
    firstname text,
    lastname text,
    city text,
    statename text,
    email text,
    phonenumber text,
    communityname text,
    proposal text,
    reviewed boolean,
    response text,
    projectname text,
    boardmember text
    );



CREATE TABLE projects(
    id serial,
    projectname text,
    details text,
    startdate date,
    enddate date,
    supervisor text,
    communityname text,
    locationaddress text,
    projectstatus text
      
)



