context('Add Community', () => {
  const user = {
    email: 'test@email.com',
    username: 'test',
    password: 'testpassword',
  };
  const community = {
    name: 'testname',
    isNsfw: false,
    typeOf: 'public',
  };

  beforeEach(() => {
    cy.clearDB().signUpUser(user);
  });

  context('Desktop', () => {
    it('should successfully create a community', () => {
      // create community  modal should be not be visible to the user
      cy.get('section[aria-modal="true"]').should('not.exist');

      cy.visit('/').contains(user.username).click();
      cy.contains(/Create a Community/).click();

      // create community modal should be visible to the user
      cy.get('section[aria-modal="true"]').should('exist');

      cy.get('input[name="name"]')
        .type(community.name)
        .should('have.value', community.name);

      // the first radio input should be checked by default
      cy.get('input[type="radio"]').first().should('be.checked');

      //  the checkbox input should not be checked by default
      cy.get('input[type="checkbox"]').should('not.be.checked');

      cy.get('button[type="submit"]').click();

      // create community modal should be not be visible to the user
      // after a creating a new community
      cy.get('section[aria-modal="true"]').should('not.exist');

      // redirect to the new community
      cy.url().should('eq', `http://localhost:3000/c/${community.name}`);
    });

    it('should show error message when name is already taken', () => {
      cy.createCommunity({ ...community, type: community.typeOf as 'public' })
        .visit('/')
        .contains(user.username)
        .click();
      cy.contains(/Create a Community/).click();

      cy.get('input[name="name"]').type(community.name, { force: true });

      cy.get('div[aria-live="polite"]').should(
        'have.text',
        'This community name is already taken.'
      );
    });
  });

  context('Mobile', () => {
    beforeEach(() => {
      cy.viewport('iphone-x');
    });

    it('should successfully register a user', () => {
      cy.visit('/')
        .get('.hamburger-button')
        .click()
        .get('.mobile-menu__cta')
        .click();

      cy.url().should('eq', 'http://localhost:3000/communities/create');

      cy.get('input[name="name"]')
        .type(community.name)
        .should('have.value', community.name);

      // the first radio input should be checked by default
      cy.get('input[type="radio"]').first().should('be.checked');

      //  the checkbox input should not be checked by default
      cy.get('input[type="checkbox"]').should('not.be.checked');

      cy.get('button[type="submit"]').click();

      // redirect to the new community
      cy.url().should('eq', `http://localhost:3000/c/${community.name}`);
    });

    it('should show error message when community name is already taken', () => {
      cy.createCommunity({ ...community, type: community.typeOf as 'public' })
        .visit('/')
        .get('.hamburger-button')
        .click()
        .get('.mobile-menu__cta')
        .click();

      cy.get('input[name="name"]').type(community.name, { force: true });

      cy.get('div[aria-live="polite"]').should(
        'have.text',
        'This community name is already taken.'
      );
    });
  });
});
