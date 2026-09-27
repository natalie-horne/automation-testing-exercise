import { faker } from '@faker-js/faker';

export type TestUser = {
  name: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  state: string;
  city: string;
  postcode: string;
  mobile: string;
};

export function createTestUser(): TestUser {
  return {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password({ length: 12 }),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    address: faker.location.streetAddress(),
    state: faker.location.state(),
    city: faker.location.city(),
    postcode: faker.location.zipCode(),
    mobile: faker.phone.number(),
  };
}