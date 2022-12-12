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
    first_name text,
    last_name text,
    city text,
    state_name text,
    email text,
    phone_number text,
    community_name text,
    proposal text,
    reviewed text,
    response text,
    project_name text,
    board_member text
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



