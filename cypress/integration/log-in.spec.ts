context('Log In', () => {
  context('Desktop', () => {
    it('should successfully log in', () => {
      const username = 'username';
      const password = 'password';

      // log in modal should be not be visible to the user
      cy.get('section[aria-modal="true"]').should('not.exist');

      cy.clearDB()
        .signUpUser({ username, password })
        .visit('/')
        .contains('Log In')
        .click();

      cy.clearCookies();

      cy.intercept('POST', '/graphql', req => {
        if (req.body.operationName === 'LogIn') {
          req.alias = 'logInMutation';
        }
      });

      // log in modal should be visible to the user
      cy.get('section[aria-modal="true"]').should('exist');

      cy.get('input[name="username"]')
        .type(username, { force: true })
        .should('have.value', username);

      cy.get('input[name="password"]')
        .type(password)
        .should('have.value', password);

      cy.get('button[type="submit"]').click();

      cy.wait('@logInMutation').should(() => {
        // should contain the username
        expect(localStorage.getItem('user')).to.matches(/(?=.*username)/);
      });

      cy.getCookie('session-access-token').should('exist');
      cy.getCookie('session-refresh-token').should('exist');

      // log in modal should be not be visible to the user
      cy.get('section[aria-modal="true"]').should('not.exist');

      // check for username after log in
      cy.get('.user-menu__username').should('have.text', username);
    });

    context('errors', () => {
      it('should display erorrs when username does not exist in db', () => {
        const username = 'username';
        const password = 'password';

        cy.clearDB()
          .signUpUser({ username, password })
          .visit('/')
          .contains('Log In')
          .click();

        cy.clearCookies();

        cy.intercept('POST', '/graphql', req => {
          if (req.body.operationName === 'LogIn') {
            req.alias = 'logInMutation';
          }
        });

        // log in modal should be visible to the user
        cy.get('section[aria-modal="true"]').should('exist');

        cy.get('input[name="username"]').type('nosuchuser', { force: true });
        cy.get('input[name="password"]').type(password);
        cy.get('button[type="submit"]').click();

        cy.wait('@logInMutation').should(() => {
          expect(localStorage.getItem('user')).to.equal(null);
        });

        // TODO length of the total number of elements with the text
        // should be equal to 2
        cy.contains('Incorrect username or password');

        cy.getCookie('session-access-token').should('not.exist');
        cy.getCookie('session-refresh-token').should('not.exist');
      });

      it('should display erorrs when password does not exist in db', () => {
        const username = 'username';
        const password = 'password';

        cy.clearDB()
          .signUpUser({ username, password })
          .visit('/')
          .contains('Log In')
          .click();

        cy.clearCookies();

        cy.intercept('POST', '/graphql', req => {
          if (req.body.operationName === 'LogIn') {
            req.alias = 'logInMutation';
          }
        });

        // log in modal should be visible to the user
        cy.get('section[aria-modal="true"]').should('exist');

        cy.get('input[name="username"]').type(username, { force: true });
        cy.get('input[name="password"]').type('notsuchpassword');
        cy.get('button[type="submit"]').click();

        cy.wait('@logInMutation').should(() => {
          expect(localStorage.getItem('user')).to.equal(null);
        });

        // TODO length of the total number of elements with the text
        // should be equal to 2
        cy.contains('Incorrect username or password');

        cy.getCookie('session-access-token').should('not.exist');
        cy.getCookie('session-refresh-token').should('not.exist');
      });
    });
  });

  context('Mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-x');
    });

    it('should successfully log in', () => {
      const username = 'benben';
      const password = 'password';

      cy.clearDB()
        .signUpUser({ username, password })
        .visit('/')
        .get('.hamburger-button')
        .click()
        .get('.mobile-menu__cta')
        .click();

      cy.clearCookies();

      cy.intercept('POST', '/graphql', req => {
        if (req.body.operationName === 'LogIn') {
          req.alias = 'logInMutation';
        }
      });

      cy.get('.signup-page__button').click();

      cy.url().should('eq', 'http://localhost:3000/account/login');

      cy.get('input[name="username"]')
        .type(username, { force: true })
        .should('have.value', username);

      cy.get('input[name="password"]')
        .type(password)
        .should('have.value', password);

      cy.get('button[type="submit"]').click();

      cy.wait('@logInMutation').should(() => {
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
  });
});
