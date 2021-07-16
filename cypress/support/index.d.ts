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

declare namespace Cypress {
  interface Chainable {
    /**
     * Remove all records in each table.
     *
     * NOTE: used in e2e testing.
     */
    clearDB(): Chainable<Element>;
    /**
     * Add a community to the db.
     *
     * NOTE: used in e2e testing.
     */
    createCommunity(community: Community): Chainable<Element>;

    /**
     * Add a user to the db.
     *
     * NOTE: used in e2e testing.
     */
    signUpUser(user: User): Chainable<Element>;
  }
}
