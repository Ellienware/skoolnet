"use client";

import { Button } from "@/components/ui/button";
import {
Card,
CardContent,
CardDescription,
CardHeader,
CardTitle,
} from "@/components/ui/card";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FormFooter from "../FormFooter";
import FormHeader from "../FormHeader";
import ImageInput from "@/components/FormInput/ImageInput";
import TextArea from "@/components/FormInput/TextAreaInput";
import TextInput from "@/components/FormInput/TextInput";
import toast from "react-hot-toast";
import { CalendarIcon, Fingerprint, Hash, IdCard, LocateFixed, LockIcon, Mail, MapPin, PhoneIcon, User } from "lucide-react";
import PasswordInput from "@/components/FormInput/PasswordInput";
import FormSelectInput from "@/components/FormInput/FormSelectInput";
import PhoneInput from "@/components/FormInput/PhoneInput";


export type SelectOptionProps = {
label: string;
value: string;
};
type ParentFormProps = {
editingId?: string | undefined;
initialData?: any | undefined | null;
};
export type ParentProps={
name:string,
email:string,
password:string,
imageUrl:string
}
export default function ParentForm({
editingId,
initialData,
}: ParentFormProps) {
const parents = [
{
label: 'Nonhlanhla Dlalisa',
value: '8908255776087'
},
{
label: 'Jabulani Nkosi',
value: '8206285886086'
},
]
const classes = [
{
label: 'S1',
value: '8908255776087'
},
{
label: 'S2',
value: '8206285886086'
},
]
const streams = [
{
label: 'S1A',
value: '8908255776087'
},
{
label: 'S1B',
value: '8908255776087'
},
{
label: 'S2A',
value: '8206285886086'
},
{
label: 'S2B',
value: '8206285886086'
},
]
const gender = [
{
label: 'MALE',
value: 'MALE'
},
{
label: 'FEMALE',
value: 'FEMALE'
},
]
const countries = [
{ label: "Afghanistan", value: "AF" },
{ label: "Albania", value: "AL" },
{ label: "Algeria", value: "DZ" },
{ label: "Andorra", value: "AD" },
{ label: "Angola", value: "AO" },
{ label: "Antigua and Barbuda", value: "AG" },
{ label: "Argentina", value: "AR" },
{ label: "Armenia", value: "AM" },
{ label: "Australia", value: "AU" },
{ label: "Austria", value: "AT" },
{ label: "Azerbaijan", value: "AZ" },
{ label: "Bahamas", value: "BS" },
{ label: "Bahrain", value: "BH" },
{ label: "Bangladesh", value: "BD" },
{ label: "Barbados", value: "BB" },
{ label: "Belarus", value: "BY" },
{ label: "Belgium", value: "BE" },
{ label: "Belize", value: "BZ" },
{ label: "Benin", value: "BJ" },
{ label: "Bhutan", value: "BT" },
{ label: "Bolivia", value: "BO" },
{ label: "Bosnia and Herzegovina", value: "BA" },
{ label: "Botswana", value: "BW" },
{ label: "Brazil", value: "BR" },
{ label: "Brunei", value: "BN" },
{ label: "Bulgaria", value: "BG" },
{ label: "Burkina Faso", value: "BF" },
{ label: "Burundi", value: "BI" },
{ label: "Cabo Verde", value: "CV" },
{ label: "Cambodia", value: "KH" },
{ label: "Cameroon", value: "CM" },
{ label: "Canada", value: "CA" },
{ label: "Central African Republic", value: "CF" },
{ label: "Chad", value: "TD" },
{ label: "Chile", value: "CL" },
{ label: "China", value: "CN" },
{ label: "Colombia", value: "CO" },
{ label: "Comoros", value: "KM" },
{ label: "Congo (Congo-Brazzaville)", value: "CG" },
{ label: "Costa Rica", value: "CR" },
{ label: "Croatia", value: "HR" },
{ label: "Cuba", value: "CU" },
{ label: "Cyprus", value: "CY" },
{ label: "Czechia", value: "CZ" },
{ label: "Democratic Republic of the Congo", value: "CD" },
{ label: "Denmark", value: "DK" },
{ label: "Djibouti", value: "DJ" },
{ label: "Dominica", value: "DM" },
{ label: "Dominican Republic", value: "DO" },
{ label: "Ecuador", value: "EC" },
{ label: "Egypt", value: "EG" },
{ label: "El Salvador", value: "SV" },
{ label: "Equatorial Guinea", value: "GQ" },
{ label: "Eritrea", value: "ER" },
{ label: "Estonia", value: "EE" },
{ label: "Eswatini", value: "SZ" },
{ label: "Ethiopia", value: "ET" },
{ label: "Fiji", value: "FJ" },
{ label: "Finland", value: "FI" },
{ label: "France", value: "FR" },
{ label: "Gabon", value: "GA" },
{ label: "Gambia", value: "GM" },
{ label: "Georgia", value: "GE" },
{ label: "Germany", value: "DE" },
{ label: "Ghana", value: "GH" },
{ label: "Greece", value: "GR" },
{ label: "Grenada", value: "GD" },
{ label: "Guatemala", value: "GT" },
{ label: "Guinea", value: "GN" },
{ label: "Guinea-Bissau", value: "GW" },
{ label: "Guyana", value: "GY" },
{ label: "Haiti", value: "HT" },
{ label: "Honduras", value: "HN" },
{ label: "Hungary", value: "HU" },
{ label: "Iceland", value: "IS" },
{ label: "India", value: "IN" },
{ label: "Indonesia", value: "ID" },
{ label: "Iran", value: "IR" },
{ label: "Iraq", value: "IQ" },
{ label: "Ireland", value: "IE" },
{ label: "Israel", value: "IL" },
{ label: "Italy", value: "IT" },
{ label: "Jamaica", value: "JM" },
{ label: "Japan", value: "JP" },
{ label: "Jordan", value: "JO" },
{ label: "Kazakhstan", value: "KZ" },
{ label: "Kenya", value: "KE" },
{ label: "Kiribati", value: "KI" },
{ label: "Kuwait", value: "KW" },
{ label: "Kyrgyzstan", value: "KG" },
{ label: "Laos", value: "LA" },
{ label: "Latvia", value: "LV" },
{ label: "Lebanon", value: "LB" },
{ label: "Lesotho", value: "LS" },
{ label: "Liberia", value: "LR" },
{ label: "Libya", value: "LY" },
{ label: "Liechtenstein", value: "LI" },
{ label: "Lithuania", value: "LT" },
{ label: "Luxembourg", value: "LU" },
{ label: "Madagascar", value: "MG" },
{ label: "Malawi", value: "MW" },
{ label: "Malaysia", value: "MY" },
{ label: "Maldives", value: "MV" },
{ label: "Mali", value: "ML" },
{ label: "Malta", value: "MT" },
{ label: "Marshall Islands", value: "MH" },
{ label: "Mauritania", value: "MR" },
{ label: "Mauritius", value: "MU" },
{ label: "Mexico", value: "MX" },
{ label: "Micronesia", value: "FM" },
{ label: "Moldova", value: "MD" },
{ label: "Monaco", value: "MC" },
{ label: "Mongolia", value: "MN" },
{ label: "Montenegro", value: "ME" },
{ label: "Morocco", value: "MA" },
{ label: "Mozambique", value: "MZ" },
{ label: "Myanmar (Burma)", value: "MM" },
{ label: "Namibia", value: "NA" },
{ label: "Nauru", value: "NR" },
{ label: "Nepal", value: "NP" },
{ label: "Netherlands", value: "NL" },
{ label: "New Zealand", value: "NZ" },
{ label: "Nicaragua", value: "NI" },
{ label: "Niger", value: "NE" },
{ label: "Nigeria", value: "NG" },
{ label: "North Korea", value: "KP" },
{ label: "North Macedonia", value: "MK" },
{ label: "Norway", value: "NO" },
{ label: "Oman", value: "OM" },
{ label: "Pakistan", value: "PK" },
{ label: "Palau", value: "PW" },
{ label: "Palestine State", value: "PS" },
{ label: "Panama", value: "PA" },
{ label: "Papua New Guinea", value: "PG" },
{ label: "Paraguay", value: "PY" },
{ label: "Peru", value: "PE" },
{ label: "Philippines", value: "PH" },
{ label: "Poland", value: "PL" },
{ label: "Portugal", value: "PT" },
{ label: "Qatar", value: "QA" },
{ label: "Romania", value: "RO" },
{ label: "Russia", value: "RU" },
{ label: "Rwanda", value: "RW" },
{ label: "Saint Kitts and Nevis", value: "KN" },
{ label: "Saint Lucia", value: "LC" },
{ label: "Saint Vincent and the Grenadines", value: "VC" },
{ label: "Samoa", value: "WS" },
{ label: "San Marino", value: "SM" },
{ label: "Sao Tome and Principe", value: "ST" },
{ label: "Saudi Arabia", value: "SA" },
{ label: "Senegal", value: "SN" },
{ label: "Serbia", value: "RS" },
{ label: "Seychelles", value: "SC" },
{ label: "Sierra Leone", value: "SL" },
{ label: "Singapore", value: "SG" },
{ label: "Slovakia", value: "SK" },
{ label: "Slovenia", value: "SI" },
{ label: "Solomon Islands", value: "SB" },
{ label: "Somalia", value: "SO" },
{ label: "South Africa", value: "ZA" },
{ label: "South Korea", value: "KR" },
{ label: "South Sudan", value: "SS" },
{ label: "Spain", value: "ES" },
{ label: "Sri Lanka", value: "LK" },
{ label: "Sudan", value: "SD" },
{ label: "Suriname", value: "SR" },
{ label: "Sweden", value: "SE" },
{ label: "Switzerland", value: "CH" },
{ label: "Syria", value: "SY" },
{ label: "Taiwan", value: "TW" },
{ label: "Tajikistan", value: "TJ" },
{ label: "Tanzania", value: "TZ" },
{ label: "Thailand", value: "TH" },
{ label: "Timor-Leste", value: "TL" },
{ label: "Togo", value: "TG" },
{ label: "Tonga", value: "TO" },
{ label: "Trinidad and Tobago", value: "TT" },
{ label: "Tunisia", value: "TN" },
{ label: "Turkey", value: "TR" },
{ label: "Turkmenistan", value: "TM" },
{ label: "Tuvalu", value: "TV" },
{ label: "Uganda", value: "UG" },
{ label: "Ukraine", value: "UA" },
{ label: "United Arab Emirates", value: "AE" },
{ label: "United Kingdom", value: "GB" },
{ label: "United States", value: "US" },
{ label: "Uruguay", value: "UY" },
{ label: "Uzbekistan", value: "UZ" },
{ label: "Vanuatu", value: "VU" },
{ label: "Venezuela", value: "VE" },
{ label: "Vietnam", value: "VN" },
{ label: "Yemen", value: "YE" },
{ label: "Zambia", value: "ZM" },
{ label: "Zimbabwe", value: "ZW" },
];
const ethnicities = [
{
label: "Black African",
value: "black african"
},
{
label: "Coloured",
value: "coloured"
},
{
label: "Indian",
value: "indian"
},
{
label: "White",
value: "white"
},
{
label: "Other",
value: "other"
},
];
const languages = [
{
label: "Zulu",
value: "zulu"
},
{
label: "Xhosa",
value: "xhosa"
},
{
label: "Afrikaans",
value: "afrikaans"
},
{
label: "English",
value: "english"
},
{
label: "Sepedi (Northern Sotho)",
value: "sepedi"
},
{
label: "Setswana",
value: "setswana"
},
{
label: "Sesotho (Southern Sotho)",
value: "sesotho"
},
{
label: "Xitsonga",
value: "xitsonga"
},
{
label: "siSwati",
value: "siswati"
},
{
label: "Tshivenda",
value: "tshivenda"
},
{
label: "Ndebele",
value: "ndebele"
},
];

const {
control,
register,
handleSubmit,
reset,
formState: { errors },
} = useForm<ParentProps>({
defaultValues: {
name: "",
},
});
const router = useRouter();

const [loading, setLoading] = useState(false);
const initialImage = initialData?.imageUrl || "/placeholder.svg";
const [imageUrl, setImageUrl] = useState(initialImage);

async function saveParent(data: ParentProps) {
try {
setLoading(true);
data.imageUrl = imageUrl;
console.log(data)
if (editingId) {
// await updateStudentById(editingId, data);
// setLoading(false);
// toast.success("Updated Successfully!");
// reset();
// router.push("/dashboard/categories");
// setImageUrl("/placeholder.svg");
} else {
// await createStudent(data);
// setLoading(false);
// toast.success("Successfully Created!");
// reset();
// setImageUrl("/placeholder.svg");
// router.push("/dashboard/categories");
}
} catch (error) {
setLoading(false);
console.log(error);
}
}
// console.log(status);

return ( <form className="" onSubmit={handleSubmit(saveParent)}> <FormHeader
     href="/students"
     parent=""
     title="Student"
     editingId={editingId}
     loading={loading}
   />


  <div className="grid grid-cols-12 gap-6 py-8">
    <div className="lg:col-span-12 col-span-full space-y-3">
    <div className="grid gap-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="First Name"
                name="firstName"
                icon={User}
              />
              <TextInput
                register={register}
                errors={errors}
                label="Last Name"
                name="lastName"
                icon={User}
              />
              <TextInput
                register={register}
                errors={errors}
                label="Date of Birth"
                name="dob"
                type="date"
                icon={CalendarIcon}
              />
            </div>
            <div className="grid md:grid-cols-2 gap-3">
            
            <FormSelectInput
                label="Gender"
                options={gender}
                control={control}
                name="gender"
                errors={errors}
              />
              <TextInput
                register={register}
                errors={errors}
                label="ID Number"
                name="id"
                icon={Fingerprint}
              />        
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            <FormSelectInput
                label="Nationality"
                options={countries}
                control={control}
                name="nationality"
                errors={errors}
              />
              <FormSelectInput
                label="Ethnicity"
                options={ethnicities}
                control={control}
                name="ethnicity"
                errors={errors}
              />
              <FormSelectInput
                label="Parent"
                options={parents}
                control={control}
                name="parent"
                errors={errors}
                toolTipText="Add new parent"
                href="/dashboard/parents/new"
              /> 
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            <PhoneInput
                control={control}
                errors={errors}
                name="phone"
                label="Phone Number"
                icon={PhoneIcon} register={undefined}
              />
            <TextInput
                register={register}
                errors={errors}
                label="Email"
                name="email"
                type="email"
                icon={Mail}
              />
              <PasswordInput
                register={register}
                errors={errors}
                label="Password"
                name="password"
                icon={LockIcon}
              />  
            </div>
            <div className="grid md:grid-cols-2 gap-3">
              <TextInput
                register={register}
                errors={errors}
                label="Address"
                name="address"
                icon={MapPin}
              />
              <TextInput
                register={register}
                errors={errors}
                label="Zip Code"
                name="code"
                icon={LocateFixed}
              />
            </div>
            {/* <div className="grid md:grid-cols-2 gap-3">
              
             
            </div> */}
            <div className="grid md:grid-cols-2 gap-3">
             <FormSelectInput
                label="Class"
                options={classes}
                control={control}
                name="class"
                errors={errors}
                toolTipText="Add new class"
                href="/dashboard/academics/new"
              />
              <FormSelectInput
                label="Streams"
                options={streams}
                control={control}
                name="stream"
                errors={errors}
                toolTipText="Add new stream"
                href="/dashboard/academics/new"
              />                 
            </div>
          <div className="grid md:grid-cols-2 gap-3">
              <div>
                <div className="grid gap-3">
                <TextInput
                  register={register}
                  errors={errors}
                  label="Roll No."
                  name="rollNo"
                  icon={IdCard}
                /> 
                  <TextInput
                    register={register}
                    errors={errors}
                    label="Reg No"
                    name="regNo"
                    icon={IdCard}
                  />
                                      
                </div>              
                <div className="grid gap-3">
                <TextInput
                    register={register}
                    errors={errors}
                    label="Admission Date"
                    name="admissionDate"
                    type="date"
                    icon={CalendarIcon}
                  /> 
                </div>
              </div>
              <div className='grid'>
                <ImageInput
                  title="Student Profile Image"
                  imageUrl={imageUrl}
                  setImageUrl={setImageUrl}
                  endpoint="StudentProfileImage"
                  className="object-contain"
                />
            </div>
           </div>
            
          </div>
    </div>
    {/* <div className="lg:col-span-4 col-span-full ">
      <div className="grid auto-rows-max items-start gap-4 ">
        
      </div>
    </div> */}
  </div>
  <FormFooter
    href="/students"
    editingId={editingId}
    loading={loading}
    title="Student"
    parent=""
  />
</form>


);
}

