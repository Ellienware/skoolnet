"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  BookOpen,
  Building2,
  Globe,
  MapPin,
  Send,
  User,
  Users,
  Mail,
} from "lucide-react";

import TextInput from "../FormInput/TextInput";
import SubmitButton from "../FormInput/SubmitButton";
import FormSelectInput from "../FormInput/FormSelectInput";
import PhoneInput from "../FormInput/PhoneInput";
import MultiSelectInput from "../FormInput/MultiSelectInput";

export type RegisterInputProps = {
  name: string;
  email: string;
  phoneNumber: string;
  province: string;
  city: string;
  school: string;
  address: string;
  students: string;
  SchoolSocials: string;
  features: string[];
  howDidYouHearAboutUs: string;
  role: string;
};

const ContactUs: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();

  const roles = [
    { label: "Principal/Leadership/Management System", value: "Principal" },
    { label: "School Administrator", value: "Administrator" },
    { label: "Head Teacher", value: "HeadTeacher" },
    { label: "Teacher/Parent/Student", value: "Teacher/Parent/Student" },
    { label: "Consultant/Reseller", value: "Consultant/Reseller" },
    { label: "Other", value: "Other" },
  ];

  const media = [
    { label: "Blog", value: "Blog" },
    { label: "LinkedIn", value: "LinkedIn" },
    { label: "Facebook", value: "Facebook" },
    { label: "Google", value: "Google" },
    { label: "Other", value: "Other" },
  ];

  const province = [
    { label: "KwaZulu-Natal", value: "KwaZulu-Natal" },
    { label: "Gauteng", value: "Gauteng" },
    { label: "Western Cape", value: "Western Cape" },
    { label: "Eastern Cape", value: "Eastern Cape" },
    { label: "Northern Cape", value: "Northern Cape" },
    { label: "Mpumalanga", value: "Mpumalanga" },
    { label: "North West", value: "North West" },
    { label: "Limpopo", value: "Limpopo" },
    { label: "Free State", value: "Free State" },
  ];

  async function onSubmit(data: RegisterInputProps) {
    setIsLoading(true);

    const submission = {
      ...data,
    };

    console.log("Submitted Data:", submission);

    setTimeout(() => {
      setIsLoading(false);
      reset();
      alert("Form Submitted Successfully!");
    }, 2000);
  }

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="col-span-2 bg-white p-6 rounded-2xl shadow w-full">
            <h3 className="text-2xl text-center font-semibold mb-4">
              Contact Us to Request Access
            </h3>
            <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
              <TextInput
                label="Full Name"
                name="name"
                icon={User}
                register={register}
                errors={errors}
              />

              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="Email"
                  name="email"
                  placeholder="example@gmail.com"
                  icon={Mail}
                  register={register}
                  errors={errors}
                />
                <PhoneInput
                  label="Phone Number"
                  name="phoneNumber"
                  control={control}
                  errors={errors}
                  register={register}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <FormSelectInput
                  label="Province"
                  name="province"
                  options={province}
                  control={control}
                  errors={errors}
                />
                <TextInput
                  label="City"
                  name="city"
                  icon={Building2}
                  register={register}
                  placeholder="Johannesburg"
                  errors={errors}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="School Name"
                  register={register}
                  name="school"
                  errors={errors}
                  placeholder="Example High School"
                  icon={BookOpen}
                />
                <TextInput
                  label="Address"
                  register={register}
                  name="address"
                  errors={errors}
                  placeholder="06 Turnbull Street, Coronation"
                  icon={MapPin}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <TextInput
                  label="Number of Students"
                  register={register}
                  name="students"
                  errors={errors}
                  placeholder="400"
                  icon={Users}
                />
                <TextInput
                  label="School Website/Social Media (Facebook, LinkedIn, etc.)"
                  register={register}
                  name="SchoolSocials"
                  errors={errors}
                  placeholder="https://examplehighschool.com"
                  icon={Globe}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <FormSelectInput
                  label="Role"
                  name="role"
                  options={roles}
                  control={control}
                  errors={errors}
                />
                <MultiSelectInput
                  label="Which features are you looking for?"
                  name="features"
                  control={control}
                  errors={errors}
                  options={[
                    { label: "AI Study Guide", value: "ai-study-guide" },
                    { label: "Flashcards", value: "flashcards" },
                    { label: "Practice Tests", value: "practice-tests" },
                    { label: "Study Planner", value: "study-planner" },
                    { label: "Video Lessons", value: "video-lessons" },
                  ]}
                />
              </div>

              <FormSelectInput
                label="How did you hear about us?"
                name="howDidYouHearAboutUs"
                options={media}
                control={control}
                errors={errors}
              />

              <SubmitButton
                buttonIcon={Send}
                title="Submit"
                loading={isLoading}
                loadingTitle="Sending..."
              />
            </form>
          </div>
        </div>

        {/* Bottom Boxes */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-800 text-white p-6 rounded-2xl">
            <h3 className="font-semibold text-xl mb-2">
              Speak to someone in sales
            </h3>
            <p className="text-sm mb-4 py-4">
              To create a more value-added solution, it is essential to analyze
              the possibilities of improvement.
            </p>
            <button className="bg-white text-green-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-100 transition duration-300">
              Book Appointment
            </button>
          </div>
          <div className="bg-lime-400 p-6 rounded-2xl">
            <h3 className="font-semibold mb-2 text-xl">Contact our team</h3>
            <p className="text-sm mb-4 py-4">
              To create a more value-added solution, it is essential to analyze
              the possibilities of improvement.
            </p>
            <button className="bg-green-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-green-700 transition duration-300">
              Send a Mail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;


