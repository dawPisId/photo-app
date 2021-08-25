import {
  CompanyLayout,
  FirstHeader,
  Label,
  Section,
  SectionHeader,
  SectionLayout
} from "./ProfileLayout.styled";

import InputField from "../InputField/InputField";
import PermContactCalendarIcon from "@material-ui/icons/PermContactCalendar";
import React from "react";

function ProfileLayout({ personalInfo, addressInfo, companyInfo }) {
  let personal = [
    { name: "Name", value: personalInfo.name },
    { name: "Phone", value: personalInfo.phone },
    { name: "Username", value: personalInfo.username },
    { name: "Website", value: personalInfo.website },
    { name: "E-mail", value: personalInfo.email },
  ];
  let address = [
    { name: "Street", value: addressInfo.street },
    { name: "City", value: addressInfo.city },
    { name: "Sufix", value: addressInfo.suite },
    { name: "Zipcode", value: addressInfo.zipcode },
  ];

  let company = [
    { name: "Name", value: companyInfo.name },
    { name: "Catchphrase", value: companyInfo.catchPhrase },
    { name: "Bs", value: companyInfo.bs },
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
