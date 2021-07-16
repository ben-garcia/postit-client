interface Community {
  name: string;
  isNsfw: boolean;
  type: 'private' | 'public' | 'restricted';
}

interface User {
  email?: string;
  username: string;
  password: string;
}

// remove all records from the database
// used before tests
Cypress.Commands.add('clearDB', () => {
  const query = `
			mutation {
				clearDB 
			}
	`;

  cy.request({
    body: { query },
    failOnStatusCode: false,
    method: 'POST',
    url: 'localhost:4000/graphql',
  });
});

// add a community to the db for testing
Cypress.Commands.add('createCommunity', ({ name, isNsfw, type }: Community) => {
  const query = `
		mutation {
			createCommunity(
				createCommunityData: {
					name: "${name}"
					isNsfw: ${isNsfw}
					type: "${type}"
				}
			) {
				created
			}
 	 }	
	`;

  cy.request({
    body: { query },
    failOnStatusCode: false,
    method: 'POST',
    url: 'localhost:4000/graphql',
  });
});

// add a user to the db for testing
Cypress.Commands.add('signUpUser', ({ email, username, password }: User) => {
  let query: string;

  if (email) {
    // include the email field
    query = `
			mutation {
				testSignUp(
					createUserData: {
						email: "${email}"
						username: "${username}"
						password: "${password}"
					}
				) 
		 }	
	`;
  } else {
    // exclude the email field
    query = `
			mutation {
				testSignUp(
					createUserData: {
						username: "${username}"
						password: "${password}"
					}
				) 
			}	
	  `;
  }

  cy.request({
    body: { query },
    failOnStatusCode: false,
    method: 'POST',
    url: 'localhost:4000/graphql',
  });

  // add to local storage
  localStorage.setItem('user', JSON.stringify({ username }));
});
