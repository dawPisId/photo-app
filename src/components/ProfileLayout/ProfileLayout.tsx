import {
  CompanyLayout,
  FirstHeader,
  Label,
  Section,
  SectionHeader,
  SectionLayout,
} from "./ProfileLayout.styled";

import InputField from "../InputField/InputField";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import React from "react";

interface InputProps {
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

function ProfileLayout({ user }: InputProps) {
  const personal = [
    { name: "Name", value: user.name },
    { name: "Phone", value: user.phone },
    { name: "Username", value: user.username },
    { name: "Website", value: user.website },
    { name: "E-mail", value: user.email },
  ];
  const address = [
    { name: "Street", value: user.address.street },
    { name: "City", value: user.address.city },
    { name: "Sufix", value: user.address.suite },
    { name: "Zipcode", value: user.address.zipcode },
  ];

  const company = [
    { name: "Name", value: user.company.name },
    { name: "Catchphrase", value: user.company.catchPhrase },
    { name: "Bs", value: user.company.bs },
  ];
  return (
    <div>
      <Section>
        <FirstHeader>
          <PermContactCalendarIcon />
          <Label>Personal information</Label>
        </FirstHeader>
        <SectionLayout>
          {personal.map(({ name, value }, index) => (
            <InputField label={name} fillValue={value} key={index} />
          ))}
        </SectionLayout>
        <SectionHeader>
          <PermContactCalendarIcon />
          <Label>Address</Label>
        </SectionHeader>
        <SectionLayout>
          {address.map(({ name, value }, index) => (
            <InputField label={name} fillValue={value} key={index} />
          ))}
        </SectionLayout>
        <SectionHeader>
          <PermContactCalendarIcon />
          <Label>Company</Label>
        </SectionHeader>
        <CompanyLayout>
          {company.map(({ name, value }, index) => (
            <InputField label={name} fillValue={value} key={index} />
          ))}
        </CompanyLayout>
      </Section>
    </div>
  );
}

export default ProfileLayout;
