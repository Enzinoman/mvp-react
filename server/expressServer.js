const express = require('express');
const { Client } = require('pg');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 8007;

const connectionString = 'postgresql://postgres:docker@127.0.0.1:5432/template1';
const client = new Client({
    connectionString: connectionString,
});
client.connect();

/* const connectionString = 'postgresql://postgres:docker@127.0.0.1:5432/template1';
const client = new Client({
    connectionString: connectionString,
});
client.connect(); */




app.get('/', async (req,res)=>{
  const {rows} = await client.query('SELECT * FROM projects')
    // console.log(res.rows);
    // console.log("I'm being accessed");
    res.send(rows);
});



app.get('/projects', (req, res) => {
  client.query('SELECT * FROM projects')
    .then(result => {
        //console.log(result.rows[0])
        res.send(result.rows);
    })
    .catch(e => console.error(e.stack))
}); 


app.get('/proposals', (req, res) => {
  client.query('SELECT * FROM proposals')
    .then(result => {
        //console.log(result.rows[0])
        res.send(result.rows);
    })
    .catch(e => console.error(e.stack))
}); 



app.patch("/proposals/:id", (req, res) => {
    console.log(req.body);
    let customer = req.body;
   // let setStr = "";
    let elements = [];
    for (element in customer) {
      console.log(element, customer[element]);
      elements.push(element + "='" + customer[element] + "'");
    }
    console.log(elements.toString());
    // Example Syntax: http PATCH localhost:3000/customers/2 customer_name='Joe'
    client.query(`UPDATE customers SET ${elements.toString()} WHERE id=${req.params.id} `)
      .then((result) => {
        res.send(req.body);
      });
  });




app.post('/proposals', (req, res) => {
    let proposal = req.body;
    // console.log(req.body);
    let firstName = proposal.first_name;
    let lastName = proposal.last_name;
    let city = proposal.city;
    let stateName = proposal.state_name;
    let email = proposal.email;
    let phoneNumber = proposal.phone_number;
    let communityName = proposal.community_name;
    let proposed = proposal.proposal;
    let reviewed = proposal.reviewed;
    let response = proposal.response;
    let projectName = proposal.project_name;
    let boardMember = proposal.board_member;
    console.log(proposal);
    client.query("INSERT INTO proposals (first_name, last_Name, city, state_name, email, phone_number, community_name, proposal, reviewed, response, project_name, board_member) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)", [firstName, lastName, city, stateName, email, phoneNumber, communityName, proposed, reviewed, response, projectName, boardMember])
    .then(result => {
        
        res.status(200).send(result.rows);
    })
});


// app.post('/boardMembers', (req, res) => {
//     let customers = req.body;
//     let id = customers.id;
//     let customerName = customers.customer_name;
//     let phone = customers.customer_phone_number;
//     console.log(customers);
//     client.query(`INSERT INTO boardMembers (id, customer_name, customer_phone_number)
//     VALUES (${id}, '${customerName}', '${phone}') RETURNING *`)
//     .then(result =>{
        
//         res.status(200).send(result.rows);
//     })
// });


// app.post('/technicians', (req, res) => {
//     let technicians = req.body;
//     let employeeId = technicians.employee_id;
//     let aoe = technicians.aoe;
//     let schedule = technicians.full_time;
//     let techName = technicians.tech_name;
//     console.log(technicians);
//     client.query(`INSERT INTO technicians (id, emloyee_id, aoe, full_time, tech_name)
//     VALUES (${id}, '${employeeId}', '${aoe}', ${schedule}, '${techName}') RETURNING *`)
//     .then(result =>{
        
//         res.status(200).send(result.rows);
//     })
// });




//   app.patch("/vehicles/:id", (req, res) => {
//     console.log(req.body);
//     let vehicle = req.body;
//    // let setStr = "";
//     let elements = [];
//     for (element in vehicle) {
//       console.log(element, vehicle[element]);
//       elements.push(element + "='" + vehicle[element] + "'");
//     }
//     console.log(elements.toString());
//     // Example Syntax: http PATCH localhost:3000/vehicles/2 model='Murano'
  
//     client.query(`UPDATE vehicles SET ${elements.toString()} WHERE id=${req.params.id} `)
//       .then((result) => {
//         res.send(req.body);
//       });
//   });


//   app.patch("/technicians/:id", (req, res) => {
//     console.log(req.body);
//     let technician = req.body;
//     //let setStr = "";
//     let elements = [];
//     for (element in technician) {
//       console.log(element, technician[element]);
//       elements.push(element + "='" + technician[element] + "'");
//     }
//     console.log(elements.toString());
//     // Example Syntax: http PATCH localhost:3000/technicians/2 aoe='Tire & Services'
  
//     client.query(`UPDATE technicians SET ${elements.toString()} WHERE id=${req.params.id} `)
//       .then((result) => {
//         res.send(req.body);
//       });
//   });



// app.delete("/customers/:id", (req, res) => {
//   client.query(`DELETE FROM customers WHERE id = ${req.params.id}`)
    
//       .then((result) => {
//         res.send(result.rows);
//       })
//       .catch((err) => {
//         res.send(err);
//         console.error(err);
//       });
//   });


//   app.delete("/vehicles/:id", (req, res) => {
//     client.query(`DELETE FROM vehicles WHERE id = ${req.params.id}`)
      
//       .then((result) => {
//         res.send(result.rows);
//       })
//       .catch((err) => {
//         res.send(err);
//         console.error(err);
//       });
//   });


//   app.delete("/technicians/:id", (req, res) => {
//     client.query(`DELETE FROM technicians WHERE id = ${req.params.id}`)
      
//       .then((result) => {
//         res.send(result.rows);
//       })
//       .catch((err) => {
//         res.send(err);
//         console.error(err);
//       });
//   });



app.use((req, res, next) => {
    console.log(req.path.split("/"));
    res.status(404).send('Not Found');
  }); 


app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
});