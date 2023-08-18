type Address = {
  city: string;
  street: string;
  suite: string;
  zipcode: string;
};

type Company = {
  bs: string;
  catchPhrase: string;
  name: string;
};

export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}
