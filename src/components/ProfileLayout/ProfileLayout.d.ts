export interface ProfileLayoutProps {
  user: {
    name: string;
    phone: string;
    username: string;
    website: string;
    email: string;
    address: {
      street: string;
      city: string;
      suite: string;
      zipcode: string;
    };
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  };
}
