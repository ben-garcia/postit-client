context('Sign Up', () => {
  context('Desktop', () => {
    it('should successfully register a user', () => {
      const email = 'bestemail@email.com';
      const username = 'benben';
      const password = 'password';

      // sign up modal should be not be visible to the user
      cy.get('section[aria-modal="true"]').should('not.exist');

      cy.clearDB().visit('/').contains('Sign Up').click();

      cy.intercept('POST', '/graphql', req => {
        if (req.body.operationName === 'SignUp') {
          req.alias = 'signUpMutation';
        }
      });

      cy.getCookies().should('be.empty');

      // sign up modal should be visible to the user
      cy.get('section[aria-modal="true"]').should('exist');

      cy.get('input[name="email"]').type(email).should('have.value', email);

      cy.get('input[name="username"]')
        .type(username, { force: true })
        .should('have.value', username);

      cy.get('input[name="password"]')
        .type(password)
        .should('have.value', password);

      cy.get('button[type="submit"]').click();

      cy.wait('@signUpMutation').should(() => {
        // should contain the username
        expect(localStorage.getItem('user')).to.matches(/(?=.*username)/);
      });

      cy.getCookie('session-access-token').should('exist');
      cy.getCookie('session-refresh-token').should('exist');

      // sign up modal should be not be visible to the user
      cy.get('section[aria-modal="true"]').should('not.exist');

      // check for username after sign up
      cy.get('.user-menu__username').should('have.text', username);
    });

    it('should show error message when username is already taken', () => {
      const user = {
        password: 'benbenben',
        username: 'benben',
      };

      cy.clearDB().signUpUser(user).visit('/').contains('Sign Up').click();

      cy.get('input[name="username"]').type(user.username, { force: true });

      cy.get('div[aria-live="polite"]').should(
        'have.text',
        'This username is already taken.'
      );
    });
  });

  context('Mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-x');
    });

    it('should successfully register a user', () => {
      const email = 'bestemail@email.com';
      const username = 'benben';
      const password = 'password';

      cy.clearDB()
        .visit('/')
        .get('.hamburger-button')
        .click()
        .get('.mobile-menu__cta')
        .click();

      cy.intercept('POST', '/graphql', req => {
        if (req.body.operationName === 'SignUp') {
          req.alias = 'signUpMutation';
        }
      });

      cy.url().should('eq', 'http://localhost:3000/register');

      cy.getCookies().should('be.empty');

      cy.get('input[name="email"]').type(email).should('have.value', email);

      cy.get('input[name="username"]')
        .type(username, { force: true })
        .should('have.value', username);

      cy.get('input[name="password"]')
        .type(password)
        .should('have.value', password);

      cy.get('button[type="submit"]').click();

      cy.wait('@signUpMutation').should(() => {
        // should contain the username
        expect(localStorage.getItem('user')).to.matches(/(?=.*username)/);
      });

      cy.getCookie('session-access-token').should('exist');
      cy.getCookie('session-refresh-token').should('exist');

      cy.url().should('eq', 'http://localhost:3000/');

      cy.get('.hamburger-button').click();

      // check for the username
      cy.get('.mobile-menu__username').should('have.text', username);
    });

    it('should show error message when username is already taken', () => {
      const user = {
        password: 'benbenben',
        username: 'benben',
      };

      cy.clearDB()
        .signUpUser(user)
        .visit('/')
        .get('.hamburger-button')
        .click()
        .get('.mobile-menu__cta')
        .click();

      cy.get('input[name="username"]').type(user.username, { force: true });

      cy.get('div[aria-live="polite"]').should(
        'have.text',
        'This username is already taken.'
      );
    });
  });
});
