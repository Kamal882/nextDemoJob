interface bank {
  iban: string;
  cardNumber: string;
}

interface address {
  address: string;
  city: string;
  country: string,
  state: string,
  postalCode:string
}

export interface user {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  midenName: string;
  email: string;
  gender: string;
  phone: string;
  ssn: string;
  birthDate: string;
  address: address;
  bank: bank;
  weight: number;
  role: string;
}
