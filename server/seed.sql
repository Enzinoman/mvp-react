DELETE FROM boardMembers *;
DELETE FROM proposals *;
DELETE FROM projects *;

INSERT INTO boardMembers (firstname, lastname, phonenumber, officehours, boardposition) VALUES ('Felicia', 'Goldman', '719-271-xxxx', '9 am-1pm', 'President'),
('Patrick', 'Weinmann', '719-271-xxxx', '1pm-5pm', 'President');
INSERT INTO proposals (first_name, last_name, city, state_name, email, phone_number, community_name, proposal, reviewed, response, project_name, board_member) VALUES ('Alec', 'Baldwin', 'Columbus', 'Georgia', 'baldwin101@aol.com', '706-304-xxxx', 'Lanslide', 'Sidewalk improvement', 'No', '', '', ''),
('Mark', 'Merril', 'Colorado Springs', 'Colorado', 'MarkyMe@snailMail.com', '719-324-xxxx', 'Emeril', 'Weed barrier replacement in utility areas', 'Yes', 'Approved for action', 'WeedSmoker', 'Alec');
INSERT INTO projects (projectname, details, startdate, enddate, supervisor, communityname, locationaddress, projectstatus) VALUES ('WeedSmoker', 'Weed barrier to be replaced in rock bed where fire hydrant and street corner lamp-post exist', '2 December 2022', '5 December 2022', 'Baldwin', 'Emeril', '4561 Stanley Drive', 'Complete'),
('Bathseeker', 'Install community pool center in public park between Glen filing 5 & 6', '18 April 2023', '27 May 2023', 'Goldman', 'Glen Filing 5', 'Ward Park', 'survey is currently underway...physical work on project anticipate to begin 18 April 2023');

