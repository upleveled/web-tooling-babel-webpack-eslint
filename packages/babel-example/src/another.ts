type Address = {
  id: string;
  streetNumber: number;
};

type User = {
  id: string;
  name: string;
  address: Address;
};

const user: User = {
  id: '1',
  name: 'krozzle',
  address: {
    id: '50',
    streetNumber: 456,
  },
};
