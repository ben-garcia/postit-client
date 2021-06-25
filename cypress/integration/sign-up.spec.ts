context('Sign Up', () => {
	it('should successfully register a user', () => {
		const email = 'bestemail@email.com';
		const username = 'benben';
		const password = 'password';

		cy.clearDB()
      .visit('/')
      .contains('Sign Up')
      .click();


		cy.get('input[name="email"]')
			.type(email)
			.should('have.value', email);

		cy.get('input[name="username"]')
			.type(username, { force: true })
			.should('have.value', username);

		cy.get('input[name="password"]')
			.type(password)
			.should('have.value', password);

		cy.get('button[type="submit"]')
			.click();
	});

	it('should show error message when username is already taken', () => {
		const user = {
			password: 'benbenben',
			username: 'benben',
		};

		cy.clearDB()
			.signUpUser(user)
      .visit('/')
      .contains('Sign Up')
      .click();

		cy.get('input[name="username"]')
			.type(user.username, { force: true })

		cy.get('div[aria-live="polite"]')
			.should('have.text', 'This username is already taken.');
	});
});
