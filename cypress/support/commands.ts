interface User {
	email?: string;
	username: string;
	password: string;
}

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

Cypress.Commands.add('signUpUser', ({email, username, password}: User) => {
	const query = `
		mutation {
			testSignUp(
				createUserData: {
					email: ${email ?? null} 
					username: "${username}"
					password: "${password}"
				}
			) 
 	 }	
	`;

  cy.request({
    body: { query },
    failOnStatusCode: false,
    method: 'POST',
    url: 'localhost:4000/graphql',
  });
});


